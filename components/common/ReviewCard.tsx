import React from 'react'

interface reviewProps{
  review: string;
  author: string;
}
export default function ReviewCard({ review, author }: reviewProps) {
  return (
    <div className='bg-yellowShade rounded-md p-4 w-full max-w-[300px] h-[170px] text-blueShade'>
        <div className='flex flex-col gap-2 h-full justify-between'>
                <p className='italic'>{review}</p>
                <div className='flex flex-col'>
                    <b>{author}</b>
                    <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
                </div>
        </div>
    </div>
  )
}
