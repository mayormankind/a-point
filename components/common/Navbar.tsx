import { Flex, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { RiCalendarScheduleFill, RiCalendarScheduleLine, RiHome2Fill, RiHome2Line, RiProfileFill, RiProfileLine, RiSearchFill, RiSearchLine, RiUser2Line, RiUserFill, RiUserLine } from 'react-icons/ri';

const Navbar = ({ userType }: { userType: 'client' | 'consultant' }) => {

  const clientNavs = [
    { label:'Overview', ref:'/dashboard/client', icon:<RiHome2Line/>, iconActive:<RiHome2Fill/> },
    { label:'Appointments', ref:'/dashboard/client/appointments', icon:<RiCalendarScheduleLine/>, iconActive:<RiCalendarScheduleFill/> },
    { label:'Search', ref:'/dashboard/client/search', icon:<RiSearchLine/>, iconActive:<RiSearchFill/> },
    { label:'Profile', ref:'/dashboard/client/profile', icon:<RiUserLine/>, iconActive:<RiUserFill/> },
  ];

  const consultantNavs = [
    { label:'Overview', ref:'/dashboard/consultant', icon:<RiHome2Line/>, iconActive:<RiHome2Fill/> },
    { label:'Appointments', ref:'/dashboard/consultant/appointments', icon:<RiCalendarScheduleLine/>, iconActive:<RiCalendarScheduleFill/> },
    { label:'Availability', ref:'/dashboard/consultant/availability',icon:<RiSearchLine/>, iconActive:<RiSearchFill/> },
    { label:'Profile', ref:'/dashboard/consultant/profile', icon:<RiUser2Line/>, iconActive:<RiUserFill/> },
  ];

  const [ client, setClient ] = useState('Overview')
  const [ consultant, setConsultant ] = useState('Overview')

  return (
    <div className="fixed bottom-0 w-full bg-white shadow-lg flex justify-around md:hidden">
      {userType === 'client' ? (
        <ul className='flex w-full justify-between'>
          {clientNavs.map(nav => (
            <li title={nav.label} onClick={()=>setClient(nav.label)} className={`${client === nav.label ? 'border-t-4 w-full border-blue-600 transition font-semibold duration-300 text-gray-800 py-3' : 'py-4 text-gray-600'} px-2`}>
              <Link href={nav.ref}>
                <div className="flex flex-col items-center">
                  <IconButton aria-label={nav.label} icon={client === nav.label ? nav.iconActive : nav.icon}/>
                  {/* // <p className='hidden'>{nav.label}</p> */}
                </div>
                
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className='flex justify-between w-full'>
          {consultantNavs.map(nav => (
            <li title={nav.label} onClick={()=>setConsultant(nav.label)} className={`${consultant === nav.label ? 'border-t-4 border-blue-600 transition font-semibold duration-300 text-gray-800' : 'text-gray-600'}`}>
              <Link href={nav.ref}>
                <div className="flex flex-col items-center">
                    <IconButton aria-label={nav.label} icon={consultant === nav.label ? nav.iconActive : nav.icon} variant='ghost' size='22px' className='h-8 w-8'/>
                </div>
                {/* {consultant =  */}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
