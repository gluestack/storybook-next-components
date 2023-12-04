import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  HStack,
  Icon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { Calendar, ExternalLink, Link, MapPin } from 'lucide-react-native';

const UserCardBackground = () => {
  return (
    <Box
      flexDirection="column"
      bg="$backgroundLight0"
      mt="$8"
      pt="$6"
      pb="$8"
      px="$4"
      w="$full"
      sx={{
        '_dark': {
          bg: '$backgroundDark950',
          shadowColor: '$borderLight100',
        },
        '@md': {
          borderRadius: '$md',
          shadowColor: '$borderDark100',
          shadowOpacity: '$100',
          shadowRadius: '$1.5',
          mx: 'auto',
          maxWidth: 512,
        },
      }}
    >
      <Avatar
        alignSelf="flex-start"
        size="lg"
        ml={0}
        sx={{
          '@md': {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            alignSelf: 'center',
            position: 'absolute',
            top: -24,
          },
        }}
      >
        <AvatarFallbackText>AB</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
      </Avatar>
      <Button
        action="secondary"
        variant="outline"
        mt="$1"
        size="xs"
        alignSelf="flex-end"
      >
        <ButtonIcon as={ExternalLink} mr="$1" />
        <ButtonText>Edit</ButtonText>
      </Button>

      <VStack
        // alignItems="flex-start"
        space="lg"
        // sx={{
        //   '@md': {
        //     alignItems: 'center',
        //   },
        // }}
      >
        <VStack
          alignItems="flex-start"
          sx={{
            '@md': {
              alignItems: 'center',
            },
          }}
        >
          <Text
            fontWeight="$bold"
            color="$textDark900"
            sx={{
              _dark: {
                color: '$textDark100',
              },
            }}
            fontSize="$xl"
          >
            Esther Felix
          </Text>
          <Text
            color="$textLight600"
            sx={{
              _dark: {
                color: '$textDark400',
              },
            }}
            fontWeight="$light"
            fontSize="$sm"
          >
            Frontend Developer & UI Designer
          </Text>
        </VStack>
        <Box
          w="$full"
          flexDirection="column"
          sx={{
            '@md': {
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            },
          }}
        >
          <HStack alignItems="center" space="sm">
            <Icon as={MapPin} color="$primary500" size="sm" />
            <Text color="$primary500" fontWeight="$light" fontSize="$xs">
              Memphis, USA
            </Text>
          </HStack>
          <HStack alignItems="center" space="sm">
            <Icon as={Link} color="$primary500" size="sm" />
            <Text color="$primary500" fontWeight="$light" fontSize="$xs">
              esther.com
            </Text>
          </HStack>
          <HStack alignItems="center" space="sm">
            <Icon as={Calendar} color="$primary500" size="sm" />
            <Text color="$primary500" fontWeight="$light" fontSize="$xs">
              Joined Sept. 2019
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default UserCardBackground;
