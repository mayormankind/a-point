import React from 'react'
import Slider from 'react-slick';
import ReviewCard from './ReviewCard'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { reviews } from './Review';

export default function ProductReview() {

    const settings = {
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
