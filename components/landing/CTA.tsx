import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Streamline Your Scheduling Process?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Whether you're managing appointments for a business or scheduling personal consultations, our platform makes it easy and efficient.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/signup"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Create an Account
          </a>
          <a
            href="/schedule"
            className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Schedule an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
