import React, { useState } from 'react';
import {
  Box,
  Button,
  CloseIcon,
  Icon,
  MessageCircleIcon,
  Text,
  HStack,
  VStack,
  ButtonText,
} from '@gluestack-ui/themed';

const CloseButton = ({ setIsVisible, sx, ...props }: any) => {
  const handleCloseBtnPress = () => {
    setIsVisible(false);
  };

  return (
    <Button
      bg="$primary500"
      sx={{
        ...sx,
        ':hover': { bg: '$primary600' },
        ':active': { bg: '$primary700' },
      }}
      p="$3"
      onPress={handleCloseBtnPress}
      {...props}
    >
      <Icon as={CloseIcon} color="$backgroundLight0" />
    </Button>
  );
};

const BannerWithButtonOnAccent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleReadMoreBtnPress = () => {};
  return (
    <Box bg="$primary500">
      <Box
        p="$4"
        display={isVisible ? 'flex' : 'none'}
        sx={{
          shadowColor: '$backgroundLight800',
          //@ts-ignore
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
      >
        <CloseButton
          setIsVisible={setIsVisible}
          position="absolute"
          ml="$2"
          mb="$4"
          top={10}
          right={10}
          zIndex={999}
          bg="$primary500"
          sx={{
            '@md': { display: 'none' },
          }}
        />
        <VStack
          maxWidth={1280}
          space="md"
          mx="auto"
          w="$full"
          justifyContent="space-between"
          sx={{
            '@md': {
              flexDirection: 'row',
            },
          }}
        >
          <VStack
            mb="$2"
            sx={{
              '@md': {
                flexDirection: 'row',
                alignItems: 'center',
                mb: '$0',
              },
            }}
          >
            <Icon
              as={MessageCircleIcon}
              p="$3"
              rounded="$lg"
              display="none"
              size="xl"
              bg="$primary600"
              color="$white"
              sx={{
                '@md': { display: 'flex', size: 'lg', mr: '$3' },
              }}
            />

            <VStack
              mr="$10"
              space="xs"
              sx={{
                '@lg': {
                  flexDirection: 'row',
                  flex: 1,
                },
              }}
            >
              <Text mr="$1" color="$textLight0">
                We are proud to introduce our new product to the world.
              </Text>
              <Text color="$textLight300">
                Get the full details in our press release.
              </Text>
            </VStack>
          </VStack>

          <HStack space="sm" alignItems="center">
            <Button
              bg="$backgroundLight0"
              onPress={handleReadMoreBtnPress}
              w="$full"
              sx={{
                '@md': { w: 'auto' },
                ':hover': { bg: '$backgroundLight50' },
                ':active': { bg: '$backgroundLight100' },
              }}
            >
              <ButtonText color="$primary500">Read More</ButtonText>
            </Button>
            <CloseButton
              bg="$primary500"
              sx={{
                '@md': { display: 'flex' },
              }}
              setIsVisible={setIsVisible}
              display="none"
            />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default BannerWithButtonOnAccent;
