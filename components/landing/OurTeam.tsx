import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function OurTeam() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablet screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // small mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

    const team = [
      {name: 'Makinde Mayowa', role: 'Developer', image: '/1728363895379.jpg',},
      {name: 'Lawal Mercy', role: 'Analysis', image: '/avatar.png',},
      {name: 'Kaffi Eliakim', role: 'UI/UX developer', image: '/avatar.png',},
      {name: 'Ikuwmelo Collins', role: 'UI/UX developer', image: '/avatar.png',},
      {name: 'Kareem Ayomide', role: 'Financial Consulting', image: '/IMG-29241007-WA0026.jpg',},
      {name: 'Ijiyokun Jeremiah', role: 'Career Counseling', image: '/avatar.png',},
    ];

  return (
    <section id='team' className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet our project team ready behind the realization.
          </p>
        </div>
          <Slider {...settings} className='flex gap-4'>
              {team.map((member, index) => (
                <div key={index} className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-56 h-56 object-cover rounded-full mx-auto"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-sm text-blue-600 mb-2">{member.role}</p>
                  </div>
                </div>
              ))}
          </Slider>
      </div>
    </section>
  );
};
