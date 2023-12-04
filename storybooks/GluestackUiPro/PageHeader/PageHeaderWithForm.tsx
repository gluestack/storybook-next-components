import React from 'react';

import {
  Box,
  Button,
  ButtonText,
  HStack,
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

const PageHeaderWithForm = () => {
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
        <Text color="$primary500">Blog</Text>
      </PageHeaderDescription>
      <Heading
        // TODO to fix once margin issue is resolved
        mb="$1.5"
        size="xl"
      >
        Latest Updates
      </Heading>
      <PageHeaderDescription>
        <Text>
          Stay up-to-date with our newsletter. and never miss any news.
        </Text>
      </PageHeaderDescription>
      <HStack mt="$10" space="md" alignItems="center" justifyContent="center">
        {/* TODO - remove mr once space issue is resolved */}
        <Input>
          <InputSlot>
            <InputIcon as={SearchIcon} pl="$3" />
          </InputSlot>
          <InputField placeholder="Search" />
        </Input>
        <Button ml="$2">
          <ButtonText>Subscribe</ButtonText>
        </Button>
      </HStack>
      <Text color="$gray400" size="xs" mt="$1.5">
        For more information, please read our Privacy Policy.
      </Text>
    </Box>
  );
};

export default PageHeaderWithForm;
