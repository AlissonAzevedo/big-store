"use client";

import { Sidebar } from "@/components/layout/admin/Sidebar";
import {
  HomeOutlined,
  SellOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const SidebarWrapper = () => {
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

  return <Sidebar items={items} />;
};

export { SidebarWrapper };
