import Link from "next/link";

export default async function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order } = await searchParams;

  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
        Thành công
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-[var(--brand)]">
        Đặt hàng thành công
      </h1>
      {order && (
        <p className="mt-4 text-[var(--ink)]">
          Mã đơn: <strong>{order}</strong>
        </p>
      )}
      <p className="mt-3 text-sm text-[var(--muted)]">
        Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.
      </p>
      <Link
        href="/products"
        className="mt-8 inline-block rounded-sm bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white"
      >
        Tiếp tục mua hàng
      </Link>
    </div>
  );
}
