'use client'
import { Laptop, Wifi, Shield, Folder } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card'

export default function ProgramsSection() {
  return (
    <section id="programs" className="w-full bg-slate-300  -mt-1  px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
         CCTCA delivers high-impact digital literacy, workforce development, and career readiness programs tailored for underserved and underrepresented adult learners across the Central Coast—advancing equitable access to education, technology, and economic opportunity.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Laptop  className="text-blue-700"></Laptop>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Literacy</h3>
            </div>
            <p className="text-gray-700">
              Our hands-on Digital Basics curriculum covers computer fundamentals, cybersecurity, email, online safety, and productivity tools—equipping learners with the digital skills needed to succeed at work, in school, and in life.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Shield  className="text-blue-700"></Shield>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cybersecurity & IT Support</h3>
            </div>
            <p className="text-gray-700">
              We offer access to the Google Cybersecurity and IT Support Professional Certificates via Coursera, supported by peer mentoring, one on one coaching, and job placement support. Learners graduate with industry-recognized credentials.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Folder className="text-blue-700"></Folder>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Resume & Job Readiness</h3>
            </div>
            <p className="text-gray-700">
              Our career development modules help learners build strong resumes, prepare for interviews, and navigate online job applications — with personalized guidance and support every step of the way.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Wifi  className="text-blue-700"></Wifi>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Equity Navigation</h3>
            </div>
            <p className="text-gray-700">
              We provide access to laptops, Wi-Fi hotspots, and assistive tools while helping learners connect to vital online services like housing applications, benefits portals, reentry programs, and workforce centers.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
