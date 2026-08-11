"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/format";
import { createOrder } from "@/app/actions/orders";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clear } = useCart();
  const total = subtotal();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const payload = useMemo(
    () =>
      items.map((i) => ({
        productId: i.productId,
        name: i.name,
        slug: i.slug,
        price: i.price,
        quantity: i.quantity,
      })),
    [items],
  );

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <p className="text-[var(--muted)]">Giỏ hàng trống.</p>
        <Link href="/products" className="mt-4 inline-block text-[var(--brand)]">
          Quay lại mua hàng
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-6">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl">
          Thanh toán
        </h1>
        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setError(null);
            const fd = new FormData(e.currentTarget);
            startTransition(async () => {
              const res = await createOrder({
                customerName: String(fd.get("name") || ""),
                customerEmail: String(fd.get("email") || ""),
                customerPhone: String(fd.get("phone") || ""),
                note: String(fd.get("note") || ""),
                paymentMethod: String(fd.get("payment") || "cod"),
                address: {
                  province: String(fd.get("province") || ""),
                  district: String(fd.get("district") || ""),
                  ward: String(fd.get("ward") || ""),
                  line1: String(fd.get("address") || ""),
                },
                items: payload,
              });
              if (!res.ok) {
                setError(res.error);
                return;
              }
              clear();
              router.push(`/order-success?order=${res.orderNumber}`);
            });
          }}
        >
          <Field name="name" label="Họ tên *" required />
          <Field name="phone" label="Điện thoại *" required />
          <Field name="email" label="Email *" type="email" required />
          <Field name="address" label="Địa chỉ *" required />
          <div className="grid gap-4 sm:grid-cols-3">
            <Field name="province" label="Tỉnh/TP *" required />
            <Field name="district" label="Quận/Huyện *" required />
            <Field name="ward" label="Phường/Xã *" required />
          </div>
          <label className="block text-sm">
            <span className="mb-1.5 block text-[var(--muted)]">Ghi chú</span>
            <textarea
              name="note"
              rows={3}
              className="w-full rounded-sm border border-[var(--line)] bg-white px-3 py-2"
            />
          </label>
          <fieldset className="space-y-2">
            <legend className="text-sm text-[var(--muted)]">Thanh toán</legend>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="payment" value="cod" defaultChecked />
              COD — Thanh toán khi nhận hàng
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="payment" value="bank_transfer" />
              Chuyển khoản ngân hàng
            </label>
          </fieldset>
          {error && <p className="text-sm text-red-700">{error}</p>}
          <button
            type="submit"
            disabled={pending}
            className="rounded-sm bg-[var(--brand)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--brand-2)] disabled:opacity-60"
          >
            {pending ? "Đang đặt hàng..." : "Đặt hàng"}
          </button>
        </form>
      </div>
      <aside className="h-fit border border-[var(--line)] bg-white p-5">
        <h2 className="font-semibold">Đơn hàng</h2>
        <ul className="mt-4 space-y-3 text-sm">
          {items.map((i) => (
            <li key={i.productId} className="flex justify-between gap-3">
              <span>
                {i.name} × {i.quantity}
              </span>
              <span>{formatPrice((i.price ?? 0) * i.quantity)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-[var(--line)] pt-4 text-lg font-semibold">
          Tổng: {formatPrice(total)}
        </p>
      </aside>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block text-[var(--muted)]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-[var(--line)] bg-white px-3 py-2"
      />
    </label>
  );
}
