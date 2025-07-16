
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import ProgramsSection from "@/components/Programs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="w-full max-w-screen">
      <TopBar></TopBar>
      <section id="home">
        <Hero></Hero>
      </section>
      <section id="about">
        <AboutSection></AboutSection>
      </section >
      <section id="programs">
        <ProgramsSection></ProgramsSection>
      </section>
      <section id="contact">
        <ContactSection></ContactSection>
      </section>
      <Footer></Footer>
    </div>
  );
}
