export function formatPrice(price: number | null, currency = "VND"): string {
  if (price == null) return "Liên hệ";
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
