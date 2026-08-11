import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Tin tức nông nghiệp hữu cơ — Flora Global",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Blog</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl">Tin tức</h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Cập nhật xu hướng hữu cơ, chứng nhận và chuỗi giá trị nông nghiệp.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden border border-[var(--line)] bg-white transition hover:border-[var(--brand)]"
          >
            <div className="relative aspect-[16/10] bg-[var(--bg)]">
              {post.cover_url && (
                <Image
                  src={post.cover_url}
                  alt={post.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <time className="text-xs text-[var(--muted)]">
                {new Date(post.published_at).toLocaleDateString("vi-VN")}
              </time>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl leading-snug text-[var(--ink)] group-hover:text-[var(--brand)]">
                {post.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm text-[var(--muted)]">{post.excerpt}</p>
              <span className="mt-4 text-sm font-medium text-[var(--brand)]">Đọc tiếp →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
