import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience, type TimelineItem } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6">
      {items.map((item, index) => (
        <ScrollReveal key={item.title} delay={index * 80} as="span" className="block">
          <li className="relative">
            <span className="absolute top-1.5 -left-[27px] h-3 w-3 rounded-full border-2 border-background bg-accent" />
            <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
            <p className="mt-0.5 text-sm text-accent-2">{item.org}</p>
            <p className="mt-0.5 font-mono text-xs text-muted">{item.meta}</p>
            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{item.description}</p>
            )}
          </li>
        </ScrollReveal>
      ))}
    </ol>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Experience & Education" title="Where I've worked and studied" />

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm sm:p-8">
          <h3 className="mb-8 flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground uppercase">
            <Briefcase size={16} className="text-accent" />
            Experience
          </h3>
          <Timeline items={experience} />
        </div>

        <div className="rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm sm:p-8">
          <h3 className="mb-8 flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground uppercase">
            <GraduationCap size={16} className="text-accent" />
            Education
          </h3>
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
}
