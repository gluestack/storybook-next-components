import React, { useState } from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  Button,
  Pressable,
  Link,
  Icon,
  ButtonText,
  FlatList,
  useBreakpointValue,
} from '@gluestack-ui/themed';
import { ImageSourcePropType, useWindowDimensions } from 'react-native';
import DashboardLayout from '../Layouts/DashboardLayout';
import { Heart, Star } from 'lucide-react-native';

type ProductType = {
  image: ImageSourcePropType;
  type: string;
  category: string;
  price: string;
  rating: number;
  numberOfRatings: number;
};

type ProductAddons = {
  showAll: boolean;
};

type CardType = {
  id: string;
  imageUri: ImageSourcePropType;
  item: string;
  details: string;
  size: string;
  amount: string;
};
const card: CardType[] = [
  {
    id: '1',
    imageUri: require('./assets/images/Product2.png'),
    item: 'BEDLAMP',
    details: 'Automatic sensor,Multi color',
    size: 'Medium',
    amount: '₹1635.00',
  },
];
const products: ProductType[] = [
  {
    image: require('./assets/images/Product3.png'),
    type: 'HERE&NOW',
    category: 'Mid-Rise Denim Shorts',
    price: '₹200',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    image: require('./assets/images/Product4.png'),
    type: 'Marks & Spencer',
    category: 'Boys Pack of 3 T-shirts',
    price: '₹639',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    image: require('./assets/images/Product5.png'),
    type: 'Vero Moda',
    category: 'Women Blue Skinny Fit',
    price: '₹1259',
    rating: 4.9,
    numberOfRatings: 120,
  },
  {
    image: require('./assets/images/Product6.png'),
    type: 'AND',
    category: 'Women Flare Dress',
    price: '₹639',
    rating: 4.9,
    numberOfRatings: 120,
  },
];

function Card(props: CardType) {
  return (
    <Link>
      <HStack
        alignItems="center"
        sx={{
          _light: { bg: '$backgroundLight100' },
          _dark: { bg: '$backgroundDark700' },
        }}
        p="$3"
        rounded="$sm"
      >
        <Image
          size="md"
          alt="Lamp Photo"
          height="$24"
          width="$20"
          rounded="$sm"
          mr="$3"
          source={props.imageUri}
        />

        <VStack>
          <Text
            fontSize="$md"
            fontWeight="bold"
            sx={{
              _light: { color: '$textLight800' },
              _dark: { color: '$textDark50' },
            }}
          >
            {props.item}
          </Text>

          <Text
            fontSize="$sm"
            sx={{
              _light: { color: '$textLight500' },
              _dark: { color: '$textDark400' },
            }}
          >
            {props.details}
          </Text>
          <Text
            fontSize="$sm"
            sx={{
              _light: { color: '$textLight500' },
              _dark: { color: '$textDark400' },
            }}
          >
            Size : {props.size}
          </Text>
          <Text
            fontWeight="medium"
            fontSize="$sm"
            sx={{
              _light: { color: '$textLight800' },
              _dark: { color: '$textDark50' },
            }}
          >
            {props.amount}
          </Text>
        </VStack>
      </HStack>
    </Link>
  );
}

function CardSection() {
  return (
    <VStack
      space="xs"
      sx={{
        '@md': {
          py: '$0',
          px: '$2.5',
        },
        '_light': { bg: '$backgroundLight50' },
        '_dark': { bg: '$backgroundDark800' },
      }}
      py="$4"
      px="$4"
    >
      {card.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </VStack>
  );
}
function Item(props: ProductType) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  return (
    <Box
      sx={{
        '@md': {
          px: '$2.5',
        },
        '@lg': {
          w: '$2/6',
        },
        '@xl': {
          w: '$1/4',
        },
      }}
      px="$1.5"
      width="$1/2"
    >
      <Box
        p="$2"
        w="$full"
        sx={{
          _light: { bg: '$primary50' },
          _dark: { bg: '$backgroundDark700' },
        }}
        rounded="$sm"
        mb="$4"
      >
        <Link href="">
          <Box w="$full">
            <Image
              size="md"
              w="$full"
              h="$40"
              alt="Alternate Text"
              rounded="$xs"
              source={props.image}
            />

            <VStack mt="$2">
              <HStack alignItems="center" space="xs">
                <Icon
                  size="xs"
                  color="$amber400"
                  as={Star}
                  // fill="$amber400"
                  sx={{
                    props: {
                      fill: '$amber400',
                    },
                  }}
                />
                <Text
                  fontSize="$2xs"
                  sx={{
                    _light: { color: '$textLight800' },
                    _dark: { color: '$textDark50' },
                  }}
                >
                  {props.rating}
                </Text>
                <Text
                  fontSize="$2xs"
                  sx={{
                    _light: { color: '$textLight500' },
                    _dark: { color: '$textDark400' },
                  }}
                >
                  ({props.numberOfRatings})
                </Text>
              </HStack>
              <Text
                mt="$1"
                fontSize="$sm"
                sx={{
                  _light: { color: '$textLight800' },
                  _dark: { color: '$textDark50' },
                }}
              >
                {props.type}
              </Text>
              <Text
                fontSize="$2xs"
                mt="$0.5"
                sx={{
                  _light: { color: '$textLight500' },
                  _dark: { color: '$textDark400' },
                }}
              >
                {props.category}
              </Text>
            </VStack>
          </Box>
        </Link>

        <HStack justifyContent="space-between" alignItems="center" mt={1}>
          <Text
            fontSize="$sm"
            fontWeight="bold"
            sx={{
              _light: { color: '$textLight800' },
              _dark: { color: '$textDark50' },
            }}
          >
            {props.price}
          </Text>
          <Pressable onPress={() => setIsWishlisted(!isWishlisted)}>
            {isWishlisted ? (
              <Icon
                as={Heart}
                m="$2"
                size="sm"
                sx={{
                  _light: { color: '$primary500', fill: '$primary500' },
                  _dark: { color: '$primary300', fill: '$primary300' },
                }}
              />
            ) : (
              <Icon
                as={Heart}
                m="$2"
                size="sm"
                sx={{
                  _light: { color: '$primary500' },
                  _dark: { color: '$primary300' },
                }}
              />
            )}
          </Pressable>
        </HStack>
      </Box>
    </Box>
  );
}

function ProductAddons(props: ProductAddons) {
  const productCollection: ProductType[] = useBreakpointValue({
    base: props.showAll ? products : products.slice(0, 2),
    lg: props.showAll ? products : products.slice(0, 3),
    xl: props.showAll ? products : products.slice(0, 4),
  });
  return (
    <>
      <HStack flexWrap="wrap" justifyContent="flex-start">
        {productCollection.map((item, key) => {
          return <Item {...item} key={key} />;
        })}
      </HStack>
    </>
  );
}

function ProductsList() {
  const [seeAllAddons, setSeeAllAddons] = React.useState(false);
  function toggleSeeAllAddons() {
    setSeeAllAddons(!seeAllAddons);
  }
  return (
    <Box
      sx={{
        '@md': {
          mb: '$0',
          px: '$0',
        },
        '_light': {
          bg: '$backgroundLight50',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      mt="$4"
      mb="$4"
      px="$4"
    >
      <HStack
        alignItems="center"
        justifyContent="space-between"
        py="$4"
        sx={{
          '@md': {
            px: '$2.5',
          },
        }}
        px="$1.5"
      >
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
          fontWeight="medium"
        >
          Product Add-ons
        </Text>

        <Pressable onPress={toggleSeeAllAddons}>
          <Text
            fontSize="$sm"
            color="$primary500"
            sx={{
              _dark: {
                color: '$primary300',
              },
            }}
          >
            See {seeAllAddons ? 'Less' : 'All'}
          </Text>
        </Pressable>
      </HStack>
      <ProductAddons showAll={seeAllAddons} />
    </Box>
  );
}

function MainContent() {
  return (
    <Box
      sx={{
        '@md': {
          rounded: '$sm',
          px: '$22',
          py: '$8',
          pb: '$8',
          _light: {
            bg: '$backgroundLight50',
          },
          _dark: {
            bg: '$backgroundDark800',
          },
        },
        '_light': {
          bg: '$primary50',
        },
        '_dark': {
          bg: '$backgroundDark700',
        },
        '@lg': {
          px: '$12',
        },
        '@xl': {
          px: '$32',
        },
      }}
      pb="$4"
      flex={1}
    >
      <CardSection />
      <ProductsList />

      <Button
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        sx={{
          '@md': {
            mx: '$1',
          },
        }}
        mx="$4"
        mt="auto"
      >
        <ButtonText fontWeight="medium">CHECKOUT </ButtonText>
      </Button>
    </Box>
  );
}

export default function AddOns() {
  return (
    <DashboardLayout
      title="Add-ons"
      displayNotificationButton
      displayScreenTitle
      rightPanelMobileHeader={true}
    >
      <MainContent />
    </DashboardLayout>
  );
}
