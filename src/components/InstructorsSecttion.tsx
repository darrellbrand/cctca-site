'use client'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail } from 'lucide-react'
export default function InstructorsSection() {
    return (
        <section id="instructors" className="w-full bg-slate-200 py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Instructors</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Our expert instructors bring a wealth of experience in digital literacy, cybersecurity, and workforce development. They are dedicated to guiding learners toward personal and professional success.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                <Card className="shadow-sm border border-gray-200 bg-slate-100 group transition-all duration-300 hover:shadow-lg hover:border-blue-400">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className='w-20 h-20 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105'>
                                <Image
                                    src="/darrell.jpg" // Replace with actual image path
                                    alt="Instructor Darrell Friday"
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Darrell Friday</h3>
                                <p className="text-sm text-gray-600">Digital Literacy Instructor</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className="text-gray-700">
                                Darrell specializes in digital literacy education and has over a decade of experience empowering adult learners with the essential tech skills they need to thrive in a digital world.
                            </p>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                                <span className='text-gray-800'>darrell.friday@cctechacademy.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                                <span className='text-gray-800'>(805) 702-8556</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="shadow-sm border border-gray-200 bg-slate-100 group transition-all duration-300 hover:shadow-lg hover:border-blue-400">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                             <div className='w-20 h-20 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105'>
                            <Image
                                src="/jonathan.png" // Replace with actual image path
                                alt="Instructor Jonathan Aguirre"
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                            />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Jonathan Aguirre</h3>
                                <p className="text-sm text-gray-600">Cybersecurity Instructor</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className="text-gray-700">
                                With a background in IT support and security, John leads learners through industry-recognized certifications while offering hands-on guidance and career coaching.
                            </p>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                                <span className='text-gray-800'>jonathan.aguirre@cctechacademy.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" />
                                <span className='text-gray-800'>(805) 702-8556</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
