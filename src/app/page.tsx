import { About } from "@/components/About";
import { ChooseYourPath } from "@/components/ChooseYourPath";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Lifestyle } from "@/components/Lifestyle";
import { ResultsGallery } from "@/components/ResultsGallery";
import { ReturnCalculator } from "@/components/ReturnCalculator";
import { SocialProofBar } from "@/components/SocialProofBar";
import { Testimonials } from "@/components/Testimonials";
import { WhyDifferent } from "@/components/WhyDifferent";
import { WhyMostFail } from "@/components/WhyMostFail";
import { WhatYouGet } from "@/components/WhatYouGet";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProofBar />
        <ResultsGallery />
        <WhyMostFail />
        <WhatYouGet />
        <WhyDifferent />
        <ChooseYourPath />
        <Lifestyle />
        <About />
        <Testimonials />
        <ReturnCalculator />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}
