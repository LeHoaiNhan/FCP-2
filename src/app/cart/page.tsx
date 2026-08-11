"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { items, setQuantity, removeItem, subtotal } = useCart();
  const total = subtotal();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--ink)]">
        Giỏ hàng
      </h1>

      {items.length === 0 ? (
        <div className="mt-10 border border-[var(--line)] bg-white p-8 text-center">
          <p className="text-[var(--muted)]">Giỏ hàng đang trống.</p>
          <Link
            href="/products"
            className="mt-4 inline-block text-sm font-medium text-[var(--brand)] hover:underline"
          >
            Tiếp tục mua hàng →
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-8 divide-y divide-[var(--line)] border border-[var(--line)] bg-white">
            {items.map((item) => (
              <li
                key={item.productId}
                className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <Link
                    href={`/products/${item.slug}`}
                    className="font-medium text-[var(--ink)] hover:text-[var(--brand)]"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      setQuantity(item.productId, Number(e.target.value) || 1)
                    }
                    className="w-16 rounded-sm border border-[var(--line)] px-2 py-1.5 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(item.productId)}
                    className="text-sm text-red-700 hover:underline"
                  >
                    Xóa
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-lg font-semibold">
              Tạm tính: {formatPrice(total)}
            </p>
            <Link
              href="/checkout"
              className="rounded-sm bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--brand-2)]"
            >
              Thanh toán
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
