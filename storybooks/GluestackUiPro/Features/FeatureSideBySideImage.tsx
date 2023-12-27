import React, { FC } from 'react';
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
  ScrollView,
} from '@gluestack-ui/themed';

import { RadioIcon, WifiIcon } from 'lucide-react-native';
import {
  AugmentedRealityIcon,
  RealTimeCollaborationIcon,
} from '../assets/icons/Social';

interface FeatureData {
  id: number;
  icon: any;
  title: string;
  description: string;
  lightIconBg: string;
  darkIconBg: string;
  lightIconColor?: string;
  darkIconColor?: string;
}

const features: FeatureData[] = [
  {
    id: 1,
    icon: AugmentedRealityIcon,
    title: 'Augmented Reality',
    description:
      'Immerse yourself in a world where virtual and real-life blend seamlessly, bringing new dimensions to your mobile experience.',
    lightIconBg: '$orange100',
    darkIconBg: '$orange800',
    lightIconColor: '$orange600',
    darkIconColor: '$orange300',
  },
  {
    id: 2,
    icon: WifiIcon,
    title: 'Offline Mode',
    description:
      'Access key features and content even without an internet connection, ensuring uninterrupted app usage in any situation.',
    lightIconBg: '$blue100',
    darkIconBg: '$blue800',
    lightIconColor: '$blue600',
    darkIconColor: '$blue300',
  },
  {
    id: 3,
    icon: RadioIcon,
    title: 'Voice Recognition',
    description:
      'Interact with the app effortlessly using voice commands, making tasks faster and hands-free.',
    lightIconBg: '$green100',
    darkIconBg: '$green800',
    lightIconColor: '$green600',
    darkIconColor: '$green300',
  },
  {
    id: 4,
    icon: RealTimeCollaborationIcon,
    title: 'Real-time Collaboration',
    description:
      'Collaborate with friends, colleagues, or fellow app users in real-time, fostering teamwork and shared experiences.',
    lightIconBg: '$pink100',
    darkIconBg: '$pink800',
    lightIconColor: '$pink600',
    darkIconColor: '$pink300',
  },
];

const Feature = ({
  feature,
  index,
}: {
  feature: FeatureData;
  index: number;
}) => {
  return (
    <HStack
      mt={index === 0 ? '$0' : '$9'}
      space="2xl"
      alignItems="flex-start"
      key={index}
    >
      <Box
        p="$3.5"
        rounded="$full"
        bg={feature.lightIconBg}
        sx={{ _dark: { bg: feature.darkIconBg } }}
      >
        <Icon
          as={feature.icon}
          color={feature.lightIconColor}
          size="lg"
          sx={{
            _dark: {
              color: feature.darkIconColor,
            },
          }}
        />
      </Box>
      <VStack space="xs" flexShrink={1}>
        <Text
          fontSize="$md"
          lineHeight="$lg"
          fontWeight="$bold"
          letterSpacing="$sm"
          color="$textLight900"
          sx={{
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          {feature?.title}
        </Text>
        <Text size="sm">{feature?.description}</Text>
      </VStack>
    </HStack>
  );
};

const FeatureSideBySideImage: FC = (_props: any) => {
  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <Box
        bg="$backgroundLight0"
        sx={{
          _dark: {
            bg: '$backgroundDark950',
          },
        }}
      >
        <VStack
          py="$16"
          px="$8"
          alignItems="flex-start"
          justifyContent="flex-start"
          sx={{
            '@md': {
              alignItems: 'center',
              justifyContent: 'center',
              px: '$0',
            },
          }}
        >
          <Text
            fontSize="$sm"
            lineHeight="$xs"
            fontWeight="$bold"
            fontStyle="normal"
            letterSpacing="$sm"
            color="$primary600"
            sx={{
              '_dark': {
                color: '$primary300',
              },
              '@md': {
                fontSize: '$md',
                lineHeight: '$lg',
              },
            }}
          >
            Revolutionary Features
          </Text>
          <Heading
            fontSize="$3xl"
            lineHeight="$3xl"
            pt="$1.5"
            sx={{
              '@md': {
                fontSize: '$4xl',
                lineHeight: '$5xl',
                pt: '$1',
              },
            }}
          >
            Unleash Your Creativity
          </Heading>
          <Text
            fontSize="$sm"
            lineHeight="$xs"
            pt="$1.5"
            sx={{
              '@md': {
                fontSize: '$lg',
                lineHeight: '$xl',
                pt: '$1',
              },
            }}
          >
            Experience the cutting-edge features that redefine mobile app
            functionality.
          </Text>
        </VStack>

        <Box
        flexDirection="column"
        sx={{
          '@md': {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}
        >
          <Image
            height={350}
            w="$full"
            sx={{
              '@md': {
                flex: 1,
                height: '$full',
              },
            }}
            source={{
              uri: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
            }}
          />
          <VStack
            py="$10"
            px="$8"
            sx={{
              '@md': {
                flex: 1,
                px: '$16',
              },
            }}
          >
            {features?.map((feature, i) => (
              <Feature key={feature?.id} feature={feature} index={i} />
            ))}
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default FeatureSideBySideImage;
