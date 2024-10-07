"use client"

import { Divider } from '@chakra-ui/react';
// import { Close, Menu } from '@mui/icons-material'; 
import Link from 'next/link';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { RiCloseFill, RiMenu4Fill } from 'react-icons/ri';

export default function Profile() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white text-sm">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-100">
        <button onClick={toggleDrawer} className="text-blue-600">
          {drawerOpen ? <RiCloseFill className="h-6 w-6"/> : <RiMenu4Fill className="h-6 w-6"/>}
        </button>
        <h1 className="font-bold text-xl text-gray-800">Profile</h1>
      </div>

      {/* Sidebar */}
      <div
        className={`w-full md:w-1/3 lg:w-1/4 bg-gray-100 h-full p-6 fixed md:static z-50 transition-transform transform ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center text-black">
            <button className="text-blue-600 hover:underline" onClick={()=>setDrawerOpen(false)}>Back</button>
            <button className="text-blue-600 hover:underline">Edit</button>
          </div>
          <div className="flex gap-8 items-center">
            <img
              src="/avatar.png"
              alt="Profile Image"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl text-gray-800">Makinde Mayowa</h1>
              <h3 className="text-gray-600">Career Consultant</h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-gray-600">
            <h3>(234)-704-4082-9383</h3>
            <h3>mayowamakinde23@gmail.com</h3>
          </div>
        </div>
        <Divider />
        {/* <hr className="my-4" /> */}
        <ul className="font-semibold text-gray-700">
          <li className="px-6 py-3 cursor-pointer hover:bg-blue-400 hover:text-white transition">
            <Link href="/settings/edit-profile">Edit Profile</Link>
          </li>
          <li className="px-6 py-3 cursor-pointer hover:bg-blue-400 hover:text-white transition">
            Notifications
          </li>
          <li className="px-6 py-3 cursor-pointer hover:bg-blue-400 hover:text-white transition">
            Settings
          </li>
          <hr className="my-2" />
          <li className="px-6 py-3 text-red-700 cursor-pointer hover:bg-red-500 hover:text-white transition">
            Logout
          </li>
        </ul>
      </div>

      {/* Overlay for Mobile Drawer */}
      {drawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"></div>
      )}

      {/* Main Content Area */}
      <div className="w-full md:w-2/3 lg:w-3/4 bg-white p-6 md:p-10">
        <h2 className="text-xl font-bold text-gray-800">Welcome, Makinde Mayowa!</h2>
        <p className="text-gray-600 mt-4">
          Here is your profile overview. You can edit your details, check notifications, and manage
          your account settings."
        </p>"
      </div>
    </div>
  );
}
