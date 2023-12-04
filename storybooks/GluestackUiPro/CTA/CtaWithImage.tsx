import React, { FC } from 'react';
import {
  Button,
  Image,
  Text,
  Heading,
  VStack,
  HStack,
  ButtonText,
  ScrollView,
} from '@gluestack-ui/themed';

const CtaWithImage: FC = () => {
  const handleBuy = () => {};

  return (
    <ScrollView>
      <HStack
        bg="$backgroundLight0"
        sx={{
          _dark: {
            bg: '$backgroundDark950',
          },
          shadowColor: '$backgroundLight800',
          // @ts-ignore
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
      >
        <VStack
          space="4xl"
          px="$8"
          py="$24"
          sx={{
            '@md': {
              flexDirection: 'row',
              px: '$10',
            },
            '@lg': {
              px: '$24',
            },
          }}
          flex={1}
        >
          <VStack
            space="4xl"
            justifyContent="center"
            sx={{
              '@md': { flex: 1 },
            }}
          >
            <VStack>
              <Heading
                fontSize="$3xl"
                lineHeight="$3xl"
                sx={{
                  '@md': {
                    fontSize: '$4xl',
                    lineHeight: '$5xl',
                  },
                }}
              >
                Ready to Supercharge Your Designs?
              </Heading>
              <Text
                mt="$2"
                size="md"
                sx={{
                  '@lg': { fontSize: '$lg', lineHeight: '$xl', mt: '$3' },
                }}
              >
                Awesome! With your gluestack-ui pro license, you're just a step
                away from unlocking a treasure trove of powerful components.
                Instantly level up your design game and stay ahead of the curve
                with free updates for six months!
              </Text>
            </VStack>

            <Button
              onPress={handleBuy}
              alignSelf="stretch"
              sx={{
                '@md': {
                  alignSelf: 'flex-start',
                },
              }}
            >
              <ButtonText>Buy Now</ButtonText>
            </Button>
          </VStack>

          <Image
            h="$96"
            w="$full"
            mx="auto"
            my="auto"
            sx={{
              '@md': {
                flex: 1,
                maxWidth: '576px',
                ml: '$16',
              },
            }}
            source={{
              uri: 'https://images.unsplash.com/photo-1573703748442-3ba6f4203172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            }}
            resizeMode="cover"
          />
        </VStack>
      </HStack>
    </ScrollView>
  );
};

export default CtaWithImage;
