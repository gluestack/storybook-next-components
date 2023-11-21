import React, { useState } from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Button,
  Box,
  ButtonText,
} from '@gluestack-ui/themed';

import { Pressable } from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

import RateUsIlstrutration from './Components/RateUsIlstrutration';
import { Star } from 'lucide-react-native';

type Icon = {
  name: string;
};
type StarIconProps = {
  item: Icon;
  index: number;
  selected: number;
  setSelected: (arg0: number) => void;
};

const icons: Icon[] = [
  {
    name: 'star-outline',
  },
  {
    name: 'star-outline',
  },
  {
    name: 'star-outline',
  },
  {
    name: 'star-outline',
  },
  {
    name: 'star-outline',
  },
];

function StarIcon(props: StarIconProps) {
  return (
    <Pressable
      onPress={() => {
        props.setSelected(props.index);
      }}
    >
      <Icon
        size="lg"
        p="$0"
        as={Star}
        sx={{
          _light: {
            color:
              props.selected <= props.index - 1 ? '$textLight800' : '$amber500',
          },
          _dark: {
            color:
              props.selected <= props.index - 1 ? '$textDark50' : '$amber500',
          },
        }}
      />
    </Pressable>
  );
}

function MainContent() {
  const [selected, setSelected] = useState(-1);
  return (
    <Box
      flex={1}
      sx={{
        '@md': {
          rounded: '$sm',
          px: '$35',
          pb: '$8',
        },
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      px="$4"
      pt="$8"
      pb="$4"
      alignItems="center"
    >
      <RateUsIlstrutration />

      <Text
        mt="$12"
        sx={{
          '@md': {
            mt: '$8',
            fontSize: '$2xl',
          },
        }}
        fontSize="$lg"
        fontWeight="$bold"
        textAlign="center"
      >
        Your opinion matters to us!
      </Text>

      <Text
        mt="$3.5"
        sx={{
          '@md': {
            fontSize: '$md',
            maxWidth: '$441',
          },
          '_light': {
            color: '$textLight800',
          },
          '_dark': {
            color: '$textDark400',
          },
        }}
        fontSize="$sm"
        maxWidth="$full"
        textAlign="center"
      >
        We work super hard to make the app better for you, and would love to
        know how would you rate our app?
      </Text>

      <HStack space="xs" alignItems="center" justifyContent="center" mt="$10">
        {icons.map((item, index) => {
          return (
            <StarIcon
              key={index}
              index={index}
              item={item}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </HStack>

      <Text
        mt="$3"
        mb="$8"
        fontSize="$sm"
        sx={{
          _light: {
            color: '$textLight500',
          },
          _dark: {
            color: '$textDark400',
          },
        }}
        textAlign="center"
      >
        Tap the stars
      </Text>

      <VStack w="$full" mt="auto" space="md">
        <Button
          size="lg"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText fontSize="$sm" fontWeight="$medium">
            SUBMIT
          </ButtonText>
        </Button>
        <Button
          size="lg"
          variant="outline"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText fontSize="$sm" fontWeight="$medium">
            NOT NOW
          </ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
export default function RateUs() {
  return (
    <DashboardLayout title="Rate Us" displaySidebar={false}>
      <MainContent />
    </DashboardLayout>
  );
}
