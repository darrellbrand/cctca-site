'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function ProgramsSection() {
  return (
    <section id="programs" className="w-full bg-slate-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          CCTCA delivers high-impact digital training and career readiness programs designed for justice-impacted individuals, people in recovery, and underserved adults across the Central Coast.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">💻 Digital Literacy</h3>
            <p className="text-gray-700">
              Our hands-on Digital Basics curriculum covers computer fundamentals, email, online safety, and productivity tools—equipping learners with the digital skills needed to succeed at work, in school, and in life.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🛡️ Cybersecurity & IT Support</h3>
            <p className="text-gray-700">
              We offer access to the Google Cybersecurity and IT Support Professional Certificates via Coursera, supported by peer mentoring, 1:1 coaching, and job placement support. Learners graduate with industry-recognized credentials.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">📄 Resume & Job Readiness</h3>
            <p className="text-gray-700">
              Our career development modules help learners build strong resumes, prepare for interviews, and navigate online job applications — with personalized guidance and support every step of the way.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🌐 Digital Equity Navigation</h3>
            <p className="text-gray-700">
              We provide access to laptops, Wi-Fi hotspots, and assistive tools while helping learners connect to vital online services like housing applications, benefits portals, reentry programs, and workforce centers.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
