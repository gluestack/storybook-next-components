import React from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  Box,
  ChevronRightIcon,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { Carousel } from '../components/Carousel';
import { ImageSourcePropType } from 'react-native';
import { Wallet } from 'lucide-react-native';

type Upi = {
  imageUri: ImageSourcePropType;
  bankName: string;
};

const upiList: Upi[] = [
  {
    imageUri: require('./assets/images/Payment6.png'),
    bankName: 'Axis Bank of India - 2445',
  },
  {
    imageUri: require('./assets/images/Payment4.png'),
    bankName: 'State Bank of India - 2445',
  },

  {
    imageUri: require('./assets/images/Payment5.png'),
    bankName: 'Bank of India - 2445',
  },
];
const CarouselLayout = () => {
  return (
    <Box
      sx={{
        '@base': { px: '$4', py: '$5', h: '$48' },
        '@md': { px: '$0', py: '$0', h: '$80' },
      }}
    >
      <Carousel
        height="auto"
        images={[
          require('./assets/images/Payment7.png'),
          require('./assets/images/Payment10.png'),
          require('./assets/images/Payment11.png'),
          require('./assets/images/Payment12.png'),
        ]}
        activeIndicatorBgColor="$backgroundLight500"
        inactiveIndicatorBgColor="$backgroundDark300"
      />
    </Box>
  );
};
function BankList() {
  return (
    <VStack p="$2">
      {upiList.map((item, index) => {
        return (
          <Pressable
            py="$4"
            key={index}
            sx={{
              ':hover': {
                _light: { bg: '$backgroundLight100' },
                _dark: { bg: '$backgroundDark600' },
              },
              ':active': {
                _dark: { bg: '$backgroundLight700' },
                _light: { bg: '$backgroundLight200' },
              },
            }}
            borderRadius="$sm"
          >
            <HStack alignItems="center" px="$4" space="md">
              <Image source={item.imageUri} alt="logo" size="xs" />
              <Text
                sx={{
                  _light: { color: '$textLight800' },
                  _dark: { color: '$textDark50' },
                }}
                fontSize="$sm"
                fontWeight="$medium"
              >
                {item.bankName}
              </Text>

              <Icon
                sx={{
                  _light: { color: '$textLight500' },
                  _dark: { color: '$textLight400' },
                }}
                ml="auto"
                as={ChevronRightIcon}
              />
            </HStack>
          </Pressable>
        );
      })}
    </VStack>
  );
}

function WalletPay() {
  return (
    <HStack alignItems="center" space="sm">
      <Icon as={Wallet} />
      <Text
        sx={{
          _light: { color: '$textLight800' },
          _dark: { color: '$textDark50' },
        }}
        fontSize="$sm"
        fontWeight="$normal"
      >
        Wallet Pay
      </Text>
      <Icon ml="auto" as={ChevronRightIcon} />
    </HStack>
  );
}
function Main() {
  return (
    <>
      <CarouselLayout />
      <VStack space="md" sx={{ '@md': { mt: '$5' } }}>
        <Box
          sx={{
            '@base': { mx: '$4' },
            '@md': { rounded: '$sm', mx: '$0' },
            '_light': { bg: '$backgroundLight0' },
            '_dark': { bg: '$backgroundDark800' },
          }}
          borderRadius="$sm"
        >
          <Text
            sx={{
              _light: { color: '$textLight800' },
              _dark: { color: '$textDark50' },
            }}
            fontWeight="$medium"
            fontSize="$sm"
            p="$4"
          >
            UPI Bank Accounts
          </Text>
          <BankList />
        </Box>
        <Box
          sx={{
            '@base': { mx: '$4', pb: '$0' },
            '@md': { rounded: '$sm', mx: '$0', pb: '$2', px: '$2' },
            '_light': { bg: '$backgroundLight0' },
            '_dark': { bg: '$backgroundDark800' },
          }}
          borderRadius="$md"
        >
          <Text
            sx={{
              _light: { color: '$textLight800' },
              _dark: { color: '$textDark50' },
            }}
            fontWeight="$medium"
            fontSize="$sm"
            p="$4"
          >
            Wallet
          </Text>
          <Pressable
            p="$4"
            sx={{
              ':hover': {
                _dark: { bg: '$backgroundDark600' },
                _light: { bg: '$backgroundLight100' },
              },
              ':active': {
                _dark: { bg: '$backgroundLight700' },
                _light: { bg: '$backgroundLight200' },
              },
            }}
            borderRadius="$sm"
          >
            <WalletPay />
          </Pressable>
        </Box>
      </VStack>
    </>
  );
}
const BalanceCheck = () => {
  return (
    <DashboardLayout
      title="Balance Check"
      displaySidebar={false}
      rightPanelMobileHeader={false}
    >
      <Main />
    </DashboardLayout>
  );
};

export default BalanceCheck;
