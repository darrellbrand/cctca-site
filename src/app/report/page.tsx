'use client';

export default function AnnualReport() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-slate-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">CCTCA Annual Report</h1>
      <p className="text-sm text-gray-500 mb-8">Year: 2025 • www.cctechacademy.com • admin@cctechacademy.com</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">🎯 Mission</h2>
        <p>CCTCA equips underserved individuals with the digital literacy, career readiness, and technology training needed to succeed in today&apos;s workforce.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">🌟 Vision</h2>
        <p>A future where every learner has access to the tools, confidence, and support to thrive in the digital economy and contribute to a stronger, more inclusive workforce.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📍 Year in Review</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Launched Digital Literacy Bootcamp (Spring 2025)</li>
          <li>Offered Cybersecurity Basics (Summer 2025)</li>
          <li>Delivered Career Ready Curriculum with Resume Clinics</li>
        </ul>
        <div className="overflow-x-auto">
          <table className="table-auto border w-full text-left">
            <thead className="bg-slate-100 text-sm">
              <tr>
                <th className="border px-4 py-2">Metric</th>
                <th className="border px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">Total Participants</td><td className="border px-4 py-2">120</td></tr>
              <tr><td className="border px-4 py-2">Courses Offered</td><td className="border px-4 py-2">6</td></tr>
              <tr><td className="border px-4 py-2">Certificates Awarded</td><td className="border px-4 py-2">85</td></tr>
              <tr><td className="border px-4 py-2">Job Placements</td><td className="border px-4 py-2">27</td></tr>
              <tr><td className="border px-4 py-2">Volunteer Hours</td><td className="border px-4 py-2">450</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">👥 Community Served</h2>
        <p className="mb-2">We serve:</p>
        <ul className="list-disc list-inside">
          <li>Underserved adults</li>
          <li>People in recovery</li>
          <li>Career changers & transitional-age youth</li>
        </ul>
        <p className="mt-2">Primary service areas: Santa Maria, Lompoc, and remote learning across the Central Coast.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">🤝 Key Partnerships</h2>
        <ul className="list-disc list-inside">
          <li>Good Samaritan Shelter</li>
          <li>America’s Job Center</li>
          <li>Santa Barbara County Libraries</li>
          <li>Workforce Development Board</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📖 Participant Story</h2>
        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-slate-700">
          “Before CCTCA, I hadn’t touched a computer in years. Now I have a resume, a LinkedIn profile, and just landed an interview at a local nonprofit.”
        </blockquote>
        <p className="text-sm text-gray-500 mt-1">– Program Graduate (anonymized)</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">💰 Financial Snapshot (Placeholder)</h2>
        <div className="overflow-x-auto mb-4">
          <table className="table-auto border w-full text-left">
            <thead className="bg-slate-100 text-sm">
              <tr><th className="border px-4 py-2">Revenue Source</th><th className="border px-4 py-2">Amount</th></tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">Foundation Grants</td><td className="border px-4 py-2">$85,000</td></tr>
              <tr><td className="border px-4 py-2">County Workforce Funds</td><td className="border px-4 py-2">$50,000</td></tr>
              <tr><td className="border px-4 py-2">Donations & In-kind</td><td className="border px-4 py-2">$12,500</td></tr>
              <tr className="font-bold"><td className="border px-4 py-2">Total Revenue</td><td className="border px-4 py-2">$147,500</td></tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto border w-full text-left">
            <thead className="bg-slate-100 text-sm">
              <tr><th className="border px-4 py-2">Expense Area</th><th className="border px-4 py-2">Amount</th></tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">Program Delivery</td><td className="border px-4 py-2">$78,000</td></tr>
              <tr><td className="border px-4 py-2">Equipment & Supplies</td><td className="border px-4 py-2">$15,000</td></tr>
              <tr><td className="border px-4 py-2">Staff & Instructors</td><td className="border px-4 py-2">$40,000</td></tr>
              <tr><td className="border px-4 py-2">Admin/Operations</td><td className="border px-4 py-2">$14,500</td></tr>
              <tr className="font-bold"><td className="border px-4 py-2">Total Expenses</td><td className="border px-4 py-2">$147,500</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📈 Goals for 2026</h2>
        <ul className="list-disc list-inside">
          <li>Expand to Salinas and Paso Robles</li>
          <li>Launch bilingual digital literacy track</li>
          <li>Establish employer pipeline partnerships</li>
          <li>Apply for Department of Labor Digital Equity Grant</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">🙏 Thank You</h2>
        <p>To our funders, volunteers, instructors, and community allies—thank you for building pathways to opportunity with us.</p>
      </section>
    </div>
  );
}
