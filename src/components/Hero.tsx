'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 to-blue-800 text-white px-4">
      <div className="max-w-4xl text-center space-y-6 ">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/bitmap.svg" // replace with your actual logo path
            alt="CCTCA Logo"
            width={500}
            height={500}
            priority
            className="rounded-xl shadow-md"
          />
        </div>
        <p className="text-lg md:text-xl text-blue-100">
          Empowering justice-impacted individuals with digital literacy, cybersecurity skills, and career-ready training.
        </p>
        {/* CTA Button */}
        <div className="pt-4">
          <Button className="bg-white text-sky-900 text-lg font-semibold hover:bg-blue-100">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
