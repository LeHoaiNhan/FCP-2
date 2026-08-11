import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { getCategories, getProducts } from "@/lib/catalog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Danh mục sản phẩm hữu cơ Flora Global",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const [products, categories] = await Promise.all([
    getProducts({ category }),
    getCategories(),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
        Shop
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-[var(--ink)]">
        Sản phẩm
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Nông sản hữu cơ và nguyên liệu nhập khẩu — giá VND, giao dịch online.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/products"
          className={`rounded-sm border px-3 py-1.5 text-sm ${
            !category
              ? "border-[var(--brand)] bg-[var(--brand)] text-white"
              : "border-[var(--line)] text-[var(--ink)]"
          }`}
        >
          Tất cả
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/products?category=${c.slug}`}
            className={`rounded-sm border px-3 py-1.5 text-sm ${
              category === c.slug
                ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                : "border-[var(--line)] text-[var(--ink)]"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {products.length === 0 && (
        <p className="mt-10 text-[var(--muted)]">Không có sản phẩm trong danh mục này.</p>
      )}
    </div>
  );
}
