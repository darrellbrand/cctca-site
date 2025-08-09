'use client';

import Link from "next/link";
import { Laptop, Wifi, Shield, Folder, Bot, BookOpen, Server, Code, Terminal, KeyRound } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card'

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="w-full bg-slate-300 -mt-1 px-6 md:px-12 lg:px-24 electrolize-regular"
    >
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Programs
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          CCTCA offers digital literacy, technology awareness, and career exploration
          programs for adult learners across the Central Coast. We deliver affordable,
          hands-on training while complying with California Education Code §94874(f),
          with scholarships and sliding scale options to keep learning accessible for all.
        </p>

        {/* BPPE Tuition Policy Link */}
        <div className="mt-6">
          <Link
            href="/tuition"
            className="inline-block rounded-lg bg-emerald-600 px-5 py-2.5 text-white font-semibold shadow hover:bg-emerald-700 transition-colors"
          >
            View Our Tuition & Policies
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">

        {/* Digital Basics */}
        <Card className="relative shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
              START HERE
            </span>
            <div className="flex flex-row gap-2 items-center">
              <Laptop className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Basics</h3>
            </div>
            <p className="text-gray-700">
              An entry-level course covering essential computer skills such as typing, file
              management, email, internet navigation, and Google Workspace tools — designed
              to help adult learners build digital confidence for daily life, community
              participation, and continued learning.
            </p>
          </CardContent>
        </Card>

        {/* Cybersecurity Foundations */}
        <Card className="relative shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <Shield className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cybersecurity Foundations</h3>
            </div>
            <p className="text-gray-700">
              Learners explore the fundamentals of online safety, phishing awareness, password
              hygiene, and secure device practices — building everyday confidence in safe
              technology use and awareness of future learning opportunities.
            </p>
          </CardContent>
        </Card>

        {/* IT Support & Cybersecurity */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <KeyRound className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">IT Support & Cybersecurity</h3>
            </div>
            <p className="text-gray-700">
              We connect learners with optional online resources such as Google IT Support and
              Cybersecurity courses, supplemented by peer mentoring and individual coaching.
              These offerings focus on skill development, digital inclusion, and community
              empowerment, rather than credentialing or licensure.
            </p>
          </CardContent>
        </Card>

        {/* HTML & CSS */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <Code className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Intro to HTML & CSS</h3>
            </div>
            <p className="text-gray-700">
              This beginner-friendly workshop introduces the basics of building and styling web
              pages using HTML and CSS. Learners explore page structure, images, navigation links,
              and simple design concepts — culminating in a personal project that builds creative
              confidence.
            </p>
          </CardContent>
        </Card>

        {/* Python Programming */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2 relative">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <Terminal className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Intro to Programming with Python</h3>
            </div>
            <p className="text-gray-700">
              A hands-on introduction to programming concepts using Python, including variables,
              loops, conditionals, and functions. The course encourages problem-solving and
              creative thinking, with small-scale projects that apply skills in practical,
              non-commercial contexts.
            </p>
          </CardContent>
        </Card>

        {/* Prompt Engineering */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <Bot className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Prompt Engineering with ChatGPT</h3>
            </div>
            <p className="text-gray-700">
              Learners explore how to use AI tools like ChatGPT for everyday tasks, creative
              projects, and productivity. The focus is on ethical use, prompt design, and
              evaluating AI output — fostering digital literacy in emerging technologies.
            </p>
          </CardContent>
        </Card>

        {/* Resume & Job Readiness */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <Folder className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Resume & Job Readiness</h3>
            </div>
            <p className="text-gray-700">
              Career exploration support including resume building, mock interviews, and guidance
              on navigating online applications — with connections to local workforce and
              community resources.
            </p>
          </CardContent>
        </Card>

        {/* Digital Equity Navigation */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <Wifi className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Equity Navigation</h3>
            </div>
            <p className="text-gray-700">
              We provide access to laptops, Wi-Fi hotspots, and assistive tools, along with
              guidance to connect with online services such as housing applications, benefits
              portals, reentry programs, and community centers.
            </p>
          </CardContent>
        </Card>

        {/* Academic Tutoring */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <BookOpen className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tutoring & Academic Skills</h3>
            </div>
            <p className="text-gray-700">
              Academic support in English, math, and introductory technical topics such as computer
              programming, data concepts, and basic networking — helping learners strengthen core
              skills for personal growth, continued education, or community projects.
            </p>
          </CardContent>
        </Card>

        {/* Tech Support Services */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <Server className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tech Support Services</h3>
            </div>
            <p className="text-gray-700">
              Through our community IT support initiative, learners assist with troubleshooting
              common computer and networking issues — such as setup, virus removal, and Wi-Fi
              configuration — in a supervised, educational setting that reinforces skills while
              serving the community.
            </p>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
