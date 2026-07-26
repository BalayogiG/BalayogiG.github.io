import { Award, BadgeCheck, Wrench } from "lucide-react";
import { certifications, languagesAndHonors, technicalSkills } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Skills & Credentials" title="Skills, certifications & honors" />

      <div className="grid gap-5 lg:grid-cols-3">
        <ScrollReveal>
          <div className="h-full rounded-2xl border border-border bg-surface p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground uppercase">
              <Wrench size={16} className="text-accent" />
              Technical Skills
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={90}>
          <div className="h-full rounded-2xl border border-border bg-surface p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground uppercase">
              <BadgeCheck size={16} className="text-accent" />
              Certifications
            </h3>
            <ul className="mt-5 space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm leading-relaxed text-muted">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <div className="h-full rounded-2xl border border-border bg-surface p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground uppercase">
              <Award size={16} className="text-accent" />
              Languages & Honors
            </h3>
            <ul className="mt-5 space-y-3">
              {languagesAndHonors.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
