import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />

      {/* Content */}
      <div className="relative container py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground dark:text-white/60">
            {HERO.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight dark:text-white">
            {HERO.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground dark:text-white/70 max-w-3xl mx-auto">
            {HERO.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="text-base px-8">
              <Link href={HERO.primaryCTA.href}>
                {HERO.primaryCTA.label}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link href={HERO.secondaryCTA.href}>
                {HERO.secondaryCTA.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
