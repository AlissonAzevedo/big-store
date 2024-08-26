import "@/app/globals.css";
import { ContainerLayout } from "@/components/layout/admin/ContainerLayout";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Admin Page",
  title: "Admin Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ContainerLayout>{children}</ContainerLayout>;
}
