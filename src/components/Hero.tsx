import { MapPin } from "lucide-react";
import { hero } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/80 to-background" />

      <ScrollReveal as="span" className="block">
        <p className="font-mono text-sm font-medium tracking-tight text-accent">
          {hero.eyebrow}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          <span className="gradient-text">{hero.name}</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{hero.subtitle}</p>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#publications"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            View Publications
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
          >
            Get in Touch
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={380}>
        <p className="mt-10 flex items-center justify-center gap-1.5 text-sm text-muted">
          <MapPin size={14} />
          {hero.location}
        </p>
      </ScrollReveal>
    </section>
  );
}
