import React, { useState } from 'react';

export default function FAQ() {
  const faqData = [
    {
      question: 'How do I schedule an appointment?',
      answer: 'To schedule an appointment, simply sign up or log in to your account. Once logged in, you can search for a company or copy and the company link, view their available time slots, and book an appointment that fits your schedule.'
    },
    {
      question: 'Can I reschedule or cancel my appointment?',
      answer: 'Yes, you can reschedule or cancel appointments by visiting your dashboard. Select the appointment you wish to modify and choose the reschedule or cancel option. Please note that changes must be made at least 24 hours in advance.'
    },
    {
      question: 'How will I receive appointment reminders?',
      answer: 'You will receive reminders via email and push notifications (if enabled) at least 24 hours before your appointment. You can also view upcoming appointments in your dashboard.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, we take your privacy seriously. All personal data and consultation details are encrypted to ensure confidentiality. We adhere to strict data security protocols.'
    },
    {
      question: 'Do I need an account to book an appointment?',
      answer: 'Yes, creating an account helps us provide a seamless experience, including appointment reminders, secure communication with the company, and access to your appointment history.'
    },
    {
      question: 'What happens if the company cancels the appointment?',
      answer: 'If a company cancels, you will be notified immediately, and we will offer you the opportunity to reschedule with the same consultant or choose another expert.'
    },
  ];

  const sideBar = [
    { label: 'Booking Process' },
    { label: 'Appointments' },
    { label: 'Account & Privacy' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl p-8 text-sm mx-auto">
      <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">FAQs</h2>
          <p className="mt-4 text-lg text-gray-600">Our answers to some of your questions.</p>
      </div>
      <div className='flex gap-8'>
        <div className='w-1/6'>
          <ul className='hidden md:flex flex-col gap-4'>
            {sideBar.map((b, id) => (
              <li key={id} onClick={() => setActive(id)} className={`${active === id ? 'font-semibold border-l-4 border-blue-400 bg-gray-300' : ''} hover:bg-gray-200 p-2 cursor-pointer`}>{b.label}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 w-full md:w-5/6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-3">
              <button className="w-full text-left flex justify-between items-center py-2" onClick={() => handleToggle(index)}>
                <span className={`${openIndex === index ? 'font-semibold' : 'font-medium'} text-gray-700`}>Q{index + 1}: {item.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
