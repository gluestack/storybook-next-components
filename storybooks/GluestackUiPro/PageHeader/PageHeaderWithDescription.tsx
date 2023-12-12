import React from 'react';

import { Box, Heading, Text } from '@gluestack-ui/themed';

import PageHeaderDescription from './PageHeaderDescription';

const PageHeaderWithDescription = () => {
  return (
    <Box
      p="$4"
      bg="$white"
      py="$12"
      borderWidth="$1"
      borderColor="$blueGray200"
      borderRadius="$md"
      flex={1}
    >
      <Heading mb="$1.5" size="xl">
        Member overview
      </Heading>
      <PageHeaderDescription>
        <Text color="$gray500">All registered users in the overview</Text>
      </PageHeaderDescription>
    </Box>
  );
};

export default PageHeaderWithDescription;
