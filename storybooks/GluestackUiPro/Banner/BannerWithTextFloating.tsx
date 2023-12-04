import React, { useState } from 'react';
import {
  Text,
  Box,
  VStack,
  Button,
  Icon,
  CloseIcon,
  HStack,
} from '@gluestack-ui/themed';

const CloseButton = ({ setIsVisible, sx, ...props }: any) => {
  const handleCloseBtnPress = () => {
    setIsVisible(false);
  };

  return (
    <Button
      bg="$backgroundLight0"
      sx={{
        ...sx,
        ':hover': { bg: '$backgroundLight100' },
        ':active': { bg: '$backgroundLight200' },
        '_dark': {
          'bg': '$backgroundLight950',
          ':hover': { bg: '$backgroundDark900' },
          ':active': { bg: '$backgroundDark800' },
        },
      }}
      p="$3"
      onPress={handleCloseBtnPress}
      {...props}
    >
      <Icon
        as={CloseIcon}
        color="$textLight700"
        sx={{ _dark: { color: '$textDark300' } }}
      />
    </Button>
  );
};

const BannerWithTextFloating = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Box
      maxWidth={1280}
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
        bg="$backgroundLight0"
        rounded="$xl"
        p="$4"
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

          _dark: {
            bg: '$backgroundDark950',
          },
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
              This site uses third-party cookies to track your browsing
              activity.
            </Text>
            <Text color="$textLight500">
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

export default BannerWithTextFloating;
