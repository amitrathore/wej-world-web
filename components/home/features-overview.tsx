import { Card, CardContent } from "@/components/ui/card";
import { FEATURES } from "@/lib/constants";

export function FeaturesOverview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What an AI-Native Label Has to Do
          </h2>
          <p className="text-lg text-muted-foreground">
            AI bands need more than a generator. They need identity, provenance, release operations, and a community that can help the world grow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="text-4xl">{feature.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
