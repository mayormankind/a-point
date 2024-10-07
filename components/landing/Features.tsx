import React from 'react';
import { FaCalendarAlt, FaUsers, FaBell } from 'react-icons/fa';

export default function Features() {
  const features = [
    { icon: <FaCalendarAlt />, title: "Easy Appointment Scheduling", description: "Book appointments with just a few clicks." },
    { icon: <FaUsers />, title: "Manage Clients", description: "Easily keep track of all your clients in one place." },
    { icon: <FaBell />, title: "Notifications", description: "Receive notifications for upcoming appointments." }
  ];

  return (
    <section id='services' className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Explore Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border rounded-lg shadow-lg bg-white">
              <div className="text-blue-600 text-4xl mb-4 mx-auto w-fit">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
