import type { Metadata } from "next";

import ProtectedRoute from "@/components/@shared/ProtectedRoute";
import { LayoutProvider } from "@/utils/providers/LayoutProvider";
import { Inter } from "next/font/google";
import React from "react";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "A melhor loja de produtos do Brasil",
  title: "BIG STORE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutProvider>
          <Toaster />
          <ProtectedRoute>{children}</ProtectedRoute>
        </LayoutProvider>
      </body>
    </html>
  );
}
