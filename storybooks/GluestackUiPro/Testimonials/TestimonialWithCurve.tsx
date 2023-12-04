import React from 'react';

import { PieChartIcon, MessageSquareIcon } from 'lucide-react-native';

import {
  Avatar,
  HStack,
  Icon,
  Text,
  VStack,
  ScrollView,
  AvatarImage,
  AvatarFallbackText,
} from '@gluestack-ui/themed';
import { QuotesLeftIcon, QuotesRightIcon } from '../../../assets/icons/Social';

type PersonProps = {
  person: {
    id: number;
    name: string;
    designation: string;
    profilePic: string;
    message: string;
    heading: string;
    icon: React.FC;
    bg: string;
    darkBg: string;
    quotesColor: string;
  };
};

const TESTIMONIAL_DATA = [
  {
    id: 0,
    name: 'Sarah Johnson',
    designation: 'Chief Technology Officer, Plumtic HQ',
    profilePic:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    message:
      'Consectetur adipiscing elit, lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do. Ut enim',
    heading: 'PLUMTIC',
    icon: PieChartIcon,
    bg: '$lightBlue800',
    darkBg: '$lightBlue500',
    quotesColor: '$lightBlue200',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    designation: 'Marketing Manager, Chat Monkey',
    profilePic:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    message:
      'Consectetur adipiscing elit, lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do. Ut enim',
    heading: 'Chat Monkey',
    icon: MessageSquareIcon,
    bg: '$pink600',
    darkBg: '$pink400',
    quotesColor: '$pink200',
  },
];

const Card = ({ person }: PersonProps) => {
  return (
    <VStack
      sx={{
        '@md': { flexBasis: '$1/2' },
      }}
    >
      <VStack
        space="sm"
        bg="$backgroundLight0"
        rounded="$xl"
        my="$4"
        overflow="hidden"
        sx={{
          '@md': { m: '$6' },
          '_dark': { bg: '$backgroundDark950' },
          'shadowColor': '$backgroundLight800',
          //@ts-ignore
          'shadowOffset': {
            width: 0,
            height: 1,
          },
          'shadowOpacity': 0.22,
          'shadowRadius': 2.22,
          'elevation': 3,
        }}
      >
        <VStack p="$3" sx={{ '@md': { p: '$6' } }} space="md" flex={1}>
          <Icon
            width={30}
            height={30}
            as={QuotesLeftIcon}
            color={person.quotesColor}
            transform={[{ translateY: 10 }]}
          />
          <HStack space="md" justifyContent="center" alignItems="center">
            <Icon size="xl" as={person.icon} />
            <Text color="$text400" size="lg" fontWeight="$semibold">
              {person.heading}
            </Text>
          </HStack>
          <Text
            px="$4"
            sx={{ '@md': { p: '$8' } }}
            size="lg"
            textAlign="center"
          >
            {person.message}
          </Text>
          <Icon
            width={30}
            height={30}
            as={QuotesRightIcon}
            color={person.quotesColor}
            sx={{ '@base': { props: { alignSelf: 'flex-end' } } }}
          />
        </VStack>
        <VStack
          //@ts-ignore
          borderTopRightRadius={'100%'}
          //@ts-ignore
          borderTopLeftRadius={'100%'}
          alignItems="center"
          bg={person.bg}
          sx={{ _dark: { bg: person.darkBg } }}
        >
          <Avatar transform={[{ translateY: -20 }]}>
            <AvatarImage
              source={{ uri: person.profilePic }}
              width={'$16'}
              height={'$16'}
              borderWidth={5}
              borderColor={person.bg}
              sx={{ _dark: { borderColor: person.darkBg } }}
            />
            <AvatarFallbackText>{person.name}</AvatarFallbackText>
          </Avatar>
          <VStack transform={[{ translateY: -20 }]} p="$2">
            <Text textAlign="center" fontWeight="$semibold" color="$white">
              {person.name}
            </Text>
            <Text
              textAlign="center"
              size="md"
              fontWeight="$light"
              color="$white"
            >
              {person.designation}
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

const TestimonialWithCurve = () => {
  return (
    <ScrollView>
      <VStack
        width="$full"
        height="$full"
        alignSelf="center"
        alignItems="center"
        space="md"
        p="$4"
        sx={{
          '@sm': { width: '80%' },
          '@md': { flexDirection: 'row', flexWrap: 'wrap' },
          '@lg': {
            p: '$6',
          },
        }}
      >
        {TESTIMONIAL_DATA.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </VStack>
    </ScrollView>
  );
};

export default TestimonialWithCurve;
