import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: "dectify",
    title: "Dectify",
    description:
      "An innovative project focused on detection and identification technologies. Built with modern web technologies to provide efficient and accurate results.",
    tags: ["Web Development", "Detection", "Technology"],
    github: "https://github.com/arpitbh9898",
    demo: "#",
  },
  {
    id: "variable-solver",
    title: "Variable Solver Calculator",
    description:
      "A powerful calculator application designed to solve complex variable equations. Features an intuitive interface and supports multiple equation types.",
    tags: ["Calculator", "Mathematics", "Problem Solving"],
    github: "https://github.com/arpitbh9898",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-balance">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="glass border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="sm" className="glass bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="neon-glow">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* JSON-LD for Projects */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                projects.map((project) => ({
                  "@context": "https://schema.org",
                  "@type": "CreativeWork",
                  name: project.title,
                  description: project.description,
                  author: {
                    "@type": "Person",
                    name: "Arpit Bhardwaj",
                  },
                  url: project.demo,
                })),
              ),
            }}
          />
        </div>
      </div>
    </section>
  )
}
