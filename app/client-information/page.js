import Link from 'next/link';
import {
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  PencilSquareIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Client Information - SOVA Care',
  description: 'Important documents and information for SOVA Care clients.',
};

export default function ClientInformation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--sova-primary)] via-[var(--sova-secondary)] to-[var(--sova-accent)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Client Information</h1>
          <p className="text-xl mt-4 text-teal-100">Important documents and information for our clients</p>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Get Started with SOVA Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h3>
                    <p className="text-gray-700">
                      Reach out by phone, email, or through our website enquiry form. We'll have a quick conversation to understand your situation, the type of support you're looking for, and your location.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Discuss Your Needs</h3>
                    <p className="text-gray-700">
                      We'll arrange a time to speak with you or your family to discuss your support needs, daily routines, goals and preferred schedule. This helps us understand how we can best support you.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Service Agreement</h3>
                    <p className="text-gray-700">
                      Before services begin, we will provide a Service Agreement outlining the supports to be provided, service rates and general terms so everything is clear and transparent.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Intake & Consent Forms</h3>
                    <p className="text-gray-700">
                      You will be asked to complete a Client Intake Form and consent documents which include basic personal details, emergency contacts and important information to help us provide safe and appropriate support.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Support Begins</h3>
                    <p className="text-gray-700">
                      Once the paperwork is completed, we can schedule your support and begin services at a time that suits you.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="relative h-96 bg-gray-300 rounded-lg">
              <img
                src="/images/agedcare.jpg"
                alt="Getting started process"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Important Client Documents</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We provide comprehensive documentation to ensure clarity and safety in our care relationships. Below are the key documents you'll receive or complete.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-teal-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-2 rounded-full inline-flex items-center justify-center">
                  <DocumentTextIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Service Agreement</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                A comprehensive agreement outlining:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Types and scope of support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Frequency and schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Support worker information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Pricing and payment terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Cancellation and modification policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Rights and responsibilities</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Status:</strong> Will be provided during initial consultation
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-teal-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-2 rounded-full inline-flex items-center justify-center">
                  <ClipboardDocumentListIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Client Intake Form</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                A detailed form collecting essential information:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Personal and contact details</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Emergency contacts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Medical information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Support requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Preferences and goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Important communication needs</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Status:</strong> To be completed before services begin
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-teal-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-2 rounded-full inline-flex items-center justify-center">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Consent Forms</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Important consents required for safe care:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Personal care consent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Privacy and confidentiality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Emergency medical consent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Information sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Photography/media consent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Background checks authorization</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Status:</strong> Required before support begins
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-teal-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-2 rounded-full inline-flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Privacy & Confidentiality</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Our commitment to protecting your information:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Full compliance with Privacy Act</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Secure record storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Confidential information handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Limited disclosure practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Your right to access records</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <span>Data protection procedures</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Status:</strong> Provided with all documentation
              </p>
            </div>
          </div>

          <div className="mt-12 bg-teal-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <DocumentTextIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
              Document Packages
            </h3>
            <p className="text-gray-700 mb-6">
              Since you haven't sent your forms yet, we've noted that they will be provided once completed. Once you send us your Service Agreement, Intake Form, and Consent Forms, we'll create direct links to them here for easy access.
            </p>
            <p className="text-gray-700 p-4 bg-white rounded border-l-4 border-teal-600">
              <strong>Next Step:</strong> Please send your completed forms to <Link href="mailto:sovacaresydney.com.au" className="text-teal-600 hover:underline">sovacaresydney.com.au</Link>, and we'll add them to this page with download links for your reference.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Who We Support</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            SOVA Care can provide services to a diverse range of people with different support needs and funding arrangements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                NDIS Self-Managed Participants
              </h3>
              <p className="text-gray-700 text-sm">
                You control your NDIS funding and arrange support services directly. We work with you to provide the support your plan covers.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                NDIS Plan-Managed Participants
              </h3>
              <p className="text-gray-700 text-sm">
                Your plan manager handles arrangements. We coordinate with them while focusing on providing quality support to you.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Private/Self-Funded Clients
              </h3>
              <p className="text-gray-700 text-sm">
                You arrange and pay for support directly. Perfect flexibility with no government program requirements.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Aged Care & Home Care Package Clients
              </h3>
              <p className="text-gray-700 text-sm">
                We support older Australians with various aged care arrangements and funding options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Need Help?</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              If you have questions about our processes, documents, or how to get started, please don't hesitate to contact us.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  Phone
                </h3>
                <Link href="tel:0424333532">
                <p className="text-teal-600 hover:underline">0424 333 532 (24 hours)</p>
                </Link>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <EnvelopeIcon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  Email
                </h3>
                <p className="text-gray-700">
                  <Link href="mailto:sovacaresydney.com.au" className="text-teal-600 hover:underline">
                    sovacaresydney.com.au
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  Online Form
                </h3>
                <p className="text-gray-700">
                  <Link href="/contact" className="text-teal-600 hover:underline">
                    Use our contact form
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Begin?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Take the first step towards getting the support you need. Contact us today to discuss your requirements.
          </p>
          <Link
            href="/contact#booking"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-700 transition"
          >
            Start Your Enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
