import Link from 'next/link';
import {
  DocumentTextIcon,
  UserGroupIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Resources - SOVA Care',
  description: 'Helpful information and resources for understanding aged care, NDIS, and support services.',
};

export default function Resources() {
  const resources = [
    {
      title: 'What is NDIS?',
      description: 'Understanding the National Disability Insurance Scheme',
      content: 'The NDIS (National Disability Insurance Scheme) is a new way to support people with disability in Australia. It provides financial support to help people with a permanent and significant disability achieve their goals and participate in their community. The NDIS is designed to fund supports that assist people with disability to live their life independently or with family support, to enable them to work, learn, study and participate. Rather than funding services, the NDIS gives funding directly to participants to choose their own supports.',
      links: [
        { text: 'Visit ndia.gov.au', url: 'https://www.ndia.gov.au', external: true },
        { text: 'Learn More About NDIS', url: '/ndis-support' },
      ]
    },
    {
      title: 'Self-Managed vs Plan-Managed NDIS',
      description: 'What\'s the difference and which is right for you?',
      content: 'There are different ways to manage your NDIS support. Self-managed means you control your funding directly and arrange services yourself. Plan-managed means a plan manager handles the funding and payments on your behalf. Both have advantages - self-managed offers maximum flexibility while plan-managed provides administrative support. The right choice depends on your preferences, support needs and comfort managing arrangements.',
      links: [
        { text: 'NDIS Plan Management Info', url: 'https://www.planmanagementassociation.com.au', external: true },
        { text: 'SOVA Care NDIS Page', url: '/ndis-support' },
      ]
    },
    {
      title: 'How to Choose a Support Worker',
      description: 'Tips for finding the right support worker for your needs',
      content: 'Choosing the right support worker is important. Look for qualifications (Cert III or IV in Disability Support), experience with your specific support needs, compatibility with your personality and preferences, professional approach, and the ability to communicate clearly. Don\'t be afraid to interview candidates and trust your instincts. You should feel comfortable and safe with your support worker, and they should respect your independence and choices.',
      links: [
        { text: 'About Our Team', url: '/about' },
      ]
    },
    {
      title: 'Support for Families & Carers',
      description: 'Resources for families supporting someone with disabilities',
      content: 'Family carers play an essential role in the lives of people with support needs. Supporting a family member can be rewarding but also challenging. There are many resources available to help families including respite care services, support groups, counseling, financial assistance, and educational programs. It\'s important for carers to look after their own wellbeing too. SOVA Care can provide respite support to give families a break while ensuring your loved one receives quality care.',
      links: [
        { text: 'Carers NSW', url: 'https://www.carersnsw.org.au', external: true },
        { text: 'Our Services', url: '/services' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--sova-primary)] via-[var(--sova-secondary)] to-[var(--sova-accent)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Resources & Information</h1>
          <p className="text-xl mt-4 text-teal-100">Helpful guides and information to support your care journey</p>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Knowledge Base</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-teal-600 transition">
                <h3 className="text-2xl font-bold text-teal-600 mb-3">{resource.title}</h3>
                <p className="text-sm text-gray-600 font-semibold mb-4">{resource.description}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{resource.content}</p>
                <div className="flex flex-wrap gap-3">
                  {resource.links.map((link, linkIndex) => (
                    link.external ? (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-teal-600 hover:text-teal-700 font-semibold text-sm underline"
                      >
                        {link.text} ↗
                      </a>
                    ) : (
                      <Link
                        key={linkIndex}
                        href={link.url}
                        className="inline-block text-teal-600 hover:text-teal-700 font-semibold text-sm underline"
                      >
                        {link.text}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">External Resources & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <DocumentTextIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                Government & Official
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.ndia.gov.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                    National Disability Insurance Agency (NDIA)
                  </a>
                  <p className="text-sm text-gray-600">Official NDIS information and participant resources</p>
                </li>
                <li>
                  <a href="https://www.agedcare.health.gov.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                    My Aged Care
                  </a>
                  <p className="text-sm text-gray-600">Government aged care information and assessment</p>
                </li>
                <li>
                  <a href="https://www.acqc.asn.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                    Aged Care Quality & Safety Commission
                  </a>
                  <p className="text-sm text-gray-600">Aged care standards and complaints</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <UserGroupIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                Support & Advocacy
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.carersnsw.org.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                    Carers NSW
                  </a>
                  <p className="text-sm text-gray-600">Support and advocacy for family carers</p>
                </li>
                <li>
                  <a href="https://www.disabilityrightsnsw.org.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                    Disability Rights NSW
                  </a>
                  <p className="text-sm text-gray-600">Advocacy and legal support for people with disability</p>
                </li>
                <li>
                  <a href="https://www.adacorp.org.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                    Australian Disability Advocacy
                  </a>
                  <p className="text-sm text-gray-600">Disability advocacy and support services</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MapPinIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                Finding Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.planmanagementassociation.com.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                    Plan Management Association
                  </a>
                  <p className="text-sm text-gray-600">Find plan managers and service information</p>
                </li>
                <li>
                  <a href="https://www.ndiassociation.org.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                    NDIS Provider Network
                  </a>
                  <p className="text-sm text-gray-600">Find registered NDIS service providers</p>
                </li>
                <li>
                  <a href="https://www.aged-care.findus.com.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                    Aged Care Provider Directory
                  </a>
                  <p className="text-sm text-gray-600">Find aged care services in your area</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🆘 Emergency & Crisis</h3>
              <ul className="space-y-3">
                <li>
                  <p className="text-teal-600 font-semibold">000 - Emergency Services</p>
                  <p className="text-sm text-gray-600">For life-threatening emergencies</p>
                </li>
                <li>
                  <a href="https://www.lifeline.org.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                    Lifeline Australia
                  </a>
                  <p className="text-sm text-gray-600">Mental health crisis support (13 11 14)</p>
                </li>
                <li>
                  <a href="https://www.1300believe.org.au" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                    1300 BELIEVE
                  </a>
                  <p className="text-sm text-gray-600">Support for people with disability in crisis</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Common Questions & Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <QuestionMarkCircleIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                Getting Started with NDIS
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• How do I apply for NDIS?</li>
                <li>• What makes someone eligible?</li>
                <li>• How much support will I get?</li>
                <li>• How do I manage my plan?</li>
                <li>• What if I disagree with my plan?</li>
              </ul>
              <Link href="/ndis-support" className="text-teal-600 hover:underline font-semibold text-sm mt-4 block">
                Learn More →
              </Link>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <HeartIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                Aged Care Pathway
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Types of aged care available</li>
                <li>• Accessing Home Care Packages</li>
                <li>• Cost of aged care services</li>
                <li>• Private vs government funded</li>
                <li>• Aged care quality standards</li>
              </ul>
              <Link href="/aged-care" className="text-teal-600 hover:underline font-semibold text-sm mt-4 block">
                Learn More →
              </Link>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <BriefcaseIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                Choosing Support Services
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• What to look for in a provider</li>
                <li>• Questions to ask support workers</li>
                <li>• Checking qualifications</li>
                <li>• Understanding pricing</li>
                <li>• Your rights as a client</li>
              </ul>
              <Link href="/services" className="text-teal-600 hover:underline font-semibold text-sm mt-4 block">
                Learn More →
              </Link>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <UserGroupIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                Family & Carer Support
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Supporting a family member</li>
                <li>• Respite and break care</li>
                <li>• Caregiver stress management</li>
                <li>• Financial support available</li>
                <li>• Finding support groups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Document Downloads */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Downloadable Resources</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Coming soon - we'll be adding downloadable guides, checklists, and information sheets to help you on your care journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center border-2 border-dashed border-gray-300">
              <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mx-auto mb-3 w-12 h-12">
                <DocumentTextIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Care Planning Guide</h3>
              <p className="text-gray-600 text-sm mb-4">Coming soon</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-dashed border-gray-300">
              <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mx-auto mb-3 w-12 h-12">
                <CheckCircleIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Support Worker Checklist</h3>
              <p className="text-gray-600 text-sm mb-4">Coming soon</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-dashed border-gray-300">
              <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mx-auto mb-3 w-12 h-12">
                <ShieldCheckIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">NDIS Plan Templates</h3>
              <p className="text-gray-600 text-sm mb-4">Coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our team is here to help. Get in touch with SOVA Care for personalized guidance and support.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-700 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
