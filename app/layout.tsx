import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JF Portfolio",
  description: "Janky code, braught to you by James Fitzsimons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-background scroll-smooth snap-y overflow-x-hidden"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
