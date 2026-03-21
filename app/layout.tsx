import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matilda Luo — Product Designer",
  description: "Designing scalable products for complex systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">{children}</body>
    </html>
  );
}
