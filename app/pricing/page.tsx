import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PRICING_PAGE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing paths for launching AI musicians, AI bands, AI music worlds, and partner integrations with WeJ World.",
};

export default function PricingPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {PRICING_PAGE.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {PRICING_PAGE.hero.subtitle}
          </p>
        </div>

        {/* For Artists/Labels */}
        <section className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {PRICING_PAGE.artists.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PAGE.artists.tiers.map((tier) => (
              <Card
                key={tier.name}
                className={tier.highlighted ? "border-2 border-primary shadow-lg" : ""}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    {tier.highlighted && (
                      <Badge>Popular</Badge>
                    )}
                  </div>
                  <div className="text-3xl font-bold mb-2">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button asChild variant={tier.highlighted ? "default" : "outline"} className="w-full">
                    <Link href={tier.href}>{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-20" />

        {/* For AI Builders */}
        <section className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {PRICING_PAGE.builders.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PRICING_PAGE.builders.tiers.map((tier) => (
              <Card
                key={tier.name}
                className={tier.highlighted ? "border-2 border-primary shadow-lg" : ""}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    {tier.highlighted && (
                      <Badge>Recommended</Badge>
                    )}
                  </div>
                  <div className="text-3xl font-bold mb-2">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button asChild variant={tier.highlighted ? "default" : "outline"} className="w-full">
                    <Link href={tier.href}>{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-20" />

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {PRICING_PAGE.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
