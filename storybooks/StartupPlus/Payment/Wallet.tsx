import React from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  Box,
  Button,
  ButtonText,
  ChevronRightIcon,
  Divider,
  HStack,
  Icon,
  Input,
  InputField,
  Pressable,
  ScrollView,
  Text,
  VStack,
  styled,
} from '@gluestack-ui/themed';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import {
  Car,
  Heart,
  LucideIcon,
  Sandwich,
  ShoppingCart,
} from 'lucide-react-native';
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

type CardDetail = {
  holderName: string;
  supportText: string;
  accountNumber: string;
  balanceText: string;
  balanceAmount: string;
  spentText: string;
  spentAmount: string;
  receivedText: string;
  receivedAmount: string;
};
const cardDetails: CardDetail[] = [
  {
    holderName: 'Hello John',
    supportText: 'Bank of India',
    accountNumber: '2345 XXXX XXXX 2345',
    balanceText: 'Balance',
    balanceAmount: '$50,000',
    spentText: 'Spent',
    spentAmount: '$4,351.50',
    receivedText: 'Received',
    receivedAmount: '$15,143.50',
  },
];

const CreditCard = ({ item }: { item: typeof cardDetails[0] }) => {
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
      <Text fontSize="$xl" color="$backgroundDark50" fontWeight="$medium">
        {item.holderName}
      </Text>
      <VStack space="sm" my="$3">
        <Text fontSize="$xs" color="$backgroundDark50" fontWeight="$bold">
          {item.supportText}
        </Text>
        <Text fontSize="$sm" fontWeight="$bold" color="$backgroundDark50">
          {item.accountNumber}
        </Text>
      </VStack>
      <Divider sx={{ _dark: { bg: '$backgroundDark200' } }} />
      <HStack justifyContent="space-between" mt="$2">
        <VStack space="sm">
          <Text fontSize="$sm" color="$backgroundDark50" fontWeight="$medium">
            {item.balanceText}
          </Text>
          <Text fontWeight="$bold" fontSize="$sm" color="$backgroundDark50">
            {item.balanceAmount}
          </Text>
        </VStack>
        <VStack space="sm">
          <Text fontSize="$sm" color="$backgroundDark50" fontWeight="$medium">
            {item.spentText}
          </Text>
          <Text fontWeight="$bold" fontSize="$sm" color="$backgroundDark50">
            {item.spentAmount}
          </Text>
        </VStack>
        <VStack space="sm">
          <Text fontSize="$sm" color="$backgroundDark50" fontWeight="$medium">
            {item.receivedText}
          </Text>
          <Text fontWeight="$bold" fontSize="$sm" color="$backgroundDark50">
            {item.receivedAmount}
          </Text>
        </VStack>
      </HStack>
    </LinearGradient>
  );
};

const RewardPoints = () => {
  return (
    <Pressable
      pl="$4"
      pr="$2"
      py="$3"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        _light: { bg: '$backgroundLight0' },
        _dark: { bg: '$backgroundDark800' },
      }}
      rounded="$lg"
    >
      <VStack space="sm">
        <Text
          fontSize="$sm"
          fontWeight="$medium"
          sx={{
            _light: { color: '$backgroundDark500' },
            _dark: { color: '$backgroundDark400' },
          }}
        >
          Reward Points
        </Text>
        <Text
          fontWeight="$bold"
          sx={{
            _light: { color: '$backgroundDark800' },
            _dark: { color: '$backgroundDark50' },
          }}
          fontSize="$sm"
        >
          678.50
        </Text>
      </VStack>

      <HStack alignItems="center" space="sm">
        <Text
          fontSize="$sm"
          fontWeight="$normal"
          sx={{
            _light: { color: '$backgroundDark500' },
            _dark: { color: '$backgroundDark400' },
          }}
        >
          Redeem Details
        </Text>
        <Icon
          as={ChevronRightIcon}
          sx={{
            _light: { color: '$backgroundDark500' },
            _dark: { color: '$backgroundDark400' },
          }}
          size="sm"
        />
      </HStack>
    </Pressable>
  );
};

const AddMoney = () => {
  return (
    <VStack
      py="$4"
      space="md"
      sx={{
        _light: { bg: '$backgroundLight0' },
        _dark: { bg: '$backgroundDark800' },
      }}
      rounded="$lg"
    >
      <Pressable
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        pl="$4"
        pr="$2"
      >
        <Text
          fontWeight="$medium"
          fontSize="$sm"
          sx={{
            _light: { color: '$backgroundDark800' },
            _dark: { color: '$backgroundDark50' },
          }}
        >
          Add Money
        </Text>
        <HStack alignItems="center" space="xs">
          <Text
            fontSize="$sm"
            fontWeight="$normal"
            sx={{
              _light: { color: '$backgroundDark500' },
              _dark: { color: '$backgroundDark400' },
            }}
          >
            T&C
          </Text>
          <Icon
            as={ChevronRightIcon}
            sx={{
              _light: { color: '$backgroundDark500' },
              _dark: { color: '$backgroundDark400' },
            }}
            size="sm"
          />
        </HStack>
      </Pressable>
      <HStack alignItems="center" space="sm" px="$4" flex={1}>
        <Input
          sx={{ _ios: { py: '$3' } }}
          flex={1}
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Email" />
        </Input>

        <Button variant="solid">
          <ButtonText> Add</ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
};

const tabs = [
  {
    id: 1,
    title: 'ALL',
  },
  {
    id: 2,
    title: 'SPENT',
  },
  {
    id: 3,
    title: 'RECEIVED',
  },
];
type Transaction = {
  iconName: LucideIcon | typeof Icon;
  color: string;
  iconText: string;
  dateAndTime: string;
  amount: string;
};
const transactions: Transaction[] = [
  {
    iconName: Car,
    color: 'rose.300',
    iconText: 'OLA Ride',
    dateAndTime: '2:30pm / Jun 22nd',
    amount: '$140.75',
  },
  {
    iconName: ShoppingCart,
    color: 'darkBlue.200',
    iconText: 'Grocery',
    dateAndTime: '2:30pm / Jun 22nd',
    amount: '$140.75',
  },
  {
    iconName: Sandwich,
    color: 'green.300',
    iconText: 'Foods',
    dateAndTime: '2:30pm / Jun 22nd',
    amount: '$140.75',
  },
  {
    iconName: Heart,
    color: 'amber.400',
    iconText: 'Health',
    dateAndTime: '2:30pm / Jun 22nd',
    amount: '$140.75',
  },
];
function Transaction() {
  return (
    <VStack sx={{ '@md': { mt: '$2' } }}>
      {transactions.map((item, index) => {
        return (
          <Pressable
            key={index}
            borderRadius="$sm"
            py="$2"
            my="$2"
            sx={{
              '@base': { px: '$2', mx: '$2' },
              '@md': {
                px: '$4',
                mx: '$4',
              },
              '_light': {
                ':hover': { bg: '$backgroundDark100' },
                ':pressed': { bg: '$backgroundDark200' },
              },
              '_dark': {
                ':hover': { bg: '$backgroundDark700' },
                ':pressed': { bg: '$backgroundDark600' },
              },
            }}
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
          >
            <HStack alignItems="center" space="md">
              <Box bg={item.color} rounded="$full" p="$2">
                <Icon
                  as={item.iconName}
                  size="xl"
                  sx={{
                    _light: { color: '$backgroundLight800' },
                    _dark: { color: '$backgroundDark400' },
                  }}
                />
              </Box>
              <VStack space="xs">
                <Text
                  fontSize="$sm"
                  fontWeight="$medium"
                  sx={{
                    _light: { color: '$backgroundDark800' },
                    _dark: { color: '$backgroundDark50' },
                  }}
                >
                  {item.iconText}
                </Text>
                <Text
                  sx={{
                    _light: { color: '$backgroundDark500' },
                    _dark: { color: '$backgroundDark400' },
                  }}
                  fontSize="$sm"
                >
                  {item.dateAndTime}
                </Text>
              </VStack>
            </HStack>

            <Text
              sx={{
                _light: { color: '$backgroundDark800' },
                _dark: { color: '$backgroundDark50' },
              }}
              fontSize="$sm"
              fontWeight="$medium"
            >
              {item.amount}
            </Text>
          </Pressable>
        );
      })}
    </VStack>
  );
}
function TabItem({
  tabName,
  currentTab,
  handleTabChange,
}: {
  tabName: string;
  currentTab: string;
  handleTabChange: (tabTitle: string) => void;
}) {
  return (
    <Pressable onPress={() => handleTabChange(tabName)} px="$4" pt="$2">
      <VStack>
        <Text
          fontSize="$sm"
          fontWeight="$medium"
          sx={{
            _light: {
              color:
                tabName === currentTab ? '$primary500' : '$backgroundDark500',
            },
            _dark: {
              color:
                tabName === currentTab ? '$primary500' : '$backgroundDark400',
            },
          }}
          // px="$4"
          py="$2"
        >
          {tabName}
        </Text>
        {tabName === currentTab && (
          <Box
            borderTopLeftRadius="$sm"
            borderTopRightRadius="$sm"
            bg="$primary500"
            // sx={{ _light: { bg: '$primary500' }, _dark: { bg: '$primary500' } }}
            h="$1"
          />
        )}
      </VStack>
    </Pressable>
  );
}

const RecentTransactions = () => {
  const [tabName, setTabName] = React.useState('ALL');

  return (
    <VStack
      space="sm"
      sx={{
        '@base': { py: '$4', h: '$1/2' },
        '@md': { py: '$8', h: '$full' },
        '_dark': { bg: '$backgroundDark800' },
        '_light': { bg: '$backgroundLight0' },
      }}
      rounded="$sm"
      w="$full"
    >
      <Text
        fontSize="$sm"
        fontWeight="$medium"
        sx={{
          '_dark': { color: '$backgroundDark50' },
          '_light': { color: '$backgroundDark800' },
          '@base': { px: '$4' },
          '@md': { px: '$8' },
        }}
      >
        Recent Transaction
      </Text>
      <HStack
        w="$full"
        justifyContent="space-between"
        borderRadius="$sm"
        sx={{ '@base': { px: '$0' }, '@md': { px: '$8' } }}
        py="$2"
      >
        {tabs.map(({ title, id }) => (
          <TabItem
            key={id}
            tabName={title}
            currentTab={tabName}
            handleTabChange={(tab) => setTabName(tab)}
          />
        ))}
      </HStack>
      <Transaction />
    </VStack>
  );
};
const Main = () => {
  return (
    <>
      <Box sx={{ '@lg': { display: 'none' } }}>
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
          sx={{ '@base': { px: '$4' }, '@md': { px: '$0' } }}
        >
          <CreditCard item={cardDetails[0]} />
          <RewardPoints />
          <AddMoney />
          <RecentTransactions />
        </VStack>
      </Box>

      <Box
        sx={{ '@base': { display: 'none' }, '@lg': { display: 'flex' } }}
        flex={1}
      >
        <HStack flex={1} space="md">
          <VStack flex={2} space="md" maxWidth="$354">
            <CreditCard item={cardDetails[0]} />
            <RewardPoints />
            <AddMoney />
          </VStack>
          <Box flex={3}>
            <RecentTransactions />
          </Box>
        </HStack>
      </Box>
    </>
  );
};
const Wallet = () => {
  return (
    <DashboardLayout displaySidebar={false} title="Wallet">
      <Main />
    </DashboardLayout>
  );
};

export default Wallet;
