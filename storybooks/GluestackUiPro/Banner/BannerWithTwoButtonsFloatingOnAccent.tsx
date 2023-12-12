import React, { useState } from 'react';
import {
  Button,
  Icon,
  Text,
  Box,
  VStack,
  CloseIcon,
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

const BannerWithTwoButtonsFloatingOnAccent = (_props: any) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleRejectBtnPress = () => {};

  const handleAllowBtnPress = () => {};

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
                w: '$3/5',
              },
              '@xl': {
                width: 'auto',
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
                '_light': { color: '$textLight0', bg: '$primary400' },
                '_dark': { color: '$textDark0', bg: '$primary500' },
                '@md': { display: 'flex', size: 'lg', mr: '$3' },
              }}
            />

            <VStack
              space="xs"
              sx={{
                '@xl': {
                  flexDirection: 'row',
                  flex: 1,
                  mr: '$10',
                },
                '@md': {
                  w: '$5/6',
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
                We use our own and third-party cookies to personalize content.
              </Text>
              <Text
                sx={{
                  _light: { color: '$textLight300' },
                  _dark: { color: '$textDark200' },
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
                '_dark': {
                  'borderColor': '$borderDark200',
                  ':hover': { bg: '$primary500' },
                },
                '_light': {
                  'borderColor': '$borderLight100',
                  ':hover': { bg: '$primary600' },
                },
                '@md': {
                  mr: '$4',
                },
              }}
              onPress={handleRejectBtnPress}
            >
              <ButtonText
                sx={{
                  _light: { color: '$textLight100' },
                  _dark: { color: '$textDark200' },
                }}
              >
                Reject
              </ButtonText>
            </Button>

            <Button
              onPress={handleAllowBtnPress}
              sx={{
                '@md': { w: 'auto' },
                '_light': {
                  'bg': '$backgroundLight0',
                  ':hover': { bg: '$backgroundLight50' },
                  ':active': { bg: '$backgroundLight100' },
                },
                '_dark': {
                  'bg': '$backgroundDark0',
                  ':hover': { bg: '$backgroundDark50' },
                  ':active': { bg: '$backgroundDark100' },
                },
              }}
            >
              <ButtonText
                sx={{
                  _light: { color: '$primary500' },
                  _dark: { color: '$primary400' },
                }}
              >
                Allow
              </ButtonText>
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
    </Box>
  );
};

export default BannerWithTwoButtonsFloatingOnAccent;
