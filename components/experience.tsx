import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Developer & Founder",
      company: "SOFTSVENTURE",
      period: "2024 - Present",
      description: "Founded softsventure.com to provide mobile app development services and build a strong network of skilled developers.",
      type: "Full-time"
    },
    {
      title: "Author",
      company: "Codecanyon",
      period: "2024 - Present",
      description: "Creating and publishing mobile app source codes on CodeCanyon, focusing on market-standard solutions.",
      type: "Part-time"
    },
    {
      title: "Founder",
      company: "remoteBe",
      period: "Dec 2024 - Present",
      description: "Founded remotebe.com, a platform for remote job solutions, with plans to integrate AI automation.",
      type: "Startup"
    },
    {
      title: "Freelancer",
      company: "Upwork",
      period: "Oct 2024 - Present",
      description: "Providing mobile app development services for Android & iOS with Firebase backend.",
      type: "Freelance"
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold text-white">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-500">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

