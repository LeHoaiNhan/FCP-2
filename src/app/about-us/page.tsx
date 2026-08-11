import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về chúng tôi",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
        About
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl">
        Flora Global
      </h1>
      <div className="prose mt-8 space-y-4 text-[var(--ink)]/90 leading-relaxed">
        <p>
          Công ty TNHH Flora Global chuyên tư vấn chứng nhận hữu cơ, giải pháp
          vùng trồng hữu cơ và sản phẩm nông nghiệp hữu cơ.
        </p>
        <p>
          Precision Agriculture. Global Compliance. Integrated Excellence —
          từ đầu vào Nhật Bản, canh tác chuẩn xác đến logistics xuất khẩu.
        </p>
      </div>
    </div>
  );
}
