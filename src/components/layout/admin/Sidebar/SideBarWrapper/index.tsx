"use client";

import { Sidebar } from "@/components/layout/admin/Sidebar";
import {
  HomeOutlined,
  SellOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { ReactNode } from "react";

const SidebarWrapper = ({ children }: { children: ReactNode }) => {
  const items = [
    {
      href: "/admin",
      icon: <HomeOutlined className="h-5 w-5" />,
      name: "Dashboard",
    },
    {
      href: "/admin/products",
      icon: <SellOutlined className="h-5 w-5" />,
      name: "Produtos",
    },
    {
      href: "/settings",
      icon: <ShoppingCartOutlined className="h-5 w-5" />,
      name: "Settings",
    },
  ];

  return (
    <div className={"flex w-full"}>
      <Sidebar items={items} />
      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        <main className="mx-auto max-w-screen-2xl p-4 md:p-2 2xl:p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export { SidebarWrapper };
