'use client';


export default function Footer() {
    return (
        <footer className="bg-slate-100 -mt-1  text-gray-700  electrolize-regular">
            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Organization Info */}
                <div>
                    <h2 className="text-xl font-semibold text-blue-700">CCTCA</h2>
                    <p className="mt-2 text-sm">
                        Central Coast Tech & Career Academy Inc is a 501(c)(3) nonprofit organization.
                    </p>
                    <p className="mt-1 text-xs text-gray-500">EIN: 39-2908710</p>
                    <p className="mt-1 text-xs text-gray-500">© {new Date().getFullYear()} CCTCA. All rights reserved.</p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Navigate</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#about" className="hover:text-blue-600">About</a></li>
                        <li><a href="#programs" className="hover:text-blue-600">Programs</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                        <li><a href="/donate" className="hover:text-blue-600">Donate</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Contact</h3>
                    <ul className="text-sm space-y-1">
                        <li>Email: <a href="mailto:admin@cctechacademy.com" className="text-blue-600 hover:underline">admin@cctechacademy.com</a></li>
                        <li>Location: 200 S 13th St Suite 107, Grover Beach CA, 93433</li>
                    </ul>
                </div>

                {/* Compliance & Resources */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Legal & Policy</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/privacy/" className="hover:text-blue-600">Privacy Policy</a></li>
                        <li><a href="/accessibility/" className="hover:text-blue-600">Accessibility</a></li>
                        <li><a href="/terms/" className="hover:text-blue-600">Terms of Use</a></li>
                        <li><a href="/non-discrimination/" className="hover:text-blue-600">Non-Discrimination Policy</a></li>
                        <li><a href="/conduct/" className="hover:text-blue-600">Code of Conduct</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
