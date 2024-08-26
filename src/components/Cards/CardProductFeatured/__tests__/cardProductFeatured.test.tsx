import { IProduct } from "@/@types/products";
import { CardProductFeatured } from "@/components/Cards/CardProductFeatured";
import formatCurrency from "@/functions/formatCurrency";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: any) => {
    return <a href={href}>{children}</a>;
  },
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("CardProductFeatured Component", () => {
  const mockProduct: IProduct = {
    category: "electronics",
    description: "Test Description",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 100,
    title: "Test Product",
  };

  test("renders product details correctly", () => {
    render(<CardProductFeatured product={mockProduct} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();

    const formattedPrice = formatCurrency(mockProduct.price);
    expect(
      screen.getByText(new RegExp(formattedPrice, "i")),
    ).toBeInTheDocument();

    const imgElement = screen.getByAltText("Test Product") as HTMLImageElement;
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toBe(mockProduct.image);

    const linkElement = screen.getByRole("link", { name: /test product/i });
    expect(linkElement).toHaveAttribute("href", `/products/${mockProduct.id}`);
  });
});
