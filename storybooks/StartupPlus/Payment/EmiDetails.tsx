import React from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  Box,
  Center,
  ChevronRightIcon,
  Divider,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Text,
  VStack,
  styled,
} from '@gluestack-ui/themed';
import { DollarSign, Home } from 'lucide-react-native';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
const LinearGradient = styled(
  ExpoLinearGradient,
  {},

  {
    resolveProps: ['colors', 'start', 'end'],
  },
  {
    propertyTokenMap: {
      colors: 'colors',
    },
    propertyResolver: {
      colors: (rawValue: any, resolver: any) => {
        rawValue.forEach((color: any, index: number) => {
          rawValue[index] = resolver(color);
        });
        return rawValue;
      },
    },
  }
);

type CardDetails = {
  holderName: string;
  bankName: string;
  accountNumber: string;
  creditText: string;
  creditLimitAmount: string;
  availableText: string;
  availableLimitAmount: string;
};

const cardDetails: CardDetails[] = [
  {
    holderName: 'Hello John',
    bankName: 'Bank of India',
    accountNumber: '2345 XXXX XXXX 3423',
    creditText: 'Credit Limit',
    creditLimitAmount: '$1440.75',
    availableText: 'Available Limit',
    availableLimitAmount: '$140.75',
  },
];

type CreditCardProps = {
  item: CardDetails;
};
const CARD_HEIGHT = '192';

const CreditCard = ({ item }: CreditCardProps) => {
  return (
    <LinearGradient
      sx={{ '@base': { mt: '$2' }, '@md': { mt: '$0' } }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      w="$full"
      h="$48"
      p="$5"
      rounded="$lg"
      colors={['$emerald500', '$primary500']}
    >
      <VStack>
        <VStack space="md">
          <Text
            fontSize="$xl"
            fontWeight="medium"
            sx={{
              _light: { color: '$textLight50' },
              _dark: { color: '$textDark50' },
            }}
          >
            {item.holderName}
          </Text>
          <VStack space="xs">
            <Text
              fontSize="$sm"
              fontWeight="bold"
              sx={{
                _light: { color: '$textLight50' },
                _dark: { color: '$textDark50' },
              }}
            >
              {item.bankName}
            </Text>
            <Text
              fontSize="$md"
              sx={{
                _light: { color: '$textLight50' },
                _dark: { color: '$textDark50' },
              }}
              fontWeight="bold"
            >
              {item.accountNumber}
            </Text>
          </VStack>
        </VStack>
        <Divider
          mt="$3"
          sx={{
            _dark: { bg: '$backgroundDark200' },
            _light: { bg: '$backgroundLight200' },
          }}
        />
        <HStack justifyContent="space-between" mt="$2">
          <VStack space="xs">
            <Text
              sx={{
                _dark: { color: '$textDark50' },
                _light: { color: '$textLight50' },
              }}
              fontSize="$sm"
              fontWeight="medium"
            >
              {item.creditText}
            </Text>
            <Text
              fontWeight="bold"
              sx={{
                _dark: { color: '$textDark50' },
                _light: { color: '$textLight50' },
              }}
              fontSize="$md"
            >
              {item.creditLimitAmount}
            </Text>
          </VStack>
          <VStack space="xs">
            <Text
              sx={{
                _dark: { color: '$textDark50' },
                _light: { color: '$textLight50' },
              }}
              fontSize="$sm"
              fontWeight="medium"
            >
              {item.availableText}
            </Text>
            <Text
              fontWeight="bold"
              sx={{
                _dark: { color: '$textDark50' },
                _light: { color: '$textLight50' },
              }}
              fontSize="$md"
              textAlign="right"
            >
              {item.availableLimitAmount}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </LinearGradient>
  );
};
const UnbilledAndLastPaid = () => {
  return (
    <HStack space="md">
      <HStack
        space="sm"
        flex={1}
        py="$3"
        px="$2"
        maxWidth="$full"
        sx={{
          _light: { bg: '$backgroundLight0' },
          _dark: { bg: '$backgroundDark800' },
        }}
        rounded="$sm"
        alignItems="center"
      >
        <Box
          sx={{
            _light: { bg: '$primary100' },
            _dark: { bg: '$backgroundDark700' },
          }}
          p="$2"
          w="$8"
          h="$8"
          alignItems="center"
        >
          <Icon
            as={DollarSign}
            sx={{
              _light: { color: '$primary500' },
              _dark: { color: '$primary300' },
            }}
            size="sm"
          />
        </Box>
        <VStack space="xs">
          <Text
            fontSize="$xs"
            fontWeight="medium"
            sx={{
              _light: { color: '$textLight500' },
              _dark: { color: '$textDark400' },
            }}
          >
            Unbilled Spents
          </Text>

          <Text
            fontSize="$md"
            fontWeight="bold"
            sx={{
              _light: { color: '$textLight800' },
              _dark: { color: '$textDark50' },
            }}
          >
            $144.75
          </Text>
        </VStack>
      </HStack>
      <HStack
        space="sm"
        flex={1}
        py="$3"
        px="$2"
        sx={{
          _light: { bg: '$backgroundLight50' },
          _dark: { bg: '$backgroundDark800' },
        }}
        rounded="$sm"
        alignItems="center"
      >
        <Box
          sx={{
            _light: { bg: '$primary100' },
            _dark: { bg: '$backgroundDark700' },
          }}
          p="$2"
          w="$8"
          h="$8"
          alignItems="center"
        >
          <Icon
            as={Home}
            sx={{
              _light: { color: '$primary500' },
              _dark: { color: '$primary300' },
            }}
            size="md"
          />
        </Box>
        <VStack space="xs">
          <Text
            fontSize="$xs"
            fontWeight="medium"
            sx={{
              _light: { color: '$backgroundLight500' },
              _dark: { color: '$backgroundDark400' },
            }}
          >
            Last Paid
          </Text>
          <Text
            fontSize="$md"
            fontWeight="bold"
            sx={{
              _light: { color: '$backgroundLight800' },
              _dark: { color: '$backgroundDark50' },
            }}
          >
            $154.75
          </Text>
        </VStack>
      </HStack>
    </HStack>
  );
};
const CurrentStatement = () => {
  return (
    <Box
      sx={{
        _light: { bg: '$backgroundLight0' },
        _dark: { bg: '$backgroundDark800' },
      }}
      rounded="$sm"
      py="$3"
      px="$4"
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Text
          fontSize="$sm"
          fontWeight="normal"
          sx={{
            _light: { color: '$textLight800' },
            _dark: { color: '$textDark50' },
          }}
        >
          Current Spends
        </Text>
        <Pressable>
          <Icon
            as={ChevronRightIcon}
            sx={{
              _light: { color: '$textLight500' },
              _dark: { color: '$textDark400' },
            }}
            size="lg"
          />
        </Pressable>
      </HStack>

      <HStack mt="$5" justifyContent="space-between" alignItems="center">
        <VStack space="xs">
          <Text
            fontSize="$xs"
            fontWeight="medium"
            sx={{
              _light: { color: '$textLight500' },
              _dark: { color: '$textDark400' },
            }}
          >
            Total Due
          </Text>

          <Text
            fontSize="$md"
            fontWeight="bold"
            sx={{
              _light: { color: '$textLight800' },
              _dark: { color: '$backgroundDark50' },
            }}
          >
            $144.75
          </Text>
        </VStack>
        <VStack space="xs">
          <Text
            fontSize="$xs"
            fontWeight="medium"
            sx={{
              _light: { color: '$textLight500' },
              _dark: { color: '$textDark400' },
            }}
          >
            Last Month Due
          </Text>

          <Text
            fontSize="$md"
            fontWeight="bold"
            textAlign="right"
            sx={{
              _light: { color: '$textLight800' },
              _dark: { color: '$textDark50' },
            }}
          >
            $4530.00
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
type Transaction = {
  dateOfTransaction: string;
  monthOfTransaction: string;
  companyName: string;
  refNumber: string;
  amount: string;
};
const transactions: Transaction[] = [
  {
    dateOfTransaction: '13',
    monthOfTransaction: 'JUN',
    companyName: 'Amazon payments India',
    refNumber: 'Last Month Due',
    amount: '$124.75',
  },
  {
    dateOfTransaction: '11',
    monthOfTransaction: 'JUN',
    companyName: 'Dianne Russell',
    refNumber: 'Last Month Due',
    amount: '$144.75',
  },
  {
    dateOfTransaction: '18',
    monthOfTransaction: 'JUN',
    companyName: 'Albert Flores',
    refNumber: 'Last Month Due',
    amount: '$411.75',
  },
  {
    dateOfTransaction: '21',
    monthOfTransaction: 'JUN',
    companyName: 'Robert Fox',
    refNumber: 'Last Month Due',
    amount: '$144.75',
  },
];
const RecentTransactions = () => {
  return (
    <Box
      rounded="$sm"
      sx={{
        '@base': { pt: '$4', pb: '$0' },
        '@md': { pt: '$8', pb: '$8', flex: 1 },
        '_dark': { bg: '$backgroundDark800' },
        '_light': { bg: '$backgroundLight0' },
      }}
    >
      <Text
        sx={{
          '@base': { px: '$4', mb: '$1' },
          '@md': { px: '$8', mb: '$2' },
          '_dark': { bg: '$textDark800', color: '$textDark50' },
          '_light': { bg: '$textLight0', color: '$textLight800' },
        }}
        fontSize="$sm"
        fontWeight="medium"
      >
        Recent Transaction
      </Text>
      <Divider
        sx={{
          _dark: { bg: '$backgroundDark700' },
          _light: { bg: '$backgroundLight200' },
        }}
      />
      <VStack>
        {transactions.map((item, index) => {
          return (
            <Pressable
              key={index}
              borderRadius="$sm"
              py="$2"
              my="$2"
              sx={{
                _light: {
                  ':hover': { bg: '$backgroundLight100' },
                  ':pressed': { bg: '$primary200' },
                },
                _dark: {
                  ':hover': { bg: '$backgroundDark600' },
                  ':pressed': { bg: '$backgroundDark600' },
                },
              }}
            >
              <HStack
                alignItems="center"
                sx={{ '@base': { px: '$2' }, '@md': { px: '$4' } }}
                space="md"
              >
                <Center
                  sx={{
                    _light: { bg: '$backgroundLight200' },
                    _dark: { bg: '$backgroundDark700' },
                  }}
                  px="$3"
                  py="$1.5"
                  borderRadius="$sm"
                >
                  <Text
                    fontSize="$xs"
                    sx={{
                      _light: { color: '$textLight500' },
                      _dark: { color: '$textDark400' },
                    }}
                    fontWeight="medium"
                  >
                    {item.dateOfTransaction}
                  </Text>
                  <Text
                    fontSize="$xs"
                    sx={{
                      _light: { color: '$textLight500' },
                      _dark: { color: '$textDark400' },
                    }}
                    fontWeight="medium"
                  >
                    {item.monthOfTransaction}
                  </Text>
                </Center>
                <VStack space="xs">
                  <Text
                    fontSize="$sm"
                    fontWeight="medium"
                    sx={{
                      _light: { color: '$textLight800' },
                      _dark: { color: '$textDark50' },
                    }}
                  >
                    {item.companyName}
                  </Text>
                  <Text
                    fontSize="$xs"
                    fontWeight="normal"
                    sx={{
                      _light: { color: '$textLight500' },
                      _dark: { color: '$textDark400' },
                    }}
                  >
                    {item.refNumber}
                  </Text>
                </VStack>
                <Text
                  ml="auto"
                  fontSize="$sm"
                  fontWeight="medium"
                  sx={{
                    _light: { color: '$textLight800' },
                    _dark: { color: '$textDark50' },
                  }}
                >
                  {item.amount}
                </Text>
              </HStack>
            </Pressable>
          );
        })}
      </VStack>
    </Box>
  );
};
const Main = () => {
  return (
    <>
      <Box sx={{ '@lg': { display: 'none' } }}>
        <ScrollView>
          <Box
            position="absolute"
            height="$8"
            top="$0"
            left="$0"
            w="$full"
            sx={{
              '@base': {
                _light: {
                  bg: '$primary500',
                },
                _dark: {
                  bg: '$backgroundDark900',
                },
              },
              '@md': {
                _light: {
                  bg: '$none',
                },
                _dark: {
                  bg: '$none',
                },
              },
            }}
          />
          <VStack
            flex={1}
            space="md"
            px="$4"
            sx={{ '@base': { px: '$4' }, '@md': { px: '$0' } }}
          >
            <CreditCard item={cardDetails[0]} />
            <UnbilledAndLastPaid />
            <CurrentStatement />
            <RecentTransactions />
          </VStack>
        </ScrollView>
      </Box>

      <Box
        sx={{ '@base': { display: 'none' }, '@lg': { display: 'flex' } }}
        flex={1}
      >
        <HStack flex={1} space="md">
          <VStack flex={2} space="md" maxWidth="$354">
            <CreditCard item={cardDetails[0]} />
            <UnbilledAndLastPaid />
            <CurrentStatement />
          </VStack>
          <Box flex={1}>
            <RecentTransactions />
          </Box>
        </HStack>
      </Box>
    </>
  );
};
const EmiDetails = () => {
  return (
    <DashboardLayout displaySidebar={false} title="EMI Details">
      <Main />
    </DashboardLayout>
  );
};

export default EmiDetails;
