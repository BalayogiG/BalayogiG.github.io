import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta, formatPostDate } from "@/lib/posts";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog | Balayogi G",
  description: "Notes on conversational AI evaluation, accessible security, and responsible AI.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Writing"
        title="Blog"
        description="Notes on conversational AI evaluation, accessible security, and responsible AI."
      />

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet — check back soon.</p>
      ) : (
        <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
          {posts.map((post, index) => (
            <ScrollReveal
              key={post.slug}
              delay={Math.min(index * 40, 200)}
              as="span"
              className="block"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 p-6 transition-colors hover:bg-surface-hover sm:flex-row sm:items-start sm:gap-6"
              >
                <time
                  dateTime={post.date}
                  className="font-mono text-sm text-muted sm:w-36 sm:shrink-0"
                >
                  {formatPostDate(post.date)}
                </time>
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  {post.excerpt && <p className="mt-1.5 text-sm text-muted">{post.excerpt}</p>}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
