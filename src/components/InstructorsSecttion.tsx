'use client'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail } from 'lucide-react'

export default function InstructorsSection() {
  return (
    <section id="instructors" className="w-full bg-slate-200 px-6 md:px-12 lg:px-24 electrolize-regular">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Instructors</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our instructors bring extensive experience in digital literacy, technology awareness, and community-based learning.
          They’re dedicated to helping learners build skills, confidence, and self-sufficiency through practical, hands-on instruction.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">

        {/* Darrell */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100 group transition-all duration-300 hover:shadow-lg hover:border-blue-400">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-30 h-30 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/darrell.jpg"
                  alt="Instructor Darrell Friday"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Darrell Friday</h3>
                <p className="text-sm text-gray-600">Technology Education & Software Engineering</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-700">
                Darrell is a seasoned technology educator and software engineer with over 20 years of experience in the tech industry.
                He specializes in making digital tools approachable for learners of all backgrounds, integrating real-world examples into lessons
                that support everyday life, personal projects, and continued education.
              </p>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                <span className="text-gray-800">darrell.friday@cctechacademy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                <span className="text-gray-800">(820) 380-8067</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Jonathan */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100 group transition-all duration-300 hover:shadow-lg hover:border-blue-400">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-30 h-30 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/jonathan.png"
                  alt="Instructor Jonathan Aguirre"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Jonathan Aguirre</h3>
                <p className="text-sm text-gray-600">IT Support & Cybersecurity Education</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-700">
                Jonathan has a background in IT support and digital safety education. He guides learners through foundational
                cybersecurity practices, practical troubleshooting, and community-based tech projects. For participants who wish to
                pursue external certifications or advanced study, Jonathan offers general learning support and encouragement — while
                keeping CCTCA’s focus on skill-building and digital empowerment.
              </p>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                <span className="text-gray-800">jonathan.aguirre@cctechacademy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                <span className="text-gray-800">(805) 574-5651</span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}
