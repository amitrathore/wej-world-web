import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";

export function ProjectsShowcase() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {PROJECTS.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {PROJECTS.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS.items.map((project) => (
            <Card key={project.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                  <Badge variant={project.status === "live" ? "default" : "secondary"}>
                    {project.status === "live" ? "Live" : "Coming Soon"}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <Badge key={feature} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {project.status === "live" && project.link && (
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      Explore {project.name}
                    </Link>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href={PROJECTS.cta.href}>
              {PROJECTS.cta.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
