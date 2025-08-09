'use client';
import { FC } from 'react';

const EnrollmentAgreement: FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-8 md:py-12">
      <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          CCTCA Enrollment Agreement
        </h1>
        <p className="text-slate-600 mb-6">
          Central Coast Tech & Career Academy (CCTCA) • California Education Code §94874(f)
        </p>

        <section className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
          <strong>Disclosure:</strong> CCTCA is a California nonprofit public benefit corporation
          recognized as a 501(c)(3) charitable organization. CCTCA is <strong>not</strong> licensed by the California Bureau for
          Private Postsecondary Education and operates under the exemption in <strong>California Education Code §94874(f)</strong>.
          Programs are <strong>short‑term, non‑vocational</strong>, do not award degrees or diplomas, are <strong>not licensure preparation</strong>,
          and are offered solely for charitable purposes. CCTCA does not accept state or federal student financial aid (e.g., Title IV).
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Student Information</h2>
          <p className="text-slate-700 mb-1">Name: ___________________________</p>
          <p className="text-slate-700 mb-1">Email: ___________________________</p>
          <p className="text-slate-700 mb-1">Phone: ___________________________</p>
          <p className="text-slate-700 mb-1">Address: _________________________</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Program Details</h2>
          <p className="text-slate-700 mb-1">Program Name: ____________________</p>
          <p className="text-slate-700 mb-1">Start Date: _______________________</p>
          <p className="text-slate-700 mb-1">End Date: _________________________</p>
          <p className="text-slate-700 mb-1">Location: _________________________</p>
          <p className="text-slate-700 mb-1">Total Hours: ______________________</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Tuition & Fees</h2>
          <p className="text-slate-700 mb-1">Tuition: $___________</p>
          <p className="text-slate-700 mb-1">Materials/Lab Fee: $___________</p>
          <p className="text-slate-700 mb-1">Other Fees: $___________</p>
          <p className="text-slate-700 mb-1">Scholarship/Waiver: $___________</p>
          <p className="text-slate-700 font-semibold mt-2">Total Due: $___________</p>
          <ul className="mt-3 list-disc pl-6 text-slate-700 text-sm">
            <li>No state or federal financial aid (e.g., Title IV) is accepted or processed by CCTCA.</li>
            <li>Payment schedules, if any, are for convenience and do not constitute a loan.</li>
            <li>Third‑party certificates (e.g., Google via Coursera) are issued by the provider, not CCTCA.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Policies & Acknowledgments</h2>
          <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
            <li>Programs are short‑term and non‑vocational, offered solely for charitable purposes under §94874(f).</li>
            <li>Programs are not designed for state licensure preparation and do not guarantee employment.</li>
            <li>Any certificates from partners are issued by the provider, not by CCTCA.</li>
            <li>I have reviewed the Tuition, Refund & Cancellation Policy.</li>
            <li>I agree to follow CCTCA’s Code of Conduct and respectful learning guidelines.</li>
            <li>I understand the Attendance Policy and technology requirements for participation.</li>
            <li>I consent to CCTCA’s Privacy Notice and understand the Grievance Procedure.</li>
            <li>I know how to request reasonable accommodations (ADA) for access and participation.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Signature</h2>
          <p className="text-slate-700 mb-4">By signing below, I acknowledge that I have read and understand the terms of this Enrollment Agreement.</p>
          <p className="text-slate-700 mb-1">Student Name (Print): ___________________________</p>
          <p className="text-slate-700 mb-4">Signature: ___________________________ Date: _____________</p>
        </section>

        <p className="text-xs text-slate-500">Template only — finalize with your counsel before publishing. © {new Date().getFullYear()} CCTCA.</p>
      </div>
    </main>
  );
};

export default EnrollmentAgreement;
