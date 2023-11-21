import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Divider,
  Link,
} from '@gluestack-ui/themed';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabBar from '../components/TabBar';
import DashboardLayout from '../Layouts/DashboardLayout';
import MobileFooter from '../components/MobileFooter';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  ChevronDown,
  IndianRupee,
  LineChart,
  List,
  LucideIcon,
  Timer,
} from 'lucide-react-native';

const Gainers = () => <TopGainers />;

const Losers = () => <TopGainers />;

const Value = () => <TopGainers />;

const renderScene = SceneMap({
  Gainers: Gainers,
  Losers: Losers,
  Value: Value,
});

type RootStackParamList = {
  Watchlist: undefined;
  Orders: undefined;
  Portfolio: undefined;
  Funds: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
type Props = StackScreenProps<RootStackParamList, 'Watchlist'>;
type StockNavigationProp = Props['navigation'];

type StockProps = {
  companyName: string;
  negativeValue: boolean;
  nse: string;
  value: string;
  vol: string;
  change: string;
  changePercentage: string;
};
type Icon = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};

const footerIcons: Icon[] = [
  { iconName: List, iconText: 'Watchlist' },
  { iconName: Timer, iconText: 'Orders' },
  { iconName: LineChart, iconText: 'Portfolio' },
  { iconName: IndianRupee, iconText: 'Funds' },
];
const stocks: StockProps[] = [
  {
    companyName: 'Reliance',
    negativeValue: false,
    nse: 'NSE : Jul 06,11:44',
    value: '1700.37',
    vol: 'Vol:5.53m',
    change: '170.37',
    changePercentage: '+9.12%',
  },
  {
    companyName: 'Tata Motors',
    nse: 'NSE : Jul 06,11:44',
    value: '1410.37',
    negativeValue: false,
    vol: 'Vol:5.53m',
    change: '78.37',
    changePercentage: '+4.12%',
  },
  {
    companyName: 'UPL',
    negativeValue: true,
    nse: 'NSE : Jul 06,11:44',
    value: '410.37',
    vol: 'Vol:5.53m',
    change: '18.37',
    changePercentage: '-3.12%',
  },
  {
    companyName: 'Reliance Power',
    negativeValue: false,
    nse: 'NSE : Jul 06,11:44',
    value: '210.37',
    vol: 'Vol:5.53m',
    change: '12.37',
    changePercentage: '+2.12%',
  },
  {
    companyName: 'SBI',
    negativeValue: true,
    nse: 'NSE : Jul 06,11:44',
    value: '610.37',
    vol: 'Vol:5.53m',
    change: '15.37',
    changePercentage: '-8.12%',
  },
  {
    companyName: 'RBL',
    negativeValue: true,
    nse: 'NSE : Jul 06,11:44',
    value: '414.37',
    vol: 'Vol:5.53m',
    change: '16.37',
    changePercentage: '-1.12%',
  },
  {
    companyName: 'Canara',
    negativeValue: false,
    nse: 'NSE : Jul 06,11:44',
    value: '219.37',
    vol: 'Vol:5.53m',
    change: '18.37',
    changePercentage: '+23.12%',
  },
  {
    companyName: 'Bajaj Finance',
    negativeValue: false,
    nse: 'NSE : Jul 06,11:44',
    value: '110.37',
    vol: 'Vol:5.53m',
    change: '20.37',
    changePercentage: '+2.12%',
  },
];

const StocksPerformance = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Gainers', title: 'Top Gainers' },
    { key: 'Losers', title: 'Top Losers' },
    { key: 'Value', title: 'Active by value' },
  ]);
  return (
    <Box w="$full" h="$full">
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => <TabBar {...props} variant="undefinedLight" />}
      />
    </Box>
  );
};

function TableHeader() {
  return (
    <Box
      pt="$4"
      pb="$3"
      sx={{
        '@base': {
          px: '$4',
        },
        '@md': {
          px: '$8',
        },
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
    >
      <HStack>
        <HStack space="xs" flex={1}>
          <Text
            sx={{
              _light: {
                color: '$primary500',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
            fontSize="$sm"
            fontWeight="$medium"
          >
            Today
          </Text>
          <Icon
            as={ChevronDown}
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
            size="md"
          />
        </HStack>
        <Text
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
          fontSize="$sm"
          flex={1}
          textAlign="center"
        >
          Value
        </Text>
        <Text
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
          fontSize="$sm"
          flex={1}
          textAlign="right"
        >
          Change(%)
        </Text>
      </HStack>
    </Box>
  );
}

function Card(props: StockProps) {
  return (
    <HStack
      sx={{
        '@base': {
          px: '$4',
        },
        '@md': {
          px: '$8',
        },
      }}
    >
      <VStack space="sm" flex={1}>
        <Link
          href=""
          // isUnderlined={false}
        >
          <Text
            fontSize="$sm"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textDark800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {props.companyName}
          </Text>
        </Link>
        <Text
          fontSize="$sm"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          {props.nse}
        </Text>
      </VStack>

      <VStack space="sm" flex={1} alignItems="center">
        <Text
          fontSize="$sm"
          sx={{
            _light: {
              color: props.negativeValue ? '$red600' : '$green600',
            },
            _dark: {
              color: props.negativeValue ? '$red400' : '$green400',
            },
          }}
        >
          {props.value}
        </Text>
        <Text
          fontSize="$sm"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          {props.vol}
        </Text>
      </VStack>
      <VStack space="sm" flex={1} alignItems="flex-end">
        <Text
          fontSize="$sm"
          sx={{
            _light: {
              color: props.negativeValue ? '$red600' : '$green600',
            },
            _dark: {
              color: props.negativeValue ? '$red400' : '$green400',
            },
          }}
        >
          {props.change}
        </Text>
        <Text
          fontSize="$sm"
          sx={{
            _light: {
              color: props.negativeValue ? '$red600' : '$green600',
            },
            _dark: {
              color: props.negativeValue ? '$red400' : '$green400',
            },
          }}
        >
          {props.changePercentage}
        </Text>
      </VStack>
    </HStack>
  );
}
function TopGainers() {
  return (
    <>
      <TableHeader />
      <VStack
        space="lg"
        pt="$2"
        sx={{
          '@base': {
            pb: '$4',
          },
          '@md': {
            pb: '$0',
          },
        }}
      >
        {stocks.map((stock, index) => {
          return (
            <>
              <Card key={index} {...stock} />
              {index < stocks.length - 1 && (
                <Divider
                  sx={{
                    _light: {
                      bg: '$backgroundDark200',
                    },
                    _dark: {
                      bg: '$backgroundDark700',
                    },
                  }}
                />
              )}
            </>
          );
        })}
      </VStack>
    </>
  );
}

function MainContent() {
  return (
    <Box
      pb="$4"
      sx={{
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
        '@base': {
          mb: '$16',
        },
        '@md': {
          mb: '$0',
          rounded: '$sm',
        },
      }}
      overflow="hidden"
      flex={1}
    >
      <StocksPerformance />
    </Box>
  );
}

function TopPerformingStocks({
  navigation,
}: {
  navigation: StockNavigationProp;
}) {
  return (
    <>
      <DashboardLayout title="Dashboard" rightPanelMobileHeader>
        <MainContent />
      </DashboardLayout>
      <MobileFooter navigation={navigation} footerIcons={footerIcons} />
    </>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Watchlist" component={TopPerformingStocks} />
        <Stack.Screen name="Orders" component={TopPerformingStocks} />
        <Stack.Screen name="Portfolio" component={TopPerformingStocks} />
        <Stack.Screen name="Funds" component={TopPerformingStocks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
