import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "FlutterStream - OTT Platform",
      description: "A startup OTT solution with live TV streaming, video playback, and admin panel built with Flutter and Firebase.",
      image: "https://raw.githubusercontent.com/shakibalhasan-code/my_portfolio/refs/heads/master/flutter_stream.png",
      duration: "Oct 2024 - Jan 2025",
      tags: ["Flutter", "Firebase", "OneSignal", "Admin Panel"]
    },
    {
      title: "Business Management System",
      description: "Developed 2 mobile apps & 1 admin panel with Flutter framework using Firebase as backend.",
      image: "https://raw.githubusercontent.com/shakibalhasan-code/my_portfolio/refs/heads/master/cover.png",
      duration: "4 Months",
      tags: ["Flutter", "Firebase", "GetX"]
    },
    {
      title: "Restaurant Order Management",
      description: "An online order management system for restaurant business with REST API integration.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "Ongoing",
      tags: ["REST API", "GetX", "Flutter"]
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold text-white">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-gray-900 border-gray-800">
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription>{project.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-500"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

