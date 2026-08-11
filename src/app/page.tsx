import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/catalog";
import { getPosts, getServices } from "@/lib/content";

export default async function HomePage() {
  const [products, posts, services] = await Promise.all([
    getProducts(),
    getPosts(),
    getServices(),
  ]);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#1f4d32_0%,#2f6b45_48%,#5a7d3a_100%)]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,.12), transparent 35%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 md:px-6 md:pb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/70">
            Flora Global
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[1.05] text-white md:text-6xl">
            Precision Agriculture.
            <br />
            Global Compliance.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Nông sản hữu cơ, nguyên liệu nhập khẩu và giải pháp chứng nhận —
            từ vùng trồng đến xuất khẩu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-sm bg-white px-5 py-3 text-sm font-semibold text-[var(--brand)] transition hover:bg-white/90"
            >
              Xem sản phẩm
            </Link>
            <Link
              href="/dich-vu"
              className="rounded-sm border border-white/40 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Dịch vụ
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              Catalog
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
              Sản phẩm nổi bật
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium text-[var(--brand)] hover:underline"
          >
            Tất cả sản phẩm →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                Services
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
                Giải pháp tích hợp
              </h2>
            </div>
            <Link href="/dich-vu" className="text-sm font-medium text-[var(--brand)] hover:underline">
              Tất cả dịch vụ →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Link
                key={s.id}
                href={`/dich-vu/${s.slug}`}
                className="border border-[var(--line)] bg-[var(--bg)] p-5 transition hover:border-[var(--brand)]"
              >
                <p className="text-xs text-[var(--muted)]">0{i + 1}</p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Blog</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl">Tin tức</h2>
          </div>
          <Link href="/blog" className="text-sm font-medium text-[var(--brand)] hover:underline">
            Xem tất cả →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="border border-[var(--line)] bg-white p-5 transition hover:border-[var(--brand)]"
            >
              <time className="text-xs text-[var(--muted)]">
                {new Date(post.published_at).toLocaleDateString("vi-VN")}
              </time>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
