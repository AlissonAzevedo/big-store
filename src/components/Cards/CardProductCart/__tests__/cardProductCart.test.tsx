import { IProduct } from "@/@types/products";
import { CardProductCart } from "@/components/Cards/CardProductCart";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const mockOnDecreaseQuantity = jest.fn();
const mockOnIncreaseQuantity = jest.fn();
const mockOnRemove = jest.fn();

const mockProduct: { quantity: number } & IProduct = {
  category: "electronics",
  description: "Test description",
  id: 1,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 100,
  quantity: 2,
  rating: {
    count: 10,
    rate: 4.5,
  },
  title: "Test Product",
};

describe("CardProductCart Component", () => {
  test("renders without crashing", () => {
    render(
      <CardProductCart
        onDecreaseQuantity={mockOnDecreaseQuantity}
        onIncreaseQuantity={mockOnIncreaseQuantity}
        onRemove={mockOnRemove}
        product={mockProduct}
      />,
    );
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("R$ 100,00")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product")).toBeInTheDocument();
  });

  test("calls onDecreaseQuantity when the decrease button is clicked", () => {
    render(
      <CardProductCart
        onDecreaseQuantity={mockOnDecreaseQuantity}
        onIncreaseQuantity={mockOnIncreaseQuantity}
        onRemove={mockOnRemove}
        product={mockProduct}
      />,
    );

    const decreaseButton = screen.getByRole("button", { name: /decrease/i });
    fireEvent.click(decreaseButton);
    expect(mockOnDecreaseQuantity).toHaveBeenCalledWith(mockProduct.id);
  });

  test("calls onIncreaseQuantity when the increase button is clicked", () => {
    render(
      <CardProductCart
        onDecreaseQuantity={mockOnDecreaseQuantity}
        onIncreaseQuantity={mockOnIncreaseQuantity}
        onRemove={mockOnRemove}
        product={mockProduct}
      />,
    );

    const increaseButton = screen.getByRole("button", { name: /add/i });
    fireEvent.click(increaseButton);
    expect(mockOnIncreaseQuantity).toHaveBeenCalledWith(mockProduct.id);
  });

  test("calls onRemove when the remove button is clicked", () => {
    render(
      <CardProductCart
        onDecreaseQuantity={mockOnDecreaseQuantity}
        onIncreaseQuantity={mockOnIncreaseQuantity}
        onRemove={mockOnRemove}
        product={mockProduct}
      />,
    );

    const removeButton = screen.getByRole("button", { name: /remove/i });
    fireEvent.click(removeButton);
    expect(mockOnRemove).toHaveBeenCalledWith(mockProduct.id);
  });
});
