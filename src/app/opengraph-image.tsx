import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const jua = await readFile(join(process.cwd(), "src/app/fonts/Jua-Regular.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          background: "linear-gradient(160deg, #ede5ff 0%, #f6f2ff 55%, #fff6c7 100%)",
          fontFamily: "Jua",
          color: "#4a4062",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "#fff6c7",
              border: "3px solid #ffec9c",
              borderRadius: 999,
              padding: "8px 24px",
              fontSize: 30,
            }}
          >
            설문 참여자 모집 중
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1.15, marginTop: 28 }}>
            {site.ogHeadline.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div style={{ fontSize: 40, marginTop: 24, color: "#6d6487" }}>감정 몬스터와 대화하는 기록 앱, 나루</div>
        </div>
        <svg width="380" height="340" viewBox="0 0 240 210">
          <path
            d="M30 176 C 14 176, 10 156, 26 150 C 22 132, 46 124, 58 134 C 66 116, 96 116, 104 132 C 116 118, 146 118, 152 134 C 162 122, 190 124, 192 142 C 210 140, 222 160, 208 174 C 200 184, 50 186, 30 176 Z"
            fill="#e6dcfc"
          />
          <path
            d="M66 140 C 46 140, 40 116, 56 106 C 50 84, 72 70, 90 78 C 96 58, 128 50, 144 70 C 162 60, 186 76, 180 98 C 198 104, 196 134, 176 140 Z"
            fill="#ffffff"
            stroke="#c9b6f2"
            strokeWidth="2.5"
          />
          <ellipse cx="101" cy="108" rx="4.2" ry="5.2" fill="#8a7aa8" />
          <ellipse cx="139" cy="108" rx="4.2" ry="5.2" fill="#8a7aa8" />
          <ellipse cx="90" cy="120" rx="8" ry="5" fill="#ffcfdf" />
          <ellipse cx="150" cy="120" rx="8" ry="5" fill="#ffcfdf" />
          <path d="M112 118 Q 120 126 128 118" stroke="#8a7aa8" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M202 52 L205 61 L214 64 L205 67 L202 76 L199 67 L190 64 L199 61 Z" fill="#fff0a8" />
        </svg>
      </div>
    ),
    { ...size, fonts: [{ name: "Jua", data: jua, style: "normal", weight: 400 }] },
  );
}
