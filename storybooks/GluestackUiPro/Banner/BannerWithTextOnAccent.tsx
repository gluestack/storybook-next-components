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
      bg="$primary500"
      sx={{
        ...sx,
        ':hover': { bg: '$primary600' },
        ':active': { bg: '$backgroundDark700' },
      }}
      p="$3"
      onPress={handleCloseBtnPress}
      {...props}
    >
      <Icon as={CloseIcon} color="$backgroundLight0" />
    </Button>
  );
};

const BannerWithTextOnAccent = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Box
      p="$4"
      maxWidth={1280}
      bg="$primary500"
      sx={{
        'shadowColor': '$backgroundLight800',
        //@ts-ignore
        'shadowOffset': {
          width: 0,
          height: 1,
        },
        'shadowOpacity': 0.22,
        'shadowRadius': 2.22,
        'elevation': 3,

        '@md': {
          py: '$3',
          px: '$8',
        },
      }}
      display={isVisible ? 'flex' : 'none'}
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
      <HStack>
        <VStack
          mr="$10"
          flex={1}
          space="xs"
          sx={{
            '@lg': {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Text mr="$1" color="$textLight0">
            This site uses third-party cookies to track your browsing activity.
          </Text>

          <Text color="$textLight300">
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

export default BannerWithTextOnAccent;
