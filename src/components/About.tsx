import { about } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="About" title="A little about my work" />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal
          className="space-y-5 rounded-2xl border border-border bg-surface/80 p-6 text-base leading-relaxed text-foreground/90 backdrop-blur-sm sm:p-8"
        >
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
            {about.focusAreas.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-surface p-5 transition-colors hover:bg-surface-hover"
                >
                  <Icon size={22} className="text-accent" />
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
