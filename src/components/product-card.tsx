import Link from "next/link";
import type { Product } from "@/lib/data/local";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden border border-[var(--line)] bg-white transition hover:border-[var(--brand)]"
    >
      <div className="relative aspect-[4/3] bg-[linear-gradient(145deg,#dce8d4_0%,#b7c9a5_45%,#6f8f5a_100%)]">
        <div className="absolute inset-0 flex items-end p-4">
          <span className="rounded-sm bg-white/90 px-2 py-1 text-[11px] uppercase tracking-wider text-[var(--brand)]">
            Organic
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-[family-name:var(--font-display)] text-lg leading-snug text-[var(--ink)] group-hover:text-[var(--brand)]">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-[var(--muted)]">
          {product.short_description}
        </p>
        <p className="mt-auto pt-2 text-base font-semibold text-[var(--brand)]">
          {formatPrice(product.price, product.currency)}
        </p>
      </div>
    </Link>
  );
}
