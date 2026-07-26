import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPostsMeta, formatPostDate } from "@/lib/posts";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const PREVIEW_COUNT = 3;

export default function BlogPreview() {
  const posts = getAllPostsMeta().slice(0, PREVIEW_COUNT);
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Writing" title="From the blog" />
        <ScrollReveal className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-2"
          >
            View all posts
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {posts.map((post, index) => (
          <ScrollReveal key={post.slug} delay={index * 90}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover"
            >
              <time dateTime={post.date} className="font-mono text-xs text-muted">
                {formatPostDate(post.date)}
              </time>
              <h3 className="mt-3 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              )}
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
