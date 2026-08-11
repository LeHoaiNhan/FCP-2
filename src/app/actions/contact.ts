"use server";

import { redirect } from "next/navigation";

export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email) {
    redirect("/contact?error=1");
  }

  if ((process.env.DATA_SOURCE ?? "local") === "local") {
    console.info("[contact:local]", { name, email, phone, message });
    redirect("/contact?sent=1");
  }

  const { createServiceClient } = await import("@/lib/supabase/service");
  const supabase = createServiceClient();
  await supabase.from("contact_submissions").insert({
    name,
    email,
    phone: phone || null,
    message: message || null,
    source: "contact",
  });

  redirect("/contact?sent=1");
}
