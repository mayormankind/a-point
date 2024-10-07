import React from 'react'
import Slider from 'react-slick';
import ReviewCard from './ReviewCard'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const reviews = [
    { review: "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.", author: "John Matthews", img:'/avatar.png', role:'CEO Techbias', prdImg:''},
    { review: "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.", author: "Eunice Oliver", img:'/avatar.png', role:'CEO Maothan', prdImg:'/' },
    { review: "It’s a really good product and helps me sleep better at night!", author: "Laura Davies", img:'/avatar.png', role:'CEO Facebook', prdImg:'/' },
    { review: "Helps me relax and remember to breathe. Stress level definitely goes down", author: "Jane Bocks", img:'/avatar.png', role:'CTO Grills', prdImg:'/' },
    { review: "Best sleep aid I've used. Very satisfied.", author: "Bob Johnson", img:'/avatar.png', role:'Teacher', prdImg:'/' },
]

export default function Review() {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      }

  return (
    <div className='w-full h-full flex relative shadow-custom justify-end py-6 px-4 md:px-0 md:py-12'>
      <div className='w-full h-full max-w-5xl'>
        <Slider {...settings} className='flex gap-4'>
          {reviews.map((review, index) => (
            <div key={index} className='p-2 h-full'>
              <ReviewCard review={review.review} author={review.author} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
