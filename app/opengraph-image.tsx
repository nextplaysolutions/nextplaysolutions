import { ImageResponse } from "next/og";
import { COMPANY, DURATION } from "@/lib/offer";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${COMPANY.name} — ${COMPANY.tagline}`;

const NAVY = "#14213D";
const RUST_LIGHT = "#E8925C";
const ON_NAVY_2 = "#C8D2E6";

/**
 * The Aperture mark, rebuilt for the image renderer.
 *
 * The site draws the mark with clip-path (brand guidelines §08), but Satori —
 * which rasterises this card — does not support clip-path. Same geometry is
 * reproduced here as a solid square with the play arrow knocked out in the
 * background colour, which is what the clip-path achieves visually on a flat
 * ground. Proportions match the clip-path: arrow spans 34%–72% across and
 * 26%–74% down.
 */
function Mark({ size: s = 96 }: { size?: number }) {
  return (
    <div
      style={{
        width: s,
        height: s,
        background: "#fff",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: s * 0.34,
          top: s * 0.26,
          width: 0,
          height: 0,
          borderTop: `${s * 0.24}px solid transparent`,
          borderBottom: `${s * 0.24}px solid transparent`,
          borderLeft: `${s * 0.38}px solid ${NAVY}`,
        }}
      />
    </div>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: NAVY,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Mark size={72} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", fontSize: 34, color: "#fff" }}>
              <span style={{ fontWeight: 300 }}>Next</span>
              <span style={{ fontWeight: 600 }}>Play</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                letterSpacing: 6,
                color: ON_NAVY_2,
              }}
            >
              SOLUTIONS
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 3,
              color: RUST_LIGHT,
              marginBottom: 28,
            }}
          >
            AI READINESS ASSESSMENT
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 300,
              color: "#fff",
              letterSpacing: -1.5,
            }}
          >
            {COMPANY.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 300,
            color: ON_NAVY_2,
            maxWidth: 900,
          }}
        >
          Seven areas of your business, {DURATION.assessmentMinutes} minutes,
          and a report naming the tools, the real costs, and the order to do
          them in.
        </div>
      </div>
    ),
    { ...size }
  );
}
