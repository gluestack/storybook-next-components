import React from 'react';
import { Text, Button, Image, Box, ButtonText } from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

export default function () {
  return (
    <DashboardLayout
      title="No Internet"
      displaySidebar={false}
      rightPanelMobileHeader
    >
      <Box
        sx={{
          '@md': {
            rounded: '$sm',
            px: '$35',
            pb: '$8',
            pt: '$20',
          },
          '_light': {
            bg: '$backgroundLight0',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
        px="$4"
        pb="$4"
        pt="$8"
        flex={1}
        alignItems="center"
      >
        <Image
          size="md"
          sx={{
            w: '$56',
            h: '$56',
          }}
          source={require('./assets/images/nointernet.png')}
          alt="no internet"
        />
        <Text
          mt="$8"
          fontSize="$xl"
          fontWeight="$bold"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          You are Offline
        </Text>
        <Text
          mt="$2"
          fontSize="$sm"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          Check your internet connection.
        </Text>
        <Text
          fontSize="$sm"
          mb="$8"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          We cannot detect an internet connection.
        </Text>

        <Button
          size="lg"
          mt="auto"
          variant="solid"
          isDisabled={false}
          isFocusVisible={false}
          w="$full"
        >
          <ButtonText fontSize="$sm" fontWeight="$light">
            REFRESH
          </ButtonText>
        </Button>
      </Box>
    </DashboardLayout>
  );
}
