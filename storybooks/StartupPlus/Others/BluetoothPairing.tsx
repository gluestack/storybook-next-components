import React from 'react';
import {
  Text,
  VStack,
  Button,
  Image,
  Box,
  Heading,
  ButtonText,
  useColorMode,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';

function ScreenText() {
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
      alignItems="center"
    >
      <Heading
        fontSize="2xl"
        textAlign="center"
        lineHeight="$2xl"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
      >
        Let’s pair with other devices?
      </Heading>
      <Text
        fontSize="$sm"
        textAlign="center"
        fontWeight="normal"
        sx={{
          _light: {
            color: '$textLight500',
          },
          _dark: {
            color: '$textDark400',
          },
        }}
        w="$80"
      >
        Turn on your Bluetooth connection settings and get ready to connect with
        other nearby devices. It is going to take only few seconds.
      </Text>
    </VStack>
  );
}

export default function BluetoothPairing() {
  const colorMode = useColorMode();
  return (
    <DashboardLayout
      displaySidebar={false}
      title="Bluetooth Pairing"
      rightHeaderPanel
    >
      <Box
        sx={{
          '@md': {
            px: '$32',
            pt: '$20',
            pb: '$8',
            rounded: '$sm',
          },
          '_light': {
            bg: '$backgroundLight50',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
        px="$4"
        pt="$8"
        pb="$4"
        flex={1}
        alignItems="center"
      >
        <Image
          size="md"
          w="$72"
          h="$56"
          source={
            colorMode == 'light'
              ? require('./assets/images/light.png')
              : require('./assets/images/dark.png')
          }
          alt="gluestack-ui"
        />

        <ScreenText />

        <Button
          variant="solid"
          mt="auto"
          w="$full"
          maxWidth="$736"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText fontSize="$sm">PAIR DEVICE </ButtonText>
        </Button>
      </Box>
    </DashboardLayout>
  );
}
