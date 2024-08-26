import Link from "next/link";

const CategoryListItem = ({ category }: { category: string }) => {
  const translations = (category: string) => {
    switch (category) {
      case "electronics":
        return "Eletrônicos";
      case "jewelery":
        return "Jóias";
      case "men's clothing":
        return "Roupas Masculinas";
      case "women's clothing":
        return "Roupas Femininas";
      default:
        return "Outros";
    }
  };
  return (
    <li>
      <Link
        className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
        href={`/search/${category}`}
      >
        {translations(category)}
      </Link>
    </li>
  );
};

export { CategoryListItem };
