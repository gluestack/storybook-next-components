import React from 'react';

import {
  Box,
  Heading,
  Icon,
  Input,
  SearchIcon,
  Text,
} from '@gluestack-ui/themed';

import PageHeaderDescription from './PageHeaderDescription';

const PageHeaderWithInput = () => {
  return (
    <Box
      px="$4"
      py="$12"
      bg="$white"
      borderWidth="$1"
      borderColor="$blueGray200"
      borderRadius="$md"
      justifyContent="center"
      alignItems="center"
    >
      <PageHeaderDescription>
        <Text>Support</Text>
      </PageHeaderDescription>
      <Heading mb="$1.5" size="xl">
        Welcome to Help Center
      </Heading>
      <PageHeaderDescription>
        <Text>How can we help you?</Text>
      </PageHeaderDescription>
      <Input mt="$3">
        <Input.Icon pl="$3">
          <Icon as={SearchIcon} />
        </Input.Icon>
        <Input.Input placeholder="Search" />
      </Input>
    </Box>
  );
};

export default PageHeaderWithInput;
