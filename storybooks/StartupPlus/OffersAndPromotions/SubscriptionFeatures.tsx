import React from 'react';

import { Box, Center, HStack, Icon, VStack, Text } from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';
import { CheckCircle2 } from 'lucide-react-native';

type List = {
  feature: string;
  prime: boolean;
  basic: boolean;
};

const list: List[] = [
  {
    feature: 'Invest in Direct Commission',
    prime: true,
    basic: true,
  },
  {
    feature: 'Get Risk free portfolio& Asset',
    prime: true,
    basic: true,
  },
  {
    feature: 'Invest in Direct Commission',
    prime: true,
    basic: true,
  },
  {
    feature: 'Get Risk free portfolio& Asset',
    prime: true,
    basic: true,
  },
  {
    feature: 'Invest in Direct Commission',
    prime: true,
    basic: true,
  },
  {
    feature: 'Get Risk free portfolio& Asset',
    prime: true,
    basic: true,
  },
  {
    feature: 'Invest in Direct Commission',
    prime: true,
    basic: true,
  },
  {
    feature: 'Get Risk free portfolio& Asset',
    prime: true,
    basic: true,
  },
  {
    feature: 'Invest in Direct Commission',
    prime: true,
    basic: true,
  },
];

function Item() {
  return (
    <>
      {list.map((item, index) => {
        return (
          <Box key={index} mt="$8">
            <HStack alignItems="center">
              <>
                <Box flex={1}>
                  <Text
                    fontSize="$sm"
                    sx={{
                      _light: {
                        color: '$textLight800',
                      },
                      _dark: {
                        color: '$textDark50',
                      },
                    }}
                  >
                    {item.feature}
                  </Text>
                </Box>
                <Center w="$20">
                  {item.prime ? (
                    <Box>
                      <Icon
                        as={CheckCircle2}
                        size="xl"
                        sx={{
                          _light: {
                            color: '$emerald500',
                          },
                          _dark: {
                            color: '$emerald400',
                          },
                        }}
                      />
                    </Box>
                  ) : null}
                </Center>

                <Center w="$20">
                  {item.basic ? (
                    <Icon
                      as={CheckCircle2}
                      size="xl"
                      sx={{
                        _light: {
                          color: '$emerald500',
                        },
                        _dark: {
                          color: '$emerald400',
                        },
                      }}
                    />
                  ) : null}
                </Center>
              </>
            </HStack>
          </Box>
        );
      })}
    </>
  );
}

function FeaturesHeading() {
  return (
    <>
      <HStack alignItems="center" space="sm">
        <Text
          flex={1}
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
          fontWeight="$medium"
          fontSize="$md"
        >
          Features
        </Text>
        <Center
          w="$20"
          px="$3"
          py="$1"
          borderRadius="$xs"
          bg="$primary500"
          // sx={{
          //   _light: {
          //     bg: '$primary500',
          //   },
          //   _dark: {
          //     bg: '$primary500',
          //   },
          // }}
        >
          <Text fontSize="$xs" color="$backgroundDark50" fontWeight="$normal">
            PRIME
          </Text>
        </Center>

        <Center
          w="$20"
          px="$3"
          py="$1"
          borderRadius="$xs"
          sx={{
            _light: {
              bg: '$backgroundDark500',
            },
            _dark: {
              bg: '$backgroundDark400',
            },
          }}
        >
          <Text fontSize="$xs" color="$textLight100">
            BASIC
          </Text>
        </Center>
      </HStack>
    </>
  );
}

export default function SubscriptionFeatures() {
  return (
    <DashboardLayout title="Subscription Features" displaySidebar={false}>
      <VStack
        flex={1}
        sx={{
          '@base': {
            px: '$4',
            py: '$5',
          },
          '@md': {
            borderRadius: '$sm',
            px: '$8',
            py: '$8',
          },
          '_light': {
            bg: '$backgroundLight50',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
      >
        <FeaturesHeading />
        <Item />
      </VStack>
    </DashboardLayout>
  );
}
