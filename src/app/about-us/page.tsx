import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Về chúng tôi",
};

const pillars = [
  {
    title: "Elite Inputs",
    desc: "Đầu vào hữu cơ Nhật Bản — nền tảng dinh dưỡng đất và canh tác sạch.",
  },
  {
    title: "Precision Growing",
    desc: "Vùng trồng chuẩn hóa tại Đồng Nai, Long An, Kiên Giang.",
  },
  {
    title: "Total Compliance",
    desc: "Tư vấn chứng nhận USDA, EU Organic, GlobalG.A.P., HACCP.",
  },
  {
    title: "Seamless Export",
    desc: "Logistics xuất khẩu từ sau thu hoạch đến thị trường đích.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">About</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl md:text-5xl">
        Flora Global
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
        Precision Agriculture. Global Compliance. Integrated Excellence — tư vấn
        chứng nhận hữu cơ, giải pháp vùng trồng và chuỗi giá trị nông sản xuất khẩu.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.title} className="border border-[var(--line)] bg-white p-5">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-[var(--brand)]">
              {p.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl space-y-4 leading-relaxed text-[var(--ink)]/90">
        <p>
          Công ty TNHH Flora Global đồng hành cùng nông dân và doanh nghiệp Việt Nam
          xây dựng chuỗi nông nghiệp hữu cơ đạt chuẩn quốc tế.
        </p>
        <p>
          Liên hệ: <a className="text-[var(--brand)] hover:underline" href="mailto:info@flora-global.vn">info@flora-global.vn</a>
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/dich-vu"
          className="rounded-sm bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white"
        >
          Xem dịch vụ
        </Link>
        <Link
          href="/contact"
          className="rounded-sm border border-[var(--line)] px-5 py-3 text-sm"
        >
          Liên hệ
        </Link>
      </div>
    </div>
  );
}
