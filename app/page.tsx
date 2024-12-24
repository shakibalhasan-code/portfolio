import { Background } from "@/components/background"
import { Experience } from "@/components/experience"
import { Hero } from "@/components/hero"
import { Nav } from "@/components/nav"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <Background />
      <Nav />
      <section id="about">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <Footer />
    </main>
  )
}

