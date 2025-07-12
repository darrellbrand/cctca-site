'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About CCTCA</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Central Coast Tech & Career Academy (CCTCA) is a mission-driven nonprofit based in California's Central Coast, dedicated to bridging the digital divide through inclusive workforce development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <Card className="shadow-md border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">📌 Our Mission</h3>
            <p className="text-gray-700">
              We empower justice-impacted individuals, those on probation, and people in recovery with essential digital literacy, cybersecurity, and career readiness skills—creating equitable pathways to employment and long-term self-sufficiency.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🌅 Our Vision</h3>
            <p className="text-gray-700">
              A future where every learner—regardless of their past—has the tools, confidence, and support to thrive in today’s digital economy and contribute to a stronger, more inclusive workforce.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-200 md:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">💡 What We Do</h3>
            <p className="text-gray-700 mb-2">
              Our wraparound programs combine trauma-informed instruction with real-world tools:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Foundational computer literacy & digital navigation</li>
              <li>Cybersecurity & IT Support via Google Career Certificates</li>
              <li>Resume writing, mock interviews, and job search coaching</li>
              <li>Hands-on labs, peer learning, and career coaching</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
