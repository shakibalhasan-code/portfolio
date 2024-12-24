import { Background } from "@/components/background"
import { Experience } from "@/components/experience"
import { Hero } from "@/components/hero"
import { Nav } from "@/components/nav"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main className="px-4 sm:px-6 lg:px-8">
        <h1 className="sr-only">Shakib Al Hasan - Software Developer Portfolio</h1>
        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">About Me</h2>
          <Hero />
        </section>
        <section id="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="sr-only">My Projects</h2>
          <Projects />
        </section>
        <section id="experience" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="sr-only">My Experience</h2>
          <Experience />
        </section>
        <section id="skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="sr-only">My Skills</h2>
          <Skills />
        </section>
      </main>
      <Footer />
    </>
  )
}

