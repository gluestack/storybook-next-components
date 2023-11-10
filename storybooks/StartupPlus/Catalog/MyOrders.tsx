import React from 'react';
import {
  HStack,
  Text,
  VStack,
  Image,
  Button,
  Box,
  Link,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import { ImageSourcePropType } from 'react-native';

type Order = {
  orderId: string;
  imageUri: ImageSourcePropType;
  itemName: string;
  itemType: string;
  size: string;
  amount: string;
  delivery: string;
  deliveryColor: string;
};
type CardProps = {
  item: Order;
};
const orders: Order[] = [
  {
    orderId: 'Order : #7926895435345',
    imageUri: require('./assets/images/bedlamp.png'),
    itemName: 'BEDLAMP',
    itemType: 'Automatic sensor,Multi color',
    size: 'Size : Small',
    amount: '₹749',
    delivery: 'In-Transit',
    deliveryColor: '$amber600',
  },
  {
    orderId: 'Order : #2226895435345',
    imageUri: require('./assets/images/perfume.png'),
    itemName: 'PERFUME',
    itemType: 'Jasmine scent',
    size: 'Size : Large',
    amount: '₹999',
    delivery: 'Delivered',
    deliveryColor: '$emerald600',
  },
  {
    orderId: 'Order : #4426895435345',
    imageUri: require('./assets/images/skin-care-kit.png'),
    itemName: 'SKIN CARE KIT',
    itemType: 'Body Yogurt',
    size: 'Size : Medium',
    amount: '₹1,899',
    delivery: 'Delivered',
    deliveryColor: '$emerald600',
  },
  {
    orderId: 'Order : #2697895435345',
    imageUri: require('./assets/images/lamp.png'),
    itemName: 'BABY BEDLAMP',
    itemType: 'Multi color',
    size: 'Size : Small',
    amount: '₹1,635',
    delivery: 'Delivered',
    deliveryColor: '$emerald600',
  },
];
function Card(props: CardProps) {
  return (
    <Box
      sx={{
        '@base': {
          p: '$3',
        },
        '@md': {
          p: '$4',
        },
        '_light': {
          bg: '$backgroundDark100',
        },
        '_dark': {
          bg: '$backgroundDark700',
        },
      }}
      borderRadius="$sm"
    >
      <HStack alignItems="center" justifyContent="space-between">
        <Text
          fontSize="$xs"
          fontWeight="$normal"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          {props.item.orderId}
        </Text>
        <Text
          fontSize="$xs"
          fontWeight="$medium"
          sx={{
            color: props.item.deliveryColor,
          }}
        >
          {props.item.delivery}
        </Text>
      </HStack>
      <HStack alignItems="center" mt="$3" space="md">
        <Link href="#">
          <Image
            source={props.item.imageUri}
            alt="Order image"
            rounded="$sm"
            h="$24"
            w="$20"
          />
        </Link>

        <Box>
          <Link href="#">
            <Text
              fontSize="$md"
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
              {props.item.itemName}
            </Text>
          </Link>

          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            {props.item.itemType}
          </Text>
          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            {props.item.size}
          </Text>
          <Text
            mt="$0.5"
            fontSize="$sm"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {props.item.amount}
          </Text>
        </Box>
      </HStack>
      <HStack mt="$5" space="md">
        <Button variant="solid" size="xs">
          <Text fontSize="$2xs" fontWeight="$medium" color="$textLight50">
            {props.item.delivery === 'Delivered'
              ? 'VIEW DETAILS'
              : 'TRACK ORDER'}
          </Text>
        </Button>
        <Button
          variant="outline"
          sx={{
            _light: {
              borderColor: '$borderLight400',
            },
            _dark: {
              borderColor: '$borderDark400',
            },
          }}
          size="xs"
        >
          <Text fontSize="$2xs" fontWeight="$bold" color="$textLight400">
            {props.item.delivery === 'Delivered'
              ? 'RATE PRODUCT'
              : 'CANCEL ORDER'}
          </Text>
        </Button>
      </HStack>
    </Box>
  );
}
function MainContent() {
  return (
    <VStack
      sx={{
        '@base': {
          px: '$4',
          pt: '$5',
          pb: '$4',
        },
        '@md': {
          px: '$8',
          py: '$8',
          rounded: '$sm',
        },
        '@lg': {
          px: '$35',
        },
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      space="lg"
    >
      {orders.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </VStack>
  );
}
export default function MyOrders() {
  return (
    <DashboardLayout title="My Orders">
      <MainContent />
    </DashboardLayout>
  );
}
