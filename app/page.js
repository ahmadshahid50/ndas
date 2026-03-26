import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'Home - SOVA Care',
  description: 'SOVA Care provides compassionate support services for over 20 years in Sydney.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--sova-primary)] via-[var(--sova-secondary)] to-[var(--sova-accent)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Working with you, towards your goals. That's our focus.
              </h1>
              <p className="text-xl mb-8 text-white max-w-3xl mx-auto md:mx-0">
                SOVA Care provides compassionate, respectful and reliable support that helps people maintain their independence and quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/contact#booking"
                  className="bg-white text-teal-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition text-center shadow-lg"
                >
                  Book Support
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-teal-600 transition text-center shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/main.png"
                alt="SOVA Care hero image"
                className="w-full max-w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            20+ Years of Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="📋"
              title="Qualifications"
              items={[
                'Cert III in Disability Support',
                'Cert IV in Disability Support',
                'First Aid Certified',
                'CPR Certified',
              ]}
            />
            <ServiceCard
              icon="🛡️"
              title="Trust & Safety"
              items={[
                'Police Check',
                'NDIS Worker Screening',
                'Comprehensive Insurance',
                'Fully Compliant',
              ]}
            />
            <ServiceCard
              icon="📍"
              title="Service Areas"
              items={[
                'Rockdale, Kogarah, Hurstville',
                'St George Area',
                'Sutherland Shire',
                'Greater Sydney Region',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Support We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon="🛁"
              title="Personal Care"
              description="Help with daily personal care needs"
              items={['Showering & grooming', 'Dressing', 'Toileting assistance', 'Mobility support']}
            />
            <ServiceCard
              icon="🍽️"
              title="Daily Living Support"
              description="Assistance with everyday tasks"
              items={['Meal preparation', 'Medication reminders', 'Household tasks', 'Shopping assistance']}
            />
            <ServiceCard
              icon="🚗"
              title="Community Access"
              description="Support to stay active in the community"
              items={['Social outings', 'Appointments', 'Recreational activities', 'Transport assistance']}
            />
            <ServiceCard
              icon="🧹"
              title="Domestic Assistance"
              description="Help maintaining your home"
              items={['Cleaning', 'Laundry', 'Home organisation', 'Light maintenance']}
            />
            <ServiceCard
              icon="💬"
              title="Companion Care"
              description="Social and emotional support"
              items={['Conversation & companionship', 'Emotional support', 'Event assistance', 'Memory support']}
            />
            <ServiceCard
              icon="🏥"
              title="Aged Care Support"
              description="Specialized support for older Australians"
              items={['Private arrangements', 'Home Care Package support', 'Self-funded options', 'Flexible scheduling']}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-700 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Get Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: 1, title: 'Contact Us', desc: 'Reach out by phone, email or form' },
              { step: 2, title: 'Discuss Needs', desc: 'Talk about your support requirements' },
              { step: 3, title: 'Service Agreement', desc: 'Review terms and pricing' },
              { step: 4, title: 'Paperwork', desc: 'Complete intake and consent forms' },
              { step: 5, title: 'Support Begins', desc: 'Start services at your schedule' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-teal-100">
            Contact us today for a confidential discussion about your care needs.
          </p>
          <Link
            href="/contact#booking"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Book Support Today
          </Link>
        </div>
      </section>
    </div>
  );
}