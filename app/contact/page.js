import ContactForm from '@/components/ContactForm';
import BookingForm from '@/components/BookingForm';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us - SOVA Care',
  description: 'Get in touch with SOVA Care for support, enquiries, or to book services.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--sova-primary)] via-[var(--sova-secondary)] to-[var(--sova-accent)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-xl mt-4 text-teal-100">Get in touch with SOVA Care today</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📞 Phone</h3>
              <p className="text-gray-700 mb-2">042 4333 532</p>
              <p className="text-sm text-gray-600">Available 24 hours</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📧 Email</h3>
              <p className="text-gray-700 mb-2">sovacaresydney.com.au</p>
              <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📍 Location</h3>
              <p className="text-gray-700 mb-2">Rockdale, NSW 2216</p>
              <p className="text-sm text-gray-600">Service areas: Greater Sydney</p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-teal-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Areas We Service</h3>
            <p className="text-gray-700 mb-6">
              We provide services across the Greater Sydney region, with particular focus on:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Rockdale', 'Kogarah', 'Hurstville', 'Carss Park', 'Kingsgrove', 'Beverly Hills', 'Sutherland', 'Cronulla'].map((area) => (
                <div key={area} className="bg-white p-4 rounded-md">
                  <p className="text-gray-700 font-semibold text-center">{area}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-6">
              <strong>Note:</strong> If you're unsure whether your location is within our service area, please contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Send us a Message</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16" id="booking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Book Support</h2>
            <p className="text-center text-gray-700 mb-8">
              Ready to book support? Fill out the form below and we'll get in touch to confirm your booking.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can I get support?</h3>
              <p className="text-gray-700">
                We aim to respond to all enquiries within 24 hours. Once we've discussed your needs, we can often arrange support within 1-2 weeks depending on availability and your requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you work with NDIS and Aged Care packages?</h3>
              <p className="text-gray-700">
                Yes! We support NDIS self-managed and plan-managed participants, as well as Home Care Package clients and private arrangements for aged care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's your service area?</h3>
              <p className="text-gray-700">
                We service Greater Sydney, with particular focus on Rockdale, St George area, and Sutherland Shire. Contact us to confirm your specific location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are your workers qualified?</h3>
              <p className="text-gray-700">
                Absolutely. All our support workers are Cert III or IV qualified in Disability Support, First Aid & CPR certified, police-checked, and NDIS worker screening approved.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I arrange a trial session?</h3>
              <p className="text-gray-700">
                Yes, we can arrange an initial consultation or trial session to ensure the right fit. Contact us to discuss your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="bg-red-50 border-l-4 border-red-600 p-8 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-red-900 mb-2">Need Emergency Support?</h3>
          <p className="text-red-800 mb-4">
            For urgent medical emergencies, please call 042 4333 532 (emergency services) immediately or visit your nearest hospital.
          </p>
          <p className="text-red-800">
            For non-emergency urgent support, contact us at 042 4333 532 (24 hours available) or go to the nearest hospital emergency department.
          </p>
        </div>
      </section>
    </div>
  );
}
