'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full h-full flex items-center justify-center  bg-gradient-to-b from-slate-800 to-blue-300 text-white px-4 bg-sl">
      <div className="w-full text-center space-y-6 ">
        {/* Logo */}
        <div className="flex justify-center mt-4">
          <Image
            src="/bitmap.svg" // replace with your actual logo path
            alt="CCTCA Logo"
            width={500}
            height={500}
            priority
            className=""
          />
        </div>
        <p className="text-lg md:text-2xl text-slate-800 bg-sl">
          Providing underserved adults with digital literacy, cybersecurity skills, and career training to advance equity and economic opportunity.
        </p>
        {/* CTA Button */}
        <div className="pt-4">
          <a href="#contact">
            <Button className="bg-slate-200 text-blue-700 text-lg font-semibold hover:bg-slate-300  mb-6  ">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
