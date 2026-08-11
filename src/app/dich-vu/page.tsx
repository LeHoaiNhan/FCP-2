import type { Metadata } from "next";
import Link from "next/link";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: "Giải pháp nông nghiệp hữu cơ tích hợp — Flora Global",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Services</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl">Dịch vụ</h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Từ đầu vào hữu cơ, canh tác chính xác đến chứng nhận và logistics xuất khẩu.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <Link
            key={s.id}
            href={`/dich-vu/${s.slug}`}
            className="border border-[var(--line)] bg-white p-6 transition hover:border-[var(--brand)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              0{i + 1}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
              {s.title}
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">{s.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
