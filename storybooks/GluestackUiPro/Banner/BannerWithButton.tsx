import React, { useState } from 'react';
import {
  Box,
  Button,
  Icon,
  Text,
  CloseIcon,
  HStack,
  VStack,
  ButtonText,
} from '@gluestack-ui/themed';
import { MessageCircle } from 'lucide-react-native';

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

const BannerWithButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleReadMoreBtnPress = () => {};

  return (
    <Box
      p="$4"
      bg="$backgroundLight0"
      display={isVisible ? 'flex' : 'none'}
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
        maxWidth={1280}
        w="$full"
        space="md"
        mx="auto"
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
            bg="$backgroundLight50"
            color="$backgroundDark950"
            as={MessageCircle}
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
  );
};

export default BannerWithButton;
