import type { Metadata } from "next";
import './globals.css';
export const metadata: Metadata = {
  title: "Crafting your plan",
  description: "Wait until we analyzing results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-[100vh]">{children}</body>
    </html>
  );
}
