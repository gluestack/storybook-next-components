import React, { FC } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  ScrollView,
} from '@gluestack-ui/themed';

const FeatureHeroImageAccent: FC = (_props: any) => {
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
          pt="$20"
          pb="$48"
          px="$8"
          alignItems="center"
          justifyContent="center"
          bg="$primary600"
          sx={{
            '@md': {
              px: '$16',
            },
          }}
        >
          <Text
            fontSize="$sm"
            lineHeight="$xs"
            fontWeight="$bold"
            fontStyle="normal"
            letterSpacing="$sm"
            color="$textLight0"
            textAlign="center"
            sx={{
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
            color="$textLight0"
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
            color="$textLight0"
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

        <Image
          w="$full"
          h={290}
          mx="auto"
          mt={-150}
          sx={{
            '@xs': {
              w: 390,
              h: 300,
            },
            '@sm': {
              w: 458,
              h: 360,
            },
          }}
          source={require('../../../assets/FeaturesModule/man-with-vr.png')}
        />
      </Box>
    </ScrollView>
  );
};

export default FeatureHeroImageAccent;
