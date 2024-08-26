import "@/app/globals.css";
import { SidebarWrapper } from "@/components/layout/admin/Sidebar/SideBarWrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  description: "Admin Page",
  title: "Admin Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SidebarWrapper>{children}</SidebarWrapper>;
}
