import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getAllPostsMeta, formatPostDate, type PostMeta } from "@/lib/posts";
import { LinkedinIcon } from "@/components/icons/BrandIcons";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const PREVIEW_COUNT = 3;

function PostCard({ post }: { post: PostMeta }) {
  const cardClass =
    "group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover";

  const cardContent = (
    <>
      <div className="flex items-center justify-between gap-2">
        <time dateTime={post.date} className="font-mono text-xs text-muted">
          {formatPostDate(post.date)}
        </time>
        {post.source === "linkedin" && (
          <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs text-muted">
            <LinkedinIcon size={12} />
            LinkedIn
          </span>
        )}
      </div>
      <h3 className="mt-3 flex items-start gap-1.5 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
        <span className="flex-1">{post.title}</span>
        {post.externalUrl && <ArrowUpRight size={16} className="mt-1 shrink-0" />}
      </h3>
      {post.excerpt && (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      )}
    </>
  );

  if (post.externalUrl) {
    return (
      <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={`/blog/${post.slug}/`} className={cardClass}>
      {cardContent}
    </Link>
  );
}

export default function BlogPreview() {
  const posts = getAllPostsMeta().slice(0, PREVIEW_COUNT);
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Writing" title="From the blog" />
        <ScrollReveal className="mb-12">
          <Link
            href="/blog/"
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
            <PostCard post={post} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
