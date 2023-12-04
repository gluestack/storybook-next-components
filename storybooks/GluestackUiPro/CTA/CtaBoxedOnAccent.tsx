import React, { FC } from 'react';
import {
  Button,
  Text,
  VStack,
  Heading,
  Box,
  ButtonText,
} from '@gluestack-ui/themed';

const CtaBoxedOnAccent: FC = () => {
  const handleLearnMore = () => {};
  const handleTrial = () => {};

  return (
    <Box w="$full" alignItems="center">
      <VStack
        maxWidth={1200}
        bg="$primary600"
        p="$8"
        m="$8"
        borderRadius="$md"
        space="4xl"
        sx={{
          '@sm': {
            w: 'auto',
          },
          '@lg': {
            p: '$12',
            m: '$16',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          },
          'shadowColor': '$backgroundLight800',
          'shadowOffset': {
            width: 0,
            height: 1,
          },
          'shadowOpacity': 0.22,
          'shadowRadius': 2.22,
          'elevation': 3,
        }}
      >
        <VStack maxWidth={620} sx={{ '@lg': { mr: '$12', flex: 1 } }}>
          <Heading
            fontSize="$3xl"
            lineHeight="$3xl"
            color="$textLight50"
            sx={{
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            Discover New Horizons
          </Heading>
          <Text
            size="md"
            lineHeight="$md"
            mt="$2"
            color="$textLight100"
            sx={{
              '@lg': { fontSize: '$lg', lineHeight: '$xl', mt: '$3' },
              '_dark': {
                color: '$textDark100',
              },
            }}
          >
            Unleash creativity with our responsive design components. Perfect
            for websites and mobile apps.
          </Text>
        </VStack>
        <VStack
          justifyContent="flex-start"
          flexDirection="column-reverse"
          sx={{
            '@sm': {
              flexDirection: 'row',
            },
            '@lg': {
              h: '$full',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Button
            variant="outline"
            action="primary"
            onPress={handleLearnMore}
            borderColor="$borderLight100"
            mr="$0"
            sx={{
              ':hover': {
                bg: '$primary600',
              },
              ':active': {
                bg: '$primary700',
              },
              '@sm': { mr: '$3' },
            }}
            size="lg"
          >
            <ButtonText
              fontSize="$md"
              sx={{ '@lg': { fontSize: '$lg' } }}
              color="$white"
            >
              Request Demo
            </ButtonText>
          </Button>
          <Button
            onPress={handleTrial}
            size="lg"
            bg="$white"
            mb="$3"
            sx={{
              '@sm': { mb: '$0' },
              ':hover': {
                bg: '$gray100',
              },
              ':active': {
                bg: '$gray200',
              },
            }}
          >
            <ButtonText
              fontSize="$md"
              sx={{ '@lg': { fontSize: '$lg' } }}
              color="$primary600"
            >
              Get Started
            </ButtonText>
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default CtaBoxedOnAccent;
