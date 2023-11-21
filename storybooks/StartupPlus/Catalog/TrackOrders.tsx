import React, { useEffect, useState } from 'react';
import {
  HStack,
  Text,
  VStack,
  Center,
  Divider,
  Box,
  Image,
  Icon,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import { CheckCircle2 } from 'lucide-react-native';

type TrackProps = {
  IconColorLight?: string;
  IconColorDark?: string;
};
function Card() {
  return (
    <HStack
      space="md"
      sx={{
        '@base': {
          p: '$3',
        },
        '@md': {
          p: '$4',
        },
        '_light': {
          bg: '$backgroundLight100',
        },
        '_dark': {
          bg: '$backgroundDark700',
        },
      }}
      rounded="$sm"
    >
      <Image
        source={require('./assets/images/sweater.png')}
        alt="Alternate Text"
        h="$24"
        w="$20"
        rounded="$sm"
      />
      <VStack flex={1}>
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
          Sweater dress
        </Text>
        <Text
          fontSize="$sm"
          fontWeight="$normal"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          Girls self design
        </Text>
        <Text
          fontSize="$sm"
          sx={{
            '@base': {
              fontWeight: '$medium',
            },
            '@md': {
              fontWeight: '$bold',
            },
            '_light': {
              color: '$textLight800',
            },
            '_dark': {
              color: '$textDark50',
            },
          }}
          mt="auto"
        >
          ₹1,199
        </Text>
      </VStack>
    </HStack>
  );
}
function TrackingIcon(props: TrackProps) {
  return (
    <Icon
      size="lg"
      as={CheckCircle2}
      sx={{
        _light: {
          color: props.IconColorLight,
        },
        _dark: {
          color: props.IconColorDark,
        },
      }}
    />
  );
}

const data = [
  {
    title: 'Order Placed',
    description: 'We have received your order on 28-May-2021.',
    status: { type: true, time: '5:38 pm' },
  },
  {
    title: 'Order Packed',
    description:
      'Seller has processed your order on 29th. Your item has been picked up by courier partner on 30 May-2021.',
    status: { type: true, time: '5:38 pm' },
  },
  {
    title: 'Shipped',
    description: 'Your item has been picked up not yet shipped.',
    status: { type: false, time: '' },
  },
];

const StatusStepComponent = ({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: { type: boolean; time: string };
}) => {
  // const isMobile = window.innerWidth < 768; // Adjust the breakpoint as needed
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add an event listener to track window resize
    // window.addEventListener('resize', handleResize);

    // Initial check for mobile/desktop on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define the array length based on the device type
  const arrLength = isMobile ? 10 : 7;
  const arr = new Array(arrLength).fill(0);
  return (
    <HStack justifyContent="flex-start" space="lg">
      <VStack>
        <TrackingIcon
          IconColorLight={status.type ? '$primary500' : '$primary300'}
          IconColorDark={status.type ? '$primary300' : '$textLight400'}
        />
        {status.type ? (
          <Divider
            orientation="vertical"
            sx={{
              _light: {
                bg: '$primary500',
              },
              _dark: {
                bg: '$primary300',
              },
            }}
            w="$0.5"
            ml="$2"
            flex={1}
          />
        ) : (
          <VStack flex={1} h="$8" w="$0.5" space="xs" ml="$2">
            {arr.map((index) => {
              return (
                <Center
                  key={index}
                  py="$0.5"
                  w="$0.5"
                  sx={{
                    _light: {
                      bg: '$primary300',
                    },
                    _dark: {
                      bg: '$backgroundDark400',
                    },
                  }}
                />
              );
            })}
          </VStack>
        )}
      </VStack>
      <VStack mb="$6" flex={1}>
        <Text
          sx={{
            _light: {
              color: status.type ? '$textLight800' : '$textLight400',
            },
            _dark: {
              color: status.type ? '$textDark50' : '$textDark500',
            },
          }}
          fontWeight="$medium"
          fontSize="$sm"
          mb="$1"
        >
          {title}
        </Text>

        <Text
          sx={{
            _light: {
              color: status.type ? '$textLight500' : '$textLight400',
            },
            _dark: {
              color: status.type ? '$textDark400' : '$textDark500',
            },
          }}
          fontWeight="$normal"
          fontSize="$xs"
        >
          {description}
        </Text>
        {status.type && (
          <Text
            sx={{
              _light: {
                color: '$textLight400',
              },
              _dark: {
                color: '$textDark500',
              },
            }}
            fontWeight="$normal"
            fontSize="$xs"
          >
            {status.time}
          </Text>
        )}
      </VStack>
    </HStack>
  );
};

function Tracking() {
  return (
    <Box
      sx={{
        '@base': {
          px: '$2',
        },
        '@md': {
          px: '$0',
        },
      }}
    >
      {data.map((item, index) => (
        <StatusStepComponent
          title={item.title}
          description={item.description}
          status={item.status}
          key={index}
        />
      ))}
      <HStack justifyContent="flex-start" space="lg">
        <TrackingIcon
          IconColorLight="$primary500"
          IconColorDark="$textLight400"
        />
        <VStack>
          <Text
            sx={{
              _light: {
                color: '$textLight400',
              },
              _dark: {
                color: '$textDark500',
              },
            }}
            fontWeight="$medium"
            fontSize="$sm"
            mb="$0.5"
          >
            Out for Delivery
          </Text>
          <Text
            sx={{
              _light: {
                color: '$textLight400',
              },
              _dark: {
                color: '$textDark500',
              },
            }}
            fontWeight="$normal"
            fontSize="$xs"
          >
            Your order is out for delivery.
          </Text>
        </VStack>
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
          pb: '$10',
        },
        '@md': {
          rounded: '$sm',
          flex: 1,
          px: '$8',
          pt: '$8',
          pb: '$8',
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
      space="xl"
    >
      <Card />
      <Tracking />
    </VStack>
  );
}
export default function TrackOrders() {
  return (
    <DashboardLayout title="Track Order">
      <MainContent />
    </DashboardLayout>
  );
}
