import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://quarz.example.com"),
  title: {
    default: "QUARZ Event Planner | Where Strategy Meets Experience",
    template: "%s | QUARZ Event Planner",
  },
  description: "QUARZ is a Malaysia-based corporate event planning and brand experience agency creating launches, activations, roadshows, and premium event support since 2004.",
  openGraph: {
    title: "QUARZ Event Planner",
    description: "Where Strategy Meets Experience.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
