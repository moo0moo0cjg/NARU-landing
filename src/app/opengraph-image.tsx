import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const [jua, landscape] = await Promise.all([
    readFile(join(process.cwd(), "src/app/fonts/NanumPenScript-Regular.ttf")),
    readFile(join(process.cwd(), "public/art/paper-social-v3.png")),
  ]);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#fffefa",
        fontFamily: "NanumPenScript",
        color: "#595168",
      }}
    >
      <img
        src={`data:image/png;base64,${landscape.toString("base64")}`}
        width={1200}
        height={800}
        alt=""
        style={{ position: "absolute", top: -100, left: 0 }}
      />
      <div
        style={{
          position: "absolute",
          top: 35,
          left: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 21 }}>
          감정을 닮은 작은 친구들과 함께하는 나루
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 66,
            lineHeight: 1.18,
            alignItems: "center",
            marginTop: 13,
          }}
        >
          {site.ogHeadline.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <span
          style={{
            marginTop: 19,
            padding: "12px 27px",
            borderRadius: 8,
            background: "#f0eaf9",
            color: "#554c69",
            fontSize: 21,
          }}
        >
          3분 설문으로 나루를 함께 만들어 주세요 ↗
        </span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "NanumPenScript", data: jua, style: "normal", weight: 400 },
      ],
    },
  );
}
