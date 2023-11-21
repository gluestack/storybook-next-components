import React from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  Box,
  Button,
  ButtonText,
  Divider,
  HStack,
  Image,
  Text,
} from '@gluestack-ui/themed';

type Cost = {
  name1: string;
  name2: string;
};

const cost: Cost[] = [
  {
    name1: 'Total MRP',
    name2: '₹3561.00',
  },
  {
    name1: 'Discount on MRP',
    name2: '(₹214.00)',
  },
  {
    name1: 'Coupon Discount',
    name2: '50%NEW',
  },
  {
    name1: 'Shipping',
    name2: 'Free',
  },
];
function PageImage() {
  return (
    <Box alignItems="center">
      <Image
        source={require('./assets/images/Payment8.png')}
        h="$122"
        width="$182"
        resizeMode="contain"
        alt="payment"
      />
      <Text
        sx={{
          _light: { color: '$textLight800' },
          _dark: { color: '$textDark50' },
        }}
        textAlign="center"
        fontWeight="bold"
        fontSize="$xl"
        mt="$8"
      >
        Order Placed Successfully!
      </Text>
      <Text
        textAlign="center"
        fontSize="$sm"
        fontWeight="$normal"
        sx={{
          '_light': { color: '$textLight800' },
          '_dark': { color: '$textDark50' },
          '@md': { maxWidth: '$480' },
        }}
        mt="$4"
      >
        Congratulations! Your order has been placed. You can track your order
        number #6472883
      </Text>
    </Box>
  );
}

function CostList() {
  return (
    <Box
      py="$4"
      sx={{ '@base': { mt: '$5' }, '@md': { mt: '$8' } }}
      mb="$4"
      flex={1}
    >
      <Text
        fontSize="$sm"
        fontWeight="$bold"
        sx={{
          _dark: { color: '$textDark50' },
          _light: { color: '$textLight800' },
        }}
      >
        Order Summary
      </Text>
      {cost.map((item, index) => {
        return (
          <HStack
            justifyContent="space-between"
            sx={{ '@base': { mt: '$4' } }}
            alignItems="center"
            key={index}
          >
            <Text
              sx={{
                _dark: { color: '$textDark50' },
                _light: { color: '$textLight800' },
              }}
              fontSize="$xs"
              fontWeight="$normal"
            >
              {item.name1}
            </Text>
            {item.name2 === '50%NEW' ? (
              <Text
                sx={{
                  _light: { color: '$primary500' },
                  _dark: { color: '$primary300' },
                }}
                fontSize="$xs"
                fontWeight="$normal"
              >
                {item.name2}
              </Text>
            ) : (
              <Text fontSize="$xs" fontWeight="$normal">
                {item.name2}
              </Text>
            )}
          </HStack>
        );
      })}
      <Divider
        sx={{
          _light: { bg: '$backgroundLight200' },
          _dark: { bg: '$backgroundDark700' },
        }}
        mt="$2"
      />
      <HStack alignItems="center" justifyContent="space-between" pt="$2">
        <Text
          fontWeight="$medium"
          fontSize="$sm"
          sx={{
            _dark: { color: '$textDark50' },
            _light: { color: '$textLight800' },
          }}
        >
          Total Amount
        </Text>
        <Text
          fontWeight="$normal"
          fontSize="$sm"
          sx={{
            _dark: { color: '$textDark50' },
            _light: { color: '$textLight800' },
          }}
        >
          ₹3340.00
        </Text>
      </HStack>
    </Box>
  );
}
const Main = () => {
  return (
    <Box
      sx={{
        '@base': { px: '$4', pt: '$8', pb: '$4' },
        '@md': { px: '$16', pt: '$10', pb: '$8', rounded: '$sm' },
        '@lg': { px: '35' },
        '_light': { bg: '$backgroundLight50' },
        '_dark': { bg: '$backgroundDark800' },
        'flex': 1,
      }}
    >
      <PageImage />
      <CostList />
      <Button variant="solid" mt="auto" size="lg">
        <ButtonText> CONTINUE SHOPPING</ButtonText>
      </Button>
    </Box>
  );
};
const OrderConfirmation = () => {
  return (
    <DashboardLayout displaySidebar={false} title="Order Confirmation">
      <Main />
    </DashboardLayout>
  );
};

export default OrderConfirmation;
