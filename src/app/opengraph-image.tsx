import { ImageResponse } from "next/og";
import { practice } from "@/data/practice";
export const alt =
  "South Valley Family Dental — Family dentistry in Providence, Utah";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#f7f7f2",
        color: "#203e50",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        justifyContent: "center",
        borderBottom: "20px solid #356883",
      }}
    >
      <div style={{ fontSize: 24, letterSpacing: 5, marginBottom: 35 }}>
        FAMILY DENTISTRY · PROVIDENCE, UTAH
      </div>
      <div style={{ fontSize: 76, lineHeight: 1.1, maxWidth: 850 }}>
        {practice.name}
      </div>
      <div style={{ fontSize: 30, marginTop: 40 }}>{practice.dentist}</div>
    </div>,
    size,
  );
}
