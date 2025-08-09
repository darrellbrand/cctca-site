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
          CCTCA offers short-term, non-vocational digital literacy and technology awareness
          programs for adult learners across the Central Coast. We deliver hands-on training in
          alignment with California Education Code §94874(f) and our charitable nonprofit mission.
        </p>

        {/* BPPE Policies Link */}
        <div className="mt-6">
          <Link
            href="/tuition"
            className="inline-block rounded-lg bg-emerald-600 px-5 py-2.5 text-white font-semibold shadow hover:bg-emerald-700 transition-colors"
          >
            View Our Policies & §94874(f)
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
              Entry-level digital literacy workshop covering typing, file management, email,
              internet navigation, and Google Workspace. Designed to build everyday confidence for
              personal tasks, community participation, and continued learning.
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
              Everyday online safety skills including phishing awareness, password hygiene,
              device security, and safe browsing habits—practical steps to protect yourself and
              your community.
            </p>
          </CardContent>
        </Card>

        {/* IT Support & Cybersecurity (Google Career Certificates) */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <KeyRound className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">IT Support & Cybersecurity (Google Career Certificates)</h3>
            </div>
            <p className="text-gray-700">
              Facilitated access to the Google IT Support and Google Cybersecurity Certificates via Coursera,
              with mentorship, study labs, and coaching from CCTCA. Certificates are issued directly by Google
              (via Coursera). Offered for skill-building and career exploration; not a CCTCA-issued credential.
            </p>
          </CardContent>
        </Card>

        {/* Intro to HTML & CSS */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <Code className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Intro to HTML &amp; CSS</h3>
            </div>
            <p className="text-gray-700">
              Beginner web workshop on page structure and styling. Learn headings, links, images,
              layouts, and simple design concepts—culminating in a small personal project to build
              creative confidence.
            </p>
          </CardContent>
        </Card>

        {/* Intro to Programming with Python */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2 relative">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <Terminal className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Intro to Programming with Python</h3>
            </div>
            <p className="text-gray-700">
              Hands-on introduction to programming concepts—variables, loops, conditionals,
              and functions—through small, practical projects that encourage problem-solving
              and creativity.
            </p>
          </CardContent>
        </Card>

        {/* Prompt Engineering with ChatGPT */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <Bot className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Prompt Engineering with ChatGPT</h3>
            </div>
            <p className="text-gray-700">
              Explore ethical and effective use of AI tools for writing, research, organization,
              and creativity. Learn prompt design techniques and how to evaluate AI-generated
              output to strengthen digital literacy.
            </p>
          </CardContent>
        </Card>

        {/* Resume & Job Readiness */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <Folder className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Resume &amp; Job Readiness</h3>
            </div>
            <p className="text-gray-700">
              Career preparation skills including resume building, mock interviews, and guidance for
              navigating online applications—plus connections to local community resources. No job
              placement is guaranteed.
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
              Access to laptops, Wi‑Fi hotspots, and assistive tools, plus guided support for
              using essential online services such as benefits portals, housing applications,
              reentry programs, and local community resources.
            </p>
          </CardContent>
        </Card>

        {/* Tutoring & Academic Skills */}
        <Card className="shadow-sm border border-gray-200 bg-slate-100">
          <CardContent className="p-6">
            <div className="flex flex-row gap-2 items-center">
              <BookOpen className="text-blue-700" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tutoring &amp; Academic Skills</h3>
            </div>
            <p className="text-gray-700">
              One-on-one and small-group support in English, math, and introductory technical
              topics (e.g., programming and basic networking) to strengthen foundational skills
              for continued education or community projects.
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
              Supervised, community-based learning where participants practice troubleshooting
              common tech issues (setup, malware cleanup, Wi‑Fi configuration) in an educational
              setting that reinforces skills while serving neighbors.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Notice */}
      <div className="max-w-5xl mx-auto mt-10 text-sm text-gray-700">
        <p>
          <strong>Compliance Notice:</strong> All programs are short-term, non-vocational, and offered solely for
          charitable purposes. CCTCA is not a degree-granting or state-licensed institution and operates in
          compliance with California Education Code §94874(f). Certificates, when applicable, are issued by the
          original provider (e.g., Google via Coursera), not CCTCA. No licensure preparation or job placement is
          offered or implied.
        </p>
      </div>
    </section>
  );
}
