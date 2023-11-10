import React from 'react';
import {
  HStack,
  Text,
  Image,
  Button,
  Radio,
  Box,
  VStack,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
  RadioLabel,
  CircleIcon,
  ButtonText,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';

type ProductType = {
  name: string;
  category: string;
  size: string;
  price: string;
  imageSrc: any;
};

const reasonList: string[] = [
  'Thursday- Free delivery',
  'Tuesday- Delivery fee ₹50',
  '2 Business Days- Delivery fee ₹150',
  'Pickup',
];

const product: ProductType = {
  name: 'BEDLAMP',
  category: 'Automatice sensor, Multi color',
  size: 'Medium',
  price: '₹1635',
  imageSrc: require('./assets/images/Maps1.png'),
};

function Card(props: ProductType) {
  return (
    <HStack
      space="md"
      sx={{
        _dark: { bg: '$backgroundDark700' },
      }}
      bg="$backgroundLight100"
      rounded="$sm"
      p="$3"
    >
      <Image
        source={props.imageSrc}
        alt="Alternate Text"
        height="$90"
        width="$74"
      />
      <Box
        sx={{
          _web: {
            flexShrink: 'unset',
          },
        }}
      >
        <Text
          fontSize="$md"
          fontWeight="$bold"
          sx={{ _dark: { color: '$textDark50' } }}
          color="$textLight800"
        >
          {props.name}
        </Text>
        <Text
          fontSize="$sm"
          sx={{ _dark: { color: '$textDark400' } }}
          color="$textLight500"
        >
          {props.category}
        </Text>
        <Text
          fontSize="$sm"
          sx={{ _dark: { color: '$textDark400' } }}
          color="$textLight500"
        >
          Size : {props.size}
        </Text>
        <Text
          fontSize="$sm"
          fontWeight="medium"
          sx={{ _dark: { color: '$textDark50' } }}
          color="$textLight800"
          mt="$0.5"
        >
          {props.price}
        </Text>
      </Box>
    </HStack>
  );
}
function CardSection() {
  return (
    <VStack
      space="md"
      sx={{
        '@md': { px: '$0', pt: '$0', pb: '$0' },
        '_dark': { bg: '$backgroundDark800' },
      }}
      bg="$backgroundLight0"
      px="$4"
      pt="$5"
      pb="$4"
    >
      <Card {...product} />
    </VStack>
  );
}
function DeliveryOptions() {
  return (
    <Box
      px="$4"
      py="$2"
      mt="$4"
      mb="$8"
      sx={{
        '_dark': { bg: '$backgroundDark800' },
        '@md': { px: '$0', py: '$0', mt: '$3' },
      }}
      bg="$backgroundLight0"
    >
      <Text
        fontSize="$sm"
        fontWeight="$medium"
        sx={{ _dark: { color: '$textDark50' } }}
        color="$textLight800"
        my="$3"
      >
        Choose a delivery option
      </Text>
      <VStack space="md">
        <RadioGroup>
          <VStack space="sm">
            {reasonList.map((item, index) => {
              return (
                <Radio value={item} key={index} my="$3">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>{item}</RadioLabel>
                </Radio>
              );
            })}
          </VStack>
        </RadioGroup>
      </VStack>
    </Box>
  );
}
function MainContent() {
  return (
    <Box
      flex={1}
      sx={{
        '@base': {
          _light: { bg: '$primary50' },
          _dark: { bg: '$backgroundDark700' },
          px: '$0',
        },
        '@md': {
          _light: { bg: '$backgroundLight0' },
          _dark: { bg: '$backgroundDark800' },
          rounded: '$sm',
          p: '$8',
        },
        '@lg': { px: '$16' },
        '@xl': { px: '$35' },
      }}
    >
      <CardSection />
      <DeliveryOptions />

      <Button
        variant="solid"
        mx="$4"
        mt="auto"
        mb="$4"
        sx={{
          '@md': { mx: '$0', mb: '$0' },
        }}
      >
        <ButtonText fontSize="$md">CONTINUE</ButtonText>
      </Button>
    </Box>
  );
}

export default function DeliveryMethod() {
  return (
    <DashboardLayout title="Delivery Method" displaySidebar={true}>
      <MainContent />
    </DashboardLayout>
  );
}
