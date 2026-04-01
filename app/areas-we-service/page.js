import Link from 'next/link';
import { MapPinIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import ServiceAreaMap from '../../components/ServiceAreaMap';

export const metadata = {
  title: 'Areas We Service - SOVA Care',
  description: 'Discover the Sydney areas where SOVA Care provides support services.',
};

export default function AreasWeService() {
  const areas = [
    {
      name: 'St George Area',
      description: 'Comprehensive support across the wider St George region.',
      suburbs: ['Penshurst', 'Oatley', 'Mortdale', 'Peakhurst'],
    },
    {
      name: 'Sutherland Shire',
      description: 'Serving the Sutherland Shire with flexible, local support.',
      suburbs: ['Sutherland', 'Cronulla', 'Menai', 'Caringbah'],
    },
    {
      name: 'Southern Sydney',
      description: 'Extended coverage across Southern Sydney area.',
      suburbs: ['Banksia', 'Ramsgate', 'Gymea', 'Miranda'],
    },
    {
      name: 'Inner Western',
      description: 'Supporting clients across the inner west region.',
      suburbs: ['Kingsgrove', 'Beverly Hills', 'Hurstville', 'Kirrawee'],
    },
    {
      name: 'Eastern Suburbs',
      description: 'Our home base, where we provide comprehensive support services.',
      suburbs: ['Rockdale', 'Kogarah', 'Kogarah Bay', 'Carss Park'],
    },
    {
      name: 'Northern Beaches',
      description: 'Our home base, where we provide comprehensive support services.',
      suburbs: ['Rockdale', 'Kogarah', 'Kogarah Bay', 'Carss Park'],
    },
    {
      name: 'Greater Sydney',
      description: 'We service additional areas across Greater Sydney - contact us to confirm.',
      suburbs: ['And many more...'],
    },
    {
      name: 'Rockdale',
      description: 'Our home base, where we provide comprehensive support services.',
      suburbs: ['Rockdale', 'Kogarah', 'Kogarah Bay', 'Carss Park'],
    },
    {
      name: 'Plus More',
      description: 'We also serve additional areas across Greater Sydney - contact us to confirm.',
      suburbs: ['And many more...'],
    }
    
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--sova-primary)] via-[var(--sova-secondary)] to-[var(--sova-accent)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Areas We Service</h1>
            <p className="text-xl md:text-2xl mt-4 text-teal-100">Supporting communities across Greater Sydney</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Service Coverage</h2>
          <div className="mb-12">
            <ServiceAreaMap />
          </div>

          <div className="bg-teal-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Service Area</h3>
            <p className="text-gray-700 mb-4">
              Based in Rockdale, NSW 2216, SOVA Care provides comprehensive support services across the St George area, Sutherland Shire and Greater Sydney region. This includes all suburbs within these regions, with dedicated coverage for our established service areas.
            </p>
            <p className="text-gray-700">
              <strong>Not sure if your location is in our service area?</strong> Please contact us directly at <Link href="tel:0466 983 171" className="text-teal-600 hover:underline">0466 983 171</Link> or <Link href="mailto:sovacaresydney.com.au" className="text-teal-600 hover:underline">sovacaresydney.com.au</Link>, and we'll confirm availability.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Service Area Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-teal-600 mb-3">{area.name}</h3>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <p className="text-gray-700 text-sm">
                    {area.suburbs.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Local Support Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-teal-600 mb-3 flex items-center gap-2">
                <MapPinIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                Community Knowledge
              </h3>
              <p className="text-gray-700">
                As a local business, we understand the unique needs and characteristics of each community we serve.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-teal-600 mb-3 flex items-center gap-2">
                <ClockIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                Quick Response
              </h3>
              <p className="text-gray-700">
                Our local presence means faster response times and more flexible scheduling to suit your needs.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-teal-600 mb-3 flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                Community Trust
              </h3>
              <p className="text-gray-700">
                We're committed to building long-term relationships within our local communities and earning your trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Notice */}
      <section className="py-16 bg-blue-50 border-l-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Service Area Expansion</h2>
          <p className="text-blue-800 mb-4">
            SOVA Care is gradually expanding our service coverage across Greater Sydney. If your area isn't listed above, we encourage you to reach out - we may be able to accommodate your request or can guide you to alternative providers.
          </p>
          <p className="text-blue-800">
            For the most up-to-date service area information, please contact us directly.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready for Support?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            If you're in our service area and looking for compassionate, reliable support, contact us today to discuss how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#booking"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-700 transition"
            >
              Book Support
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-md font-semibold hover:bg-teal-50 transition"
            >
              Ask About Your Area
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
