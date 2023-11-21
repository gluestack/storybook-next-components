import React, { useEffect, useState } from 'react';
import {
  HStack,
  Icon,
  Text,
  Image,
  FlatList,
  Link,
  Box,
  useBreakpointValue,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';
import { ImageSourcePropType, ListRenderItemInfo } from 'react-native';
import { Heart, Star } from 'lucide-react-native';

type ProductProps = {
  id: string;
  imageUri: ImageSourcePropType;
  itemName: string;
  itemDescription: string;
  price: string;
  rating: number;
  numberOfRatings: number;
};

const itemList: ProductProps[] = [
  {
    id: "0",
    imageUri: require('./assets/images/wishlist-1.png'),
    itemName: 'HERE&NOW',
    itemDescription: 'Mid-Rise Denim Shorts',
    price: '200',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "1",
    imageUri: require('./assets/images/wishlist-2.png'),
    itemName: 'Marks & Spencer',
    itemDescription: 'Boys Pack of 3 T-shirts',
    price: '639',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "2",
    imageUri: require('./assets/images/wishlist-3.png'),
    itemName: 'CENWELL',
    itemDescription: 'Kids Cotton Cloth Mask',
    price: '399',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "3",
    imageUri: require('./assets/images/wishlist-4.png'),
    itemName: 'U.S. Polo Assn. Kids',
    itemDescription: 'Pure Cotton Sleepsuits',
    price: '849',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "4",
    imageUri: require('./assets/images/wishlist-5.png'),
    itemName: 'Cherry Crumble',
    itemDescription: 'Flare Dress',
    price: '899',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "5",
    imageUri: require('./assets/images/wishlist-6.png'),
    itemName: 'BonOrganik',
    itemDescription: 'Round-Neck T-shirt',
    price: '259',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "6",
    imageUri: require('./assets/images/wishlist-7.png'),
    itemName: 'U.S. Polo Assn. Kids',
    itemDescription: 'Black Self Design Sweater',
    price: '599',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "7",
    imageUri: require('./assets/images/wishlist-8.png'),
    itemName: 'Black Self Design Sweater',
    itemDescription: 'Flare low jeans',
    price: '865',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "8",
    imageUri: require('./assets/images/wishlist-9.png'),
    itemName: 'Lil Tomatoes',
    itemDescription: 'Red Cotton Regular Top',
    price: '250',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "9",
    imageUri: require('./assets/images/wishlist-10.png'),
    itemName: 'Cutiekins',
    itemDescription: 'Multicoloured Printed Top',
    price: '399',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "10",
    imageUri: require('./assets/images/wishlist-11.png'),
    itemName: 'BonOrganik',
    itemDescription: 'Round-Neck T-shirt',
    price: '259',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "11",
    imageUri: require('./assets/images/wishlist-12.png'),
    itemName: 'U.S. Polo Assn. Kids',
    itemDescription: 'Black Self Design Sweater',
    price: '599',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "12",
    imageUri: require('./assets/images/wishlist-13.png'),
    itemName: 'Peaches',
    itemDescription: 'Flare low jeans',
    price: '865',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "13",
    imageUri: require('./assets/images/wishlist-14.png'),
    itemName: 'Lil Tomatoes',
    itemDescription: 'Red Cotton Regular Top',
    price: '250',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    id: "14",
    imageUri: require('./assets/images/wishlist-15.png'),
    itemName: 'Cutiekins',
    itemDescription: 'Multicoloured Printed Top',
    price: '399',
    rating: 4.9,
    numberOfRatings: 120,
  },
];
function Card(props: ProductProps) {
  return (
    <Box
      sx={{
        '_light': {
          bg: '$primary50',
        },
        '_dark': {
          bg: '$backgroundDark700',
        },
        '@base': {
          m: '$1.5',
        },
        '@md': {
          m: '$2.5',
        },
      }}
      flex={1}
      px="$2"
      pt="$2"
      pb="$2.5"
      rounded="$sm"
    >
      <Link href="" rounded="$sm" overflow="hidden">
        <Image
          w="$full"
          h="$40"
          source={props.imageUri}
          alt="Product Image"
          resizeMode="cover"
        />
      </Link>
      <HStack alignItems="center" space="xs" mt="$2">
        <Icon size="sm" color="$amber400" as={Star} />
        <Text
          fontSize="$2xs"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textLight50',
            },
          }}
        >
          {props.rating}
        </Text>
        <Text
          fontSize="$2xs"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textLight400',
            },
          }}
        >
          {`(${props.numberOfRatings})`}
        </Text>
      </HStack>
      <Link mt="$1" href="">
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
          {props.itemName.length > 15
            ? `${props.itemName.substring(0, 15)}...`
            : props.itemName}
        </Text>
      </Link>
      <Text
        mt="$0.5"
        fontSize="$2xs"
        sx={{
          _light: {
            color: '$textLight500',
          },
          _dark: {
            color: '$textDark400',
          },
        }}
      >
        {props.itemDescription}
      </Text>
      <HStack mt="$1" w="$full" justifyContent="space-between">
        <Text
          fontSize="$sm"
          fontWeight="$bold"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          {'\u20B9'}
          {props.price}
        </Text>

        <Icon size="lg" color="$primary500" as={Heart} />
      </HStack>
    </Box>
  );
}

function MainContent() {
  const [numColumns, setNumColumns] = useState(5);
  const noColumn = useBreakpointValue({
    base: 2,
    md: 3,
    lg: 5,
  });
  
  useEffect(() => {
    if(noColumn !== numColumns) {
      setNumColumns(noColumn);
    }
  }, [noColumn])
  return (
    <Box
      sx={{
        '@base': {
          px: '$2.5',
          py: '$4',
        },
        '@md': {
          p: '$6',
          rounded: '$sm',
        },
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      alignItems="center"
      w="$full"
    >
      <FlatList
        key={'#' + numColumns}
        numColumns={numColumns}
        data={itemList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: ListRenderItemInfo<ProductProps>) => (
          <Card {...item} />
        )}
        keyExtractor={(item: ProductProps) => item.id}
        w="$full"
      />
    </Box>
  );
}

export default function MyWishlist() {
  return (
    <DashboardLayout
      scrollable={false}
      title="Wishlist"
      subTitle="128 Items"
      displaySidebar={false}
      displayBackButton
    >
      <MainContent />
    </DashboardLayout>
  );
}
