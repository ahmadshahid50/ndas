import ServiceCard from '@/components/ServiceCard';
import { AcademicCapIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'About Us - SOVA Care',
  description: 'Learn about SOVA Care and Seiana\'s 20+ years of experience in the care industry.',
};
 
export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--sova-primary)] via-[var(--sova-secondary)] to-[var(--sova-accent)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About SOVA Care</h1>
          <p className="text-xl mt-4 text-teal-100">Our Story of Compassionate Support</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                SOVA Care was founded with the goal of providing compassionate, respectful and reliable support that helps people maintain their independence and quality of life.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Seiana brings over 20 years of experience in the care sector, with most of that time spent working in the aged care industry supporting individuals with personal care, daily living assistance and community participation.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Through this experience, she has developed a strong understanding of the importance of providing support that is patient, respectful and tailored to each individual's needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                SOVA Care was created to offer a more personal and flexible approach to support services, allowing us to work closely with each client and their families to provide care that suits their goals, routines and preferences.
              </p>
            </div>
            <div className="relative h-96 bg-gray-300 rounded-lg">
              <img
                src="/images/prsnl1.jpg"
                alt="About SOVA Care"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Where We Serve</h3>
            <p className="text-gray-700 mb-4">
              Based in Rockdale, SOVA Care provides support across the St George area, Sutherland Shire and greater Sydney region, helping people remain comfortable, independent and supported in their everyday lives.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Eastern Suburbs','Northern Beaches','Rockdale', 'Kogarah', 'Hurstville', 'St George Area', 'Sutherland Shire', 'Southern Sydney', 'Greater Sydney'].map((area) => (
                <div key={area} className="bg-white p-4 rounded-md text-center">
                  <p className="text-gray-700 font-semibold">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16 bg-gray-50">
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
              moreHref="/areas-we-service"
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
              moreHref="/areas-we-service"
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
              moreHref="/areas-we-service"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            To provide compassionate, respectful and reliable support services that empower individuals to maintain their independence, achieve their goals, and enjoy a high quality of life.
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
              <p className="text-gray-600">We are punctual, professional and consistent in delivering quality care.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
