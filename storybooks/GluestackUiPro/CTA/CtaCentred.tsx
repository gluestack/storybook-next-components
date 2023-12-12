import React, { FC } from 'react';
import {
  Button,
  Text,
  Heading,
  VStack,
  ButtonText,
} from '@gluestack-ui/themed';

const CtaCentred: FC = (_props: any) => {
  const handleLearnMore = () => {};
  const handleTrial = () => {};

  return (
    <VStack
      bg="$backgroundLight0"
      p="$8"
      justifyContent="center"
      alignItems="center"
      space="4xl"
      sx={{
        '_dark': {
          bg: '$backgroundDark950',
        },
        '@lg': {
          p: '$12',
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
      <VStack sx={{ '@lg': { flex: 1 } }}>
        <Heading
          fontSize="$3xl"
          lineHeight="$3xl"
          textAlign="center"
          sx={{
            '@md': {
              fontSize: '$4xl',
              lineHeight: '$5xl',
            },
          }}
        >
          Discover New Horizons
        </Heading>
        <Text
          mt="$2"
          maxWidth={672}
          size="md"
          textAlign="center"
          sx={{
            '@lg': { fontSize: '$lg', lineHeight: '$xl', mt: '$3' },
          }}
        >
          Unleash your creativity with our responsive and versatile design
          components. Whether you're building a website or a mobile app, we have
          you covered.
        </Text>
      </VStack>

      <VStack
        w="$full"
        flexDirection="column-reverse"
        sx={{
          '@sm': {
            flexDirection: 'row',
            w: 'auto',
          },
        }}
      >
        <Button
          onPress={handleLearnMore}
          variant="outline"
          action="primary"
          mr="$0"
          sx={{
            '@sm': { mr: '$3' },
          }}
          size="lg"
        >
          <ButtonText>Request Demo</ButtonText>
        </Button>
        <Button
          mb="$3"
          sx={{
            '@sm': { mb: '$0' },
          }}
          onPress={handleTrial}
          size="lg"
        >
          <ButtonText>Get Started</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};

export default CtaCentred;
