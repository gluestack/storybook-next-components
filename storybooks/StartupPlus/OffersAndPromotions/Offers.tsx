import React from 'react';

import { ImageSourcePropType, useWindowDimensions } from 'react-native';
import {
  Box,
  Text,
  Pressable,
  Heading,
  FlatList,
  Image,
  VStack,
  useBreakpointValue,
  styled,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
const LinearGradient = styled(
  ExpoLinearGradient,
  {},

  {
    resolveProps: ['colors', 'start', 'end'],
  },
  {
    propertyTokenMap: {
      colors: 'colors',
    },
    propertyResolver: {
      colors: (rawValue: any, resolver: any) => {
        rawValue.forEach((color: any, index: number) => {
          rawValue[index] = resolver(color);
        });
        return rawValue;
      },
    },
  }
);
type Offer = {
  imageRes: ImageSourcePropType;
  discount: string;
  type: string;
};

const offers: Offer[] = [
  {
    imageRes: require('./assets/images/cafe1.png'),
    discount: '30% OFF',
    type: 'Clothes Cafe',
  },
  {
    imageRes: require('./assets/images/cafe2.png'),
    discount: '50% OFF',
    type: 'Clothes hub',
  },
  {
    imageRes: require('./assets/images/cafe3.png'),
    discount: '40% OFF',
    type: 'Clothes fest',
  },
  {
    imageRes: require('./assets/images/cafe4.png'),
    discount: '30% OFF',
    type: 'Clothes Cafe',
  },
  {
    imageRes: require('./assets/images/cafe10.png'),
    discount: '50% OFF',
    type: 'Clothes hub',
  },
  {
    imageRes: require('./assets/images/cafe5.png'),
    discount: '40% OFF',
    type: 'Clothes fest',
  },
  {
    imageRes: require('./assets/images/cafe1.png'),
    discount: '30% OFF',
    type: 'Clothes Cafe',
  },
  {
    imageRes: require('./assets/images/cafe4.png'),
    discount: '50% OFF',
    type: 'Clothes hub',
  },
  {
    imageRes: require('./assets/images/cafe7.png'),
    discount: '40% OFF',
    type: 'Clothes fest',
  },
  {
    imageRes: require('./assets/images/cafe4.png'),
    discount: '30% OFF',
    type: 'Clothes Cafe',
  },
  {
    imageRes: require('./assets/images/cafe8.png'),
    discount: '50% OFF',
    type: 'Clothes hub',
  },
  {
    imageRes: require('./assets/images/cafe9.png'),
    discount: '40% OFF',
    type: 'Clothes fest',
  },
];

function Card(props: { item: Offer }) {
  return (
    <Box
      sx={{
        '@base': {
          mx: '$4',
        },
        '@md': {
          mx: '$2',
        },
        '@sm': {
          flex: 1,
        },
        'h': '$56',
      }}
      borderRadius="$lg"
      overflow="hidden"
      mt="$4"
    >
      <Pressable flex={1}>
        <Image
          source={props.item.imageRes}
          alt="Alternate Text"
          position="absolute"
          resizeMode="cover"
          top="$0"
          bottom="$0"
          left="$0"
          right="$0"
          w="$full"
          h="$full"
        />
        <LinearGradient
          colors={['$white', '$black']}
          rounded="$md"
          w="$full"
          h="$full"
          opacity={0.2}
        />
        <VStack
          justifyContent="flex-end"
          pl="$4"
          flex={1}
          bottom="$4"
          sx={{
            '@lg': {
              w: '$72',
            },
            '@md': {
              w: '$56',
            },
          }}
          zIndex={1}
        >
          <Text color="$textLight50" fontSize="$md">
            {props.item.type}
          </Text>

          <Heading color="$textLight50" fontSize="$3xl">
            {props.item.discount}
          </Heading>
        </VStack>
      </Pressable>
    </Box>
  );
}

export default function Offers() {
  const noColumn = useBreakpointValue({
    base: 1,
    sm: 2,
    lg: 3,
  });
  const { height } = useWindowDimensions();
  return (
    <DashboardLayout
      scrollable={false}
      displaySidebar={false}
      title="Offers"
      displayBackButton
      rightPanelMobileHeader={true}
    >
      <Box
        sx={{
          '@base': {
            pt: '$1',
            pb: '$5',
            px: '$0',
          },
          '@md': {
            borderRadius: '$sm',
            pt: '$4',
            pb: '$8',
            px: '$6',
          },
          '_light': {
            bg: '$backgroundLight50',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
        w="$full"
        h="$full"
      >
        <FlatList
          numColumns={noColumn}
          data={offers}
          mb="$4"
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Card item={item} />}
          key={'#' + noColumn}
          keyExtractor={(_, index) => 'key' + index}
          bounces={false}
        />
      </Box>
    </DashboardLayout>
  );
}
