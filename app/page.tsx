import { Hero } from "@/components/home/hero";
import { FeaturesOverview } from "@/components/home/features-overview";
import { ProjectsShowcase } from "@/components/home/projects-showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesOverview />
      <ProjectsShowcase />
    </>
  );
}
