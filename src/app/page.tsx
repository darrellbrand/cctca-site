
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import ProgramsSection from "@/components/Programs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InstructorsSection from "@/components/InstructorsSecttion";
import Head from 'next/head'
export default function Home() {
  return (


    <div className="w-full ">
      <Head>
        <title>Digital Literacy Program | Central Coast Tech & Career Academy</title>
        <meta name="description" content="Master computer basics, internet skills, file management, email, and digital tools with our beginner-friendly Digital Literacy program." />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Digital Literacy & Computer Basics Program" />
        <meta property="og:description" content="Learn typing, file management, browsing, email, and document tools. Free program by CCTCA for adult learners." />
        <meta property="og:image" content="/lab5.jpg" />
        <meta property="og:url" content="https://cctechacademy.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Literacy at CCTCA" />
        <meta name="twitter:description" content="Explore foundational computer and internet skills for adult learners. Taught with real-world labs and supportive coaching." />
        <meta name="twitter:image" content="/lab5.jpg" />
        <link rel="canonical" href="https://cctechacademy.com"/>
      </Head>
      <TopBar></TopBar>
      <div className="overflow-hidden">


        <div className="relative -mt-1 bg-slate-400">
          <section id="home">
            <Hero></Hero>
          </section>
          <svg
            className="w-full h-[100px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#e2e8f0"
              fillOpacity="1"
              d="M0,128L80,122.7C160,117,320,107,480,117.3C640,128,800,160,960,170.7C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
          <section id="about">
            <AboutSection></AboutSection>
          </section >
        </div>

        <div className="relative -mt-1 bg-slate-200">
          <svg
            className="w-full h-[120px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#cbd5e1"
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,154.7C640,128,800,96,960,117.3C1120,139,1280,213,1360,250.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
          <section id="programs">
            <ProgramsSection></ProgramsSection>
          </section>
        </div>
        <div className="relative -mt-1 bg-slate-300">
          <svg
            className="w-full h-[120px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#e2e8f0"
              fillOpacity="1"
              d="M0,192C120,160,240,96,360,85.3C480,75,600,117,720,133.3C840,149,960,139,1080,154.7C1200,171,1320,213,1380,234.7L1440,256V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
            />
          </svg>
        </div>
        <section id="instructors">
          <InstructorsSection></InstructorsSection>
        </section>
        <div className="relative -mt-1 bg-slate-200">
          <svg
            className="w-full h-[120px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#cbd5e1"
              fillOpacity="1"
              d="M0,160C80,149.3,160,117,240,101.3C320,85,400,85,480,106.7C560,128,640,160,720,160C800,160,880,128,960,112C1040,96,1120,96,1200,117.3C1280,139,1360,181,1400,202.7L1440,224V320H0Z"
            />
          </svg>
          <section id="contact">
            <ContactSection></ContactSection>
          </section>
        </div>


        <div className="relative -mt-1 bg-slate-300">
          <svg
            className="w-full h-[60px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f1f5f9"
              fillOpacity="1"
              d="M0,288L120,272C240,256,480,224,720,213.3C960,203,1200,213,1320,218.7L1440,224V320H0Z"
            />
          </svg>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
