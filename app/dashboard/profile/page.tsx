"use client"


import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import CompanyProfile from '@/components/dashboard/CompanyProfile';
import ClientProfile from '@/components/dashboard/ClientProfile';

const DashboardPage = () => {
    const [ userRole, setUserRole ] = useState('client');

  return (
    <Box>
      {userRole === 'company' ? ( <CompanyProfile /> ) : ( <ClientProfile /> )}
    </Box>
  );
};

export default DashboardPage;