import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getLocalPostsMeta, getPostBySlug, formatPostDate } from "@/lib/posts";

export const dynamicParams = false;

// `output: "export"` requires at least one entry here, even if there are
// currently zero locally-hosted posts (e.g. all posts are external
// link-outs) — fall back to a slug that resolves to notFound() below.
export function generateStaticParams() {
  const posts = getLocalPostsMeta();
  return posts.length > 0 ? posts.map((post) => ({ slug: post.slug })) : [{ slug: "_none" }];
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const meta = getLocalPostsMeta().find((post) => post.slug === slug);
  if (!meta) return {};

  return {
    title: `${meta.title} | Balayogi G`,
    description: meta.excerpt,
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const exists = getLocalPostsMeta().some((post) => post.slug === slug);
  if (!exists) notFound();

  const post = await getPostBySlug(slug);

  return (
    <article className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} />
        Back to blog
      </Link>

      <p className="mt-8 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
        {formatPostDate(post.date)}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {post.title}
      </h1>

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div
        className="prose prose-invert prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:text-accent-2 prose-pre:border prose-pre:border-border prose-pre:bg-surface prose-blockquote:border-accent mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
