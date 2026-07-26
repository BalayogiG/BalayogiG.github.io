import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import BlogPreview from "@/components/BlogPreview";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Research />
      <Publications />
      <Projects />
      <BlogPreview />
      <Skills />
      <Contact />
    </>
  );
}
