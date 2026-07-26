import { researchAreas } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Research" title="Research focus" />

      <div className="grid gap-5 sm:grid-cols-2">
        {researchAreas.map((area, index) => {
          const Icon = iconMap[area.icon];
          return (
            <ScrollReveal key={area.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover">
                <Icon size={24} className="text-accent" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
