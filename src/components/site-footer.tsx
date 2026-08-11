import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--brand)] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl">Flora Global</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">
            Precision Agriculture. Global Compliance. Integrated Excellence.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Liên kết</p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>
              <Link href="/products" className="hover:underline">
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline">
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Liên hệ</p>
          <p className="mt-3 text-sm text-white/85">info@flora-global.vn</p>
          <p className="mt-1 text-sm text-white/85">flora-global.vn</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Flora Global. All rights reserved.
      </div>
    </footer>
  );
}
