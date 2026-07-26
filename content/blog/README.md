# Writing a blog post

Add a new `.md` file to this folder. The filename becomes the URL slug, so
`my-first-post.md` becomes `/blog/my-first-post`.

## Format

```markdown
---
title: "Your post title"
date: "2026-08-01"
excerpt: "One or two sentences shown in the blog list and used as the page description."
tags: ["ai", "hci"]
---

Your content here, in regular Markdown — headings, **bold**, _italic_,
`code`, lists, [links](https://example.com), and code blocks are all
supported.
```

- `title`, `date`, and `excerpt` are required. `date` must be `YYYY-MM-DD`.
- `tags` is optional.
- Add `draft: true` to the front matter to keep a post out of the build
  (useful for work-in-progress drafts) until you're ready to publish.
- Posts are sorted newest-first automatically by `date`.

## Publishing

Commit the file and push to `main` — the GitHub Actions workflow rebuilds
and redeploys the site automatically, so the post goes live within a
minute or two.
