"use client"


import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import CompanyOverview from '@/components/dashboard/CompanyOverview';
import ClientOverview from '@/components/dashboard/ClientOverview';

const DashboardPage = () => {
    const [ userRole, setUserRole ] = useState('client');

  return (
    <Box>
      {userRole === 'company' ? ( <CompanyOverview /> ) : ( <ClientOverview /> )}
    </Box>
  );
};

export default DashboardPage;
