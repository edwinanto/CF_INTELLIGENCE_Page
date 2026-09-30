import { ImageResponse } from "next/og";
export const alt = "CF Intelligence — Tecnología con propósito de negocio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#101211",
        color: "#f3f5ed",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "76px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 32, display: "flex", color: "#d1f279" }}>
        cf intelligence.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 74,
          fontSize: 70,
          letterSpacing: -3,
          lineHeight: 1.08,
        }}
      >
        <span>Tu siguiente etapa.</span>
        <span>Más conectada.</span>
        <span style={{ color: "#d1f279" }}>Más inteligente.</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 21,
          marginTop: 48,
          color: "#acb3a9",
        }}
      >
        SOFTWARE / INTELIGENCIA ARTIFICIAL / AUTOMATIZACIÓN
      </div>
    </div>,
    size,
  );
}
