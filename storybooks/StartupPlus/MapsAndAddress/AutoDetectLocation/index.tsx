import React, { useState } from 'react';
import DashboardLayout from '../../Layouts/DashboardLayout';
import {
  Button,
  HStack,
  Text,
  Icon,
  Input,
  Box,
  InputField,
  SearchIcon,
  InputIcon,
  ButtonText,
  InputSlot,
} from '@gluestack-ui/themed';
import Map from './Map';
import { MapPin, X } from 'lucide-react-native';

const AddressBadge = ({
  label,
  currentSelectedAddress,
  handleAddress,
}: {
  label: string;
  currentSelectedAddress: string;
  handleAddress: (address: string) => void;
}) => {
  return (
    <Button
      px="$8"
      size="sm"
      onPress={() => {
        handleAddress(label);
      }}
      sx={{
        _dark: {
          'bg':
            currentSelectedAddress === label
              ? '$backgroundDark500'
              : '$backgroundDark700',
          ':hover': {
            bg: '$backgroundDark600',
          },
          ':pressed': {
            bg: '$backgroundDark700',
          },
        },

        _light: {
          'bg': currentSelectedAddress === label ? '$primary200' : '$primary50',
          ':hover': {
            bg: '$primary100',
          },
          ':pressed': {
            bg: '$primary50',
          },
        },
      }}
    >
      <ButtonText
        color={
          currentSelectedAddress === label ? '$textLight900' : '$textLight800'
        }
        sx={{
          _dark: {
            color:
              currentSelectedAddress === label ? '$textDark50' : '$textDark100',
          },
        }}
        fontWeight="$normal"
      >
        {label}
      </ButtonText>
    </Button>
  );
};

export default function AutoDetectLocation() {
  const [textInput, setTextInput] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('Home');

  const handleAddress = (address: string) => {
    setSelectedAddress(address);
  };

  return (
    <DashboardLayout title="Add Address" displaySidebar={false}>
      <Box
        flex={1}
        sx={{
          '@md': {
            p: '$8',
            rounded: '$sm',
          },
          '@xl': {
            px: '$qrBox',
          },
          '_dark': { bg: '$backgroundDark800' },
        }}
        bg="$backgroundLight0"
      >
        <Input
          mx="$3"
          zIndex={1}
          position="absolute"
          top="$2"
          left="$0"
          right="$0"
          bg="$backgroundLight0"
          sx={{
            '@md': {
              mx: '$3',
              left: '$8',
              right: '$8',
              top: '$10',
            },
            '@xl': {
              left: '$qrBox',
              right: '$qrBox',
            },
            '_text': {
              color: 'textLight400',
            },
            '_dark': {
              bg: '$textDark700',
            },
          }}
        >
          <InputSlot m="$1">
            <InputIcon
              as={SearchIcon}
              sx={{
                '@md': {
                  ml: '$2',
                },
              }}
              size="md"
            />
          </InputSlot>
          <InputField
            onChangeText={setTextInput}
            value={textInput}
            placeholder="2118 Thornridge Cir. Syracuse,…"
            fontSize="$md"
            fontWeight="$medium"
          />
          <InputSlot
            onPress={() => {
              setTextInput('');
            }}
            m="$1"
          >
            <InputIcon
              as={X}
              sx={{
                '@md': {
                  mr: '$2',
                },
              }}
            />
          </InputSlot>
        </Input>
        {/* <Map /> */}
        <Box p="$4">
          <HStack
            borderRadius="$sm"
            bg="$primary50"
            sx={{
              _dark: {
                bg: '$backgroundDark700',
              },
            }}
            p="$3"
            space="lg"
            alignItems="center"
          >
            <Icon
              as={MapPin}
              color="$primary500"
              sx={{ _dark: { color: '$primary300' } }}
            />

            <Text fontSize="$md" fontWeight="$medium">
              Thornridge Cir. Syracuse, Connecticut
            </Text>
          </HStack>
          <Text fontSize="$sm" fontWeight="$medium" mt="$6">
            Building Name/ House No.
          </Text>
          <Input mt="$3">
            <InputField placeholder="2118" />
          </Input>
          <Text fontSize="$sm" fontWeight="$medium" mt="$6">
            Address Label
          </Text>
          <HStack
            space="sm"
            mt="$3"
            sx={{
              '@base': {
                flexWrap: 'wrap',
              },
            }}
          >
            <AddressBadge
              label="Home"
              currentSelectedAddress={selectedAddress}
              handleAddress={handleAddress}
            />
            <AddressBadge
              label="Office"
              currentSelectedAddress={selectedAddress}
              handleAddress={handleAddress}
            />
            <AddressBadge
              label="Other"
              currentSelectedAddress={selectedAddress}
              handleAddress={handleAddress}
            />
          </HStack>
          <Button mt="$5" variant="solid" size="lg">
            <ButtonText fontSize="$sm">SAVE ADDRESS</ButtonText>
          </Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
}
