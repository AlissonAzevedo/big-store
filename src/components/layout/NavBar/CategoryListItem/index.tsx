import { TranslateCategory } from "@/functions/translateCategory";
import Link from "next/link";

const CategoryListItem = ({ category }: { category: string }) => {
  return (
    <li>
      <Link
        className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
        href={`/search/${category}`}
      >
        {TranslateCategory(category)}
      </Link>
    </li>
  );
};

export { CategoryListItem };
