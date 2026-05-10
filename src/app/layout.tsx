import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan Chenigle — Make money straight from your phone",
  description:
    "If you're working harder than ever and your paycheck still doesn't reflect it, this is for you.",
  metadataBase: new URL("https://ryanchenigle.com"),
  openGraph: {
    title: "Ryan Chenigle — Make money straight from your phone",
    description:
      "If you're working harder than ever and your paycheck still doesn't reflect it, this is for you.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f1e3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
