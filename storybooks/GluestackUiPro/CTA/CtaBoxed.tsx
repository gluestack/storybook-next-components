import React, { FC } from 'react';
import {
  Button,
  Heading,
  Text,
  VStack,
  Box,
  ButtonText,
} from '@gluestack-ui/themed';

const CtaBoxed: FC = () => {
  const handleLearnMore = () => {};
  const handleTrial = () => {};

  return (
    <Box w="$full" alignItems="center">
      <VStack
        maxWidth={1200}
        bg="$backgroundLight0"
        p="$8"
        m="$8"
        borderRadius="$md"
        space="4xl"
        sx={{
          '_dark': {
            bg: '$backgroundDark950',
          },
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
          'shadowRadius': 4,
          'elevation': 3,
        }}
      >
        <VStack maxWidth={620} sx={{ '@lg': { mr: '$12', flex: 1 } }}>
          <Heading fontSize="$3xl" lineHeight="$3xl">
            Ready for your free trial?
          </Heading>
          <Text
            size="md"
            lineHeight="$md"
            mt="$2"
            sx={{
              '@lg': { fontSize: '$lg', lineHeight: '$xl', mt: '$3' },
            }}
          >
            No credit card is required. You'll be ready to go within a few
            minutes.
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
            mr="$0"
            sx={{
              '@sm': { mr: '$3' },
            }}
            size="lg"
          >
            <ButtonText fontSize="$md" sx={{ '@lg': { fontSize: '$lg' } }}>
              Request Demo
            </ButtonText>
          </Button>
          <Button
            mb="$3"
            sx={{
              '@sm': { mb: '$0' },
            }}
            onPress={handleTrial}
            size="lg"
          >
            <ButtonText fontSize="$md" sx={{ '@lg': { fontSize: '$lg' } }}>
              Get Started
            </ButtonText>
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default CtaBoxed;
