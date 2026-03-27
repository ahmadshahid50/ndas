import ServiceCard from '@/components/ServiceCard';
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
  title: 'Services - SOVA Care',
  description: 'Discover the range of support services SOVA Care provides.',
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--sova-primary)] via-[var(--sova-secondary)] to-[var(--sova-accent)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-xl mt-4 text-teal-100">Comprehensive support tailored to your needs</p>
        </div>
      </section>

      {/* Personal Care */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Personal Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ServiceCard
              title="What We Provide"
              items={[
                'Dressing support',
                'Toileting assistance',
                'Mobility support and transfers',
                'Incontinence care',
                'Personal hygiene support',
              ]}
            />
            <div className="relative h-72 bg-gray-300 rounded-lg">
              <img
                src="/images/prsnl2.jpg"
                alt="Personal Care Services"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Living Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Daily Living Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-72 bg-gray-300 rounded-lg">
              <img
                src="/images/support1.webp"
                alt="Daily Living Support"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <ServiceCard
              title="What We Provide"
              items={[
                'Meal preparation and cooking',
                'Medication reminders and management',
                'Household task assistance',
                'Shopping and errands',
                'Budgeting support',
                'Organizational assistance',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Community Access */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Community Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ServiceCard
              title="What We Provide"
              items={[
                'Social outings and activities',
                'Appointments and medical visits',
                'Recreational activities',
                'Transport assistance',
                'Community participation support',
                'Leisure and hobby support',
              ]}
            />
            <div className="relative h-72 bg-gray-300 rounded-lg">
              <img
                src="/images/support2.jpg"
                alt="Community Access"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domestic Assistance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Domestic Assistance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-72 bg-gray-300 rounded-lg">
              <img
                src="/images/support3.jpg"
                alt="Domestic Assistance"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <ServiceCard
              title="What We Provide"
              items={[
                'Home cleaning and tidying',
                'Laundry and ironing',
                'Home organisation',
                'Light maintenance tasks',
                'Meal preparation areas',
                'Garden assistance',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Companion Care */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Companion Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ServiceCard
              title="What We Provide"
              items={[
                'Conversation and companionship',
                'Emotional support',
                'Attending events and outings',
                'Social activities',
                'Memory support and reminiscence',
                'Relationship building',
              ]}
            />
            <div className="relative h-72 bg-gray-300 rounded-lg">
              <img
                src="/images/support4.jpg"
                alt="Companion Care"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Support */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Flexible & Personalized</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={ClockIcon}
              title="Flexible Hours"
              description="We work around your schedule with flexible support hours to suit your needs."
            />
            <ServiceCard
              icon={SparklesIcon}
              title="Tailored Support"
              description="Every care plan is customized to your specific goals, preferences and routines."
            />
            <ServiceCard
              icon={UserGroupIcon}
              title="Independence Focused"
              description="We support you in maintaining and building your independence and skills."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
