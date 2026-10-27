import { Header, Hero } from "@/components/sections/Hero";
import { Empathy } from "@/components/sections/Empathy";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Monsters } from "@/components/sections/Monsters";
import { Features } from "@/components/sections/Features";
import { Trust } from "@/components/sections/Trust";
import { MonsterTest } from "@/components/sections/MonsterTest";
import { Survey } from "@/components/sections/Survey";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { PageEffects } from "@/components/PageEffects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Empathy />
        <HowItWorks />
        <Monsters />
        <Features />
        <Trust />
        <MonsterTest />
        <Survey />
        <Faq />
      </main>
      <Footer />
      <PageEffects />
    </>
  );
}
