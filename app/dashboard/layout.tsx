"use client"


import { ReactNode } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Navbar from '@/components/dashboard/Navbar';
import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [ userRole, setUserRole ] = useState('client');

  return (
    <Flex height="100vh" width="100%">
      <Box display={{ base: 'none', md: 'block' }} width="250px" bg="gray.900">
        <Sidebar userType={userRole} />
      </Box>

      {/* Main content */}
      <Box flex="1" bg="gray.50" p="4" overflowY="auto">
        {children}
      </Box>

      
      <Navbar userType={userRole} />
    </Flex>
  );
};

export default DashboardLayout;
