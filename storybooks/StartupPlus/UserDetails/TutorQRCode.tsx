import React from 'react';
import {
  Box,
  Text,
  VStack,
  Avatar,
  Image,
  Button,
  AvatarImage,
  ButtonText,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

function PersonInformation() {
  return (
    <VStack alignItems="center" sx={{ '@md': { flexDirection: 'row' } }}>
      <Avatar size="lg">
        <AvatarImage source={require('./assets/images/janedoe.png')} />
      </Avatar>
      <VStack
        mt="$1.5"
        sx={{
          '@lg': {
            alignItems: 'flex-start',
          },
          '@md': {
            justifyContent: 'center',
            alignItems: 'center',
            mt: '$0',
            ml: '$4',
          },
        }}
      >
        <Text
          color="$textLight800"
          sx={{ _dark: { color: '$textDark50' } }}
          fontSize="$md"
          fontWeight="$medium"
        >
          Abraham Khan
        </Text>
        <Text
          fontSize="$sm"
          color="$textLight500"
          sx={{ _dark: { color: '$textDark400' } }}
          fontWeight="$medium"
        >
          Abrahamfo@okaxis
        </Text>
      </VStack>
    </VStack>
  );
}
function QrCode() {
  return (
    <>
      <Image
        size="2xl"
        alt="Login QR Code"
        mt="$4"
        sx={{ '@md': { mt: '$8' } }}
        source={require('./assets/images/QR.png')}
      />

      <Box display="none" sx={{ '@md': { display: 'flex' } }}>
        <Text
          mt="$5"
          fontSize="$sm"
          fontWeight="$medium"
          color="$textLight500"
          sx={{ _dark: { color: '$textDark300' } }}
        >
          Please show this at the store
        </Text>
      </Box>
    </>
  );
}

export default function TutorQRCode() {
  return (
    <DashboardLayout
      displaySidebar={false}
      title="QR Code"
      displayNotificationButton={false}
    >
      <VStack
        px="$4"
        pt="$5"
        pb="$4"
        bg="$backgroundLight0"
        sx={{
          '_dark': { bgColor: '$backgroundDark800' },
          '@md': {
            rounded: '$sm',
            px: '$0',
            pt: '$10',
            pb: '$10',
          },
        }}
      >
        <Box
          alignItems="center"
          bg="$primary50"
          py="$12"
          my="$16"
          mx="$0"
          rounded="$sm"
          sx={{
            '_dark': { bg: '$backgroundDark700' },
            '@md': {
              py: '$10',
              my: '$20',
              mx: '$35',
            },
          }}
        >
          <PersonInformation />
          <QrCode />
        </Box>

        <Box sx={{ '@md': { display: 'none' } }}>
          <Button mt="auto" variant="solid" size="lg">
            <ButtonText> OPEN CODE SCANNER </ButtonText>
          </Button>
        </Box>
      </VStack>
    </DashboardLayout>
  );
}
