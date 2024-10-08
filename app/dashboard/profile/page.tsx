"use client"


import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import CompanyProfile from '@/components/dashboard/CompanyProfile';
import ClientProfile from '@/components/dashboard/ClientProfile';
import { useUser } from '@/api/Context';

const DashboardPage = () => {
    const [ userRole, setUserRole ] = useState('client');
    const { user } = useUser();

  return (
    <Box>
      {user?.role === 'company' ? ( <CompanyProfile /> ) : ( <ClientProfile /> )}
    </Box>
  );
};

export default DashboardPage;