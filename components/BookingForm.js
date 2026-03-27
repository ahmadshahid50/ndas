'use client';

import { useState, useTransition } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    participantName: '',
    ndisType: '',
    servicesNeeded: [],
    location: '',
    preferredContact: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const services = [
    'Personal Care',
    'Daily Living Support',
    'Community Access',
    'Domestic Assistance',
    'Companion Care',
  ];

  const locations = [
    'Rockdale',
    'Kogarah',
    'Hurstville',
    'St George Area',
    'Sutherland Shire',
    'Southern Sydney',
    'Greater Sydney',
    'Eastern Suburbs',
    'Northern Beaches'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        servicesNeeded: checked
          ? [...prev.servicesNeeded, value]
          : prev.servicesNeeded.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (
      !formData.name ||
      !formData.participantName ||
      !formData.ndisType ||
      formData.servicesNeeded.length === 0 ||
      !formData.location ||
      !formData.preferredContact
    ) {
      setError('Please fill in all required fields.');
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch('/api/booking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit booking request');
        }

        setSubmitted(true);
        setFormData({
          name: '',
          participantName: '',
          ndisType: '',
          servicesNeeded: [],
          location: '',
          preferredContact: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      } catch (err) {
        setError(err.message || 'An error occurred. Please try again.');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-md">
          Thank you for your booking request! We'll contact you shortly to confirm.
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-md">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-500"
          placeholder="Your full Name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Participant Name *
        </label>
        <input
          type="text"
          name="participantName"
          value={formData.participantName}
          onChange={handleChange}
          className="text-gray-500 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          placeholder="Name of participant receiving care"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          NDIS Plan Type *
        </label>
        <select
          name="ndisType"
          value={formData.ndisType}
          onChange={handleChange}
          className="text-gray-500 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          required
        >
          <option value="">Select plan type</option>
          <option value="self-managed">Self-Managed</option>
          <option value="plan-managed">Plan-Managed</option>
          <option value="not-ndis">Not NDIS (Private Client)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Services Needed *
        </label>
        <div className="space-y-2">
          {services.map((service) => (
            <label key={service} className="flex items-center">
              <input
                type="checkbox"
                name="servicesNeeded"
                value={service}
                checked={formData.servicesNeeded.includes(service)}
                onChange={handleChange}
                className="w-4 h-4 text-teal-600 rounded focus:ring-teal-600"
              />
              <span className="ml-2 text-gray-700">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location *
        </label>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="text-gray-500 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          required
        >
          <option value="">Select location</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Contact Method *
        </label>
        <select
          name="preferredContact"
          value={formData.preferredContact}
          onChange={handleChange}
          className="text-gray-500 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          required
        >
          <option value="">Select contact method</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
          <option value="either">Either</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
      >
        {isPending ? 'Submitting...' : 'Book Support'}
      </button>
    </form>
  );
}
