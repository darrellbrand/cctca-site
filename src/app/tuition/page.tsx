// app/tuition/page.tsx


import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tuition & Policies | CCTCA',
  description:
    'CCTCA tuition & policies for CA Ed. Code §94874(f): annual cap of $2,500 per student (tuition+fees+required materials), no state or federal student aid, scholarships available.',
  openGraph: {
    title: 'Tuition & Policies | CCTCA',
    description:
      'Annual cap $2,500 per student (all charges), no state/federal aid, scholarships & sliding scale available.',
    url: 'https://yourdomain.org/tuition',
    type: 'article',
  },
};

export default function TuitionPoliciesPage() {
  const lastUpdated = 'August 8, 2025';

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
      {/* JSON-LD */}
      <Script id="tuition-policies-jsonld" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Tuition & Policies',
          description:
            'CCTCA tuition policy consistent with CA Ed. Code §94874(f): cap $2,500 per student/year (tuition+fees+required materials), no state/federal student financial aid; scholarships available.',
          url: 'https://yourdomain.org/tuition',
          dateModified: '2025-08-08',
          isPartOf: {
            '@type': 'Organization',
            name: 'Central Coast Tech & Career Academy',
          },
        })}
      </Script>

      {/* Header */}
      <header className="mb-8">
        <p className="text-sm font-medium text-gray-500">Policy</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          Tuition & Policies
        </h1>
        <p className="mt-3 text-gray-700">
          Central Coast Tech & Career Academy (CCTCA) provides digital literacy,
          cybersecurity awareness, and related learning opportunities for adult
          learners. The policies below ensure clarity, affordability, and compliance with
          California Education Code §94874(f).
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Publicly Posted
        </div>
      </header>

      {/* Compliance summary */}
      <section className="mb-8 rounded-lg border bg-emerald-50 p-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Key Compliance Facts (Ed. Code §94874(f))
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-800">
          <li>
            <strong>Annual cap:</strong> No student is charged more than{' '}
            <strong>$2,500 per 12-month period</strong>, inclusive of{' '}
            <em>tuition, fees, and required materials</em>.
          </li>
          <li>
            <strong>No state or federal student financial aid:</strong> CCTCA
            does <em>not</em> accept Pell Grants, Cal Grants, Title IV, or similar
            programs.
          </li>
          <li>
            <strong>Affordability:</strong> Sliding scale and scholarships are available.
          </li>
        </ul>
      </section>

      {/* Tuition details */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Tuition Details</h2>

        <div className="rounded-lg border p-5">
          <h3 className="font-medium text-gray-900">Maximum Charges</h3>
          <p className="mt-2 text-gray-700">
            The <strong>total amount a student can be charged</strong> by CCTCA in any
            12-month period is capped at <strong>$2,500</strong>. This cap includes:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
            <li>Tuition</li>
            <li>All institutional fees (e.g., registration or tech fees)</li>
            <li>Required materials (e.g., required workbooks or access codes)</li>
          </ul>
        </div>

        <div className="rounded-lg border p-5">
          <h3 className="font-medium text-gray-900">Scholarships & Sliding Scale</h3>
          <p className="mt-2 text-gray-700">
            CCTCA offers <strong>sliding-scale tuition</strong> and{' '}
            <strong>full or partial scholarships</strong> based on financial need.
            Scholarship awards reduce the amount owed by the student and always
            remain within the $2,500 annual cap.
          </p>
        </div>

        <div className="rounded-lg border p-5">
          <h3 className="font-medium text-gray-900">No State or Federal Aid</h3>
          <p className="mt-2 text-gray-700">
            To remain compliant with §94874(f), CCTCA does <em>not</em> accept
            state or federal student financial aid (including Pell Grants, Cal Grants,
            or Title IV funds). Students may still seek community grants, employer
            sponsorships, or charitable support outside of state/federal aid programs.
          </p>
        </div>

        <div className="rounded-lg border p-5">
          <h3 className="font-medium text-gray-900">Payment & Refunds</h3>
          <p className="mt-2 text-gray-700">
            Payment schedules and any refunds (if offered) are detailed in the{' '}
            <Link href="/enrollment/" className="underline underline-offset-2  text-emerald-700">
              Enrollment Agreement
            </Link>
            . Charges listed there always respect the $2,500 cap.
          </p>
        </div>
      </section>

      {/* How to request aid */}
      <section className="mt-10 space-y-4 rounded-lg border p-5">
        <h2 className="text-xl font-semibold text-gray-900">How to Request Scholarship Support</h2>
        <ol className="mt-1 list-decimal space-y-2 pl-6 text-gray-700">
          <li>Indicate scholarship or sliding-scale need on the enrollment form.</li>
          <li>Staff confirm eligibility and finalize your payment plan within 2–3 business days.</li>
          <li>If a class is full, you may be placed on a waitlist for the next cohort.</li>
        </ol>
        <p className="text-gray-700">
          Questions? Email{' '}
          <a
            href="mailto:admin@cctechacademy.com"
            className="font-medium text-emerald-700 underline underline-offset-2"
          >
            admin@cctechacademy.com
          </a>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">FAQ</h2>

        <div className="rounded-lg border p-5">
          <h3 className="font-medium text-gray-900">Does the $2,500 cap include materials?</h3>
          <p className="mt-1 text-gray-700">
            Yes. The cap includes <em>all</em> institutional charges a student might pay to CCTCA
            in a 12-month period: tuition, fees, and required materials.
          </p>
        </div>

        <div className="rounded-lg border p-5">
          <h3 className="font-medium text-gray-900">
            Can I use Pell Grants or Cal Grants to pay CCTCA?
          </h3>
          <p className="mt-1 text-gray-700">
            No. To qualify for §94874(f), CCTCA does not accept state or federal student financial aid.
          </p>
        </div>

        <div className="rounded-lg border p-5">
          <h3 className="font-medium text-gray-900">
            Will requesting a scholarship affect my chance of enrolling?
          </h3>
          <p className="mt-1 text-gray-700">
            No. Enrollment decisions are not based on ability to pay. Scholarships reduce your
            charges but do not change the $2,500 annual maximum.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t pt-6 text-sm text-gray-600">
        <p>Last updated: {lastUpdated}</p>
        <p className="mt-1">
          For accessible formats, email{' '}
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
