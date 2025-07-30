'use client'
import { Laptop, Wifi, Shield, Folder, Bot } from "lucide-react";
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

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">

        {/* Digital Literacy */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Laptop className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Literacy</h3>
            </div>
            <p className="text-gray-700">
              Our hands-on <strong>Digital Basics</strong> and <strong>Cybersecurity</strong> curriculum covers computer fundamentals, cybersecurity, email, online safety, and productivity tools—equipping learners with the digital skills needed to succeed at work, in school, and in life.
            </p>
          </CardContent>
        </Card>

        {/* Cybersecurity & IT Support */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Shield className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cybersecurity & IT Support</h3>
            </div>
            <p className="text-gray-700">
              We offer access to the <strong>Google Cybersecurity</strong> and <strong>IT Support Professional Certificates</strong>   via Coursera, supported by peer mentoring, one on one coaching, and job placement support. Learners graduate with industry-recognized credentials.
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
        {/* Resume & Job Readiness */}
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

        {/* Digital Equity Navigation */}
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

        {/* Prompt Engineering with ChatGPT */}


      </div>
    </section>
  );
}
