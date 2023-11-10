import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Divider,
  Button,
  Box,
  ButtonText,
  ButtonIcon,
  Heading,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import { MapPin, Pencil, Trash2 } from 'lucide-react-native';

type AddressType = {
  place: string;
  subAddress: string;
};

const addresses: AddressType[] = [
  {
    place: 'Home',
    subAddress: '4517 Washington Ave. Manchester, Kentucky',
  },
  {
    place: 'Work',
    subAddress: '8502 Preston Rd. Inglewood, Maine 98380 ',
  },
];

function AddressCard({ place, subAddress }: AddressType) {
  return (
    <>
      <HStack space="md" alignItems="flex-start">
        <Icon
          as={MapPin}
          color="$primary500"
          size="xl"
          sx={{ _dark: { color: '$primary300' } }}
        />
        <VStack
          space="md"
          sx={{
            _web: {
              flexShrink: 'unset',
            },
          }}
        >
          <Heading fontSize="$lg">{place}</Heading>
          <Text
            fontSize="$sm"
            color="$textLight500"
            sx={{
              _dark: { color: '$textDark400' },
            }}
          >
            {subAddress}
          </Text>
          <HStack space="lg">
            <Button variant="solid" size="md">
              <ButtonIcon as={Pencil} mr="$2" />
              <ButtonText fontSize="$sm">Edit</ButtonText>
            </Button>
            <Button variant="outline" action="secondary" size="md">
              <ButtonIcon as={Trash2} mr="$2" />
              <ButtonText color="$textLight" fontSize="$sm">
                Delete
              </ButtonText>
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </>
  );
}

function MainContent() {
  return (
    <Box
      bg="$backgroundLight0"
      sx={{
        '@md': { px: '$32', py: '$10', rounded: '$sm' },
        '@lg': { px: '$35' },
        '_dark': { bg: '$backgroundDark800' },
      }}
      px="$4"
      py="$5"
      flex={1}
    >
      <Text
        fontWeight="$medium"
        color="$textLight800"
        sx={{ _dark: { color: '$textDark50' } }}
        lineHeight="$md"
      >
        Saved Addresses
      </Text>
      <VStack mt="$4" space="2xl">
        {addresses.map((address, index) => {
          return (
            <>
              <AddressCard key={index} {...address} />
              {index < addresses.length - 1 && (
                <Divider
                  bg="$backgroundLight200"
                  sx={{ _dark: { bg: '$backgroundDark700' } }}
                />
              )}
            </>
          );
        })}
      </VStack>
    </Box>
  );
}

export default function ManageAddress() {
  return (
    <DashboardLayout
      title="Manage Addresses"
      displayMenuButton
      displayNotificationButton
      displaySidebar={false}
      rightPanelMobileHeader={true}
    >
      <MainContent />
    </DashboardLayout>
  );
}
