import React, { useState } from 'react';
import DashboardLayout from '../../Layouts/DashboardLayout';
import {
  HStack,
  VStack,
  Text,
  Icon,
  Input,
  Box,
  Center,
  Pressable,
  InputField,
  InputIcon,
  InputSlot,
} from '@gluestack-ui/themed';
import { useWindowDimensions } from 'react-native';
import Map from './Map';
import { ArrowLeft, ArrowUpLeft, MapPin, X } from 'lucide-react-native';

type PlaceProps = {
  keyword: string;
  address: string;
  dis: string;
};

const places: PlaceProps[] = [
  {
    keyword: 'Hotel Taj',
    address: 'Agra, Uttar Pradesh',
    dis: '1.6 km',
  },
  {
    keyword: 'Hotel Sandesh',
    address: 'Bengaluru, Karnataka',
    dis: '1.9 km',
  },
  {
    keyword: 'Hotel Rajmahal',
    address: 'Mall Road, Sultanpura',
    dis: '2.2 km',
  },
  {
    keyword: 'Hotel Maurya',
    address: 'Karnataka',
    dis: '2.7 km',
  },
  {
    keyword: 'Hotel Nandhana',
    address: 'Rainbow Hospitals,Sultanpura ',
    dis: '3.9 km',
  },
  {
    keyword: 'Hotel Grand Suites',
    address: 'State Highway 17, Karnataka',
    dis: '4 km',
  },
];

function RecentSearchItem({
  keyword,
  address,
  dis,
  searchKeyword,
}: PlaceProps & { searchKeyword: string }) {
  const searchKeyWordLength = searchKeyword.length;
  let jsx = null;
  const strg = keyword;

  if (searchKeyWordLength === 0) {
    jsx = (
      <Text fontSize="$md" fontWeight="$medium">
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
          <Text fontSize="$md" fontWeight="$medium">
            {firstPart}
          </Text>
          <Text fontSize="$md" fontWeight="$medium">
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
                  : '$textLight800',
            },
            _dark: {
              color:
                currentIndex !== indices[indices.length - 1]
                  ? '$textDark400'
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
          ':hover': { bg: '$backgroundLight100' },
          ':active': { bg: '$backgroundLight200' },
        },
        '_dark': {
          ':hover': { bg: '$backgroundDark700' },
          ':pressed': { bg: '$backgroundDark600' },
        },
      }}
      px="$4"
      py="$2.5"
    >
      <HStack alignItems="center" space="xl">
        <VStack space="xs">
          <Center
            bg="$primary50"
            sx={{
              _dark: { bg: '$backgroundDark700' },
            }}
            alignItems="center"
            justifyContent="center"
            rounded="$full"
            p="$2"
          >
            <Icon
              as={MapPin}
              size="md"
              color="$primary500"
              sx={{
                _dark: { color: '$textDark400' },
              }}
            />
          </Center>
          <Text
            fontSize="$2xs"
            color="$textLight500"
            sx={{
              _dark: { color: '$textDark50' },
            }}
            isTruncated
          >
            {dis}
          </Text>
        </VStack>

        <VStack space="sm">
          <HStack alignItems="center">{jsx}</HStack>
          <Text
            fontSize="$xs"
            color="$textLight500"
            sx={{
              _dark: { color: '$textDark50' },
            }}
            isTruncated
          >
            {address}
          </Text>
        </VStack>
        <Pressable ml="auto">
          <Icon as={ArrowUpLeft} size="md" color="$textLight400" />
        </Pressable>
      </HStack>
    </Pressable>
  );
}

function Address() {
  const [textInput, setTextInput] = useState('Hotel');

  return (
    <Box
      flex={1}
      h="$full"
      sx={{
        '@md': {
          rounded: '$sm',
          px: '$4',
          py: '$8',
        },
        '@lg': {
          maxWidth: '$422',
        },
        '@xl': {
          maxWidth: '$622',
        },
        '_dark': { bg: '$backgroundDark800' },
      }}
      py="$5"
      bg="$backgroundLight0"
    >
      <Input p="$2" mb="$2.5" mx="$4" variant="outline" alignItems="center">
        <InputSlot>
          <InputIcon as={ArrowLeft} size="lg" color="$textLight400" mr="$1" />
        </InputSlot>
        <InputField
          value={textInput}
          onChangeText={setTextInput}
          placeholder="Hotel"
          fontSize="$md"
          fontWeight="$medium"
        />
        <InputSlot
          onPress={() => {
            setTextInput('');
          }}
          ml="$2"
        >
          <InputIcon as={X} size="md" color="$textLight400" />
        </InputSlot>
      </Input>
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
  );
}
export default function StoreLocatorOne() {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <DashboardLayout
      title="Location"
      displaySidebar={false}
      maxWidth={windowWidth - 64}
      displayScreenTitle={false}
      displaySearchButton={true}
    >
      <HStack
        sx={{
          '@md': {
            maxHeight: '$764',
          },
          '_dark': { bg: '$backgroundDark800' },
        }}
        flex={1}
        bg="$backgroundLight0"
      >
        <Address />

        <Box
          display="none"
          sx={{
            '@md': {
              display: 'flex',
            },
          }}
        >
          {/* <Map /> */}
        </Box>
      </HStack>
    </DashboardLayout>
  );
}
