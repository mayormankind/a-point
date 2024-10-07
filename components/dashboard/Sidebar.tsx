"use client"

import { Box, Flex, IconButton, VStack, useBreakpointValue } from '@chakra-ui/react';
// import { useState } from 'react';
// import Link from 'next/link'


// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const isMobile = useBreakpointValue({ base: true, lg: false });

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {isMobile && (
//         <IconButton
//           icon={<FiMenu />}
//           aria-label="Open Menu"
//           onClick={toggleSidebar}
//           m="4"
//         />
//       )}
      
//       <Box
//         as="aside"
//         w={isOpen ? '250px' : '60px'}
//         bg="blue.700"
//         color="white"
//         position="fixed"
//         h="100%"
//         transition="width 0.3s"
//       >
//         <VStack spacing="6" p="4" align="flex-start">
//             <Link href={'/dashboard'}>
//                 <Flex align="center" w="full">
//                     <IconButton icon={<FiHome />} aria-label="Dashboard" variant="ghost" />
//                     {isOpen && <Box ml="4">Dashboard</Box>}
//                 </Flex>
//             </Link>
//             <Link href={'/dashboard/appointments'}>
//                 <Flex align="center" w="full">
//                     <IconButton icon={<FiCalendar />} aria-label="Appointments" variant="ghost" />
//                     {isOpen && <Box ml="4">Appointments</Box>}
//                 </Flex>
//             </Link>
//             <Link href={'/dashboard/profile'}>
//                 <Flex align="center" w="full">
//                     <IconButton icon={<FiUser />} aria-label="Profile" variant="ghost" />
//                     {isOpen && <Box ml="4">Profile</Box>}
//                 </Flex>
//             </Link>
//             <Link href={'/login'}>
//                 <Flex align="center" w="full">
//                     <IconButton icon={<FiLogOut />} aria-label="Logout" variant="ghost" />
//                     {isOpen && <Box ml="4">Logout</Box>}
//                 </Flex>
//             </Link>
//         </VStack>
//       </Box>
//     </>
//   );
// };

// export default Sidebar;

import Link from 'next/link';
import { useState } from 'react';
import { RiCalendarScheduleFill, RiCalendarScheduleLine, RiHome2Fill, RiHome2Line, RiSearchFill, RiSearchLine, RiUser2Line, RiUserFill, RiUserLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';


const Sidebar = ( userType:any ) => {

  const clientNavs = [
    { label:'Overview', ref:'/dashboard', icon:<RiHome2Line/>, iconActive:<RiHome2Fill/> },
    { label:'Appointments', ref:'/dashboard/appointments', icon:<RiCalendarScheduleLine/>, iconActive:<RiCalendarScheduleFill/> },
    { label:'Search', ref:'/dashboard/search', icon:<RiSearchLine/>, iconActive:<RiSearchFill/> },
    { label:'Profile', ref:'/dashboard/profile', icon:<RiUserLine/>, iconActive:<RiUserFill/> },
    { label:'Logout', ref:'/login', icon:<FiLogOut/>, iconActive:<FiLogOut/> },
  ];

  const companyNavs = [
    { label:'Overview', ref:'/dashboard', icon:<RiHome2Line/>, iconActive:<RiHome2Fill/> },
    { label:'Manage Appointments', ref:'/dashboard/appointments', icon:<RiCalendarScheduleLine/>, iconActive:<RiCalendarScheduleFill/> },
    { label:'Availability', ref:'/dashboard/availability',icon:<RiSearchLine/>, iconActive:<RiSearchFill/> },
    { label:'Profile', ref:'/dashboard/profile', icon:<RiUser2Line/>, iconActive:<RiUserFill/> },
    { label:'Logout', ref:'/login', icon:<FiLogOut/>, iconActive:<FiLogOut/> },
  ];

  const [ client, setClient ] = useState('Overview')
  const [ company, setCompany ] = useState('Overview')

  return (
    <div className="hidden md:block w-full bg-gray-800 text-white h-screen p-5">
      <h1 className="text-xl font-bold mb-5">{userType === 'client' ? 'Client' : 'Company'} Dashboard</h1>
      <nav>
        <div>
          {userType === 'client' ? (
            <ul className='flex flex-col'>
              {clientNavs.map(nav => (
                <li key={nav.label} onClick={()=>setClient(nav.label)} className={`${client === nav.label ? 'bg-white border-l-4 border-white transition duration-300 bg-opacity-10 backdrop-blur-xl' : ''} py-3 px-2`}>
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
                <li key={nav.label} onClick={()=>setCompany(nav.label)} className={`${company === nav.label ? 'bg-white border-l-4 border-white transition duration-300 bg-opacity-10 backdrop-blur-xl' : ''} py-3 px-2`}>
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
