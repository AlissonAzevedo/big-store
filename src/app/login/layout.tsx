import type { Metadata } from "next";

import "@/app/globals.css";
import ProtectedRoute from "@/components/@shared/ProtectedRoute";
import React from "react";

export const metadata: Metadata = {
  description: "Faça login na BIG STORE",
  title: "Entrar - BIG STORE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
