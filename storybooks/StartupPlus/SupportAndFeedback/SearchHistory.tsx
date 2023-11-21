import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Input,
  Pressable,
  Box,
  InputField,
  InputIcon,
  ArrowLeftIcon,
  CloseIcon,
  Center,
  InputSlot,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';

import { Clock8 } from 'lucide-react-native';

type Place = {
  keyword: string;
  address: string;
};

const place: Place[] = [
  {
    keyword: 'Rashtreeya Vidyalaya Road',
    address: 'Agra, Uttar Pradesh',
  },
  {
    keyword: 'Rajajinagar',
    address: 'Bengaluru, Karnataka',
  },
  {
    keyword: 'Ram Hospital',
    address: 'Bengaluru, Karnataka',
  },
  {
    keyword: 'Ramanagar',
    address: 'Karnataka',
  },
  {
    keyword: 'Rasta Cafe',
    address: 'State Highway 17, Karnataka',
  },
  {
    keyword: 'Ramoji Film City',
    address: 'Ramoji Film City Main Road, Hyderabad',
  },
];

function RecentSearchItem({ index, data }: { index: number; data: Place }) {
  return (
    <Pressable
      sx={{
        '@md': {
          rounded: '$sm',
          px: '$6',
        },
        ':hover': {
          '_light': {
            bg: '$backgroundLight100',
          },

          '_dark': {
            bg: '$backgroundDark700',
          },
          ':active': {
            _light: {
              bg: '$primary300',
            },
            _dark: {
              bg: '$backgroundDark600',
            },
          },
        },
      }}
      px="$4"
      py="$2"
    >
      <HStack
        maxWidth="$full"
        alignItems="center"
        space="lg"
        key={index + Math.random()}
      >
        <Center
          sx={{
            _light: {
              bg: '$primary100',
            },
            _dark: {
              bg: '$backgroundDark700',
            },
          }}
          p="$2"
          alignItems="center"
          justifyContent="center"
          rounded="$full"
        >
          <Icon
            as={Clock8}
            h="$4"
            w="$4"
            sx={{
              _light: {
                color: '$primary500',
              },
              _dark: {
                color: '$backgroundDark400',
              },
            }}
          />
        </Center>

        <VStack>
          <Text
            fontSize="$md"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
            fontWeight="$medium"
          >
            {data.keyword}
          </Text>
          <Text
            fontSize="$xs"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
            isTruncated
          >
            {data.address}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}

function MainContent() {
  return (
    <Box
      flex={1}
      sx={{
        '@md': {
          pb: '$8',
          px: '$2',
          pt: '$8',
          rounded: '$sm',
        },
        '_light': {
          bg: '$backgroundLight50',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      pb="$0"
      px="$0"
      pt="$4"
    >
      <VStack px="$4" sx={{ '@md': { px: '$6' } }} space="xs">
        <Input
          variant="outline"
          size="md"
          px="$0"
          py="$3"
          sx={{
            _dark: {
              bg: '$backgroundDark700',
              borderColor: '$borderDark500',
            },
          }}
        >
          <InputSlot>
            <InputIcon
              as={ArrowLeftIcon}
              ml="$4"
              color="$textLight400"
              sx={{
                _light: {
                  color: '$textDark500',
                },
              }}
            />
          </InputSlot>

          <InputField placeholder="Search here" />

          <InputSlot>
            <InputIcon
              as={CloseIcon}
              mr="$4"
              color="$textLight400"
              sx={{
                _dark: {
                  color: '$textDark400',
                },
              }}
            />
          </InputSlot>
        </Input>

        <Text
          fontWeight="$bold"
          sx={{
            '@md': {
              fontSize: '$md',
              mt: '$5',
            },
            '_light': {
              color: '$textLight800',
            },
            '_dark': {
              color: '$textDark50',
            },
          }}
          fontSize="$sm"
        >
          Recent
        </Text>
      </VStack>

      <VStack space="xs" mt="$4">
        {place.map((item, index) => {
          return (
            <RecentSearchItem
              index={index}
              data={item}
              key={index + Math.random()}
            />
          );
        })}
      </VStack>

      <Pressable
        mt="auto"
        mb="$8"
        sx={{
          '@md': {
            display: 'none',
          },
        }}
        display="flex"
      >
        <Text
          textAlign="center"
          fontWeight="$medium"
          fontSize="$sm"
          sx={{
            _light: {
              color: '$primary500',
            },
            _dark: {
              color: '$primary300',
            },
          }}
        >
          More from recent history
        </Text>
      </Pressable>
    </Box>
  );
}

export default function () {
  return (
    <DashboardLayout
      title="Explore"
      displaySidebar={false}
      rightPanelMobileHeader={true}
    >
      <MainContent />
    </DashboardLayout>
  );
}
