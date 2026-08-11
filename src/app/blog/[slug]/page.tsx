import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Không tìm thấy" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <Link href="/blog" className="text-sm text-[var(--muted)] hover:text-[var(--brand)]">
        ← Tin tức
      </Link>
      {post.cover_url && (
        <div className="relative mt-6 aspect-[16/9] overflow-hidden border border-[var(--line)]">
          <Image
            src={post.cover_url}
            alt={post.title}
            fill
            priority
            sizes="(max-width:768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      )}
      <time className="mt-6 block text-xs text-[var(--muted)]">
        {new Date(post.published_at).toLocaleDateString("vi-VN")}
      </time>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight">
        {post.title}
      </h1>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-[var(--ink)]/90 whitespace-pre-line">
        {post.content}
      </div>
    </article>
  );
}
