'use client'
import { Target, Eye, Handshake } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card'

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-slate-200 -mt-1  px-6 md:px-12 lg:px-24 electrolize-regular">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About CCTCA</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Central Coast Tech & Career Academy Inc. (CCTCA) is a mission-driven nonprofit based in California’s Central Coast, dedicated to bridging the digital divide through inclusive workforce development as part of our broader charitable mission to advance digital equity, community empowerment, and economic opportunity.
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
              At CCTCA, our mission is to expand access to digital opportunity as part of our broader charitable purpose by equipping underserved and underrepresented communities with the skills, confidence, and support needed to thrive in a technology-driven world. Through inclusive, hands-on learning integrated with wraparound community services, we empower individuals to navigate digital tools, explore career pathways, and strengthen their long-term economic stability.
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
              Our vision is a future where every individual—regardless of background or circumstance—has equitable access to the digital fluency, technical knowledge, and real-world learning opportunities needed to thrive in a technology-driven world. As part of our broader charitable mission, we provide hands-on, relevant, and accessible training integrated with community-based support, empowering people to engage confidently in the modern economy and contribute to a more inclusive, adaptable workforce.
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
              <li>Essential digital literacy and computer navigation skills provided as part of our broader charitable mission</li>
              <li>Cybersecurity awareness for safe browsing, phishing prevention, and digital safety</li>
              <li>Introductory IT and technology support skills that build confidence and interest in further learning</li>
              <li>Accessible AI and emerging technology concepts to promote equity in the digital economy</li>
              <li>Web design and content creation for personal projects, community initiatives, and entrepreneurship exploration</li>
              <li>Introductory programming and problem-solving to encourage creative and analytical thinking</li>
              <li>Career readiness guidance, including resume development, mock interviews, and community job search resources</li>
              <li>Academic support in core subjects and foundational technical skills</li>
              <li>Low-cost or grant-funded technology assistance to improve home connectivity</li>
              <li>Project-based learning, mentorship, and individualized coaching integrated with wraparound community support</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
