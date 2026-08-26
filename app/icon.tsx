import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: "50%",
          background: "#141413",
          color: "#ffffff",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        k
        <div
          style={{
            position: "absolute",
            right: 4,
            bottom: 5,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#6b7939",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
