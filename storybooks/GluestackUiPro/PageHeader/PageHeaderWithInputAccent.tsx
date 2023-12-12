import React from 'react';

import {
  Box,
  Heading,
  Icon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
  Text,
} from '@gluestack-ui/themed';

import PageHeaderDescription from './PageHeaderDescription';

const PageHeaderWithInputAccent = () => {
  return (
    <Box
      px="$4"
      py="$12"
      bg="$primary500"
      borderWidth="$1"
      borderColor="$blueGray200"
      borderRadius="$md"
      justifyContent="center"
      alignItems="center"
    >
      <PageHeaderDescription>
        <Text color="$white">Support</Text>
      </PageHeaderDescription>
      <Heading mb="$1.5" size="xl" color="$white">
        Welcome to Help Center
      </Heading>
      <PageHeaderDescription>
        <Text color="$white">How can we help you?</Text>
      </PageHeaderDescription>
      <Input bg="$primary400" borderWidth={1} borderColor="$primary500" mt="$3">
        <InputSlot>
          <InputIcon as={SearchIcon} color="$white" pl="$3" />
        </InputSlot>
        <InputField
          placeholder="Search"
          color="$white"
          placeholderTextColor="$white"
        />
      </Input>
    </Box>
  );
};

export default PageHeaderWithInputAccent;
