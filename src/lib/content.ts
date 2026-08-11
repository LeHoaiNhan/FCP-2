import { LOCAL_POSTS, LOCAL_SERVICES, type Post, type Service } from "./data/content";

function useLocal() {
  return (process.env.DATA_SOURCE ?? "local") === "local";
}

export async function getPosts(): Promise<Post[]> {
  if (useLocal()) {
    return LOCAL_POSTS.filter((p) => p.status === "published").sort(
      (a, b) => +new Date(b.published_at) - +new Date(a.published_at),
    );
  }

  const { createClient } = await import("@/lib/supabase/server");
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Post[];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (useLocal()) {
    return LOCAL_POSTS.find((p) => p.slug === slug && p.status === "published") ?? null;
  }

  const { createClient } = await import("@/lib/supabase/server");
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  if (error) throw error;
  return data as Post | null;
}

export async function getServices(): Promise<Service[]> {
  return LOCAL_SERVICES;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return LOCAL_SERVICES.find((s) => s.slug === slug) ?? null;
}
