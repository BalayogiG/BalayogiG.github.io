import { contactLinks, site } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Contact" title="Let's connect" description={site.contactIntro} />

      <ScrollReveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-8 text-center transition-colors hover:bg-surface-hover hover:text-accent"
              >
                <Icon size={24} />
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
