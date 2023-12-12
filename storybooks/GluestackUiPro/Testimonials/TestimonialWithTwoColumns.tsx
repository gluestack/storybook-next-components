/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SlackIcon } from 'lucide-react-native';
import {
  Avatar,
  AvatarImage,
  AvatarFallbackText,
  ScrollView,
  Icon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { GluestackLogo, GluestackLogoDark } from '../../../assets/icons/Social';

type PersonProps = {
  person: {
    id: number;
    name: string;
    designation: string;
    profilePic: string;
    message: string;
    icon: React.FC;
    darkIcon: React.FC;
    color: string;
  };
};

const TESTIMONIAL_DATA = [
  {
    id: 0,
    name: 'Sarah Johnson',
    designation: 'Senior UI Designer, Logoipsum',
    profilePic:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    message: `"I had the pleasure of using Glue-Stack UI for a number of our projects while working as a senior user interface designer at Logoipsum Inc. It has completely changed the game for our team."`,
    icon: GluestackLogo,
    darkIcon: GluestackLogoDark,
    color: 'none',
  },
  {
    id: 1,
    name: 'David Smith',
    designation: 'Lead Developer, ABC Inc.',
    profilePic:
      'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    message: `"I've had the chance to work with Glue-Stack UI on several projects as the principal developer at ABC Inc. It is undoubtedly among the best UI libraries I have ever used, in my opinion."`,
    icon: SlackIcon,
    darkIcon: SlackIcon,
    color: '$rose500',
  },
];

const Person = ({ person }: PersonProps) => {
  return (
    <VStack
      sx={{
        '@md': { flexBasis: '$1/2' },
      }}
    >
      <VStack
        alignItems="center"
        space="lg"
        p="$4"
        m="$2"
        sx={{ '@md': { p: '$6' } }}
      >
        <Icon
          as={person.icon}
          sx={{ _dark: { props: { as: person.darkIcon } } }}
          width="$10"
          height="$10"
          color={person.color}
          fill="currentColor"
        />
        <Text
          fontSize="$lg"
          lineHeight="$lg"
          textAlign="center"
          sx={{
            '@md': {
              fontSize: '$xl',
              lineHeight: '$xl',
            },
          }}
        >
          {person.message}
        </Text>
        <VStack alignItems="center" space="sm">
          <Avatar>
            <AvatarImage
              source={{ uri: person.profilePic }}
              width="$16"
              height="$16"
            />
            <AvatarFallbackText>{person.name}</AvatarFallbackText>
          </Avatar>
          <Text textAlign="center" fontWeight="$semibold">
            {person.name}
          </Text>
          <Text textAlign="center" size="md" fontWeight="$light">
            {person.designation}
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

const TestimonialWithTwoColumns = (_props: any) => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <VStack
        width="$full"
        height="$full"
        alignSelf="center"
        alignItems="center"
        sx={{
          '@md': {
            flexDirection: 'row',
            flexWrap: 'wrap',
          },
          '@lg': { width: '80%' },
        }}
      >
        {TESTIMONIAL_DATA.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </VStack>
    </ScrollView>
  );
};

export default TestimonialWithTwoColumns;
