export default function formatCurrency(
  amount: number,
  currency: string = "BRL",
) {
  return new Intl.NumberFormat("pt-BR", {
    currency,
    style: "currency",
  }).format(amount);
}
