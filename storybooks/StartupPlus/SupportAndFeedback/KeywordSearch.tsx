import React, { useState } from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Input,
  Pressable,
  Center,
  Box,
  InputField,
  InputIcon,
  ArrowLeftIcon,
  CloseIcon,
  InputSlot,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';

import { ArrowUpLeft, MapPin } from 'lucide-react-native';

type PlaceProps = {
  keyword: string;
  address: string;
};

const places: PlaceProps[] = [
  {
    keyword: 'Rashtreeya Vidyalaya Road',
    address: 'Agra, Uttar Pradesh',
  },
  {
    keyword: 'Rajajinagar',
    address: 'Bengaluru, Karnataka',
  },
  {
    keyword: 'Ran Hospital',
    address: 'Bengaluru, Karnataka',
  },
  {
    keyword: 'Register gister gis gis',
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

function RecentSearchItem({
  keyword,
  address,
  searchKeyword,
}: PlaceProps & { searchKeyword: string }) {
  const searchKeyWordLength = searchKeyword.length;
  let jsx = null;
  const strg = keyword;

  if (searchKeyWordLength === 0) {
    jsx = (
      <Text
        fontSize="$md"
        sx={{
          _light: {
            color: '$textLight500',
          },
          _dark: {
            color: '$textDark400',
          },
        }}
        fontWeight="$medium"
      >
        {keyword}
      </Text>
    );
  }

  if (searchKeyWordLength > 0) {
    const regex = new RegExp(searchKeyword, 'gi');
    let result;
    const indices = [];
    while ((result = regex.exec(strg))) {
      indices.push(result.index);
    }

    let currentIndex = 0;

    const JSX = indices.map((ind) => {
      let firstPart = '';
      let secondPart = '';
      if (currentIndex !== ind) {
        firstPart = keyword.substring(currentIndex, ind);
      }
      secondPart = keyword.substring(ind, ind + searchKeyWordLength);
      currentIndex = searchKeyWordLength + ind;

      return (
        <HStack key={ind}>
          <Text
            fontSize="$md"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
            fontWeight="$medium"
          >
            {firstPart}
          </Text>

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
            {secondPart}
          </Text>
        </HStack>
      );
    });
    if (currentIndex <= keyword.length) {
      JSX.push(
        <Text
          key={currentIndex}
          fontSize="$md"
          sx={{
            _light: {
              color:
                currentIndex !== indices[indices.length - 1]
                  ? '$textLight500'
                  : '$textDark800',
            },
            _dark: {
              color:
                currentIndex !== indices[indices.length - 1]
                  ? '$textLight400'
                  : '$textDark50',
            },
          }}
          fontWeight="$medium"
        >
          {keyword.substring(currentIndex, keyword.length)}
        </Text>
      );
    }
    jsx = JSX;
  }

  return (
    <Pressable
      sx={{
        '@md': {
          borderRadius: '$sm',
        },
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      px="$4"
      py="$2.5"
    >
      <HStack alignItems="center" space="md">
        <VStack alignItems="center">
          <Center
            sx={{
              _light: {
                bg: '$primary50',
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
              as={MapPin}
              size="md"
              sx={{
                _light: {
                  color: '$primary500',
                },
                _dark: {
                  color: '$textDark400',
                },
              }}
            />
          </Center>

          <Text
            fontSize="$xs"
            color="$textLight500"
            sx={{
              _dark: {
                color: '$textDark50',
              },
            }}
            isTruncated={true}
          >
            1.6 km
          </Text>
        </VStack>

        <VStack space="xs">
          <HStack alignItems="center">{jsx}</HStack>
          <Text
            color="$textLight500"
            fontSize="$xs"
            sx={{ _dark: { color: '$textDark50' } }}
            isTruncated={true}
          >
            {address}
          </Text>
        </VStack>

        <Pressable ml="auto">
          <Icon
            as={ArrowUpLeft}
            size="md"
            color="$textLight400"
            sx={{ _dark: { color: '$textDark400' } }}
          />
        </Pressable>
      </HStack>
    </Pressable>
  );
}

function MainContent() {
  const [textInput, setTextInput] = useState<string>('');
  return (
    <Box
      flex={1}
      bg="$backgroundLight0"
      sx={{
        '@md': {
          rounded: '$sm',
          px: '$4',
          py: '$8',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      py="$5"
    >
      <Input
        mb="$2.5"
        mx="$4"
        variant="outline"
        size="md"
        sx={{
          _dark: {
            borderColor: '$borderDark500',
            bg: '$backgroundDark700',
          },
        }}
      >
        <InputSlot>
          <InputIcon
            as={ArrowLeftIcon}
            ml="$4"
            color="$textLight400"
            sx={{ _dark: { color: '$textDark400' } }}
          />
        </InputSlot>
        <InputField
          placeholder="Hotel"
          value={textInput}
          onChangeText={setTextInput}
        />

        <InputSlot
          onPress={() => {
            setTextInput('');
          }}
        >
          <InputIcon
            as={CloseIcon}
            mr="$4"
            color="$textLight400"
            sx={{ _dark: { color: '$textDark400' } }}
          />
        </InputSlot>
      </Input>

      <Box>
        {places
          .filter(({ keyword }) =>
            keyword.toLowerCase().includes(textInput.toLowerCase())
          )
          .map((item, index) => {
            return (
              <RecentSearchItem
                searchKeyword={textInput}
                {...item}
                key={index + item.address}
              />
            );
          })}
      </Box>
    </Box>
  );
}

export default function KeywordSearch() {
  return (
    <DashboardLayout displaySidebar={false} title="Explore">
      <MainContent />
    </DashboardLayout>
  );
}
