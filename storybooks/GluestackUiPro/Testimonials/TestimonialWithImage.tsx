import React from 'react';
import { StarIcon } from 'lucide-react-native';
import {
  Divider,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { CompanyLogo } from '../assets/icons/Social';

const PERSON = {
  name: 'David Smith',
  designation: 'Lead Developer, ABC Inc.',
  image:
    'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  message: `"I've had the chance to work with Glue-Stack UI on several projects as the principal developer at ABC Inc. It is undoubtedly among the best UI libraries I have ever used, in my opinion."`,
  rating: 5,
};

const RatingComponent = ({ rating }: { rating: number }) => {
  const data = Array.from({ length: 5 });

  return (
    <HStack space="sm">
      {data.map((_, index) => (
        <Icon
          key={index}
          as={StarIcon}
          color={rating > index ? '$primary600' : '$gray400'}
          fill={rating > index ? '$primary600' : '$gray400'}
          size="lg"
        />
      ))}
    </HStack>
  );
};

const TestimonialWithImage = (_props: any) => {
  return (
    <VStack
      w="$full"
      height="$full"
      alignSelf="center"
      justifyContent="center"
      flexDirection="column-reverse"
      p="$4"
      sx={{
        '@md': { p: '$6', flexDirection: 'row' },
      }}
    >
      <Image
        flex={1}
        alignSelf="center"
        minHeight="$64"
        minWidth="$64"
        width="$96"
        height="$96"
        sx={{
          '@sm': {
            width: '$full',
            height: '90%',
          },
        }}
        source={{ uri: PERSON.image }}
        resizeMode="contain"
      />

      <VStack
        space="md"
        sx={{ '@md': { flex: 1, justifyContent: 'center', p: '$6' } }}
      >
        <RatingComponent rating={PERSON.rating} />
        <Text
          fontWeight="$normal"
          fontSize="$lg"
          lineHeight="$lg"
          sx={{
            '@md': {
              fontSize: '$2xl',
              lineHeight: '$2xl',
            },
          }}
        >
          {PERSON.message}
        </Text>
        <HStack alignItems="center" space="md">
          <VStack>
            <Text fontWeight="$semibold">{PERSON.name}</Text>
            <Text size="sm">{PERSON.designation}</Text>
          </VStack>
          <Divider
            width="$0.5"
            minHeight="$8"
            maxHeight="$full"
            alignSelf="center"
            borderColor="$borderLight300"
            sx={{ _dark: { borderColor: '$borderDark700' } }}
          />
          <Icon as={CompanyLogo} width={80} height={80} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default TestimonialWithImage;
