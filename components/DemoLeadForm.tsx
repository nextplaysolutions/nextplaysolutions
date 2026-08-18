"use client";

import { useState } from "react";
import { PHONE, DURATION } from "@/lib/offer";

/**
 * The /demo funnel: capture name / email / phone / business type, file the
 * lead into GHL (via /api/demo-lead), then reveal the demo line.
 *
 * If the CRM call fails after a valid submit, the number is revealed anyway —
 * never block a live prospect on a plumbing error. The loss is logged
 * server-side.
 */

const BUSINESS_TYPES = [
  "Real estate",
  "Insurance",
  "Mortgage / lending",
  "Construction / trades",
  "Professional services",
  "Healthcare",
  "Retail / e-commerce",
  "Other",
] as const;

const FIELD =
  "w-full border border-np-rule bg-white px-4 py-3 text-[0.9375rem] text-np-navy outline-none focus:border-np-rust placeholder:text-np-muted";

export default function DemoLeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setError(null);

    if (!name.trim() || !email.trim() || !phone.trim() || !businessType) {
      setError("All four fields are needed — that's how we route your demo.");
      return;
    }

    setBusy(true);
    try {
      await fetch("/api/demo-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, businessType }),
      });
    } catch {
      // Reveal regardless — see note above.
    } finally {
      setBusy(false);
      setRevealed(true);
    }
  }

  if (revealed) {
    return (
      <div className="border border-np-rule bg-np-tint p-8 md:p-10">
        <p className="np-eyebrow">You&apos;re set — call Scout now</p>
        <a
          href={`tel:${PHONE.demoE164}`}
          className="mt-5 inline-block py-2 text-4xl md:text-5xl np-display tracking-tight text-np-navy hover:text-np-rust transition-colors"
        >
          {PHONE.demo}
        </a>
        <p className="mt-5 text-[1.0625rem] leading-relaxed font-light text-np-body max-w-[52ch]">
          {`The call takes about ${DURATION.demoMinutes} minutes. Scout will ask about your business — answer the way you'd answer a colleague, and it will reflect your own numbers back at you. Nothing to prepare.`}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-np-rule bg-white p-8 md:p-10">
      <p className="np-eyebrow">Try Scout · {DURATION.demoMinutes} minutes</p>
      <p className="mt-4 text-[1.0625rem] leading-relaxed font-light text-np-body max-w-[52ch]">
        Tell us who&apos;s calling and we&apos;ll open the line.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="demo-name" className="np-label block mb-2">
            Name
          </label>
          <input
            id="demo-name"
            className={FIELD}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            maxLength={200}
          />
        </div>
        <div>
          <label htmlFor="demo-business" className="np-label block mb-2">
            Type of business
          </label>
          <select
            id="demo-business"
            className={FIELD}
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          >
            <option value="" disabled>
              Select one
            </option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="demo-email" className="np-label block mb-2">
            Email
          </label>
          <input
            id="demo-email"
            className={FIELD}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            maxLength={320}
          />
        </div>
        <div>
          <label htmlFor="demo-phone" className="np-label block mb-2">
            Phone
          </label>
          <input
            id="demo-phone"
            className={FIELD}
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            maxLength={30}
          />
        </div>
      </div>

      {error && (
        <p className="mt-5 text-[0.9375rem]" style={{ color: "var(--np-rust)" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="mt-8 bg-np-rust text-white px-8 py-4 text-[0.9375rem] font-medium hover:bg-np-rust-light transition-colors disabled:opacity-50"
      >
        {busy ? "One moment…" : "Get the demo line"}
      </button>

      <p className="mt-5 text-[0.8125rem] leading-relaxed text-np-muted max-w-[52ch]">
        We&apos;ll follow up once about your demo. No list, no drip campaign.
      </p>
    </form>
  );
}
