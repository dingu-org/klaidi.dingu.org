import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "klaidi.dingu.org",
  description: "Klaidi Dingu — personal site and portfolio. Still growing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plexMono.variable} bg-paper`}>
      <body className="bg-paper font-sans text-black antialiased [font-synthesis-weight:none]">
        {children}
      </body>
    </html>
  );
}
