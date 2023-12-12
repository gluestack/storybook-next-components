import React, { useState } from 'react';
import {
  Text,
  Box,
  VStack,
  Button,
  Icon,
  CloseIcon,
  HStack,
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

const BannerWithText = (_props: any) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Box
      p="$4"
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
      display={isVisible ? 'flex' : 'none'}
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
      <HStack alignItems="center">
        <VStack
          flex={1}
          mr="$10"
          space="xs"
          sx={{
            '@lg': {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Text mr="$1">
            This site uses third-party cookies to track your browsing activity.
          </Text>

          <Text
            sx={{
              _light: { color: '$textLight500' },
              _dark: { color: '$textDark400' },
            }}
          >
            Learn more about our use of cookies.
          </Text>
        </VStack>
        <CloseButton
          sx={{
            '@md': { display: 'flex' },
          }}
          setIsVisible={setIsVisible}
          display="none"
        />
      </HStack>
    </Box>
  );
};

export default BannerWithText;
