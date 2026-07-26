import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPostsMeta, formatPostDate, type PostMeta } from "@/lib/posts";
import { LinkedinIcon } from "@/components/icons/BrandIcons";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog | Balayogi G",
  description: "Notes on conversational AI evaluation, accessible security, and responsible AI.",
};

function SourceBadge({ source }: { source: string }) {
  if (source === "linkedin") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs text-muted">
        <LinkedinIcon size={12} />
        LinkedIn
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-xs text-muted">
      {source}
    </span>
  );
}

function PostRow({ post }: { post: PostMeta }) {
  const rowContent = (
    <>
      <time dateTime={post.date} className="font-mono text-sm text-muted sm:w-36 sm:shrink-0">
        {formatPostDate(post.date)}
      </time>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-lg font-medium text-foreground transition-colors group-hover:text-accent">
            {post.title}
          </h2>
          {post.source && <SourceBadge source={post.source} />}
        </div>
        {post.excerpt && <p className="mt-1.5 text-sm text-muted">{post.excerpt}</p>}
      </div>
      {post.externalUrl && (
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
        />
      )}
    </>
  );

  const rowClass =
    "group flex flex-col gap-2 p-6 transition-colors hover:bg-surface-hover sm:flex-row sm:items-start sm:gap-6";

  if (post.externalUrl) {
    return (
      <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className={rowClass}>
        {rowContent}
      </a>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className={rowClass}>
      {rowContent}
    </Link>
  );
}

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
              <PostRow post={post} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
