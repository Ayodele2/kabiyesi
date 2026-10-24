
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mayowa Akinteye | Software Engineer",
    template: "%s | Mayowa Akinteye",
  },
  description:
    "Mayowa Akinteye is a full-stack software engineer, AI engineer, and mobile developer building intelligent software products.",
  openGraph: {
    title: "Mayowa Akinteye | Software Engineer",
    description:
      "Building intelligent software for a smarter world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
