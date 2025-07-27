'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
    return (
        <section id="contact" className="bg-slate-300 py-16 px-6 md:px-12 lg:px-24 ">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

                {/* Contact Info */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-gray-700 text-lg mb-6">
                        We’d love to hear from you — whether you’re a potential learner, funder, volunteer, or partner organization.
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-blue-700" />
                            <span>admin@cctechacademy.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-blue-700" />
                            <span>(805) 702-8556</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-blue-700" />
                            <span>200 S 13th St Suite 107,  Grover Beach CA, 93433</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-gray-200">
                    <form action="https://formspree.io/f/xjkobvak" // replace with your actual Formspree endpoint
                        method="POST"
                        className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                                Name
                            </label>
                            <Input name="name"id="name" placeholder="Your name" required />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                                Email
                            </label>
                            <Input name="email" id="email" type="email" placeholder="you@example.com" required />
                        </div>

                        <div>
                            <label htmlFor="message"className="block text-sm font-medium text-gray-800">
                                Message
                            </label>
                            <Textarea name="message"  id="message" rows={4} placeholder="How can we help you?" required />
                        </div>

                        <Button type="submit" className="w-full bg-blue-700 text-white hover:bg-blue-800">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
