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

## Linking to an article published elsewhere (e.g. LinkedIn)

If you've already published something on LinkedIn (or anywhere else) and
just want it to show up in the blog list/preview as a card that links out
to the original, add `externalUrl` and `source` instead of writing a body:

```markdown
---
title: "Title of your LinkedIn article"
date: "2026-08-01"
excerpt: "One or two sentences shown in the card."
source: "linkedin"
externalUrl: "https://www.linkedin.com/pulse/<paste-the-real-article-url-here>"
---
```

- The card shows a "LinkedIn" badge and an external-link icon, and clicking
  it opens `externalUrl` in a new tab — no `/blog/<slug>` page is generated
  for it, since the content lives on LinkedIn, not here.
- `source` can be any short label (`"linkedin"` gets a LinkedIn icon
  automatically; anything else just shows as plain text).
- If you'd rather host the full article text on your own site instead of
  linking out, just omit `externalUrl`/`source` and write it as a normal
  post per the format above.

## Publishing

Commit the file and push to `main` — the GitHub Actions workflow rebuilds
and redeploys the site automatically, so the post goes live within a
minute or two.
