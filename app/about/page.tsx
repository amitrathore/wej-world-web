import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ABOUT_PAGE } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Empowering musicians at the intersection of music and AI",
};

export default function AboutPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container max-w-4xl">
        {/* Mission */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {ABOUT_PAGE.mission.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {ABOUT_PAGE.mission.content}
          </p>
        </section>

        <Separator className="my-16" />

        {/* The Ownership Web */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {ABOUT_PAGE.ownershipWeb.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {ABOUT_PAGE.ownershipWeb.content}
          </p>
        </section>

        <Separator className="my-16" />

        {/* Why We're Different */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            {ABOUT_PAGE.different.title}
          </h2>
          <div className="space-y-4">
            {ABOUT_PAGE.different.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <Badge className="mt-1">✓</Badge>
                <p className="text-lg text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* AI Incubation */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-4" id="ai-incubation">
            {ABOUT_PAGE.aiIncubation.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {ABOUT_PAGE.aiIncubation.content}
          </p>
        </section>

        <Separator className="my-16" />

        {/* Success Stories */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            {ABOUT_PAGE.projects.title}
          </h2>
          <div className="space-y-6">
            {ABOUT_PAGE.projects.items.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <Link
                    href="https://app.jointhejs.com/ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary hover:underline font-medium"
                  >
                    Explore The Js →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
