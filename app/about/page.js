import ServiceCard from '@/components/ServiceCard';
import { AcademicCapIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {
  HeartIcon,
  WrenchScrewdriverIcon,
  MapPinIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ClockIcon,
  SparklesIcon,
  
} from '@heroicons/react/24/outline';


export const metadata = {
  title: 'About Us - SOVA Care',
  description: 'Learn about SOVA Care and Seiana\'s 20+ years of experience in the care industry.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      
      <section className="bg-gradient-to-r from-[var(--sova-primary)] via-[var(--sova-secondary)] to-[var(--sova-accent)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About SOVA Care</h1>
          <p className="text-xl mt-4 text-teal-100">Our Story of Compassionate Support</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg mb-8 border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Compassionate Support Built on Experience and Trust
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                SOVA Care was founded with a clear purpose, to provide compassionate, respectful, and reliable support that helps people maintain their independence and quality of life. Every aspect of our service is designed to deliver personalised support that is consistent, flexible, and aligned with individual needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Cleaning Services Include:</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">🟢 1. A Personal Approach to Care
                  </h3>
                  <p className="text-gray-700">SOVA Care is led by Seiana, who brings over 20 years of experience in the care sector, with a strong background in aged care and disability support. Throughout her career, she has supported individuals with personal care, daily living assistance, and community participation. This experience has shaped a deep understanding of how important it is to provide support that is patient, respectful, and tailored to each person’s routine, preferences, and goals.</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">🟢 2. Personalised Support That Adapts to You
                  </h3>
                  <p className="text-gray-700">SOVA Care was created to offer a more personal and flexible approach to support services. Rather than a one-size-fits-all model, we work closely with each client and their families to deliver support that fits naturally into their everyday life.
                    Whether providing NDIS support services or assisting private clients, our focus is always on:
                    <ul className='text-gray-700'>
                      <li>🟢 Respect and dignity</li>
                      <li>🟢 Consistency and reliability</li>
                      <li>🟢 Supporting independence</li>
                      <li>🟢 Building trust over time</li>
                    </ul>

                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center mb-0">
            {/* <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compassionate Support Built on Experience and Trust</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                SOVA Care was founded with a clear purpose, to provide compassionate, respectful, and reliable support that helps people maintain their independence and quality of life. Every aspect of our service is designed to deliver personalised support that is consistent, flexible, and aligned with individual needs.
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-6">ABOUT SEIANA</h2>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-6">A Personal Approach to Care</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                SOVA Care is led by Seiana, who brings over 20 years of experience in the care sector, with a strong background in aged care and disability support. Throughout her career, she has supported individuals with personal care, daily living assistance, and community participation. This experience has shaped a deep understanding of how important it is to provide support that is patient, respectful, and tailored to each person’s routine, preferences, and goals.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Through this experience, she has developed a strong understanding of the importance of providing support that is patient, respectful and tailored to each individual's needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                SOVA Care was created to offer a more personal and flexible approach to support services, allowing us to work closely with each client and their families to provide care that suits their goals, routines and preferences.
              </p>
            </div> */}
            {/* <div className="relative h-96 bg-gray-300 rounded-lg">
              <img
                src="/images/prsnl1.jpg"
                alt="About SOVA Care"
                className="w-full h-full object-cover rounded-lg"
              />
            </div> */}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Supporting the Sydney Community</h3>
            <p className="text-gray-700 mb-4">
              Based in Rockdale, SOVA Care provides NDIS support in Sydney and surrounding areas, including:

            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['St George Area', 'Sutherland Shire', 'Southern Sydney', 'Inner west', 'Eastern Suburbs', 'Northern Beaches', 'Greater Sydney', 'Rockdale', 'Plus More'].map((area) => (
                <div key={area} className="bg-white p-4 rounded-md text-center">
                  <p className="text-gray-700 font-semibold">{area}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-4">
              Our local presence allows us to deliver reliable and consistent support, with a strong understanding of the needs of individuals and families in each community.

            </p>
          </div>
        </div>
      </section>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className="bg-blue-50 p-8 rounded-lg mb-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">OUR COMMITMENT
            </h2>
            <h2 className="text-1xl font-bold text-gray-900 mb-6">Support You Can Feel Confident In
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At SOVA Care, we understand that choosing a support provider is an important decision. Our commitment is to provide a service that is not only reliable but also respectful and genuinely supportive.<br />
              We aim to create a positive and comfortable experience for every individual, helping them feel supported, understood, and confident in their daily life.

            </p>
          </div>
        </div>
      </div>

      {/* Trust & Safety */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Building Trust & Safety
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={AcademicCapIcon}
              title="Qualifications"
              items={[
                'Cert III in Disability Support',
                'Cert IV in Disability Support',
                'First Aid Certified',
                'CPR Certified',
              ]}
              newitems={[
                {text: 'And More', href: '#'},
              ]}
            />
            <ServiceCard
              icon={ShieldCheckIcon}
              title="Screening & Checks"
              items={[
                'Police Check - Cleared',
                'NDIS Worker Screening - Approved',
                'Working With Children Check (if applicable)',
                'References Available',
              ]}
              newitems={[
                {text: 'And More', href: '#'},
              ]}
            />
            <ServiceCard
              icon={DocumentTextIcon}
              title="Insurance & Compliance"
              items={[
                'Comprehensive Insurance Coverage',
                'Fully NDIS Compliant',
                'Privacy Act Compliant',
                'Duty of Care Obligations Met',
              ]}
              newitems={[
                {text: 'And More', href: '#'},
              ]}
            />
          </div>
        </div>
      </section> */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Looking for Reliable and Personalised Support?
          </h2>
          <div className="max-w-2xl mx-auto bg-white border-2 border-teal-600 p-8 rounded-lg">
            <p className="text-gray-700 mb-6">
              If you are seeking experienced, qualified, and compassionate support, SOVA Care is here to help.

            </p>

            <div className="text-center">
              <Link
                href="/contact#booking"
                className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-700 transition"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

<section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Mission</h2>
           <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 text-center">
            To provide compassionate, respectful and reliable support services that help individuals maintain their independence and work toward their goals and wellbeing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <ServiceCard
              icon={HeartIcon}
              title="Compassionate"
              description="We provide care with genuine empathy and understanding of individual needs."
            />
            <ServiceCard
              icon={SparklesIcon}
              title="Respectful"
              description="We honor the dignity, preferences and independence of every person we support."
            />
            <ServiceCard
              icon={UserGroupIcon}
              title="Reliable"
              description="We aim to provide punctual, professional and reliable support tailored to each person’s needs."
            />
          </div>
        </div>
      </section>


      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            To provide compassionate, respectful and reliable support services that help individuals maintain their independence and work toward their goals and wellbeing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-teal-600 mb-4">Compassionate</h3>
              <p className="text-gray-600">We provide care with genuine empathy and understanding of individual needs.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-600 mb-4">Respectful</h3>
              <p className="text-gray-600">We honor the dignity, preferences and independence of every person we support.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-600 mb-4">Reliable</h3>
              <p className="text-gray-600">We aim to provide punctual, professional and reliable support tailored to each person’s needs.</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-red-50 border-l-4 border-red-600 p-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-red-900 mb-2">Note</h3>
          <p className="text-red-800 mb-4">
            For urgent medical emergencies, please call 000 (emergency services) immediately or visit your nearest hospital.
          </p>
          <p className="text-red-800">
            For general enquiries about SOVA Care services, please contact us on 0466 983 171 or via our contact form. Service enquiries are monitored during normal business arrangements and are not an emergency service.
          </p>
        </div>
      </section>
    </div>
  );
}
