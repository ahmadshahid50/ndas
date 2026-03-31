import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  MapPinIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ClockIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

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
                src="/images/hero.jpg"
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
              icon={AcademicCapIcon}
              title="Qualifications"
              items={[
                'Cert III in Aged Care Work',
                'Cert IV in Aged Care Work',
                'Cert IV in Health and Leisure',
                'First Aid',
                'CPR certifications',
              ]}
              moreHref="/qualifications"
            />
            <ServiceCard
              icon={ShieldCheckIcon}
              title="Trust & Safety"
              items={[
                'Police Check',
                'NDIS Worker Screening',
                'Comprehensive Insurance',
                'Fully Compliant',
                'Monitoring of Staff',
              ]}
              moreHref="/trust-safety"
            />
            <ServiceCard
              icon={MapPinIcon}
              title="Service Areas"
              items={[
                'St George Area',
                'Sutherland Shire',
                'Southern Sydney',
                'Inner West',
                'Eastern Suburbs',
              ]}
              moreHref="/areas-we-service"
            />
          </div>
          {/* <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Our extensive experience and comprehensive qualifications ensure you receive the highest quality care and support. Every team member is thoroughly trained and vetted to provide safe, reliable, and compassionate assistance tailored to your individual needs.
            </p>
            
          </div> */}
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
              icon={HeartIcon}
              title="Personal Care"
              description="Help with daily personal care needs"
              items={['Personal hygiene assistance', 'Assisted daily living', 'Toileting assistance', 'Mobility support']}
              moreHref="/areas-we-service"
           />
            <ServiceCard
              icon={WrenchScrewdriverIcon}
              title="Daily Living Support"
              description="Assistance with everyday tasks"
              items={['Meal preparation', 'Medication reminders', 'Household tasks', 'Shopping assistance']}
              moreHref="/areas-we-service"
            />
            <ServiceCard
              icon={MapPinIcon}
              title="Community Access"
              description="Support to stay active in the community"
              items={['Social outings', 'Appointments', 'Recreational activities', 'Transport assistance']}
              moreHref="/areas-we-service"
            />
            <ServiceCard
              icon={WrenchScrewdriverIcon}
              title="Domestic Assistance"
              description="Help maintaining your home"
              items={['Cleaning', 'Laundry', 'Home organisation', 'Light maintenance']}
              moreHref="/areas-we-service"
            />
            <ServiceCard
              icon={UserGroupIcon}
              title="Companion Care"
              description="Social and emotional support"
              items={['Conversation & companionship', 'Emotional support', 'Event assistance', 'Memory support']}
              moreHref="/areas-we-service"
            />
            <ServiceCard
              icon={BriefcaseIcon}
              title="Aged Care Support"
              description="Specialized support for older Australians"
              items={['Private arrangements', 'Home Care Package support', 'Self-funded options', 'Flexible scheduling']}
              moreHref="/areas-we-service"
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
          <div className="relative">
            {/* Connecting chain line */}
            <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <div className="flex justify-between items-center">
                <div className="w-12 h-0.5 bg-teal-300"></div>
                <div className="w-12 h-0.5 bg-teal-300"></div>
                <div className="w-12 h-0.5 bg-teal-300"></div>
                <div className="w-12 h-0.5 bg-teal-300"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: 1, title: 'Contact Us', desc: 'Reach out by phone, email or form' },
                { step: 2, title: 'Discuss Needs', desc: 'Talk about your support requirements' },
                { step: 3, title: 'Service Agreement', desc: 'Review terms and pricing' },
                { step: 4, title: 'Paperwork', desc: 'Complete intake and consent forms' },
                { step: 5, title: 'Support Begins', desc: 'Start services at your schedule' },
              ].map((item, index) => (
                <div key={item.step} className="text-center relative">
                  <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  {/* Arrow for mobile */}
                  {index < 4 && (
                    <div className="md:hidden flex justify-center mt-4">
                      <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
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