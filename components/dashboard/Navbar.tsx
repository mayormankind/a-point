"use client"

import { Flex, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { RiCalendarScheduleFill, RiCalendarScheduleLine, RiHome2Fill, RiHome2Line, RiSearchFill, RiSearchLine, RiUser2Line, RiUserFill, RiUserLine } from 'react-icons/ri';
import { useUser } from '@/api/Context';


const Navbar = ( userType : any) => {

  const clientNavs = [
    { label:'Overview', ref:'/dashboard', icon:<RiHome2Line/>, iconActive:<RiHome2Fill/> },
    { label:'Appointments', ref:'/dashboard/appointments', icon:<RiCalendarScheduleLine/>, iconActive:<RiCalendarScheduleFill/> },
    { label:'Search', ref:'/dashboard/search', icon:<RiSearchLine/>, iconActive:<RiSearchFill/> },
    { label:'Profile', ref:'/dashboard/profile', icon:<RiUserLine/>, iconActive:<RiUserFill/> },
  ];

  const companyNavs = [
    { label:'Overview', ref:'/dashboard', icon:<RiHome2Line/>, iconActive:<RiHome2Fill/> },
    { label:'Appointments', ref:'/dashboard/appointments', icon:<RiCalendarScheduleLine/>, iconActive:<RiCalendarScheduleFill/> },
    { label:'Availability', ref:'/dashboard/availability',icon:<RiSearchLine/>, iconActive:<RiSearchFill/> },
    { label:'Profile', ref:'/dashboard/profile', icon:<RiUser2Line/>, iconActive:<RiUserFill/> },
  ];

  const [ client, setClient ] = useState('Overview')
  const [ company, setCompany ] = useState('Overview')
  const { user } = useUser();

  return (
    <div className="fixed bottom-0 w-full bg-white z-10 shadow-lg flex justify-around md:hidden">
      {user?.role === 'client' ? (
        <ul className='flex w-full justify-between'>
          {clientNavs.map(nav => (
            <li key={nav.label} title={nav.label} onClick={()=>setClient(nav.label)} className={`${client === nav.label ? 'border-t-4 w-full border-blue-600 transition font-semibold duration-300 text-gray-800 py-3' : 'py-4 text-gray-600'} px-2`}>
              <Link href={nav.ref}>
                <div className="flex flex-col items-center">
                  <IconButton aria-label={nav.label} icon={client === nav.label ? nav.iconActive : nav.icon} color='blue.600' fontSize='22px'/>
                </div>  
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className='flex justify-between w-full'>
          {companyNavs.map(nav => (
            <li key={nav.label} title={nav.label} onClick={()=>setCompany(nav.label)} className={`${company === nav.label ? 'border-t-4 border-blue-600 transition font-semibold duration-300 text-gray-800' : 'text-gray-600'}`}>
              <Link href={nav.ref}>
                <div className="flex flex-col items-center">
                    <IconButton aria-label={nav.label} icon={company === nav.label ? nav.iconActive : nav.icon} variant='ghost' fontSize='22px' className='h-8 w-8'/>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

//       boxShadow="0 -2px 10px rgba(0, 0, 0, 0.2)"
