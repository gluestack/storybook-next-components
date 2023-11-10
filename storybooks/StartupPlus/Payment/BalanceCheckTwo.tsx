import React from 'react';

import DashboardLayout from '../Layouts/DashboardLayout';
import { Image, Text, VStack } from '@gluestack-ui/themed';

function AccountInfo() {
  return (
    <VStack
      alignItems="center"
      space="sm"
      sx={{ '@base': { mt: '$12' }, '@md': { mt: '$10' } }}
    >
      <Text
        sx={{
          _light: { color: '$textLight500' },
          _dark: { color: '$textDark400' },
        }}
        fontSize="$sm"
        fontWeight="$medium"
      >
        Saving Account
      </Text>
      <Text
        sx={{
          _light: { color: '$textLight800' },
          _dark: { color: '$textDark50' },
        }}
        fontSize="$md"
        fontWeight="$bold"
      >
        Axis Bank of India - 2445
      </Text>
    </VStack>
  );
}

function AccountBalance() {
  return (
    <VStack
      alignItems="center"
      space="md"
      sx={{ '@base': { mt: '$6' }, '@md': { mt: '10' } }}
    >
      <Text
        sx={{
          _light: { color: '$textLight500' },
          _dark: { color: '$textDark400' },
        }}
        fontSize="$sm"
        fontWeight="$medium"
      >
        Account Balance
      </Text>
      <Text
        sx={{
          _light: { color: '$textLight800' },
          _dark: { color: '$textDark50' },
        }}
        fontSize="$md"
        fontWeight="$bold"
      >
        Rs. 10,000.00
      </Text>
    </VStack>
  );
}
export default function BalanceCheckTwo() {
  return (
    <DashboardLayout title="Account balance" displaySidebar={false}>
      <VStack
        flex={1}
        sx={{
          '@md': { rounded: '$sm' },
          '_light': { bg: '$backgroundLight50' },
          '_dark': { bg: '$backgroundDark800' },
        }}
      >
        <VStack
          sx={{ '@base': { mt: '$20' }, '@md': { mt: '$32' } }}
          alignItems="center"
        >
          <Image
            source={require('./assets/images/Payment3.png')}
            size="xl"
            alt="payment"
          />
          <AccountInfo />
          <AccountBalance />
        </VStack>
      </VStack>
    </DashboardLayout>
  );
}
