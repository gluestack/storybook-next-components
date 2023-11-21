import React from 'react';

import {
  HStack,
  Text,
  Image,
  VStack,
  Avatar,
  Box,
  AvatarImage,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

import { ImageSourcePropType } from 'react-native';

type List = {
  imageUrl: ImageSourcePropType;
  name: string;
  reaction: string;
  time: string;
  secondImageUrl: ImageSourcePropType;
};

const list: List[] = [
  {
    imageUrl: require('./assets/images/offer11.png'),
    name: 'John',
    reaction: 'reacted to your post.',
    time: '2w',
    secondImageUrl: require('./assets/images/Promotion13.png'),
  },
  {
    imageUrl: require('./assets/images/offer7.png'),
    name: 'Priya',
    reaction: 'reacted to your post.',
    time: '2w',
    secondImageUrl: require('./assets/images/Promotion6.png'),
  },
  {
    imageUrl: require('./assets/images/offer8.png'),
    name: 'Doe.J',
    reaction: 'reacted to your post.',
    time: '2w',
    secondImageUrl: require('./assets/images/Promotion11.png'),
  },
  {
    imageUrl: require('./assets/images/offer4.png'),
    name: 'Doe.H',
    reaction: 'reacted to your post.',
    time: '2w',
    secondImageUrl: require('./assets/images/Promotion10.png'),
  },
  {
    imageUrl: require('./assets/images/offer1.png'),
    name: 'John D',
    reaction: 'reacted to your post.',
    time: '2w',
    secondImageUrl: require('./assets/images/Promotion4.png'),
  },
  {
    imageUrl: require('./assets/images/offer5.png'),
    name: 'John Doe',
    reaction: 'reacted to your post.',
    time: '2w',
    secondImageUrl: require('./assets/images/Promotion8.png'),
  },
  {
    imageUrl: require('./assets/images/offer10.png'),
    name: 'lege Doe',
    reaction: 'reacted to your post.',
    time: '2w',
    secondImageUrl: require('./assets/images/Promotion11.png'),
  },
  {
    imageUrl: require('./assets/images/offer4.png'),
    name: 'Doe.H',
    reaction: 'reacted to your post.',
    time: '2w',
    secondImageUrl: require('./assets/images/Promotion9.png'),
  },
  {
    imageUrl: require('./assets/images/offer1.png'),
    name: 'John D',
    reaction: 'reacted to your post.',
    time: '2w',
    secondImageUrl: require('./assets/images/Promotion3.png'),
  },
  {
    imageUrl: require('./assets/images/offer5.png'),
    name: 'John Doe',
    reaction: 'reacted to your post.',
    time: '2w',
    secondImageUrl: require('./assets/images/Promotion7.png'),
  },
  {
    imageUrl: require('./assets/images/offer10.png'),
    name: 'lege Doe',
    reaction: 'reacted to your post.',
    time: '2w',
    secondImageUrl: require('./assets/images/promotion12.png'),
  },
];

function ThisMonthNotification() {
  return (
    <VStack space="xl" mt="$5">
      {list.map((item, index) => {
        return (
          <HStack alignItems="center" key={index} space="md">
            <Avatar h="$10" w="$10">
              <AvatarImage source={item.imageUrl} />
            </Avatar>
            <Text
              fontSize="$sm"
              fontWeight="$bold"
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
              {item.name}
            </Text>
            <Text
              fontSize="$sm"
              fontWeight="$medium"
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
              {item.reaction}
            </Text>
            <Text
              fontSize="$sm"
              fontWeight="$normal"
              textAlign="center"
              sx={{
                _light: {
                  color: '$backgroundLight500',
                },
                _dark: {
                  color: '$textLight50',
                },
              }}
            >
              {item.time}
            </Text>
            <Image
              ml="auto"
              source={item.secondImageUrl}
              alt="Alternate Text"
              h="$10"
              w="$10"
            />
          </HStack>
        );
      })}
    </VStack>
  );
}

export default function Notifications() {
  return (
    <DashboardLayout displaySidebar={false} title="Gift Cards">
      <Box
        sx={{
          '@base': {
            p: '$4',
          },
          '@md': {
            p: '$8',
            rounded: '$sm',
          },
          '_light': {
            bg: '$backgroundLight0',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
        flex={1}
      >
        <Text
          fontSize="$md"
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
          This month
        </Text>
        <ThisMonthNotification />
      </Box>
    </DashboardLayout>
  );
}
