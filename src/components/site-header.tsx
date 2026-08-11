import Link from "next/link";
import { CartBadge } from "./cart-badge";

const links = [
  { href: "/products", label: "Sản phẩm" },
  { href: "/about-us", label: "Về chúng tôi" },
  { href: "/contact", label: "Liên hệ" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--brand)]">
            Flora Global
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            Precision Agriculture
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--ink)]/80 transition hover:text-[var(--brand)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CartBadge />
          <Link
            href="/products"
            className="hidden rounded-sm bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--brand-2)] sm:inline-block"
          >
            Mua hàng
          </Link>
        </div>
      </div>
    </header>
  );
}
