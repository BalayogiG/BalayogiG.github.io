import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export type Post = PostMeta & { html: string };

type FrontMatter = {
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  draft?: boolean;
};

function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md") && !/^readme$/i.test(file.replace(/\.md$/, "")))
    .map((file) => file.replace(/\.md$/, ""));
}

function readPostFile(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as FrontMatter, content };
}

export function getAllPostsMeta(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => ({ slug, ...readPostFile(slug) }))
    .filter(({ data }) => !data.draft)
    .map(({ slug, data }) => ({
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt ?? "",
      tags: data.tags ?? [],
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const { data, content } = readPostFile(slug);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    html: processed.toString(),
  };
}

export function formatPostDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
