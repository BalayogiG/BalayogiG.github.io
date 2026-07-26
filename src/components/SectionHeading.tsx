import ScrollReveal from "@/components/ScrollReveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <ScrollReveal as="span" className="block">
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </p>
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={140}>
          <p className="mt-4 text-base text-muted">{description}</p>
        </ScrollReveal>
      )}
    </div>
  );
}
