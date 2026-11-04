"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BUSINESS_TYPES, validateLead } from "@/lib/lead";
import { COMPANY, DURATION } from "@/lib/offer";
import { track } from "@/lib/analytics";

/**
 * The /demo funnel: capture name / email / phone / business type, file the
 * lead into GHL (via /api/demo-lead), then reveal the full Scout line.
 *
 * Two rules, learned the hard way:
 *
 * A failed save must not reveal the number: the user explicitly requires a
 * strict lead gate. Keep their entries in place and give them a recoverable
 * message instead.
 *
 * Validation is imported from lib/lead.ts rather than written here, so it
 * cannot drift from what the server actually accepts.
 */

const FIELD =
  "w-full border border-np-rule bg-white px-4 py-3 text-[0.9375rem] text-np-navy outline-none focus:border-np-navy placeholder:text-np-muted";

export default function DemoLeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [line, setLine] = useState<{ display: string; e164: string } | null>(null);
  const [started, setStarted] = useState(false);
  const [website, setWebsite] = useState("");
  const successRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (line) successRef.current?.focus();
  }, [line]);

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
    try {
      const res = await fetch("/api/demo-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, businessType, website }),
      });
      if (!res.ok) {
        setError(`We couldn't open the Scout line just now. Please try again or email ${COMPANY.email}.`);
        return;
      }
      const data = await res.json();
      if (!data.line?.e164 || !data.line?.display) throw new Error("Missing line");
      setLine(data.line);
      track("lead_saved");
    } catch {
      setError(`We couldn't open the Scout line just now. Please try again or email ${COMPANY.email}.`);
    } finally {
      setBusy(false);
    }
  }

  if (line) {
    return (
      <div ref={successRef} tabIndex={-1} aria-label="Your Scout assessment is ready to start" className="border border-np-rule bg-np-tint p-8 md:p-10">
        <p className="np-eyebrow">You&apos;re set — start the assessment</p>
        <a
          href={`tel:${line.e164}`}
          onClick={() => track("call_click")}
          className="mt-5 inline-block py-2 text-4xl md:text-5xl np-display tracking-tight text-np-navy hover:text-np-body transition-colors"
        >
          {line.display}
        </a>
        <p className="mt-5 text-[1.0625rem] leading-relaxed font-light text-np-body max-w-[52ch]">
          {`The call takes about ${DURATION.assessmentMinutes} minutes. Scout will map seven areas of your business. Jordan and Ethan review the conversation and send your written assessment within ${DURATION.reportTurnaroundDays} business days.`}
        </p>
        <a href={`tel:${line.e164}`} onClick={() => track("call_click")} className="inline-block mt-7 bg-np-rust px-8 py-4 font-medium">Call Scout now →</a>
        <a className="block mt-5 underline underline-offset-4" download="NextPlay-Scout.txt" href={`data:text/plain;charset=utf-8,${encodeURIComponent(`Call Scout: ${line.display}\nAllow 25 minutes. Your human-reviewed assessment arrives within three business days after the call.\nhttps://nextplaysolutions.ai`)}`} onClick={() => track("number_saved")}>Save the number for later</a>
        <p className="mt-6 text-sm leading-relaxed">Use the phone number you entered so we can match your call to your assessment. Find a quiet spot; no preparation is needed. Your report will be sent to {email}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} onFocus={() => { if (!started) { setStarted(true); track("form_start"); } }} className="border border-np-rule bg-white p-8 md:p-10">
      <div hidden aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} /></label></div>
      <p className="np-eyebrow">see if you qualify · {DURATION.assessmentMinutes} minutes</p>
      <p className="mt-4 text-[1.0625rem] leading-relaxed font-light text-np-body max-w-[52ch]">
        Tell us who&apos;s calling and we&apos;ll open the full Scout assessment line.
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
            required
          />
        </div>
        <div>
          <label htmlFor="demo-business" className="np-label block mb-2">
            Business industry
          </label>
          <select
            id="demo-business"
            className={FIELD}
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            required
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
            required
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
            required
          />
        </div>
      </div>

      {error ? (
        <p className="mt-5 text-[0.9375rem] font-medium text-np-navy" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={busy}
        className="mt-8 bg-np-rust text-np-navy px-8 py-4 text-[0.9375rem] font-medium hover:bg-np-rust-light transition-colors disabled:opacity-50"
      >
        {busy ? "Opening your assessment…" : "Start my free assessment"}
      </button>

      <p className="mt-5 text-[0.8125rem] leading-relaxed text-np-muted max-w-[52ch]">
        We&apos;ll use these details to deliver your assessment and follow up once.
        No list and no drip campaign.
        {" "}<Link href="/legal" className="underline underline-offset-4">Privacy policy</Link>.
      </p>
    </form>
  );
}
