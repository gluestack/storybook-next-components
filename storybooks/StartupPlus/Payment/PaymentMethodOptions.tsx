import React, { useState } from 'react';

import DashboardLayout from '../Layouts/DashboardLayout';
import {
  Box,
  Button,
  ButtonText,
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Divider,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  RadioIndicator,
  RadioIcon,
  RadioLabel,
  CircleIcon,
} from '@gluestack-ui/themed';

type OrderDetails = {
  key: string;
  value: string;
  props?: any;
};
const paymentTypeList: string[] = [
  'Add Debit/Credit/ATM Card',
  'Net Banking',
  'Wallet',
  'Cash on Delivery',
];

const orderDetails: OrderDetails[] = [
  {
    key: 'Total MRP',
    value: '₹3561.00',
  },
  {
    key: 'Discount on MRP',
    value: '(₹214.00)',
  },
  {
    key: 'Coupon Discount',
    value: '-',
  },
  {
    key: 'Shipping',
    value: 'Free',
  },
];
function OrderDetailsItem({
  orderKey,
  orderValue,
  props,
}: {
  orderKey: string;
  orderValue: string;
  props?: any;
}) {
  return (
    <HStack py="$2" justifyContent="space-between" {...props}>
      <Text
        fontSize="$xs"
        sx={{
          _light: { color: '$textLight800' },
          _dark: { color: '$textDark50' },
        }}
      >
        {orderKey}
      </Text>
      <Text
        fontSize="$xs"
        sx={{
          _light: { color: '$textLight800' },
          _dark: { color: '$textDark50' },
        }}
        {...props?._text}
      >
        {orderValue}
      </Text>
    </HStack>
  );
}
function OrderDetailsCard() {
  return (
    <Box
      px="$4"
      py="$3"
      borderRadius="$sm"
      sx={{
        _light: { bg: '$backgroundLight100' },
        _dark: { bg: '$backgroundDark700' },
      }}
    >
      <Heading
        py="$2"
        size="xs"
        sx={{ _light: { color: '$backgroundLight800' } }}
      >
        Order Details
      </Heading>
      {orderDetails.map((description, index) => (
        <OrderDetailsItem
          key={index}
          orderKey={description.key}
          orderValue={description.value}
          props={description.props}
        />
      ))}
      <Divider
        sx={{
          _light: { bg: '$backgroundLight200' },
          _dark: { bg: '$backgroundDark600' },
        }}
      />
      <HStack pt="$3" pb="$2" justifyContent="space-between">
        <Text
          fontSize="$sm"
          fontWeight="$medium"
          sx={{
            _light: { color: '$textLight800' },
            _dark: { color: '$textDark50' },
          }}
        >
          Total Amount
        </Text>
        <Text
          fontSize="$xs"
          sx={{
            _light: { color: '$textLight800' },
            _dark: { color: '$textDark50' },
          }}
        >
          ₹3340.00
        </Text>
      </HStack>
    </Box>
  );
}

function PaymentForm() {
  type PaymentFormType = {
    cardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    cvv: string;
  };

  const [paymentData, setPaymentData] = useState<PaymentFormType>({
    cardNumber: '6434007899834567',
    cardHolderName: 'Jane Cooper',
    expirationDate: '08/2024',
    cvv: '012',
  });

  const handleInputChange = (key: string) => (value: string) =>
    setPaymentData((prev) => ({ ...prev, [key]: value }));

  const { cardNumber, cardHolderName, expirationDate, cvv } = paymentData;

  return (
    <Box
      flex={1}
      py="$3"
      pl="$11"
      sx={{ '@base': { pr: '$4', px: '$4' }, '@md': { pr: '$0', px: '$0' } }}
      w="$full"
    >
      <VStack
        sx={{
          '@md': { flexDirection: 'row' },
        }}
        space="lg"
      >
        <FormControl flex={1}>
          <FormControlLabel mb="$1">
            <FormControlLabelText
              sx={{ '@base': { fontSize: '$xs' }, '@sm': { fontSize: '$sm' } }}
            >
              CARD NUMBER
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              maxLength={16}
              onChangeText={handleInputChange}
              value={cardNumber}
              placeholder="Enter card number"
            />
          </Input>
        </FormControl>
        <FormControl flex={1}>
          <FormControlLabel mb="$1">
            <FormControlLabelText
              sx={{ '@base': { fontSize: '$xs' }, '@sm': { fontSize: '$sm' } }}
            >
              CARDHOLDER NAME
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              onChangeText={handleInputChange}
              value={cardHolderName}
              placeholder="Enter cardholder name"
            />
          </Input>
        </FormControl>
      </VStack>

      <HStack
        sx={{
          '@base': { mt: '$6' },
        }}
        space="lg"
      >
        <FormControl flex={1}>
          <FormControlLabel mb="$1">
            <FormControlLabelText
              sx={{ '@base': { fontSize: '$xs' }, '@sm': { fontSize: '$sm' } }}
            >
              EXPIRATION DATE
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              editable={false}
              onChangeText={handleInputChange}
              value={expirationDate}
              placeholder="Enter card expiration date"
            />
          </Input>
        </FormControl>

        <FormControl flex={1}>
          <FormControlLabel mb="$1">
            <FormControlLabelText
              sx={{ '@base': { fontSize: '$xs' }, '@sm': { fontSize: '$sm' } }}
            >
              CVV
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              editable={false}
              onChangeText={handleInputChange}
              value={cvv}
              placeholder="Enter CVV"
              maxLength={3}
            />
          </Input>
        </FormControl>
      </HStack>
    </Box>
  );
}

function PaymentMethod() {
  const [value, setValue] = useState('');

  const handleMethodChange = (method: string) => {
    setValue(method);
  };

  const getCurrentMethodInputForm = () => {
    switch (value) {
      case 'Add Debit/Credit/ATM Card':
        return <PaymentForm />;
      default:
        return null;
    }
  };

  return (
    <VStack space="lg" sx={{ '@md': { pt: '$2' } }} mb="$4">
      <RadioGroup
        sx={{
          '_light': { bg: '$backgroundLight0' },
          '_dark': { bg: '$backgroundDark800' },
          '@base': { py: '$2', px: '$4' },
          '@md': { py: '$0', px: '$0' },
        }}
        value={value}
        onChange={(nextValue) => {
          handleMethodChange(nextValue);
        }}
      >
        <Text
          fontSize="$sm"
          fontWeight="$medium"
          py="$3"
          sx={{
            _light: { color: '$textLight800' },
            _dark: { color: '$textDark50' },
          }}
        >
          Select a payment method
        </Text>
        <Box py="$3">
          <Radio value="Phone pay UPI- Axis Bank" size="sm">
            <RadioIndicator mr="$2">
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel
              fontSize="$sm"
              sx={{
                _dark: { color: '$backgroundDark400' },
                _light: { color: '$backgroundLight500' },
              }}
            >
              Phone pay UPI- Axis Bank
            </RadioLabel>
            <Image
              source={require('./assets/images/Payment9.png')}
              alt="Alternate Text"
              h="$6"
              w="$6"
            />
          </Radio>
        </Box>
      </RadioGroup>

      <RadioGroup
        value={value}
        onChange={(nextValue) => {
          handleMethodChange(nextValue);
        }}
        sx={{
          '_light': { bg: '$backgroundLight0' },
          '_dark': { bg: '$backgroundDark800' },
          '@base': { mt: '$4', py: '$2' },
          '@md': { mt: '$0', py: '$0' },
        }}
      >
        <Text
          sx={{
            '@base': { px: '$4' },
            '@md': { px: '$0' },
            '_light': { color: '$textLight800' },
            '_dark': { color: '$textDark50' },
          }}
          pt="$2"
          pb="$3"
          fontSize="$sm"
          fontWeight="$medium"
        >
          More Ways to pay
        </Text>

        <Box py="$3">
          {paymentTypeList.map((method, index) => (
            <Radio
              onChange={() => handleMethodChange(method)}
              key={index}
              value={method}
              size="sm"
              flexDirection="column"
              alignItems="flex-start"
              py="$3"
              sx={{ '@base': { px: '$4' }, '@md': { px: '$0' } }}
            >
              <HStack alignItems="center" justifyContent="center">
                <RadioIndicator mr="$2">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel
                  sx={{
                    fontSize: '$sm',
                    _dark: { color: '$textDark400' },
                    _light: { color: '$textLight500' },
                  }}
                >
                  {method}
                </RadioLabel>
              </HStack>
              {method === 'Add Debit/Credit/ATM Card'
                ? getCurrentMethodInputForm()
                : null}
            </Radio>
          ))}
        </Box>
      </RadioGroup>
    </VStack>
  );
}

const Main = () => {
  return (
    <>
      <Box sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}>
        <OrderDetailsCard />
      </Box>
      <PaymentMethod />
    </>
  );
};
const PaymentMethodOptions = () => {
  return (
    <DashboardLayout title="Payment Methods">
      <Box
        flex={1}
        sx={{
          '@base': {
            _light: { bg: '$primary50' },
            _dark: { bg: '$backgroundDark700' },
          },
          '@md': {
            px: '$8',
            py: '$8',
            rounded: '$sm',
            _light: { bg: '$backgroundLight0' },
            _dark: { bg: '$backgroundDark800' },
          },
          '@lg': { px: '$16' },
          '@xl': { px: '$32' },
        }}
      >
        <Main />
        <Button
          variant="solid"
          size="lg"
          mt="auto"
          mb="$1"
          sx={{ '@base': { mx: '$4' }, '@md': { mx: '$0' } }}
        >
          <ButtonText>MAKE PAYMENT</ButtonText>
        </Button>
      </Box>
    </DashboardLayout>
  );
};

export default PaymentMethodOptions;
