import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/50 neon-glow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-01%20at%2017.11.19_05f02304-VTZDk8FDR9eFl6ZXBfC6Si6SdakyVs.jpg"
                alt="Arpit Bhardwaj"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-foreground">Arpit</span> <span className="text-primary">Bhardwaj</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Student pursuing B.C.A, passionate about building projects and learning new technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="neon-glow">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass bg-transparent">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon" className="hover:text-primary hover:neon-glow transition-all">
              <a href="https://github.com/arpitbh9898" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:text-primary hover:neon-glow transition-all">
              <a
                href="https://www.linkedin.com/in/arpit-bhardwaj-850605346"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:text-primary hover:neon-glow transition-all">
              <a href="mailto:arpit@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
