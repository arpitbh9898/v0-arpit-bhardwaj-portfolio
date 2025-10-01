import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-balance">
            Get in <span className="text-primary">Touch</span>
          </h2>

          <Card className="glass border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <p className="text-muted-foreground mb-6">
                      Feel free to reach out for collaborations, projects, or just a friendly chat!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="mailto:arpit@example.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <span>arpit@example.com</span>
                    </a>

                    <a
                      href="tel:+91865001009"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <span>+91 865001009</span>
                    </a>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <span>Available for opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                    <p className="text-muted-foreground mb-6">
                      Follow me on social media to stay updated with my latest projects and activities.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start glass hover:border-primary/50 hover:neon-glow transition-all bg-transparent"
                    >
                      <a href="https://github.com/arpitbh9898" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 mr-3" />
                        GitHub
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start glass hover:border-primary/50 hover:neon-glow transition-all bg-transparent"
                    >
                      <a
                        href="https://www.linkedin.com/in/arpit-bhardwaj-850605346"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5 mr-3" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-muted-foreground">
        <p className="text-sm">© {new Date().getFullYear()} Arpit Bhardwaj. All rights reserved.</p>
      </footer>
    </section>
  )
}
