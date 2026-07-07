import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt =
  "NextPlay Solutions — Enterprise AI strategy. Small business price.";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#111827",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "#ffffff",
              display: "flex",
            }}
          >
            NextPlay
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "#0d9488",
              display: "flex",
            }}
          >
            .
          </div>
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>Enterprise AI strategy.</div>
          <div style={{ display: "flex", color: "#2dd4bf" }}>
            Small business price.
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 32,
            color: "#9ca3af",
            display: "flex",
          }}
        >
          Find out exactly where AI can save your business time and money.
        </div>
      </div>
    ),
    { ...size }
  );
}
