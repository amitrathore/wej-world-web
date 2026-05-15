import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PLATFORM_PAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Coming platform features for AI musicians, AI bands, rights provenance, releases, revenue splits, licensing, and fan participation.",
};

export default function PlatformPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container">
        <section className="mx-auto max-w-4xl text-center mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {PLATFORM_PAGE.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {PLATFORM_PAGE.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {PLATFORM_PAGE.hero.subtitle}
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {PLATFORM_PAGE.stages.map((stage) => (
            <Card key={stage.title} className="border-2">
              <CardHeader>
                <Badge variant="outline" className="mb-4 w-fit">
                  {stage.label}
                </Badge>
                <CardTitle className="text-2xl">{stage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {stage.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mb-24">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Features Coming to the Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              These are the product capabilities WeJ World is shaping around the
              needs of AI-native acts, human creators, and participatory fan
              communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLATFORM_PAGE.features.map((feature) => (
              <Card key={feature.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl leading-snug">
                      {feature.title}
                    </CardTitle>
                    <Badge
                      variant={
                        feature.status === "Research" ? "secondary" : "default"
                      }
                    >
                      {feature.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted/40 px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {PLATFORM_PAGE.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {PLATFORM_PAGE.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={PLATFORM_PAGE.cta.primary.href}>
                  {PLATFORM_PAGE.cta.primary.label}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href={PLATFORM_PAGE.cta.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {PLATFORM_PAGE.cta.secondary.label}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
