"use client";

import { SidebarWrapper } from "@/components/layout/admin/Sidebar/SideBarWrapper";
import React from "react";

interface ContainerLayoutProps {
  children: React.ReactNode;
}
export const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <div className={"flex"}>
      <SidebarWrapper />

      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-2 2xl:p-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
