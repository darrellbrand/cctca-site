
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import ProgramsSection from "@/components/Programs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InstructorsSection from "@/components/InstructorsSecttion";

export default function Home() {
  return (
    <div className="w-full ">
      <TopBar></TopBar>
      <div className="overflow-hidden">
      <section id="home">
        <Hero></Hero>
      </section>
      <section id="about">
        <AboutSection></AboutSection>
      </section >
      <section id="programs">
        <ProgramsSection></ProgramsSection>
      </section>
        <section id="instructors">
        <InstructorsSection></InstructorsSection>
      </section>
      <section id="contact">
        <ContactSection></ContactSection>
      </section>
      <Footer></Footer>
      </div>
    </div>
  );
}
