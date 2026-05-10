import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ResultsGallery } from "@/components/ResultsGallery";
import { ReturnCalculator } from "@/components/ReturnCalculator";
import { SocialProofBar } from "@/components/SocialProofBar";
import { WhatYouGet } from "@/components/WhatYouGet";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProofBar />
        <ResultsGallery />
        <WhatYouGet />
        <About />
        <ReturnCalculator />
      </main>
    </div>
  );
}
