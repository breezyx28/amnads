"use client";

import React from "react";
import { useJQuery } from "@/hooks/useJQuery";
import "select2/dist/css/select2.css";
import "@/styles/form-control.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useJQuery();

  return <>{children}</>;
}
