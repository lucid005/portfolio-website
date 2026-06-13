import { ImageResponse } from "next/og";

export const alt = "Saurav Shrestha full-stack developer portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#050505",
          color: "#f4f4f5",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 64,
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            height: "100%",
            justifyContent: "space-between",
            padding: 58,
            width: "100%",
          }}
        >
          <div
            style={{
              color: "rgba(244,244,245,0.58)",
              display: "flex",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                fontSize: 86,
                fontWeight: 700,
                letterSpacing: -2,
                lineHeight: 1,
              }}
            >
              Saurav Shrestha
            </div>
            <div
              style={{
                color: "rgba(244,244,245,0.72)",
                display: "flex",
                fontSize: 38,
                lineHeight: 1.25,
                maxWidth: 820,
              }}
            >
              Full-stack developer building clean, functional web products.
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              color: "rgba(244,244,245,0.54)",
              display: "flex",
              fontSize: 24,
              justifyContent: "space-between",
            }}
          >
            <span>Kathmandu, Nepal</span>
            <span>Next.js / React / FastAPI</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
