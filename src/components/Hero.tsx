'use client'

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full bg-black h-[30vh] md:h-[70vh] overflow-hidden">
      {/* Image */}
      <div className="w-full h-full">
        <img
          src="/lab5.jpg"
          alt="CCTCA Lab"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/70 to-blue-200/10 z-10" />

      {/* Text Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center gap-y-28  md:gap-y-110 px-4 ">
        <h1 className="text-2xl md:text-7xl font-bold text-center  text-slate-200 drop-shadow-lg max-w-5xl">
          Central Coast Tech & Career Academy Inc.
        </h1>
        <div className="">
          <a href="#contact">
            <Button className="bg-slate-100 text-blue-700 text-sm md:text-2xl font-semibold hover:bg-slate-300 px-6 md:px-8 md:py-5">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
