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
export default function EmptyPlaylist() {
  return (
    <DashboardLayout displaySidebar={false} title="Playlist">
      <Box
        sx={{
          '@base': {
            px: '$4',
            pt: '$8',
            pb: '$4',
          },
          '@md': {
            px: '$32',
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
          alt="emptyplaylist"
          width="$64"
          height="$56"
          source={require('./assets/images/emptyplaylist.png')}
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
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          No playlist found
        </Heading>
        <Text
          fontSize="$sm"
          my="$2"
          textAlign="center"
          fontWeight="$normal"
          sx={{
            '@md': {
              maxWidth: '$80',
            },
            '_light': {
              color: '$textLight500',
            },
            '_dark': {
              color: '$textDark400',
            },
          }}
        >
          We didn’t find any playlist in your music folder. Use the{' '}
          <Text
            fontSize="$sm"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            “Create Playlist”
          </Text>
          feature to find your playlist.
        </Text>
        <Button w="$full" mt="auto" variant="solid" size="lg">
          <ButtonText fontSize="$sm" color="$textLight50">
            CREATE PLAYLIST
          </ButtonText>
        </Button>
      </Box>
    </DashboardLayout>
  );
}
