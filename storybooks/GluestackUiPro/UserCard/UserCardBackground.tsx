import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Button,
  ButtonIcon,
  ButtonText,
  HStack,
  Icon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { Calendar, FileEdit, Link, MapPin } from 'lucide-react-native';

const UserCardBackground = (_props: any) => {
  return (
    <VStack
      bg="$backgroundLight50"
      pt="$6"
      pb="$8"
      px="$4"
      w="$full"
      sx={{
        '_web': { mt: '$8' },
        '_dark': {
          bg: '$backgroundDark900',
        },
        '@md': {
          borderRadius: '$md',
          mx: 'auto',
          maxWidth: 512,
        },
      }}
    >
      <Avatar
        alignSelf="flex-start"
        size="lg"
        ml="$0"
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
        <ButtonIcon as={FileEdit} mr="$2" />
        <ButtonText>Edit</ButtonText>
      </Button>

      <VStack space="lg">
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
        <VStack
          w="$full"
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
        </VStack>
      </VStack>
    </VStack>
  );
};

export default UserCardBackground;
