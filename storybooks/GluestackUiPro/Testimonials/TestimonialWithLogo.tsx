import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Icon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { GluestackLogo, GluestackLogoDark } from '../../../assets/icons/Social';

const PERSON = {
  id: 0,
  name: 'Sarah Johnson',
  designation: 'Senior UI Designer, Logoipsum',
  profilePic:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  message: `"I had the pleasure of using Glue-Stack UI for a number of our projects while working as a senior user interface designer at Logoipsum Inc. It has completely changed the game for our team."`,
};

const TestimonialWithLogo = (_props: any) => {
  return (
    <VStack
      width="$full"
      alignSelf="center"
      alignItems="center"
      justifyContent="center"
      space="lg"
      p="$6"
      my="$10"
      sx={{ '@lg': { width: '80%' } }}
    >
      <Icon
        as={GluestackLogo}
        sx={{ _dark: { props: { as: GluestackLogoDark } } }}
        width={60}
        height={60}
      />
      <Text
        textAlign="center"
        size="xl"
        fontWeight="$normal"
        sx={{
          '@md': { fontSize: '$3xl', lineHeight: '$3xl' },
          '@lg': { fontSize: '$4xl' },
        }}
      >
        {PERSON.message}
      </Text>
      <VStack space="sm" alignItems="center">
        <Avatar>
          <AvatarImage
            source={{ uri: PERSON.profilePic }}
            width={56}
            height={56}
          />
          <AvatarFallbackText>{PERSON.name}</AvatarFallbackText>
        </Avatar>
        <VStack alignItems="center">
          <Text size="lg" fontWeight="$semibold">
            {PERSON.name}
          </Text>
          <Text size="lg" fontWeight="$light">
            {PERSON.designation}
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default TestimonialWithLogo;
