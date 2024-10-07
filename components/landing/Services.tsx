import React from 'react';

const services = [
  {
    title: 'Streamlined Appointment Booking',
    description:
      'Effortlessly schedule consultations with health professionals, business advisors, educators, and more—all in one platform.',
    icon: '📅',
  },
  {
    title: 'Reminders & Notifications',
    description:
      'Never miss an appointment again with our automated reminder system that keeps you and your clients on track.',
    icon: '🔔',
  },
  {
    title: 'Real-Time Availability',
    description:
      'Clients can view available slots in real-time and choose a time that works best for them, simplifying the booking process.',
    icon: '🕒',
  },
  {
    title: 'Secure & Confidential',
    description:
      'Your consultations and personal information are securely encrypted, ensuring complete confidentiality and peace of mind.',
    icon: '🔐',
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose A-point?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Simplify your scheduling and consultation experience with our comprehensive platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
