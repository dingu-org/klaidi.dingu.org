import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_TITLE } from "@/lib/site";

export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const markData = await readFile(join(process.cwd(), "app/brand-mark.png"), "base64");
const markSrc = `data:image/png;base64,${markData}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8f7f4",
        }}
      >
        <img src={markSrc} alt="" width={140} height={140} style={{ marginBottom: 40 }} />
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 600,
            color: "#171717",
          }}
        >
          klaidi.dingu.org
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 28,
            color: "#78716c",
          }}
        >
          personal site and portfolio
        </div>
      </div>
    ),
    size,
  );
}
