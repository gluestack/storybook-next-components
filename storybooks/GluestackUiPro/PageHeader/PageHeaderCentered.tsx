import React from 'react';

import { Box, Heading, Text } from '@gluestack-ui/themed';

import PageHeaderDescription from './PageHeaderDescription';

const PageHeaderCentered = () => {
  return (
    <Box
      px="$4"
      py="$12"
      borderWidth="$1"
      borderColor="$blueGray200"
      borderRadius="$md"
      justifyContent="center"
      alignItems="center"
    >
      <PageHeaderDescription>
        <Text>Pricing</Text>
      </PageHeaderDescription>
      <Heading mb="$1.5" size="xl">
        Get lifetime access
      </Heading>
      <PageHeaderDescription>
        <Text>Get early access to 210+ components and free updates.</Text>
      </PageHeaderDescription>
    </Box>
  );
};

export default PageHeaderCentered;
