'use client'
import { Target, Eye, Handshake } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card'

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-slate-200 -mt-1 px-6 md:px-12 lg:px-24 electrolize-regular">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About CCTCA</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Central Coast Tech & Career Academy Inc. (CCTCA) is a California-based 501(c)(3) nonprofit dedicated to bridging the digital divide through inclusive, affordable workforce development. We operate in compliance with California Education Code §94874(f). 
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Mission */}
        <Card className="shadow-md border border-gray-200 bg-slate-300">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Target className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              At CCTCA, our mission is to expand equitable access to technology skills, digital literacy, and career readiness. Through inclusive, hands-on learning integrated with wraparound community services, we empower underserved and underrepresented communities to navigate digital tools, explore career pathways, and strengthen their economic stability — all while keeping education affordable and accessible to all learners.
            </p>
          </CardContent>
        </Card>

        {/* Vision */}
        <Card className="shadow-md border border-gray-200 bg-slate-300">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Eye className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              We envision a future where every adult learner — regardless of background or circumstance — can access the digital fluency, technical knowledge, and real-world learning opportunities needed to thrive in a technology-driven economy. By offering programs that are affordable, accessible, and rooted in high-quality standards, we remove cost barriers while building a more inclusive and adaptable workforce.
            </p>
          </CardContent>
        </Card>

        {/* What We Do */}
        <Card className="shadow-md border border-gray-200 md:col-span-2 bg-slate-300">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2">
              <Handshake className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What We Do</h3>
            </div>
            <p className="text-gray-700 mb-2">
              Our programs combine individualized instruction with practical, real-world tools and resources:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Essential digital literacy and computer navigation skills</li>
              <li>Cybersecurity awareness for safe browsing, phishing prevention, and digital safety</li>
              <li>Introductory IT and technology support skills</li>
              <li>Accessible AI and emerging technology concepts</li>
              <li>Web design and content creation for personal, community, or entrepreneurial projects</li>
              <li>Introductory programming and problem-solving skills</li>
              <li>Career readiness guidance including resumes, interviews, and job search resources</li>
              <li>Academic support in core subjects and foundational technical skills</li>
              <li>Low-cost or scholarship-supported technology assistance</li>
              <li>Project-based learning, mentorship, and individualized coaching with community support</li>
            </ul>
            <p className="mt-4 text-gray-700">
              All offerings are provided under our <strong>§94874(f) tuition policy</strong>.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
