'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full h-full flex items-center justify-center bg-slate-500 text-white px-4">
      <div className="w-full text-center space-y-6 ">
        {/* Logo */}
        <div className="flex justify-center mt-4">
          <Image
            src="/bitmap.svg" // replace with your actual logo path
            alt="CCTCA Logo"
            width={500}
            height={500}
            priority
            className="rounded-xl shadow-md"
          />
        </div>
        <p className="text-lg md:text-2xl text-blue-100">
          Empowering justice-impacted individuals with digital literacy, cybersecurity skills, and career-ready training.
        </p>
        {/* CTA Button */}
        <div className="pt-4">
          <a href="#contact">
            <Button className="bg-slate-400 text-blue-700 text-lg font-semibold hover:bg-blue-100  mb-6">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
