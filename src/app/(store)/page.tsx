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
    </div>
  );
};

export default Home;
