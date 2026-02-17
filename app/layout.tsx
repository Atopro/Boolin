import type { Metadata } from "next";
import { Unbounded, Geist_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boolin — Marketing a dizajn",
  description:
    "Reklamná agentúra Boolin: brand dizajn, web dizajn, tlač a montáž. Jasná identita, prehľadné weby a bezstarostná realizácia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${unbounded.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
