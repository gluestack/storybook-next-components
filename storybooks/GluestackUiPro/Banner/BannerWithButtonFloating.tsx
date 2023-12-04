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

const BannerWithButtonFloating = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleReadMoreBtnPress = () => {};

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
        p="$4"
        rounded="$xl"
        bg="$backgroundLight0"
        sx={{
          _dark: {
            bg: '$backgroundDark950',
          },
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
              bg="$backgroundLight100"
              color="$backgroundDark950"
              as={MessageCircleIcon}
              p="$3"
              rounded="$lg"
              display="none"
              size="xl"
              sx={{
                '@md': { display: 'flex', size: 'lg', mr: '$3' },
                '_dark': {
                  color: '$backgroundLight50',
                  bg: '$backgroundDark900',
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
              <Text color="$textLight500">
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
              <Button.Text>Read More</Button.Text>
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
