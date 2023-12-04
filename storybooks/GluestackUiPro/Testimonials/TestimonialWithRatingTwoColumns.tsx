/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SlackIcon, StarIcon } from 'lucide-react-native';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
  ScrollView,
} from '@gluestack-ui/themed';
import { GluestackLogo, GluestackLogoDark } from '../../../assets/icons/Social';

type PersonProps = {
  person: {
    id: number;
    name: string;
    designation: string;
    profilePic: string;
    message: string;
    rating: number;
    icon: React.FC;
    darkIcon: React.FC;
    color: string;
  };
};

const persons = [
  {
    id: 0,
    name: 'Sarah Johnson',
    designation: 'Senior UI Designer, Logoipsum',
    profilePic:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    message: `"I had the pleasure of using Glue-Stack UI for a number of our projects while working as a senior user interface designer at Logoipsum Inc. It has completely changed the game for our team."`,
    rating: 4,
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
    rating: 5,
    icon: SlackIcon,
    darkIcon: SlackIcon,
    color: '$rose500',
  },
];

const RatingComponent = ({ rating }: { rating: number }) => {
  const data = Array.from({ length: 5 });

  return (
    <HStack space="sm">
      {data.map((_, index) => (
        <Icon
          key={index}
          as={StarIcon}
          color={rating > index ? '$primary600' : '$gray400'}
          fill="currentColor"
          size="lg"
        />
      ))}
    </HStack>
  );
};

const Person = ({ person }: PersonProps) => {
  return (
    <VStack
      sx={{
        '@md': { flexBasis: '$1/2' },
      }}
    >
      <VStack p="$4" space="lg" m="$2" sx={{ '@md': { p: '$6' } }}>
        <RatingComponent rating={person.rating} />
        <Text
          fontSize="$lg"
          lineHeight="$lg"
          sx={{
            '@md': {
              fontSize: '$xl',
              lineHeight: '$xl',
            },
          }}
        >
          {person.message}
        </Text>
        <VStack sx={{ '@md': { flexDirection: 'row', alignItems: 'center' } }}>
          <Avatar>
            <AvatarImage
              source={{ uri: person.profilePic }}
              width={56}
              height={56}
            />
            <AvatarFallbackText>{person.name}</AvatarFallbackText>
          </Avatar>
          <VStack space="xs" my="$3" sx={{ '@md': { mx: '$4', my: '$0' } }}>
            <Text fontWeight="$semibold">{person.name}</Text>
            <Text size="md" fontWeight="$light">
              {person.designation}
            </Text>
          </VStack>
          <Divider
            width={'$0.5'}
            mx="$6"
            ml="$2"
            minHeight={'$10'}
            maxHeight={'$full'}
            alignSelf="center"
            borderColor="$borderLight300"
            display="none"
            sx={{
              '@md': { display: 'flex' },
              '_dark': { borderColor: '$borderDark700' },
            }}
          />
          <Icon
            as={person.icon}
            sx={{ _dark: { props: { as: person.darkIcon } } }}
            width={40}
            height={40}
            color={person.color}
            fill="currentColor"
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

const TestimonialWithRatingTwoColumns = () => {
  return (
    <ScrollView flex={1}>
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
          '@lg': {
            width: '80%',
          },
        }}
      >
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </VStack>
    </ScrollView>
  );
};

export default TestimonialWithRatingTwoColumns;
