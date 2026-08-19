"use client";

import { useState } from "react";
import { BUSINESS_TYPES, validateLead } from "@/lib/lead";
import { COMPANY, PHONE, DURATION } from "@/lib/offer";

/**
 * The /demo funnel: capture name / email / phone / business type, file the
 * lead into GHL (via /api/demo-lead), then reveal the demo line.
 *
 * Two rules, learned the hard way:
 *
 *  1. A failed save must never block a live prospect — the number is revealed
 *     either way.
 *  2. A failed save must never LOOK like a successful one. It used to: the
 *     form ignored the response, so a rejected lead got the same confirmation
 *     screen as a good one and nobody found out. Now the reveal carries a line
 *     asking them to email, so the prospect isn't lost in silence.
 *
 * Validation is imported from lib/lead.ts rather than written here, so it
 * cannot drift from what the server actually accepts.
 */

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
  const [saved, setSaved] = useState(true);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setError(null);

    // Same check the server runs — a lead that would be rejected there is
    // caught here, while they can still fix it.
    const problem = validateLead({ name, email, phone, businessType });
    if (problem) {
      setError(problem);
      return;
    }

    setBusy(true);
    let ok = false;
    try {
      const res = await fetch("/api/demo-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, businessType }),
      });
      ok = res.ok;
    } catch {
      ok = false;
    } finally {
      setBusy(false);
      setSaved(ok);
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

        {/* The number still works; we just never recorded who they are. Say so
            rather than let them think we have their details. */}
        {!saved && (
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-np-body max-w-[52ch] border-t border-np-rule pt-5">
            One thing — your details didn&apos;t save on our end. Call the number
            above anyway, and email{" "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-np-navy font-medium hover:text-np-rust transition-colors"
            >
              {COMPANY.email}
            </a>{" "}
            so we know it was you.
          </p>
        )}
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
