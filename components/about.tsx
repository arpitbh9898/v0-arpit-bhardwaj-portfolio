import { Card, CardContent } from "@/components/ui/card"
import { User, MapPin, Phone } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-balance">
            About <span className="text-primary">Me</span>
          </h2>

          <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <User className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm Arpit Bhardwaj, a dedicated B.C.A student at GL Bajaj Institute of Management. I'm passionate
                    about technology and constantly exploring new ways to build innovative projects. My journey in
                    computer applications has equipped me with a strong foundation in programming and problem-solving.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <a href="tel:+91865001009" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 865001009
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
