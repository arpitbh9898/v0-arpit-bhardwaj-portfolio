import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-balance">
            My <span className="text-primary">Education</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300 relative">
              <CardContent className="p-6 md:p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center neon-glow">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Bachelor of Computer Applications</h3>
                      <p className="text-lg text-primary font-medium">GL Bajaj Institute of Management</p>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Currently Pursuing</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Pursuing a comprehensive education in computer applications, focusing on programming, software
                      development, and emerging technologies. Building a strong foundation in computer science
                      principles and practical application development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
