import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = {
    programming: [
      "Flutter","Android", "Dart", "Java", "HTML", "CSS"
    ],
    tools: [
      "Figma","VS Code", "Android Studio", "Git", "Github"
    ],
    database: [
      "Firebase", "MySQL"
    ],
    languages: [
      "English"
    ]
  }

  const courses = [
    {
      title: "Google Professional IT Specialist",
      provider: "Google",
      period: "Aug 2024 - Nov 2024",
      score: "87/100"
    },
    {
      title: "Flutter UI Bootcamp",
      provider: "Udemy",
      period: "Ongoing"
    },
    {
      title: "Complete Flutter App Development Career Path",
      provider: "Interactive Cares",
      period: "Nov 2023 - Oct 2024"
    },
    {
      title: "Network & Security - Mobile Platform",
      provider: "Great Learning",
      period: "Dec 2023 - Jan 2024"
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="grid gap-12">
          <div>
            <h2 className="mb-12 text-3xl font-bold text-white">Skills</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Programming</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-500/10 text-blue-500">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Tools</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-500/10 text-blue-500">
                      {tool}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Database</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.database.map((db, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-500/10 text-blue-500">
                      {db}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Languages</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.languages.map((lang, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-500/10 text-blue-500">
                      {lang}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h2 className="mb-12 text-3xl font-bold text-white">Courses & Certifications</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {courses.map((course, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{course.provider}</p>
                    <p className="text-sm text-gray-500">{course.period}</p>
                    {course.score && (
                      <Badge className="mt-2 bg-green-500/10 text-green-500">
                        Score: {course.score}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

