'use client'
import { Target, Eye, Handshake } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card'

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-slate-200 -mt-1  px-6 md:px-12 lg:px-24 electrolize-regular">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About CCTCA</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Central Coast Tech & Career Academy Inc (CCTCA) is a mission-driven nonprofit based in California&apos;s Central Coast, dedicated to bridging the digital divide through inclusive workforce development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <Card className="shadow-md border border-gray-200 bg-slate-300">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Target className="text-blue-700"></Target>
              <h3 className="text-xl font-semibold text-gray-800 mb-3"> Our Mission</h3>
            </div>
            <p className="text-gray-700">
              We provide underserved and underrepresented communities with vital training in digital literacy, cybersecurity, and career readiness—equipping individuals with the skills and support needed to secure employment, thrive in the modern workforce, and achieve long-term economic independence.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-200 bg-slate-300">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Eye className="text-blue-700"></Eye>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              Our vision is a future where every individual—regardless of background or circumstance—has equitable access to the digital skills, resources, and career pathways needed to participate fully in the 21st-century economy and help build a more resilient, inclusive workforce.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-200 md:col-span-2 bg-slate-300">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Handshake className="text-blue-700"></Handshake>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What We Do</h3>
            </div>
            <p className="text-gray-700 mb-2">
              Our wraparound programs combine one on one instruction with real-world tools:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Foundational computer literacy & digital navigation</li>
              <li>Foundational cybersecurity</li>
              <li>Cybersecurity & IT Support via Google Career Certificates</li>
              <li>Prompt engineering & practical AI skills with ChatGPT</li>
              <li>Resume writing, mock interviews, and job search coaching</li>
              <li>Hands-on labs, peer learning, and career coaching</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
