
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import ProgramsSection from "@/components/Programs";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <div className=" w-screen h-screen">
    <TopBar></TopBar>
    <Hero></Hero>
    <AboutSection></AboutSection>
    <ProgramsSection></ProgramsSection>
    <ContactSection></ContactSection>
    </div>
  );
}
