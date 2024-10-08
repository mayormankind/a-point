import React from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Image from 'next/image';
import Link from 'next/link';
import Sponsors from './Sponsors';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero({ setRole, signupRole }: any) {
  const illustrations = [
    '/online-calendar-animate.svg',
    '/reminders-animate.svg',
    // '/appointment-illustration.svg',
  ];

  const settings = {
    dots: true, // Enable dots below the illustrations
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#3182CE",
          borderRadius: "10px",
          display: "inline-block",
        }}
      ></div>
    )
  };

  return (
    <div className='w-full h-full min-h-screen'>
      <Header />
      <div className='w-full h-full relative grid'>
        {/* Glassmorphism Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-light-blue-200 bg-opacity-30 backdrop-blur-md"></div>
        <div className="w-full max-w-5xl mx-auto p-4 lg:p-0 relative z-10">
          <div className="flex flex-col w-full h-screen md:flex-row">
            {/* Left Section: Headline and CTA */}
            <div className="flex flex-col gap-6 h-fit text-[#12305B] my-auto items-start text-sm w-full md:w-1/2">
              <h1 className='font-bold text-2xl md:text-3xl'>
                Effortless Appointment Scheduling for Busy Professionals
              </h1>
              <h3 className=''>
                Simplify how you manage appointments, stay organized, and focus on what matters.
              </h3>
              <div className="flex gap-8">
                <button className='bg-blue-600 shadow-lg hover:bg-blue-700 transition duration-300 p-3 font-semibold text-white rounded-md'>
                  <Link href='/signup' onClick={() => setRole('client')}>For Companies</Link>
                </button>
                <button className='bg-transparent text-blue-600 font-semibold border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 p-3 rounded-md'>
                  <Link href='/signup' onClick={() => setRole('client')}>For Clients</Link>
                </button>
              </div>
            </div>

            {/* Right Section: Illustration Slider */}
            {/* <div className="hidden md:flex w-full md:w-1/2 items-center justify-center"> */}
            <div className="flex w-full w-1/2 items-center justify-center">
              <Slider {...settings} className="w-2/3 mx-auto">
                {illustrations.map((illustration, index) => (
                  <div key={index} className="flex justify-center">
                    <Image
                      src={illustration}
                      alt={`Illustration ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-contain"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <Sponsors />
      </div>
    </div>
  );
};
