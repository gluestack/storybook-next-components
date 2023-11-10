import React from 'react';

import {
  Box,
  Text,
  Image,
  FormControl,
  Input,
  Button,
  Heading,
  ButtonText,
  InputField,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

function MainImage() {
  return (
    <Box alignItems="center">
      <Image
        w="$72"
        sx={{
          '@base': {
            h: '$234',
          },
          '@md': {
            h: '$64',
          },
        }}
        source={require('./assets/images/NewsletterLight.png')}
        alt="Newletter"
        resizeMode="contain"
      />
    </Box>
  );
}

function SupportText() {
  return (
    <Box justifyContent="center" alignItems="center">
      <Heading fontSize="$2xl" textAlign="center" mt="$10">
        Subscribe to our Newsletter
      </Heading>
      <Text
        fontSize="$sm"
        mt="$2"
        textAlign="center"
        fontWeight="$normal"
        sx={{
          '@lg': {
            w: '$372',
          },
          '@md': {
            w: '$354',
          },
          '_light': {
            color: '$textLight500',
          },
          '_dark': {
            color: '$textDark400',
          },
        }}
      >
        Sign up for our newsletters to get latest news, updates and amazing
        offers delivered directly to your inbox. Submit your details and get a
        sweet weekly email.
      </Text>
    </Box>
  );
}
function InputFieldCustom() {
  return (
    <FormControl
      isRequired
      sx={{
        '@base': {
          mt: '$6',
          pb: '$4',
        },
        '@md': {
          mt: '$10',
          pb: '$8',
        },
      }}
    >
      <Input py="$2" size="lg">
        <InputField
          placeholder="Enter your email address"
          color="$textLight500"
          sx={{
            _dark: {
              color: '$textDark400',
            },
          }}
          fontSize="$sm"
        />
      </Input>
    </FormControl>
  );
}

export default function Newletter() {
  return (
    <DashboardLayout
      displayScreenTitle
      title="Newsletter"
      displaySidebar={false}
    >
      <Box
        bg="$backgroundLight0"
        sx={{
          '_dark': {
            bg: '$backgroundDark800',
          },
          '@base': {
            px: '$4',
            pb: '$4',
          },
          '@md': {
            px: '$35',
            pb: '$8',
            rounded: '$sm',
          },
        }}
        pt="$8"
        flex={1}
      >
        <MainImage />
        <SupportText />
        <InputFieldCustom />
        <Button variant="solid" size="lg" mt="auto">
          <ButtonText>SUBSCRIBE NOW</ButtonText>
        </Button>
      </Box>
    </DashboardLayout>
  );
}
