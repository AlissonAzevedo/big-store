import { IProduct } from "@/@types/products";
import formatCurrency from "@/functions/formatCurrency";
import Image from "next/image";
import Link from "next/link";

const CardProductFeatured = ({ product }: { product: IProduct }) => {
  return (
    <Link className="relative h-full w-full" href={`/products/${product.id}`}>
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
        <Image
          alt={product.title}
          className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105 p-6"
          layout="fill"
          src={product.image!}
        />
        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
          <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
            <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
              {product.title}
            </h3>
            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
              {formatCurrency(product.price)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { CardProductFeatured };
