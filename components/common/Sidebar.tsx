import Link from 'next/link';
import { useState } from 'react';

type SidebarProps = {
  userType: 'client' | 'consultant';
};

const Sidebar = ({ userType }: SidebarProps) => {

  const clientNavs = [
    { label:'Overview', ref:'/dashboard/client' },
    { label:'My Appointments', ref:'/dashboard/client/appointments' },
    { label:'Browse Consultants', ref:'/dashboard/client/search' },
    { label:'Profile', ref:'/dashboard/client/profile' },
    { label:'Logout', ref:'/login' },
  ];

  const consultantNavs = [
    { label:'Overview', ref:'/dashboard/consultant' },
    { label:'Manage Appointments', ref:'/dashboard/consultant/appointments' },
    { label:'Availability', ref:'/dashboard/consultant/availability' },
    { label:'Profile', ref:'/dashboard/consultant/profile' },
    { label:'Logout', ref:'/login' },
  ];

  const [ client, setClient ] = useState('Overview')
  const [ consultant, setConsultant ] = useState('Overview')

  return (
    <div className="hidden md:block w-72 bg-gray-800 text-white h-screen p-5">
      <h1 className="text-xl font-bold mb-5">{userType === 'client' ? 'Client' : 'Consultant'} Dashboard</h1>
      <nav>
        <div>
          {userType === 'client' ? (
            <ul className='flex flex-col'>
              {clientNavs.map(nav => (
                <li onClick={()=>setClient(nav.label)} className={`${client === nav.label ? 'bg-white border-l-4 border-white transition duration-300 bg-opacity-10 backdrop-blur-xl' : ''} py-3 px-2`}><Link href={nav.ref}>{nav.label}</Link></li>
              ))}
            </ul>
          ) : (
            <ul className='flex flex-col'>
              {consultantNavs.map(nav => (
                <li onClick={()=>setConsultant(nav.label)} className={`${consultant === nav.label ? 'bg-white border-l-4 border-white transition duration-300 bg-opacity-10 backdrop-blur-xl' : ''} py-3 px-2`}><Link href={nav.ref}>{nav.label}</Link></li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
