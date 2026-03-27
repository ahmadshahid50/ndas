'use client';

import { useState, useTransition } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields.');
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
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
          Thank you for contacting us! We'll get back to you soon.
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-md">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-500"
          placeholder="Your Name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-500"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-500"
          placeholder="0290 000 000"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-500"
          placeholder="Tell us how we can help?"
          rows="5"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold cursor-pointer"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
