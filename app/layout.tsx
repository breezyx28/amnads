import type { Metadata } from "next";
import "./globals.css";

import "@/styles/bootstrap-old.css";
import "@/styles/animate.min.css";
import "@/styles/all.css";
import "@/styles/select2.css";
import "@/styles/tempusdominus-bootstrap-4.min.css";
import "@/styles/style.css";
import "@/styles/responsive.css";
import "@/styles/table.css";
import "@/styles/accordion.css";
import "@/styles/form-control.css";
import "@/styles/fancybox.css";

export const metadata: Metadata = {
  title: "Amnads Dashboard",
  description: "Amnads Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
