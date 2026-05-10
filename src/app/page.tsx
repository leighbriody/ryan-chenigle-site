import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProofBar } from "@/components/SocialProofBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProofBar />
      </main>
    </div>
  );
}
