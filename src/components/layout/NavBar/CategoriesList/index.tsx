"use client";
import { CategoryListItem } from "@/components/layout/NavBar/CategoryListItem";
import { useGetAllCategories } from "@/hooks/categories/useGet/useGetAll";
import Link from "next/link";

const CategoriesList = () => {
  const { data, isLoading } = useGetAllCategories();
  return (
    <ul className="hidden gap-6 text-sm md:flex md:items-center">
      <li>
        <Link
          className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
          href={"/search"}
        >
          All
        </Link>
      </li>
      {data
        ?.slice(0, 2)
        .map((category) => (
          <CategoryListItem category={category} key={category} />
        ))}
    </ul>
  );
};

export { CategoriesList };
