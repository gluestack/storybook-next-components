import React from 'react';
import {
  Text,
  VStack,
  Button,
  Image,
  Box,
  Heading,
  useColorMode,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import { ButtonText } from '@gluestack-ui/themed';

function ScreenButtons() {
  return (
    <VStack mt="auto" width="$full" space="xs">
      <Button
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText fontSize="$sm">UPDATE </ButtonText>
      </Button>

      <Button
        size="lg"
        variant="outline"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText fontSize="$sm">NOT NOW </ButtonText>
      </Button>
    </VStack>
  );
}

function PageText() {
  return (
    <VStack
      sx={{
        '@md': {
          mt: '$8',
          pb: '$8',
        },
      }}
      mt="$12"
      space="xs"
    >
      <Heading
        fontSize="$2xl"
        textAlign="center"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: 'textDark50',
          },
        }}
      >
        New update available
      </Heading>
      <Text
        sx={{
          _light: {
            color: '$textLight500',
          },
          _dark: {
            color: '$textDark400',
          },
        }}
        fontSize="$sm"
        fontWeight="normal"
        textAlign="center"
        maxWidth="$80"
      >
        The current version of the app is out of date and will stop working
        soon. To keep using, please install the latest update
      </Text>
    </VStack>
  );
}
export default function AppUpdate() {
  const colorMode = useColorMode();
  return (
    <DashboardLayout
      displaySidebar={false}
      title="App Updates"
      rightHeaderPanel
    >
      <Box
        flex={1}
        sx={{
          '@md': {
            px: '$40',
            pb: '$8',
            rounded: '$sm',
          },
          '_light': {
            bg: '$backgroundLight50',
          },
          '_dark': {
            bg: '$backgroundDark900',
          },

          '@base': {
            _dark: {
              bg: '$backgroundDark800',
            },
          },
        }}
        px="$4"
        pt="$8"
        pb="$4"
        alignItems="center"
        justifyContent="space-between"
      >
        <VStack>
          <Image
            size="2xl"
            source={
              colorMode == 'light'
                ? require('./assets/images/appupdate.png')
                : require('./assets/images/appupdatedark.png')
            }
            alt="Alternet Text"
          />
          <PageText />
        </VStack>

        <ScreenButtons />
      </Box>
    </DashboardLayout>
  );
}
