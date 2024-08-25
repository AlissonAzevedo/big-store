import { CarouselProducts } from "@/components/Carousel/CarouselProducts";
import { ContainerGridProducts } from "@/components/Containers/ContainerGridProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Big Store",
  title: "Big Store",
};

const Home = () => {
  return (
    <div>
      <ContainerGridProducts />
      <CarouselProducts />
    </div>
  );
};

export default Home;
