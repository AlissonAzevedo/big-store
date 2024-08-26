import React from "react"; // Presumindo que 'chadcn' seja uma utility library personalizada para gestão de classes CSS
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SidebarItem {
  href: string;
  icon: React.ReactNode;
  name: string;
}

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <aside
      className={
        "h-screen bg-gray-800 text-white p-4 transition-transform duration-300"
      }
    >
      <nav>
        <ul>
          {items.map((item, index) => (
            <li className="mb-4" key={index}>
              <Link href={item.href}>
                <Button size={"default"} variant={"ghost"}>
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export { Sidebar };
