import React from 'react';

export default function HowItWorks() {
  return (
    <section id='faqs' className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
            <p>Create an account to get started as a client or a company.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">2. Schedule</h3>
            <p>Select a time and date for your appointment with ease.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">3. Get Reminded</h3>
            <p>Receive timely reminders for upcoming appointments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}