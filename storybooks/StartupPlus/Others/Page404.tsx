import React from 'react';
import {
  Text,
  Button,
  Image,
  Box,
  Heading,
  ButtonText,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';

export default function Page404() {
  return (
    <DashboardLayout displaySidebar={false} title="Newsletter">
      <Box
        sx={{
          '@base': {
            px: '$4',
            pt: '$8',
            pb: '$4',
          },
          '@md': {
            px: '$35',
            pt: '$10',
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
        flex={1}
        alignItems="center"
      >
        <Image
          alt="404 page"
          width="$422"
          height="$96"
          source={require('./assets/images/404.png')}
          sx={{
            '@md': {
              mt: '$16',
            },
          }}
        />
        <Heading
          mt="$10"
          fontSize="$2xl"
          textAlign="center"
          sx={{
            _light: {
              color: '$backgroundDark800',
            },
            _dark: {
              color: '$backgroundDark50',
            },
          }}
        >
          Oops! Page not found
        </Heading>
        <Text
          fontSize="$sm"
          mt="$2"
          mb="$8"
          textAlign="center"
          fontWeight="$normal"
          sx={{
            '_light': {
              color: '$backgroundDark500',
            },
            '_dark': {
              color: '$backgroundDark400',
            },
            '@base': {
              maxWidth: '$72',
            },
            '@md': {
              maxWidth: '$372',
            },
          }}
        >
          The page you are looking for might have been removed, had it’s name
          changed, or is temporary unavailable
        </Text>
        <Button w="$full" mt="auto" variant="solid" size="lg">
          <ButtonText color="$backgroundDark50" fontSize="$sm">
            RETURN HOME
          </ButtonText>
        </Button>
      </Box>
    </DashboardLayout>
  );
}
