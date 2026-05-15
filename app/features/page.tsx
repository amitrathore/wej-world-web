import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FEATURES_PAGE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Features for developing AI musicians, AI bands, rights provenance, label-grade releases, and participatory music worlds.",
};

export default function FeaturesPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {FEATURES_PAGE.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {FEATURES_PAGE.hero.subtitle}
          </p>
        </div>

        {/* For Musicians Section */}
        <section className="mb-32">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {FEATURES_PAGE.forMusicians.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {FEATURES_PAGE.forMusicians.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES_PAGE.forMusicians.features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* For AI Builders Section */}
        <section>
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {FEATURES_PAGE.forBuilders.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {FEATURES_PAGE.forBuilders.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES_PAGE.forBuilders.features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
