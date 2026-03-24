import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">SOVA Care</h3>
            <p className="text-gray-400 text-sm">
              Providing compassionate, respectful and reliable support for over 20 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-teal-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-teal-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-teal-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="font-semibold">Phone:</span> 1800 000 000
              </p>
              <p>
                <span className="font-semibold">Email:</span> info@sovacare.com.au
              </p>
              <p>
                <span className="font-semibold">Hours:</span> 24 Hours
              </p>
              <p className="text-xs mt-4">
                Local Sydney Support<br />
                Rockdale, NSW 2216
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          {/* Service Areas */}
          <h4 className="text-lg font-semibold mb-3">Areas We Service</h4>
          <p className="text-sm text-gray-400 mb-4">
            Rockdale • Kogarah • Hurstville • St George Area • Sutherland Shire • Southern Sydney • Greater Sydney
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} SOVA Care. All rights reserved. | Police Check & NDIS Worker Screening | Qualifications: Cert III, Cert IV, First Aid, CPR
          </p>
        </div>
      </div>
    </footer>
  );
}
