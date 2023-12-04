import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  ScrollView,
  AvatarImage,
  Box,
  Button,
  ButtonText,
  HStack,
  Icon,
  Text,
} from '@gluestack-ui/themed';

import { Users, ShieldCheck } from 'lucide-react-native';

const USER_LIST = [
  {
    name: 'Melinda Marcus',
    isVerified: true,
    designation: 'Design Engineer at Cloth Studios',
    followersCount: 84,
    profileUrl:
      'https://images.unsplash.com/photo-1612459284970-e8f027596582?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:668&q:80',
  },
  {
    name: 'Kendra Phils',
    isVerified: false,
    designation: 'Marketing Consultant and Chief of Operations at ...',
    followersCount: 10,
    profileUrl:
      'https://images.unsplash.com/photo-1618568221633-0a45dd10ecf7?ixlib:rb-1.2.1&ixid:MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1MTcwNjR8fGVufDB8fHx8&auto:format&fit:crop&w:800&q:60',
  },
  {
    name: 'Fidelis Alaves',
    isVerified: false,
    designation: 'Product Manager',
    followersCount: 24,
    profileUrl:
      'https://images.unsplash.com/photo-1588820502373-625223afa4ce?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MjI2fHx3aGl0ZSUyMCUyMGd1eXxlbnwwfHwwfHw%3D&ixlib:rb-1.2.1&auto:format&fit:crop&w:800&q:60',
  },
];

interface USER_DATA {
  name: string;
  isVerified: Boolean;
  designation: string;
  followersCount: Number;
  profileUrl: URL;
}

interface USER {
  userData: USER_DATA;
}

const UserCardItem: (userData: USER) => JSX.Element = ({ userData }) => (
  <Box
    w={240}
    pb="$10"
    mt="$2"
    bg="$backgroundLight0"
    sx={{
      '@md': {
        mt: '$0',
      },
      '_dark': {
        bg: '$backgroundDark950',
      },
    }}
    borderRadius="$md"
  >
    <Box
      h="$12"
      w={240}
      borderRadius="$md"
      borderBottomLeftRadius={0}
      borderBottomRightRadius={0}
      pt="$2"
    >
      <Avatar alignSelf="center" size="lg">
        <AvatarFallbackText>
          {(userData && userData.name?.match(/\b\w/g).join('')) || 'AB'}
        </AvatarFallbackText>
        <AvatarImage
          source={{
            uri: userData.profileUrl,
          }}
        />
      </Avatar>
    </Box>
    <Box px="$4">
      <HStack
        mt="$10"
        w="$full"
        justifyContent="center"
        alignItems="center"
        space="sm"
      >
        <Text
          fontWeight="$bold"
          color="$textDark900"
          sx={{
            _dark: {
              color: '$textDark100',
            },
          }}
        >
          {userData?.name}
        </Text>
        {userData.isVerified && <Icon as={ShieldCheck} color="$primary500" />}
      </HStack>
      <Text
        textAlign="center"
        w="$full"
        flexWrap="wrap"
        ellipsizeMode="tail"
        fontSize="$xs"
        overflow="hidden"
        fontWeight="$light"
        color="$textLight600"
        mt="$2"
        h="$12"
        sx={{
          _dark: {
            color: '$textDark400',
          },
        }}
      >
        {userData?.designation}
      </Text>
      <HStack
        w="$full"
        justifyContent="center"
        alignItems="center"
        space="sm"
        mt="$2"
      >
        <Icon
          as={Users}
          color="$textLight600"
          sx={{
            _dark: {
              color: '$textDark100',
            },
          }}
        />
        <Text
          color="$textLight600"
          fontSize="$xs"
          sx={{
            _dark: {
              color: '$textDark100',
            },
          }}
        >{` ${userData.followersCount} followers`}</Text>
      </HStack>
      <Button
        variant="outline"
        action="secondary"
        rounded="$3xl"
        mt="$3"
        size="xs"
      >
        <ButtonText>View Profile</ButtonText>
      </Button>
    </Box>
  </Box>
);

const UserCardGrid = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <HStack
        space="sm"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        py="$4"
        flex={1}
        sx={{
          '@md': {
            flexDirection: 'row',
            justifyContent: 'center',
          },
        }}
      >
        {USER_LIST.map((item: any) => {
          return <UserCardItem userData={item} />;
        })}
      </HStack>
    </ScrollView>
  );
};

export default UserCardGrid;
