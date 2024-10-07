import React from 'react'
import Image from 'next/image';

export default function Sponsors() {

    const sponsors = [
        {img:'/google.png'},
        {img:'/forbes.png'},
        {img:'/bloomberg.png'},
        {img:'/SleepReview.png'},
        {img:'/influencive.png'},
    ]

  return (
    <div className="flex gap-4 flex-wrap bg-white w-11/12 p-2 md:p-4 self-end md:w-full md:max-w-5xl justify-around absolute -bottom-6 right-5 md:right-0 z-10 shadow-custom">
        {sponsors.map((sp,id)=>(
          <Image key={id} src={sp.img} alt='our sponsors' width={100} height={100} className='w-[100px]'/>
        ))}
    </div>
  )
}
