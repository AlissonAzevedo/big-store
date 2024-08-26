import type { Metadata } from "next";

import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/NavBar";
import React from "react";

export const metadata: Metadata = {
  description: "A melhor loja de produtos do Brasil",
  title: "BIG STORE - A melhor loja de produtos do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
