import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import {
  BriefcaseIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  MapPinIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Aged Care Support - SOVA Care',
  description: 'Specialized aged care support services for older Australians in Sydney.',
};

export default function AgedCare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--sova-primary)] via-[var(--sova-secondary)] to-[var(--sova-accent)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Aged Care Support</h1>
          <p className="text-xl mt-4 text-teal-100">Flexible, compassionate care for older Australians</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Helping Older Australians Live Independently</h2>
          <p className="text-lg text-gray-700 mb-8">
            SOVA Care provides support to older Australians who require assistance with daily living, companionship and maintaining independence at home. Whether funded through government programs or private arrangements, we provide flexible support tailored to individual needs.
          </p>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Types of Aged Care Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ServiceCard
              icon={BriefcaseIcon}
              title="Private Aged Care Clients"
              description="Arrange and fund your own care support privately."
              items={[
                'Flexible support arrangements',
                'Direct engagement with SOVA Care',
                'Fully customized support plans',
                'Transparent, competitive pricing',
                'No government requirements',
              ]}
              moreHref="/areas-we-service"
            />
            <ServiceCard
              icon={AcademicCapIcon}
              title="Home Care Package (HCP) Clients"
              description="Receive support through your government-funded Home Care Package."
              items={[
                'Work within HCP funding limits',
                'Liaise with your HCP provider',
                'Comprehensive documentation',
                'Nationally accredited services',
                'Quality & Safety Commission approved',
              ]}
              moreHref="/areas-we-service"
            />
            <ServiceCard
              icon={BriefcaseIcon}
              title="Self-Funded Retirees"
              description="Private support for those funding care independently."
              items={[
                'Flexible scheduling',
                'No government involvement',
                'Early booking available',
                'Direct payment arrangements',
                'Personalized service plans',
              ]}
              moreHref="/areas-we-service"
            />
            <ServiceCard
              icon={ShieldCheckIcon}
              title="Veterans & Others"
              description="Support for those with alternative funding sources."
              items={[
                'Veterans\' Affairs coordination',
                'Insurance-funded care',
                'Mixed funding support',
                'Flexible billing options',
                'Comprehensive communication',
              ]}
              moreHref="/areas-we-service"
            />
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Support May Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={HeartIcon}
              title="Personal Care"
              items={['Showering & dressing', 'Grooming', 'Toileting assistance', 'Mobility support']}
            />
            <ServiceCard
              icon={WrenchScrewdriverIcon}
              title="Daily Living Tasks"
              items={['Meal preparation', 'Shopping', 'Household cleaning', 'Medication reminders']}
            />
            <ServiceCard
              icon={MapPinIcon}
              title="Community Access"
              items={['Appointments', 'Social outings', 'Transport', 'Recreation']}
            />
            <ServiceCard
              icon={UserGroupIcon}
              title="Companionship"
              items={['Social engagement', 'Conversation', 'Event attendance', 'Emotional support']}
            />
            <ServiceCard
              icon={HeartIcon}
              title="Health Support"
              items={['Recovery assistance', 'Post-hospital support', 'Health monitoring', 'Medical appointments']}
            />
            <ServiceCard
              icon={WrenchScrewdriverIcon}
              title="Home Maintenance"
              items={['Light cleaning', 'Laundry', 'Home organization', 'Yard help']}
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose SOVA Care for Aged Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal & Flexible</h3>
              <p className="text-gray-700 mb-4">
                We provide care on your terms, with flexible scheduling and personalized support tailored to your needs and preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experienced & Qualified</h3>
              <p className="text-gray-700 mb-4">
                With 20+ years in aged care, we understand the unique needs of older Australians and provide compassionate, skilled support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local & Accessible</h3>
              <p className="text-gray-700 mb-4">
                Based in Rockdale with service coverage across Sydney, we're local to your area and easily accessible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional & Safe</h3>
              <p className="text-gray-700 mb-4">
                All our support workers are police-checked, fully insured, and committed to professional, safe and respectful care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Getting Started</h2>
          <div className="max-w-2xl mx-auto bg-white border-2 border-teal-600 p-8 rounded-lg">
            <p className="text-gray-700 mb-6">
              If you're an older Australian seeking flexible, compassionate support, SOVA Care is here to help. Whether you're arranging private care, using a Home Care Package, or exploring other options, we can work with you to find the right solution.
            </p>
            <p className="text-gray-700 mb-8">
              Contact us today for a confidential discussion about your care needs and how we can support you.
            </p>
            <div className="text-center">
              <Link
                href="/contact#booking"
                className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-700 transition"
              >
                Request Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
