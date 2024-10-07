import Link from 'next/link'
import React from 'react'


export default function Appointments() {


  return (
    <div className='p-6 md:p-10 h-screen'>
      <div className="flex flex-col gap-6">
        <Link href='/'>Back</Link>
        <h1 className='text-2xl font-bold'>Appointments page</h1>
      </div>
    </div>
  )
}
