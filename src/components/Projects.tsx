import { GithubIcon } from "@/components/icons/BrandIcons";
import { projects } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Projects" title="Things I've built" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 90}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-5">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-2"
                  >
                    <GithubIcon size={16} />
                    View on GitHub
                  </a>
                ) : (
                  project.status && (
                    <span className="inline-flex rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                      {project.status}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
