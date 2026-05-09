import { Separator } from "@/components/ui/separator";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}`,
};

export default function PrivacyPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: May 2026</p>
        </section>

        <Separator className="my-10" />

        <div className="space-y-12 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account,
              upload music, or contact us for support. This may include your name, email address,
              payment information, and content you upload to the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services,
              process transactions, send you technical notices and support messages, and respond
              to your comments and questions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Revenue & Blockchain Data</h2>
            <p>
              Revenue distribution data recorded on-chain is publicly visible by design as part of
              our transparency model. Your wallet address and transaction history related to
              {" "}{SITE.name} may be visible on the public blockchain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Federated Network (MainCross)</h2>
            <p>
              Content you publish on the MainCross fediverse is distributed across federated servers.
              Once published, content may be cached or stored by third-party fediverse instances
              outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share information with service
              providers who assist in operating our platform, subject to confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
            <p>
              You may access, update, or delete your personal information at any time through your
              account settings or by contacting us at{" "}
              <a href="mailto:hello@wej.world" className="text-primary hover:underline">
                hello@wej.world
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact</h2>
            <p>
              Questions about this policy? Reach us at{" "}
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
