'use client';
import { Laptop, Wifi, Shield, Folder, Bot, BookOpen, Server, Code, Terminal,KeyRound  } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card'

export default function ProgramsSection() {
  return (
    <section id="programs" className="w-full bg-slate-300 -mt-1 px-6 md:px-12 lg:px-24 electrolize-regular">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          CCTCA delivers high-impact digital literacy, workforce development, and career readiness programs tailored for underserved and underrepresented adult learners across the Central Coast—advancing equitable access to education, technology, and economic opportunity.
        </p>
      </div>

      <div className=" grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">

        {/* Existing Cards */}
        <Card className="relative shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
              START HERE
            </span>
            <div className="flex flex-row gap-2">
              <Laptop className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Basics</h3>
            </div>
            <p className="text-gray-700">
              This entry-level course covers essential computer skills including typing, file management, email, internet navigation, and Google Workspace tools—designed for adult learners gaining digital confidence for work, school, or everyday life.
            </p>
          </CardContent>
        </Card>
        <Card className="relative shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Shield className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cybersecurity Foundations</h3>
            </div>
            <p className="text-gray-700">
              Learners explore the fundamentals of online safety, password hygiene, phishing awareness, and secure device practices—building a strong foundation for safe tech use and future IT pathways.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <KeyRound className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3 ">IT Support & Cybersecurity</h3>
            </div>
            <p className="text-gray-700">
              We offer access to the <strong>Google IT Support Professional</strong> and <strong>Cybersecurity Certificates</strong> via Coursera, supported by peer mentoring, one on one coaching, and job placement support. Learners graduate with industry-recognized credentials.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Code className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Intro to HTML & CSS</h3>
            </div>
            <p className="text-gray-700">
              This beginner-friendly course teaches adults how to <strong>build and style basic websites</strong> using HTML and CSS. Learners gain hands-on experience with page structure, text formatting, images, navigation links, and visual design—culminating in a personal portfolio project. A perfect first step into tech, design, or digital freelancing.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2 relative">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Terminal className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Intro to Programming with Python</h3>
            </div>
            <p className="text-gray-700">
              Our beginner-focused <strong>Intro to Programming with Python</strong> course teaches adults how to think like a programmer, solve problems, and build simple applications. Through engaging lessons on variables, loops, conditionals, functions, and object-oriented concepts, learners gain the foundations to pursue paths in software, data, or IT—and create real-world mini projects along the way.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Bot className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Prompt Engineering with ChatGPT</h3>
            </div>
            <p className="text-gray-700">
              Our newest curriculum, <strong>Introduction to Prompt Engineering with ChatGPT</strong>, empowers learners to confidently use AI tools for real-world productivity. Through modules on prompt design, ethical AI use, everyday applications, and creativity, participants build hands-on skills to write effective prompts, automate personal tasks, and evaluate AI output with care and responsibility.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Folder className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Resume & Job Readiness</h3>
            </div>
            <p className="text-gray-700">
              Our <strong>career development</strong> modules help learners build strong resumes, prepare for interviews, and navigate online job applications — with personalized guidance and support every step of the way.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Wifi className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Equity Navigation</h3>
            </div>
            <p className="text-gray-700">
              We provide <strong>access to laptops, Wi-Fi hotspots, and assistive tools</strong> while helping learners connect to vital online services like housing applications, benefits portals, reentry programs, and workforce centers.
            </p>
          </CardContent>
        </Card>

        {/* NEW: Academic Tutoring */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <BookOpen className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tutoring & Academic Skills</h3>
            </div>
            <p className="text-gray-700">
              We offer tutoring support in <strong>English, math, computer programming and data science fundamentals, digital and analog circuit analysis, and computer networking</strong>—preparing learners for certifications, coursework, and career pivots in IT and STEM pathways.
            </p>
          </CardContent>
        </Card>

        {/* NEW: Paid IT Services */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Server className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tech Support Services</h3>
            </div>
            <p className="text-gray-700">
              Through our <strong>community IT support service</strong>, we offer affordable troubleshooting for computer and networking issues—including setup, virus removal, Wi-Fi configuration, and device upgrades—as a hands-on learning and revenue-generating initiative.
            </p>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
