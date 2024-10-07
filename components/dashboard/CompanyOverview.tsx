import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const CompanyOverview = () => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb="6">
        Company Dashboard Overview
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
        {/* Manage Appointments Widget */}
        <Box p="6" bg="white" boxShadow="md" borderRadius="md">
          <Heading as="h3" size="md" mb="4">Manage Appointments</Heading>
          <Text>View and manage all upcoming client appointments.</Text>
        </Box>

        {/* Client Requests Widget */}
        <Box p="6" bg="white" boxShadow="md" borderRadius="md">
          <Heading as="h3" size="md" mb="4">Client Requests</Heading>
          <Text>View appointment requests from clients.</Text>
        </Box>

        {/* Company Stats Widget */}
        <Box p="6" bg="white" boxShadow="md" borderRadius="md">
          <Heading as="h3" size="md" mb="4">Company Stats</Heading>
          <Text>Track your company's performance and completed appointments.</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default CompanyOverview;
