import React, { FC } from 'react';
import {
  Box,
  Heading,
  Icon,
  Text,
  VStack,
  ScrollView,
} from '@gluestack-ui/themed';
import {
  AugmentedRealityIcon,
  RealTimeCollaborationIcon,
  WifiIcon,
} from '../../../assets/icons/Social';

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
      'Immerse yourself in a world where virtual and real-life blend seamlessly, bringing new dimensions.',
    lightIconBg: '$orange100',
    darkIconBg: '$orange800',
    lightIconColor: '$orange600',
    darkIconColor: '$orange300',
  },
  {
    id: 2,
    icon: RealTimeCollaborationIcon,
    title: 'Real-time Collaboration',
    description:
      'Collaborate with friends, colleagues, or fellow app users in real-time, fostering teamwork.',
    lightIconBg: '$pink100',
    darkIconBg: '$pink800',
    lightIconColor: '$pink600',
    darkIconColor: '$pink300',
  },
  {
    id: 3,
    icon: WifiIcon,
    title: 'Offline Mode',
    description:
      'Access key features and content even without an internet connection, ensuring uninterrupted app usage.',
    lightIconBg: '$blue100',
    darkIconBg: '$blue800',
    lightIconColor: '$blue600',
    darkIconColor: '$blue300',
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
    <VStack
      alignItems="center"
      mt={index === 0 ? '$0' : '$9'}
      sx={{
        '@md': {
          ml: index === 0 ? '$0' : '$20',
          flex: 1,
          mt: '$0',
        },
      }}
    >
      <Box
        p="$3.5"
        rounded="$full"
        bg={feature.lightIconBg}
        sx={{ _dark: { bg: feature.darkIconBg } }}
        mb="$4"
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
      <VStack space="xs" alignItems="center">
        <Text
          fontSize="$md"
          lineHeight="$lg"
          fontWeight="$bold"
          letterSpacing="$sm"
          color="$textLight900"
          textAlign="center"
          sx={{
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          {feature?.title}
        </Text>
        <Text
          size="sm"
          textAlign="center"
          maxWidth={500}
          sx={{
            '@md': {
              maxWidth: 'auto',
            },
          }}
        >
          {feature?.description}
        </Text>
      </VStack>
    </VStack>
  );
};

const FeatureThreeColumnsCentered = () => {
  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <Box
        py="$16"
        px="$8"
        bg="$backgroundLight0"
        sx={{
          '_dark': {
            bg: '$backgroundDark950',
          },
          '@md': {
            px: '$16',
          },
        }}
      >
        <VStack
          pb="$16"
          alignItems="center"
          justifyContent="center"
          sx={{
            '@md': {
              pb: '$20',
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
            textAlign="center"
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
            textAlign="center"
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
            textAlign="center"
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
          justifyContent="center"
          sx={{
            '@md': {
              flexDirection: 'row',
              flexWrap: 'wrap',
              maxWidth: 1000,
              mx: 'auto',
            },
          }}
        >
          {features?.map((feature, i) => (
            <Feature key={feature?.id} feature={feature} index={i} />
          ))}
        </Box>
      </Box>
    </ScrollView>
  );
};

export default FeatureThreeColumnsCentered;
