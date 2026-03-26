import Link from 'next/link';

export const metadata = {
  title: 'Rates & Pricing - SOVA Care',
  description: 'Transparent pricing for SOVA Care support services in Sydney.',
};

export default function RatesPricing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--sova-primary)] via-[var(--sova-secondary)] to-[var(--sova-accent)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Rates & Pricing</h1>
          <p className="text-xl mt-4 text-teal-100">Transparent, competitive pricing aligned with industry standards</p>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Pricing Structure</h2>
          <p className="text-lg text-gray-700 mb-8">
            SOVA Care's pricing is transparent, competitive and aligned with the NDIS Price Guide and industry standards. Below is a general overview of our service rates.
          </p>

          {/* Standard Rates */}
          <div className="bg-white border-2 border-teal-600 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Standard Support Rates</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">Standard Hourly Rate (with advance notice)</span>
                <span className="text-xl font-bold text-teal-600">On Request</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">Short Notice Rate (less than 48 hours)</span>
                <span className="text-xl font-bold text-teal-600">On Request</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">Weekend/Public Holiday Rate</span>
                <span className="text-xl font-bold text-teal-600">On Request</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700">Evening/Night Support (after 6pm)</span>
                <span className="text-xl font-bold text-teal-600">On Request</span>
              </div>
            </div>
          </div>

          {/* Additional Costs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Additional Costs</h4>
              <ul className="space-y-3 text-gray-700">
                <li>✓ <strong>Travel Time:</strong> May apply for appointments outside core service areas</li>
                <li>✓ <strong>Mileage:</strong> Based on distance and industry standards</li>
                <li>✓ <strong>Specialized Skills:</strong> Higher rates for specialized support needs</li>
                <li>✓ <strong>After-Hours:</strong> Premium rates for evening/night support</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included</h4>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Fully qualified support workers</li>
                <li>✓ Comprehensive insurance</li>
                <li>✓ Professional, person-centered care</li>
                <li>✓ Flexible scheduling & arrangement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NDIS Alignment */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">NDIS Price Guide Alignment</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            For NDIS participants, our rates are aligned with the NDIS Price Guide for support services in NSW. This ensures:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">💰 Competitive Pricing</h3>
              <p className="text-gray-700 text-sm">
                Our rates are competitive and aligned with industry standards to maximize your NDIS funding.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">📋 Transparent Invoicing</h3>
              <p className="text-gray-700 text-sm">
                Clear, detailed invoices showing exactly what you're paying for and when.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🤝 Plan Manager Support</h3>
              <p className="text-gray-700 text-sm">
                Full coordination with plan managers and self-management for seamless funding arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aged Care & Private */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Aged Care & Private Clients</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            For Home Care Package and private clients, we offer flexible pricing options:
          </p>
          <div className="max-w-2xl mx-auto bg-white border-2 border-gray-300 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Home Care Package Clients</h3>
            <p className="text-gray-700 mb-6">
              If you're using a Home Care Package, we work within your package funding. Our rates align with Home Care Package price guides and we coordinate directly with your service coordinator/plan manager.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Self-Funded/Private Clients</h3>
            <p className="text-gray-700 mb-6">
              We offer competitive hourly rates for private arrangements. Pricing is based on:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Type and complexity of support</li>
              <li>• Frequency and scheduling</li>
              <li>• Location and travel requirements</li>
              <li>• Individual care plan requirements</li>
            </ul>
            <p className="text-gray-700 p-4 bg-gray-50 rounded">
              <strong>Example:</strong> A standard 2-hour weekly personal care session with advance booking would be quoted based on our current rates. For exact pricing, please contact us.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Affects Your Price</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Factors That May Increase Cost</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🔴 Short notice bookings (less than 48 hours)</li>
                <li>🔴 Weekend, evening, or public holiday support</li>
                <li>🔴 Specialized skills or expertise needed</li>
                <li>🔴 Travel outside standard service area</li>
                <li>🔴 Complex, intensive support needs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Ways to Optimize Cost</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Plan ahead with advance booking</li>
                <li>✅ Regular scheduled appointments</li>
                <li>✅ Clustered visits (multiple clients in same area)</li>
                <li>✅ Longer booking blocks (e.g., monthly arrangements)</li>
                <li>✅ Off-peak timing when possible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Payment & Invoicing</h2>
          <div className="max-w-2xl mx-auto bg-teal-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>
            <ul className="space-y-4 text-gray-700 mb-8">
              <li>
                <strong>Invoicing:</strong> We provide detailed monthly invoices showing all services provided
              </li>
              <li>
                <strong>Payment Terms:</strong> Net 30 days from invoice date for most arrangements
              </li>
              <li>
                <strong>NDIS & HCP:</strong> Coordination with plan managers for direct payment arrangements
              </li>
              <li>
                <strong>Payment Methods:</strong> Bank transfer, credit card, or check (as arranged)
              </li>
            </ul>
            <p className="text-gray-700 p-4 bg-white rounded border-l-4 border-teal-600">
              <strong>Note:</strong> Exact payment arrangements will be discussed and confirmed in your Service Agreement before support begins.
            </p>
          </div>
        </div>
      </section>

      {/* Get Detailed Pricing */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Detailed Pricing?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Every situation is unique. For personalized pricing information specific to your support needs, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Request Pricing Quote
            </Link>
            <Link
              href="tel:1800000000"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-700 transition"
            >
              Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
