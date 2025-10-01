import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arpit Bhardwaj | Portfolio",
  description:
    "Portfolio of Arpit Bhardwaj, B.C.A student at GL Bajaj Institute of Management, featuring projects Dectify and Variable Solver Calculator.",
  openGraph: {
    title: "Arpit Bhardwaj | Portfolio",
    description:
      "Portfolio of Arpit Bhardwaj, B.C.A student at GL Bajaj Institute of Management, featuring projects Dectify and Variable Solver Calculator.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Bhardwaj | Portfolio",
    description:
      "Portfolio of Arpit Bhardwaj, B.C.A student at GL Bajaj Institute of Management, featuring projects Dectify and Variable Solver Calculator.",
  },
}

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Arpit Bhardwaj",
            jobTitle: "B.C.A Student",
            affiliation: {
              "@type": "EducationalOrganization",
              name: "GL Bajaj Institute of Management",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
            telephone: "+91-865001009",
            url: typeof window !== "undefined" ? window.location.origin : "",
            sameAs: ["https://github.com/arpitbh9898", "https://www.linkedin.com/in/arpit-bhardwaj-850605346"],
          }),
        }}
      />
    </>
  )
}
