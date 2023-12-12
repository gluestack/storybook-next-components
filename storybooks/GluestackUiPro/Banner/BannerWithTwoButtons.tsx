import React, { useState } from 'react';
import {
  Button,
  Icon,
  Text,
  Box,
  CloseIcon,
  VStack,
  ButtonText,
  ButtonIcon,
} from '@gluestack-ui/themed';
import { AlertTriangle } from 'lucide-react-native';

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

const BannerWithTwoButtons = (_props: any) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleRejectBtnPress = () => {};

  const handleAllowBtnPress = () => {};

  return (
    <Box
      p="$4"
      display={isVisible ? 'flex' : 'none'}
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
            as={AlertTriangle}
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
                flex: 1,
              },
            }}
          >
            <Text mr="$1">
              We use our own and third-party cookies to personalize content.
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
        </VStack>

        <VStack space="sm" sx={{ '@md': { flexDirection: 'row' } }}>
          <Button
            variant="outline"
            action="secondary"
            mr="$0"
            sx={{
              '@md': {
                mr: '$4',
              },
            }}
            onPress={handleRejectBtnPress}
          >
            <ButtonText>Reject</ButtonText>
          </Button>

          <Button onPress={handleAllowBtnPress}>
            <ButtonText>Allow</ButtonText>
          </Button>
          <CloseButton
            sx={{
              '@md': { display: 'flex' },
            }}
            setIsVisible={setIsVisible}
            display="none"
          />
        </VStack>
      </VStack>
    </Box>
  );
};

export default BannerWithTwoButtons;
