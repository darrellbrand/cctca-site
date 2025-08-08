// app/tuition/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tuition & Accessibility Policy | Central Coast Tech & Career Academy",
  description:
    "CCTCA tuition is cost-recovery only with sliding scale and scholarships. No individual is denied participation due to inability to pay.",
  openGraph: {
    title: "Tuition & Accessibility Policy",
    description:
      "Cost-recovery tuition, sliding scale, scholarships—no one denied for inability to pay.",
    url: "https://yourdomain.org/tuition",
    type: "article",
  },
};

export default function TuitionPolicyPage() {
  const lastUpdated = "August 8, 2025";

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      {/* JSON-LD for a public policy page */}
      <Script id="tuition-policy-ld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Tuition & Accessibility Policy",
          description:
            "CCTCA tuition is cost-recovery only with sliding scale and scholarships. No individual is denied participation due to inability to pay.",
          url: "https://yourdomain.org/tuition",
          isPartOf: {
            "@type": "Organization",
            name: "Central Coast Tech & Career Academy",
          },
          dateModified: "2025-08-08",
        })}
      </Script>

      <header className="mb-8">
        <p className="text-sm font-medium text-gray-500">Policy</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          Tuition & Accessibility Policy
        </h1>
        <p className="mt-3 text-gray-600">
          Central Coast Tech & Career Academy (CCTCA) provides digital literacy,
          cybersecurity awareness, and job-readiness instruction as part of our
          broader charitable mission. Tuition—when charged—is solely to offset
          program delivery costs. Scholarships are widely available.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Publicly Posted
        </div>
      </header>

      <section className="space-y-8">
        {/* Cost-Recovery Statement */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold text-gray-900">Cost‑Recovery Tuition</h2>
          <p className="mt-2 text-gray-700">
            CCTCA may charge modest tuition strictly to offset direct program
            costs (e.g., instructional materials, technology access, and
            facility usage). Tuition is set on a <strong>cost‑recovery</strong> basis and is
            <strong> not</strong> intended to generate profit.
          </p>
        </div>

        {/* Sliding Scale & Scholarships */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Sliding Scale & Scholarships
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
            <li>
              Sliding scale fees are available to ensure access for learners of
              all income levels.
            </li>
            <li>
              Full and partial scholarships are available for any participant
              who is unable to pay the suggested tuition amount.
            </li>
            <li>
              No detailed financial documentation is required; a short
              scholarship request form protects dignity and privacy.
            </li>
          </ul>
        </div>

        {/* No Denial Clause */}
        <div className="rounded-lg border p-6 bg-emerald-50">
          <h2 className="text-xl font-semibold text-gray-900">No Denial Policy</h2>
          <p className="mt-2 text-gray-800">
            <strong>
              No individual will be denied participation in any CCTCA program
              due to inability to pay tuition.
            </strong>
          </p>
        </div>

        {/* How to Request Aid */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold text-gray-900">How to Request Aid</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-700">
            <li>
              Indicate your need for a waiver or scholarship on the enrollment
              form (or contact us directly).
            </li>
            <li>
              A staff member will confirm your enrollment and applicable tuition
              support within 2–3 business days.
            </li>
            <li>
              If a class is full, you may be placed on a priority waitlist for
              the next cohort.
            </li>
          </ol>
          <p className="mt-3 text-gray-700">
            Questions? Email{" "}
            <a
              href="mailto:admin@cctechacademy.com"
              className="font-medium text-emerald-700 underline underline-offset-2"
            >
              admin@cctechacademy.com
            </a>
            .
          </p>
        </div>

        {/* Where Policy Appears */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold text-gray-900">Where This Policy Appears</h2>
          <p className="mt-2 text-gray-700">
            This policy is publicly posted on our website and included in our
            brochures and enrollment materials. Program pages include a short
            summary with a link back to this full policy.
          </p>
        </div>

        {/* Data & Transparency */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold text-gray-900">Transparency</h2>
          <p className="mt-2 text-gray-700">
            CCTCA tracks the percentage of participants receiving free or
            reduced tuition each year to demonstrate accessibility and public
            benefit. Aggregated data may be shared in reports or on this page.
          </p>
        </div>

        {/* FAQ */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold text-gray-900">FAQ</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-medium text-gray-900">
                Do I have to apply separately for a scholarship?
              </h3>
              <p className="mt-1 text-gray-700">
                No. You can request a waiver or scholarship within the standard
                enrollment form or by contacting staff. We keep it simple and
                fast.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                Will requesting a scholarship affect my chance of enrolling?
              </h3>
              <p className="mt-1 text-gray-700">
                No. Enrollment decisions are not based on ability to pay.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                Are there any fees for government‑funded learners?
              </h3>
              <p className="mt-1 text-gray-700">
                Learners funded by certain programs (e.g., WIOA Title II) may
                not be charged fees per applicable policy. Ask staff for
                details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t pt-6 text-sm text-gray-600">
        <p>Last updated: {lastUpdated}</p>
        <p className="mt-1">
          For accessible formats, email{" "}
          <a
            href="mailto:admin@cctechacademy.com"
            className="font-medium text-emerald-700 underline underline-offset-2"
          >
            admin@cctechacademy.com
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
