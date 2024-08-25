import { Logo } from "@/components/@shared/logo";
import { DrawerCart } from "@/components/layout/DrawerCart";
import { CategoriesList } from "@/components/layout/NavBar/CategoriesList";
import { NavBarSearch } from "@/components/layout/NavBar/Search";
import { Menu } from "@mui/icons-material";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className={"w-full flex h-16 px-4 items-center"}>
      <div className="block flex-none md:hidden">
        <button
          aria-label="Open mobile menu"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
        >
          <Menu />
        </button>
      </div>

      <div className="flex w-full md:w-1/3">
        <Link
          className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          href="/"
        >
          <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
            <Logo />
          </div>
          <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
            Big Store
          </div>
        </Link>
        <CategoriesList />
      </div>
      <NavBarSearch />
      <DrawerCart />
    </nav>
  );
};
