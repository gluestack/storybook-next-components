import React, { useState } from 'react';
import {
  Text,
  VStack,
  Button,
  Box,
  HStack,
  Pressable,
  Image,
  ButtonText,
  useColorMode,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';

type SeatSectionType = {
  seatSection: string;
  sectionSeats: Array<boolean>;
};

type SeatType = {
  title: string;
  seatSection: SeatSectionType[];
};

const SeatAllocation: SeatType[] = [
  {
    title: 'SILVER RS 250',
    seatSection: [
      {
        seatSection: 'A',
        sectionSeats: new Array(12),
      },
      {
        seatSection: 'B',
        sectionSeats: new Array(12),
      },
      {
        seatSection: 'C',
        sectionSeats: new Array(12),
      },
    ],
  },
  {
    title: 'GOLD RS 250',
    seatSection: [
      {
        seatSection: 'D',
        sectionSeats: new Array(12),
      },
      {
        seatSection: 'E',
        sectionSeats: new Array(12),
      },
      {
        seatSection: 'F',
        sectionSeats: new Array(12),
      },
      {
        seatSection: 'G',
        sectionSeats: new Array(12),
      },
      {
        seatSection: 'H',
        sectionSeats: new Array(12),
      },
      {
        seatSection: 'I',
        sectionSeats: new Array(12),
      },
    ],
  },
  {
    title: 'PLATINUM RS 250',
    seatSection: [
      {
        seatSection: 'J',
        sectionSeats: new Array(12),
      },
      {
        seatSection: 'K',
        sectionSeats: new Array(12),
      },
      {
        seatSection: 'L',
        sectionSeats: new Array(12),
      },
    ],
  },
];

function fillSeatsArray() {
  SeatAllocation.forEach((seat) => {
    seat.seatSection.forEach((row) => {
      row.sectionSeats.fill(false, 0, 12);
      if (row.seatSection === 'I') {
        row.sectionSeats.fill(true, 2, 7);
        row.sectionSeats[8] = true;
      }
    });
  });
}

function SeatComponent({
  isAvailable,
  seatNumber,
}: {
  isAvailable?: boolean;
  seatNumber: number;
}) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Pressable
      h="$6"
      w="$6"
      rounded="$sm"
      disabled={!isAvailable}
      borderWidth={isAvailable && !isSelected ? '$1' : '$0'}
      sx={{
        _light: {
          borderColor: '$borderLight500',
          bg: !isAvailable
            ? '$backgroundLight200'
            : isSelected
            ? '$green600'
            : '$none',
        },
        _dark: {
          borderColor: '$borderDark400',
          bg: !isAvailable
            ? '$backgroundDark700'
            : isSelected
            ? '$green400'
            : '$none',
        },
      }}
      alignItems="center"
      onPress={() => setIsSelected(!isSelected)}
    >
      <Text
        sx={{
          _light: {
            color: isSelected && isAvailable ? '$textLight50' : '$textLight500',
          },
          _dark: {
            color: isSelected && isAvailable ? '$textDark800' : '$textDark400',
          },
        }}
      >
        {seatNumber}
      </Text>
    </Pressable>
  );
}

function ScreenSection() {
  const colorMode = useColorMode();
  return (
    <Box
      mt="$20"
      sx={{
        '@md': {
          mt: '$7',
        },
      }}
      alignItems="center"
    >
      <Image
        sx={{
          '@md': {
            h: '$10',
            w: '$508',
          },
        }}
        h="$6"
        w="$72"
        resizeMode="stretch"
        display="flex"
        size="md"
        source={
          colorMode == 'light'
            ? require('./assets/images/seat-selection-light.png')
            : require('./assets/images/seat-selection-dark.png')
        }
        alt="gluestack-ui"
      />

      <Text
        textAlign="center"
        sx={{
          '@md': {
            fontSize: '$md',
          },
          '_light': {
            color: '$textLight500',
          },
          '_dark': {
            color: '$textDark400',
          },
        }}
        fontSize="$sm"
        fontWeight="medium"
      >
        Screen
      </Text>
    </Box>
  );
}

function SeatRow({ data }: { data: Array<boolean> }) {
  return (
    <HStack flex={1} justifyContent="space-between" alignItems="center">
      {data?.map((item, index) => {
        return (
          <SeatComponent
            isAvailable={item}
            seatNumber={index + 1}
            key={index}
          />
        );
      })}
    </HStack>
  );
}

function SeatSection({ currentSeat }: { currentSeat: SeatType }) {
  return (
    <VStack space="md" w="$full">
      <Text
        ml="$6"
        fontSize="$sm"
        fontWeight="medium"
        sx={{
          _light: {
            color: '$textLight500',
          },
          _dark: { color: '$textDark400' },
        }}
      >
        {currentSeat.title}
      </Text>
      {currentSeat.seatSection.map((item, index) => (
        <HStack alignItems="center" key={index}>
          <Text
            fontSize="$sm"
            fontWeight="medium"
            mr="$3"
            minWidth="$3"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: { color: '$t4extDark50' },
            }}
            lineHeight="$sm"
          >
            {item.seatSection}
          </Text>
          <SeatRow data={item.sectionSeats} />
        </HStack>
      ))}
    </VStack>
  );
}

function SeatCategories() {
  return (
    <HStack
      justifyContent="space-between"
      sx={{
        '@md': {
          mt: '$12',
          mb: '$8',
        },
      }}
      mt="$5"
      mb="$4"
      w="$full"
      maxWidth="$96"
      alignSelf="center"
    >
      <HStack gap="$2" alignItems="center">
        <Box
          w="$5"
          h="$5"
          borderWidth="$1"
          borderRadius="$xs"
          sx={{
            _light: {
              borderColor: '$borderLight500',
            },
            _dark: {
              borderColor: '$borderDark400',
            },
          }}
        />
        <Text
          fontSize="$sm"
          fontWeight="medium"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          Available
        </Text>
      </HStack>
      <HStack gap="$2" alignItems="center">
        <Box
          w="$5"
          h="$5"
          borderRadius="$xs"
          sx={{
            _light: {
              bg: '$backgroundLight200',
            },
            _dark: {
              bg: '$backgroundDark700',
            },
          }}
        />
        <Text
          fontSize="$sm"
          fontWeight="medium"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          Blocked
        </Text>
      </HStack>
      <HStack space="xs" alignItems="center">
        <Box
          w="$5"
          h="$5"
          borderRadius="$xs"
          sx={{
            _light: {
              bg: '$green600',
            },
            _dark: {
              bg: '$green400',
            },
          }}
        />
        <Text
          fontSize="$sm"
          fontWeight="medium"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          Selected
        </Text>
      </HStack>
    </HStack>
  );
}

function CheckoutButton() {
  return (
    <Button
      size="md"
      w="$full"
      sx={{
        '@md': {
          mb: '$8',
        },
      }}
      mb="$4"
      mt="auto"
      variant="solid"
      action="primary"
    >
      <ButtonText fontSize="$sm" fontWeight="$medium" color="$textLight50">
        Checkout (RS 600)
      </ButtonText>
    </Button>
  );
}

function MainContent() {
  fillSeatsArray();

  return (
    <Box
      alignItems="center"
      flex={1}
      sx={{
        '@md': {
          px: '$20',
          rounded: '$sm',
        },
        '@lg': {
          px: '$35',
        },
        '_light': {
          bg: '$backgroundLight50',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      px="$4"
    >
      <ScreenSection />
      <VStack
        space="xl"
        mt="$16"
        sx={{
          '@md': { mt: '$12' },
        }}
        w="$full"
        maxWidth="$508"
      >
        {SeatAllocation.map((seat, index) => (
          <SeatSection currentSeat={seat} key={index} />
        ))}
      </VStack>
      <SeatCategories />
      <CheckoutButton />
    </Box>
  );
}

export default function SeatSelection() {
  return (
    <DashboardLayout displaySidebar={false} title="Seat Selection">
      <MainContent />
    </DashboardLayout>
  );
}
