import { ArrowUpRight } from "lucide-react";
import { publications } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Publications" title="Publications" />

      <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
        {publications.map((pub, index) => {
          const content = (
            <>
              <span className="font-mono text-sm text-muted sm:w-14 sm:shrink-0">{pub.year}</span>
              <div className="flex-1">
                <h3 className="text-base font-medium text-foreground">{pub.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{pub.authors}</p>
              </div>
              {pub.href && (
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              )}
            </>
          );

          return (
            <ScrollReveal key={pub.title} delay={Math.min(index * 40, 200)} as="span" className="block">
              {pub.href ? (
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 p-6 transition-colors hover:bg-surface-hover sm:flex-row sm:items-start sm:gap-6"
                >
                  {content}
                </a>
              ) : (
                <div className="flex flex-col gap-2 p-6 sm:flex-row sm:items-start sm:gap-6">
                  {content}
                </div>
              )}
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
