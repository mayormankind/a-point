import Link from 'next/link'
import React from 'react'
import { useUser } from '@/api/Context';


export default function ClientProfile() {

  const { user, logout } = useUser();
  
  return (
    <div className='w-full h-screen flex flex-col bg-gray-100 text-sm'>
      <div className="p-6 md:p-10 bg-white shadow-md">
        <div className="flex justify-between items-center">
          <button className="text-blue-600 hover:underline">Back</button>
          <button className="text-blue-600 hover:underline">Edit</button>
        </div>
        <div className="flex gap-8 items-center mt-6">
          <img src="/avatar.png" alt="" className="w-20 h-20 rounded-full" />
          <div>
            <h1 className="font-bold text-2xl text-gray-800">{user?.displayName}</h1>
            <h3 className="text-gray-600">{user?.displayName ? user?.displayName : 'Client'}</h3>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-600">(234)-704-1234-5678</h3>
          <h3 className="text-gray-600">{user?.email}</h3>
        </div>
        <div className="mt-8">
          <h2 className="font-semibold text-xl text-gray-700">Booking History</h2>
          <p className="text-gray-600">"Session with Makinde Mayowa on 05/12/2024"</p>
        </div>
        <div className="mt-8">
          <h2 className="font-semibold text-xl text-gray-700">Payment Information</h2>
          <p className="text-gray-600">Visa ending in 1234</p>
        </div>
      </div>
      <div className="mt-6 bg-white p-6">
        <ul className='font-semibold text-gray-700'>
          <li className='px-6 py-3 cursor-pointer hover:bg-blue-400'><Link href='/settings/edit-profile'>Edit Profile</Link></li>
          <li className='px-6 py-3 cursor-pointer hover:bg-blue-400'>Notifications</li>
          <li className='px-6 py-3 cursor-pointer hover:bg-blue-400'>Settings</li>
          <hr />
          <li onClick={logout} className='px-6 py-3 text-red-700 cursor-pointer hover:bg-blue-400'>Logout</li>
        </ul>
      </div>
    </div>
  )
}
