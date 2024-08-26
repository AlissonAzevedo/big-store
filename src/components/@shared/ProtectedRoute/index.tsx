"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const isPublicPage = (pathname: string) => {
  return pathname === "/login" || pathname === "/signup";
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !token && !isPublicPage(pathname)) {
      router.push("/login");
    }
  }, [token, pathname, router, isMounted]);

  if (!isMounted || (!token && !isPublicPage(pathname))) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
