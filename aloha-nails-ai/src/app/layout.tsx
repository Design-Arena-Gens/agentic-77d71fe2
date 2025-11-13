import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-77d71fe2.vercel.app"),
  title: "Aloha Nails AI Photoshoot Pro",
  description:
    "Generate flawless, high-fashion product visuals with luxury styling and TPO & HEMA safe messaging for Aloha Nails.",
  openGraph: {
    title: "Aloha Nails AI Photoshoot Pro",
    description:
      "Ultra-realistic manicure campaigns with perfect color harmony and safety-first overlays designed for social media and ads.",
    url: "https://agentic-77d71fe2.vercel.app",
    siteName: "Aloha Nails AI Photoshoot Pro",
    images: [
      {
        url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Aloha Nails AI Photoshoot Pro hero image with luxury manicure styling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aloha Nails AI Photoshoot Pro",
    description:
      "Generate high-fashion manicure visuals for Aloha Nails with perfect color matching and safety messaging.",
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 text-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
