import React from "react"; // Presumindo que 'chadcn' seja uma utility library personalizada para gestão de classes CSS
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  href: string;
  icon: React.ReactNode;
  name: string;
}

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const pathname = usePathname();

  const isCurrentPath = (href: string) => {
    return pathname === href;
  };

  return (
    <ul
      className={
        "h-screen bg-gray-800 p-4 transition-transform duration-300 w-[250px] pt-16"
      }
    >
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
            <Button
              className={cn(
                "flex items-center justify-start w-full px-4 py-2 rounded-lg text-white hover:bg-gray-700",
                {
                  "bg-gray-900": isCurrentPath(item.href),
                },
              )}
              size={"default"}
              variant={"ghost"}
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Sidebar };
