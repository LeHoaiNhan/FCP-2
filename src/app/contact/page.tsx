import type { Metadata } from "next";
import { submitContact } from "@/app/actions/contact";

export const metadata: Metadata = {
  title: "Liên hệ",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const { sent, error } = await searchParams;

  return (
    <div className="mx-auto max-w-xl px-4 py-12 md:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">Liên hệ</h1>
      <p className="mt-3 text-[var(--muted)]">
        Để lại thông tin — đội ngũ Flora Global sẽ phản hồi sớm.
      </p>

      {sent === "1" && (
        <div className="mt-6 border border-[var(--brand)]/30 bg-[var(--brand)]/5 px-4 py-3 text-sm text-[var(--brand)]">
          Đã gửi thành công. Chúng tôi sẽ liên hệ lại sớm.
        </div>
      )}
      {error === "1" && (
        <div className="mt-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Vui lòng nhập đầy đủ họ tên và email.
        </div>
      )}

      <form action={submitContact} className="mt-8 space-y-4">
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--muted)]">Họ tên *</span>
          <input
            name="name"
            required
            className="w-full rounded-sm border border-[var(--line)] bg-white px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--muted)]">Email *</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-sm border border-[var(--line)] bg-white px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--muted)]">Điện thoại</span>
          <input
            name="phone"
            className="w-full rounded-sm border border-[var(--line)] bg-white px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--muted)]">Nội dung</span>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-sm border border-[var(--line)] bg-white px-3 py-2"
          />
        </label>
        <button
          type="submit"
          className="rounded-sm bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--brand-2)]"
        >
          Gửi liên hệ
        </button>
      </form>
    </div>
  );
}
