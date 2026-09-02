const waveform = [18, 30, 45, 62, 36, 54, 28, 48, 66, 38, 24, 55, 34, 46, 30, 58, 42, 68];

export default function ScoutSignalGraphic() {
  return (
    <div className="np-scout-visual" aria-label="Animated example of Scout identifying an operational opportunity">
      <div className="np-orbit np-orbit-one" aria-hidden="true"><i /></div>
      <div className="np-orbit np-orbit-two" aria-hidden="true"><i /></div>
      <div className="np-scout-trust np-scout-trust-left">No vendor fees ↗</div>
      <div className="np-scout-trust np-scout-trust-right">Human reviewed ✓</div>

      <article className="np-scout-card">
        <div className="flex items-center justify-between gap-5 border-b border-white/15 pb-5">
          <p className="np-label flex items-center gap-2" style={{ color: "var(--np-rust-light)" }}>
            <span className="np-signal-dot block w-2 h-2 bg-np-rust" aria-hidden="true" />
            Scout / live analysis
          </p>
          <p className="np-label" style={{ color: "var(--np-on-navy-muted)" }}>Area 06 / 07</p>
        </div>

        <div className="np-waveform" aria-hidden="true">
          {waveform.map((height, index) => (
            <i key={index} style={{ height, animationDelay: `${index * -90}ms` }} />
          ))}
        </div>

        <blockquote className="border-y border-white/15 py-6 text-xl md:text-2xl font-light leading-snug text-white">
          “So the crew agrees to changes in the field, but those notes do not always make it back to the invoice?”
        </blockquote>

        <div className="mt-2">
          {[
            ["Finding", "Unbilled change orders", "01"],
            ["Estimated annual value identified", "$18K", "02"],
            ["NextPlay", "Fix the billing handoff", "03"],
          ].map(([label, value, number]) => (
            <div key={label} className="grid grid-cols-[2.5rem_1fr_auto] gap-3 items-center py-4 border-b border-white/10">
              <span className="np-label" style={{ color: "var(--np-on-navy-muted)" }}>{number}</span>
              <span className="text-sm md:text-base font-light text-np-on-navy-2">{label}</span>
              <span className="font-mono text-sm md:text-base text-np-rust text-right">{value}</span>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
