"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const isPublicPage = (pathname: string) => {
  return pathname === "/login" || pathname === "/signup";
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!token && !isPublicPage(pathname)) {
      router.push("/login"); // Redireciona para a página de login se não for pública
    }
  }, [token, pathname, router]);

  if (!token && !isPublicPage(pathname)) {
    return null; // Ou um carregamento de spinner enquanto verifica
  }

  return <>{children}</>;
};

export default ProtectedRoute;
