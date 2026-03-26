import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'NDIS Support - SOVA Care',
  description: 'Learn how SOVA Care works with NDIS participants to provide flexible support.',
};

export default function NDISSupport() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--sova-primary)] via-[var(--sova-secondary)] to-[var(--sova-accent)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">NDIS Support</h1>
          <p className="text-xl mt-4 text-teal-100">Flexible, personalized support for NDIS participants</p>
        </div>
      </section>

      {/* NDIS Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Work with NDIS</h2>
          <p className="text-lg text-gray-700 mb-8">
            SOVA Care is registered and experienced in supporting both self-managed and plan-managed NDIS participants. We understand the flexibility and structure that NDIS offers and tailor our services to align with your support needs and funding arrangements.
          </p>
        </div>
      </section>

      {/* NDIS Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">NDIS Plan Types We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon="🤝"
              title="Self-Managed Participants"
              description="You manage your own NDIS budget and organize support services directly."
              items={[
                'You control your funding and payments',
                'Direct arrangements with SOVA Care',
                'Flexible support options',
                'We invoice you or your representative',
                'Simple, transparent pricing',
              ]}
            />
            <ServiceCard
              icon="📊"
              title="Plan-Managed Participants"
              description="Your plan manager handles financial arrangements with service providers."
              items={[
                'Plan manager coordinates with us',
                'Payment arrangements via plan manager',
                'Detailed invoicing and reporting',
                'Coordination with your plan',
                'Seamless communication',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing & Alignment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Aligned with NDIS</h2>
          <div className="bg-teal-50 p-8 rounded-lg">
            <p className="text-gray-700 mb-6">
              SOVA Care's pricing is aligned with the NDIS Price Guide for support services in NSW. Our rates reflect:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Standard Rates</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Hourly support rates</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ Transparent invoicing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Additional Costs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Weekend and evening rates</li>
                  <li>✓ Travel time and costs</li>
                  <li>✓ Specialized support premiums</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 mt-8 p-4 bg-white rounded">
              <strong>Note:</strong> For detailed pricing information specific to your support needs, please contact us. We'll provide a clear breakdown of costs based on your NDIS plan.
            </p>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Services Covered by NDIS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Core Supports"
              items={['Personal care', 'Daily living support', 'Mobility assistance']}
            />
            <ServiceCard
              title="Community Participation"
              items={['Community access', 'Social activities', 'Transport support']}
            />
            <ServiceCard
              title="Psychosocial Support"
              items={['Mental health support', 'Counseling coordination', 'Emotional support']}
            />
            <ServiceCard
              title="Assistance Provided"
              items={['Goal planning', 'Appointments', 'Community outings']}
            />
            <ServiceCard
              title="Skill Development"
              items={['Life skills training', 'Goal achievement', 'Independence building']}
            />
            <ServiceCard
              title="Specialist Support"
              items={['Customized assistance', 'Complex needs support', 'Coordinated care']}
            />
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Getting Started with SOVA Care</h2>
          <div className="bg-white p-8 border-2 border-teal-600 rounded-lg">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact SOVA Care</h3>
                  <p className="text-gray-600">Reach out with information about your NDIS plan and support needs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Discuss Your Plan</h3>
                  <p className="text-gray-600">We'll review your NDIS plan details and identify which services can support your goals.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Service Agreement</h3>
                  <p className="text-gray-600">We'll provide a clear service agreement outlining support type, frequency, and costs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Begin Support</h3>
                  <p className="text-gray-600">Once everything is arranged, we begin providing personalized support aligned with your NDIS plan.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
