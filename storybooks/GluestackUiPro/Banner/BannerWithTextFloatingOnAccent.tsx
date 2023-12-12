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
          'bg': '$primary500',
          ':hover': { bg: '$primary600' },
          ':active': { bg: '$primary700' },
        },
        _dark: {
          'bg': '$primary400',
          ':hover': { bg: '$primary500' },
          ':active': { bg: '$primary600' },
        },
      }}
      p="$3"
      onPress={handleCloseBtnPress}
      {...props}
    >
      <ButtonIcon
        as={CloseIcon}
        sx={{
          _light: { color: '$textLight0' },
          _dark: { color: '$textDark0' },
        }}
      />
    </Button>
  );
};

const BannerWithTextFloatingOnAccent = (_props: any) => {
  const [isVisible, setIsVisible] = useState(true);

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
        rounded="$xl"
        p="$4"
        sx={{
          _light: {
            bg: '$primary500',
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
            bg: '$primary400',
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
            <Text
              mr="$1"
              sx={{
                _light: { color: '$textLight0' },
                _dark: { color: '$textDark0' },
              }}
            >
              This site uses third-party cookies to track your browsing
              activity.
            </Text>

            <Text
              sx={{
                _light: { color: '$textLight300' },
                _dark: { color: '$textDark200' },
              }}
            >
              Learn more about our use of cookies.{' '}
            </Text>
          </VStack>
          <CloseButton
            sx={{
              '@lg': { display: 'flex' },
            }}
            setIsVisible={setIsVisible}
            display="none"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default BannerWithTextFloatingOnAccent;
