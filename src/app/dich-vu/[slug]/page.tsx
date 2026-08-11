import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Không tìm thấy" };
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <Link href="/dich-vu" className="text-sm text-[var(--muted)] hover:text-[var(--brand)]">
        ← Dịch vụ
      </Link>
      {service.image_url && (
        <div className="relative mt-6 aspect-[16/9] overflow-hidden border border-[var(--line)]">
          <Image
            src={service.image_url}
            alt={service.title}
            fill
            priority
            sizes="(max-width:768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      )}
      <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl">{service.title}</h1>
      <p className="mt-4 text-lg text-[var(--muted)]">{service.summary}</p>
      <p className="mt-8 leading-relaxed text-[var(--ink)]/90">{service.body}</p>
      <Link
        href="/contact"
        className="mt-10 inline-block rounded-sm bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white"
      >
        Liên hệ tư vấn
      </Link>
    </div>
  );
}
