import ProductCardDetail from "@/components/Cards/CardProductDetail";
import { useCart } from "@/hooks/cart/useCart";
import { useGetOneProduct } from "@/hooks/products/useGet/useGetOne";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { useParams } from "next/navigation";

jest.mock("@/hooks/products/useGet/useGetOne");
jest.mock("@/hooks/cart/useCart");
jest.mock("next/navigation", () => ({
  useParams: jest.fn(),
}));

const mockUseGetOneProduct = useGetOneProduct as jest.Mock;
const mockUseCart = useCart as jest.Mock;
const mockUseParams = useParams as jest.Mock;

describe("ProductCardDetail Component", () => {
  beforeEach(() => {
    mockUseGetOneProduct.mockClear();
    mockUseCart.mockClear();
    mockUseParams.mockReturnValue({ id: "1" });

    mockUseCart.mockReturnValue({
      addProduct: jest.fn(),
    });
  });

  test("renders loading state", () => {
    mockUseGetOneProduct.mockReturnValue({
      data: null,
      isError: false,
      isLoading: true,
    });

    const { container } = render(<ProductCardDetail />);

    const loadingElements = container.querySelectorAll(".animate-pulse");
    expect(loadingElements.length).toBeGreaterThan(0);
  });

  test("renders error state", () => {
    mockUseGetOneProduct.mockReturnValue({
      data: null,
      isError: true,
      isLoading: false,
    });

    render(<ProductCardDetail />);

    expect(screen.getByText("Erro ao carregar produto")).toBeInTheDocument();
  });

  test("renders product details", () => {
    const mockProduct = {
      description: "Test Description",
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 100,
      title: "Test Product",
    };

    mockUseGetOneProduct.mockReturnValue({
      data: mockProduct,
      isError: false,
      isLoading: false,
    });

    render(<ProductCardDetail />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("R$ 100")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product")).toBeInTheDocument();
  });

  test("calls addProduct when 'Adicionar ao carrinho' button is clicked", () => {
    const mockProduct = {
      description: "Test Description",
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 100,
      title: "Test Product",
    };

    const mockAddProduct = jest.fn();
    mockUseGetOneProduct.mockReturnValue({
      data: mockProduct,
      isError: false,
      isLoading: false,
    });
    mockUseCart.mockReturnValue({
      addProduct: mockAddProduct,
    });

    render(<ProductCardDetail />);

    const addButton = screen.getByRole("button", {
      name: /adicionar ao carrinho/i,
    });
    fireEvent.click(addButton);

    expect(mockAddProduct).toHaveBeenCalledWith(mockProduct);
  });
});
