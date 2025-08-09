'use client'

import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "./ui/text-generate-effect"


export default function Hero() {
  const words = `Central Coast Tech & Career Academy`
  return (

    <section className="relative w-full bg-black h-[70vh] md:h-[80vh] electrolize-regular ">


      <div className="w-full h-full">
        <img
          src="/lab5-min.jpg"
          alt="CCTCA Lab"
          className="w-full h-full object-cover object-center"
        />
      </div>


      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/10 z-10" />

      {/* Text Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-around  items-center  gap-30 md:gap-60    mx-auto  electrolize-regular">
        <div className="max-w-7xl px-10 ">
          <TextGenerateEffect words={words} ></TextGenerateEffect>
        </div>
        <a href="#contact">
          <Button className="bg-slate-100 text-blue-700 text-sm md:text-2xl font-semibold hover:bg-slate-300 px-6 md:px-8 md:py-5">
            Get Started
          </Button>
        </a>

      </div>
    </section>
  )
}
