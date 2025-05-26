import HeroSection from "@/components/HeroSection";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CharacterGuides from "@/components/CharacterGuides";
import GameLibrary from "@/components/GameLibrary";
import Achievements from "@/components/Achievements";
import HowItWorks from "@/components/HowItWorks";
import ParentSection from "@/components/ParentSection";
import CallToAction from "@/components/CallToAction";
import SubjectCategories from "@/components/SubjectCategories";
import AITutorChat from "@/components/AITutorChat";
import OfflineSupport from "@/components/OfflineSupport";
import LanguageInclusion from "@/components/LanguageInclusion";
import WhatsAppIntegration from "@/components/WhatsAppIntegration";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>LunaLearn - Fun Learning Games for Kids</title>
        <meta
          name="description"
          content="Interactive educational games designed by education experts and powered by AI to make learning exciting for grades 1-7. Featuring offline support, language inclusivity, and WhatsApp integration."
        />
      </Helmet>

      <HeroSection />
      <Hero />
      <SubjectCategories />
      <AITutorChat />
      <OfflineSupport />
      <LanguageInclusion />
      <WhatsAppIntegration />
      <Features />
      <CharacterGuides />
      <GameLibrary />
      <Achievements />
      <HowItWorks />
      <ParentSection />
      <CallToAction />
    </>
  );
};

export default HomePage;
