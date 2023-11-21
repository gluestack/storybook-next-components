import React from 'react';

import {
  Box,
  Button,
  HStack,
  Text,
  Image,
  Radio,
  VStack,
  RadioGroup,
  CircleIcon,
  RadioIcon,
  RadioIndicator,
  ButtonText,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

function GiftCard() {
  return (
    <HStack
      space="md"
      sx={{
        _light: {
          bg: '$backgroundDark100',
        },
        _dark: {
          bg: '$backgroundDark700',
        },
      }}
      rounded="$sm"
      p="$3"
    >
      <Image
        source={require('./assets/images/gift.png')}
        alt="Alternate Text"
        sx={{
          w: '$74',
          h: '$90',
        }}
        rounded="$sm"
      />
      <Box>
        <Text
          fontSize="$md"
          fontWeight="$bold"
          sx={{
            _light: {
              color: '$backgroundDark800',
            },
            _dark: {
              color: '$backgroundDark50',
            },
          }}
        >
          Amazon
        </Text>
        <Text
          sx={{
            '_light': {
              color: '$backgroundDark500',
            },
            '_dark': {
              color: '$backgroundDark400',
            },
            '@base': {
              fontSize: '$xs',
            },
            '@md': {
              fontSize: '$md',
            },
          }}
        >
          Non- returnable/non-replaceable
        </Text>
        <Text
          fontSize="$sm"
          fontWeight="$medium"
          sx={{
            _light: {
              color: '$backgroundDark800',
            },
            _dark: {
              color: '$backgroundDark50',
            },
          }}
          mt="auto"
        >
          Voucher worth ₹5000
        </Text>
      </Box>
    </HStack>
  );
}

function GiftCardDescription() {
  const [values, setValues] = React.useState('One');

  const textStyle = {
    _light: {
      color: '$backgroundDark800',
    },
    _dark: {
      color: '$backgroundDark50',
    },
  };
  return (
    <VStack space="4xl" mt="$8">
      <Box>
        <Text fontSize="$sm" fontWeight="$medium" sx={{ ...textStyle }}>
          About
        </Text>
        <Text
          fontWeight="$normal"
          fontSize="$sm"
          sx={{
            _light: {
              color: '$backgroundDark500',
            },
            _dark: {
              color: '$backgroundDark400',
            },
          }}
          mt="$2"
        >
          Online shopping from the biggest e-com company. Biggest collection of
          magazines, books, electronics and fashions appeals.
        </Text>
      </Box>
      <Box>
        <Text fontSize="$sm" fontWeight="$medium" sx={{ ...textStyle }}>
          Details
        </Text>
        <Text
          fontSize="$sm"
          fontWeight="$normal"
          sx={{
            _light: {
              color: '$backgroundDark500',
            },
            _dark: {
              color: '$backgroundDark400',
            },
          }}
          mt="$2"
        >
          The voucher is worth ₹5000
        </Text>
      </Box>
      <Box>
        <Text fontSize="$sm" fontWeight="$medium" sx={{ ...textStyle }}>
          Delievery Options
        </Text>
        <RadioGroup
          mt="$4"
          flexDirection="row"
          value={values}
          onChange={setValues}
        >
          <Radio value="One">
            <RadioIndicator mr="$2">
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <Text fontSize="$sm" fontWeight="$normal" sx={{ ...textStyle }}>
              Buy for Self
            </Text>
          </Radio>
          <Radio ml="$6" value="Two">
            <RadioIndicator mr="$2">
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <Text fontSize="$sm" fontWeight="$normal" sx={{ ...textStyle }}>
              Send a Gift
            </Text>
          </Radio>
        </RadioGroup>
      </Box>
    </VStack>
  );
}

function MainContent() {
  return (
    <VStack
      flex={1}
      mb="$4"
      sx={{
        '@base': {
          _dark: {
            bg: '$backgroundDark700',
          },
        },
        '@xl': {
          px: '$35',
        },
        '@lg': {
          px: '$12',
        },
        '@md': {
          borderRadius: '$sm',
          pb: '$8',
          px: '$4',
          _light: {
            bg: '$backgroundLight0',
          },
          _dark: {
            bg: '$backgroundDark800',
          },
        },
      }}
    >
      <Box
        mb="$3"
        sx={{
          '@base': {
            px: '$4',
            py: '$3',
          },
          '@md': {
            px: '$0',
            py: '$8',
          },
          '_light': {
            bg: '$backgroundLight0',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
      >
        <GiftCard />
        <GiftCardDescription />
      </Box>

      <Button
        variant="solid"
        mt="auto"
        sx={{
          '@base': {
            mx: '$4',
          },
          '@md': {
            mx: '$0',
          },
        }}
      >
        <ButtonText fontWeight="$medium">BUY FOR 5000</ButtonText>
      </Button>
    </VStack>
  );
}

export default function () {
  return (
    <DashboardLayout displaySidebar={true} title="Gift Cards">
      <MainContent />
    </DashboardLayout>
  );
}
