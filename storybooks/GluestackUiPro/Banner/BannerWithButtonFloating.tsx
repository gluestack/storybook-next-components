import React, { useState } from 'react';
import {
  Box,
  Button,
  Icon,
  Text,
  CloseIcon,
  HStack,
  VStack,
  MessageCircleIcon,
  ButtonText,
  ButtonIcon,
} from '@gluestack-ui/themed';

const CloseButton = ({ setIsVisible, sx, ...props }: any) => {
  const handleCloseBtnPress = () => {
    setIsVisible(false);
  };

  return (
    <Button
      sx={{
        ...sx,
        _light: {
          'bg': '$backgroundLight100',
          ':hover': { bg: '$backgroundLight200' },
          ':active': { bg: '$backgroundLight300' },
        },
        _dark: {
          'bg': '$backgroundLight800',
          ':hover': { bg: '$backgroundDark700' },
          ':active': { bg: '$backgroundDark600' },
        },
      }}
      p="$3"
      onPress={handleCloseBtnPress}
      {...props}
    >
      <ButtonIcon
        as={CloseIcon}
        sx={{
          _light: { color: '$textLight500' },
          _dark: { color: '$textDark400' },
        }}
      />
    </Button>
  );
};

const BannerWithButtonFloating = (_props: any) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleReadMoreBtnPress = () => {};

  return (
    <Box
      width="$full"
      mx="auto"
      p="$4"
      sx={{
        '@md': {
          p: '$8',
        },
      }}
      display={isVisible ? 'flex' : 'none'}
    >
      <Box
        p="$4"
        rounded="$xl"
        sx={{
          _light: {
            bg: '$backgroundLight100',
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          },
          _dark: {
            bg: '$backgroundDark800',
            shadowColor: '$backgroundLight950',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          },
        }}
      >
        <CloseButton
          setIsVisible={setIsVisible}
          position="absolute"
          ml="$2"
          mb="$4"
          top="$2.5"
          right="$2.5"
          zIndex={999}
          sx={{
            '@md': { display: 'none' },
          }}
        />
        <VStack
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
              sx={{
                '@md': { display: 'flex', size: 'lg', mr: '$3' },
                '_light': { color: '$textLight500', bg: '$backgroundLight200' },
                '_dark': {
                  color: '$textDark400',
                  bg: '$backgroundDark700',
                },
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
              <Text mr="$1">
                We are proud to introduce our new product to the world.
              </Text>
              <Text
                sx={{
                  _light: { color: '$textLight500' },
                  _dark: { color: '$textDark400' },
                }}
              >
                Get the full details in our press release.
              </Text>
            </VStack>
          </VStack>

          <HStack space="sm" alignItems="center">
            <Button
              onPress={handleReadMoreBtnPress}
              w="$full"
              sx={{ '@md': { w: 'auto' } }}
            >
              <ButtonText>Read More</ButtonText>
            </Button>
            <CloseButton
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

export default BannerWithButtonFloating;
