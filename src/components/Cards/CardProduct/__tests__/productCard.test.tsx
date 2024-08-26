import { IProduct } from "@/@types/products";
import ProductCard from "@/components/Cards/CardProduct";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const mockProduct = {
  category: "electronics",
  description: "Test description",
  id: 1,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 100,
  rating: {
    count: 10,
    rate: 4.5,
  },
  title: "Test Product",
};

describe("ProductCard Component", () => {
  test("renders without crashing", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  test("displays product title and price", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("R$ 100,00")).toBeInTheDocument();
  });

  test("displays product rating correctly", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByTitle("Avaliação: 4.5 (10)")).toBeInTheDocument();
  });

  test("displays product image", () => {
    render(<ProductCard product={mockProduct} />);
    const imageElement = screen.getByAltText("Test Product");
    expect(imageElement).toBeInTheDocument();

    const imageSrc = imageElement.getAttribute("src");
    expect(imageSrc).toContain(
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    );
  });
});
