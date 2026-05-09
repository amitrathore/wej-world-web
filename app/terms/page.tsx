import { Separator } from "@/components/ui/separator";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE.name}`,
};

export default function TermsPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">Last updated: May 2026</p>
        </section>

        <Separator className="my-10" />

        <div className="space-y-12 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using {SITE.name}, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Your Content & Ownership</h2>
            <p>
              You retain full ownership of all music, recordings, and creative works you upload
              to {SITE.name}. We do not claim any ownership rights over your content. By uploading,
              you grant us a limited license to distribute your content on your behalf as directed
              by you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Revenue Distribution</h2>
            <p>
              Revenue splits are governed by the plan you select and any smart contract terms
              agreed upon at the time of distribution. All splits are recorded on-chain and are
              transparent and immutable once set.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Acceptable Use</h2>
            <p>
              You agree not to upload content that infringes on third-party intellectual property
              rights, contains malware, or violates applicable law. We reserve the right to remove
              content and suspend accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. AI Tools & Builder Projects</h2>
            <p>
              AI tools incubated on {SITE.name} are subject to additional agreements defined at
              the time of incubation. Builders are responsible for ensuring their tools comply with
              applicable AI regulations and do not infringe on artists&apos; rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Federated Network</h2>
            <p>
              Content published on the MainCross fediverse is subject to the norms and moderation
              policies of federated instances. {SITE.name} is not responsible for content
              redistribution by third-party fediverse nodes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Termination</h2>
            <p>
              You may close your account at any time. On-chain revenue records and published
              content on the fediverse cannot be retroactively deleted due to the nature of
              decentralized infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact</h2>
            <p>
              Questions about these terms? Reach us at{" "}
              <a href="mailto:hello@wej.world" className="text-primary hover:underline">
                hello@wej.world
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
