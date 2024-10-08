"use client"

import { Box, Flex, IconButton, VStack, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { RiCalendarScheduleFill, RiCalendarScheduleLine, RiHome2Fill, RiHome2Line, RiSearchFill, RiSearchLine, RiUser2Line, RiUserFill, RiUserLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { useUser } from '@/api/Context';


const Sidebar = ( userType:any ) => {

  const clientNavs = [
    { label:'Overview', ref:'/dashboard', icon:<RiHome2Line/>, iconActive:<RiHome2Fill/> },
    { label:'Appointments', ref:'/dashboard/appointments', icon:<RiCalendarScheduleLine/>, iconActive:<RiCalendarScheduleFill/> },
    { label:'Search', ref:'/dashboard/search', icon:<RiSearchLine/>, iconActive:<RiSearchFill/> },
    { label:'Profile', ref:'/dashboard/profile', icon:<RiUserLine/>, iconActive:<RiUserFill/> },
    { label:'Logout', link:'/login', ref:'', icon:<FiLogOut/>, iconActive:<FiLogOut/> },
  ]; 

  const companyNavs = [
    { label:'Overview', ref:'/dashboard', icon:<RiHome2Line/>, iconActive:<RiHome2Fill/> },
    { label:'Manage Appointments', ref:'/dashboard/appointments', icon:<RiCalendarScheduleLine/>, iconActive:<RiCalendarScheduleFill/> },
    { label:'Availability', ref:'/dashboard/availability',icon:<RiSearchLine/>, iconActive:<RiSearchFill/> },
    { label:'Profile', ref:'/dashboard/profile', icon:<RiUser2Line/>, iconActive:<RiUserFill/> },
    { label:'Logout', link:'/login', ref:'', icon:<FiLogOut/>, iconActive:<FiLogOut/> },
  ];

  const [ client, setClient ] = useState('Overview')
  const [ company, setCompany ] = useState('Overview')
  const { user, logout } =  useUser();

  const handleClient = (label: string) =>{
    setClient(label);
    logout();
  }
  const handleCompany = (label: string) =>{
    setCompany(label);
    logout();
  }

  return (
    <div className="hidden md:block w-full bg-gray-800 text-white h-screen p-5">
      <h1 className="text-xl font-bold mb-5">{user?.role === 'client' ? 'Client' : 'Company'} Dashboard</h1>
      <nav>
        <div>
          {user?.role === 'client' ? (
            <ul className='flex flex-col'>
              {clientNavs.map(nav => (
                <li key={nav.label} onClick={nav.link ? ()=>handleClient(nav.label) : ()=>setClient(nav.label)} className={`${client === nav.label ? 'bg-white border-l-4 border-white transition duration-300 bg-opacity-10 backdrop-blur-xl' : ''} py-3 px-2`}>
                  <Link href={nav.ref}>
                    <Flex align="center" w="full">
                      <IconButton aria-label={nav.label} icon={client === nav.label ? nav.iconActive : nav.icon} fontSize='22px' variant='ghost'/>
                      <Box ml="4">{nav.label}</Box>
                    </Flex>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className='flex flex-col'>
              {companyNavs.map(nav => (
                <li key={nav.label} onClick={nav.link ? ()=>handleCompany(nav.label) : ()=>setCompany(nav.label)} className={`${company === nav.label ? 'bg-white border-l-4 border-white transition duration-300 bg-opacity-10 backdrop-blur-xl' : ''} py-3 px-2`}>
                  <Link href={nav.ref}>
                    <Flex align="center" w="full">
                      <IconButton aria-label={nav.label} icon={client === nav.label ? nav.iconActive : nav.icon} fontSize='22px' variant='ghost'/>
                      <Box ml="4">{nav.label}</Box>
                    </Flex>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
