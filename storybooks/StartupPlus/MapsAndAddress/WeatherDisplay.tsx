import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Pressable,
  Divider,
  ScrollView,
  ChevronRightIcon,
  styled,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import { Cloudy, LucideIcon, Sun, Zap } from 'lucide-react-native';
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
type List = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};
type Information = {
  text: string;
  unit: string;
  iconName: LucideIcon | typeof Icon;
};
type CurrentWeather = {
  time: string;
  iconName: any;
  type: string;
};
type SevenDayWeather = {
  day: string;
  minTemp: string;
  maxTemp: string;
};
const list: List[] = [
  {
    iconName: Zap,
    iconText: '5 km/h',
  },
  {
    iconName: Cloudy,
    iconText: '0%',
  },
  {
    iconName: Sun,
    iconText: '14h',
  },
];
const information: Information[] = [
  {
    text: 'Temperature',
    unit: 'Celsius',
    iconName: ChevronRightIcon,
  },
  {
    text: 'Wind Speed',
    unit: 'km/h',
    iconName: ChevronRightIcon,
  },
  {
    text: 'Source',
    unit: 'Weather.gov',
    iconName: ChevronRightIcon,
  },
];
const currentWeather: CurrentWeather[] = [
  {
    time: 'Now',
    iconName: Sun,
    type: '23°',
  },
  {
    time: '02:00',
    iconName: Sun,
    type: '26°',
  },
  {
    time: '03:00',
    iconName: Cloudy,
    type: '25°',
  },
  {
    time: '04:00',
    iconName: Sun,
    type: '21°',
  },
  {
    time: '05:00',
    iconName: Cloudy,
    type: '18°',
  },
  {
    time: '04:00',
    iconName: Sun,
    type: '26°',
  },
  {
    time: '05:00',
    iconName: Cloudy,
    type: '25°',
  },
];
const sevenDayWeather: SevenDayWeather[] = [
  {
    day: 'Sunday',
    minTemp: '24°',
    maxTemp: '25°',
  },
  {
    day: 'Monday',
    minTemp: '19°',
    maxTemp: '21°',
  },
  {
    day: 'Tuesday',
    minTemp: '24°',
    maxTemp: '25°',
  },
  {
    day: 'Wednesday',
    minTemp: '28°',
    maxTemp: '29°',
  },
  {
    day: 'Thursday',
    minTemp: '28°',
    maxTemp: '29°',
  },
  {
    day: 'Friday',
    minTemp: '19°',
    maxTemp: '21°',
  },
  {
    day: 'Saturday',
    minTemp: '24°',
    maxTemp: '25°',
  },
];

const WeatherList = () => {
  return (
    <VStack space="xs">
      {list.map((item, index) => {
        return (
          <HStack space="xs" key={index} alignItems="center">
            <Icon as={item.iconName} size="md" color="$textLight0" />
            <Text color="$textLight0" fontSize="$sm" fontWeight="$normal">
              {item.iconText}
            </Text>
          </HStack>
        );
      })}
    </VStack>
  );
};

const WeatherCard = () => {
  return (
    <LinearGradient
      colors={['$primary500', '$error400', '$primary500', '$primary500']}
      p="$5"
      m="$5"
      h="$200"
      rounded="$md"
      sx={{
        '@md': {
          mr: '$5',
          mt: '$0',
          ml: '$0',
          mb: '$0',
        },
      }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <HStack h="$full" alignSelf="stretch" justifyContent="space-between">
        <Box justifyContent="space-between">
          <Text fontSize="$md" fontWeight="$bold" color="$textLight50">
            Dubai
          </Text>
          <WeatherList />
        </Box>
        <Icon as={Sun} color="$amber400" w="$20" h="$20" mt="$5" />
        <VStack alignItems="flex-end" justifyContent="space-between">
          <Text fontSize="$sm" fontWeight="$medium" color="$textLight50">
            01:30
          </Text>
          <Text color="$textLight0" fontSize="$5xl" lineHeight="$5xl">
            39°
          </Text>
        </VStack>
      </HStack>
    </LinearGradient>
  );
};

const WeatherDegreeUnits = () => {
  return (
    <VStack
      bg="$backgroundLight0"
      justifyContent="space-between"
      sx={{
        '@md': {
          rounded: '$sm',
          justifyContent: 'center',
          mt: '$4',
          mr: '$5',
        },
        '_dark': { bg: '$backgroundDark800' },
      }}
    >
      {information.map((item, index) => {
        return (
          <Pressable key={index} px="$4" py="$3">
            <HStack
              justifyContent="space-between"
              alignItems="center"
              key={index}
            >
              <Text
                fontSize="$md"
                fontWeight="$normal"
                color="$textLight800"
                sx={{
                  _dark: { color: '$textDark50' },
                }}
              >
                {item.text}
              </Text>
              <HStack alignItems="center">
                <Text
                  fontSize="$md"
                  fontWeight="$normal"
                  color="$textLight500"
                  sx={{ _dark: { color: '$textDark400' } }}
                >
                  {item.unit}
                </Text>
                <Icon
                  size="lg"
                  as={item.iconName}
                  color="$textLight500"
                  sx={{ _dark: { color: '$textDark400' } }}
                />
              </HStack>
            </HStack>
          </Pressable>
        );
      })}
    </VStack>
  );
};

const WeatherPredictions = () => {
  return (
    <Box
      bg="$backgroundLight0"
      sx={{
        '@md': {
          mt: '$0',
          p: '$8',
          rounded: '$sm',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      p="$4"
      mt="$3"
    >
      <Text
        fontSize="$md"
        fontWeight="$bold"
        color="$textLight800"
        sx={{ _dark: { color: '$textDark50' } }}
      >
        Today
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <HStack
          flex={1}
          gap="$12"
          sx={{
            '@sm': {
              gap: '$10',
            },
          }}
        >
          {currentWeather.map((item, index) => {
            return (
              <VStack alignItems="center" mt="$3" space="sm" key={index}>
                {item.time === 'Now' ? (
                  <Text
                    color="$textLight800"
                    sx={{ _dark: { color: '$textDark50' } }}
                    fontSize="$sm"
                    fontWeight="$medium"
                  >
                    {item.time}
                  </Text>
                ) : (
                  <Text
                    color="$textLight800"
                    sx={{ _dark: { color: '$textDark50' } }}
                    fontSize="$sm"
                    fontWeight="$medium"
                  >
                    {item.time}
                  </Text>
                )}
                <Icon color="$textLight400" size="xl" as={item.iconName} />
                <Text
                  fontSize="$md"
                  fontWeight="$medium"
                  color="$textLight800"
                  sx={{ _dark: { color: '$textDark50' } }}
                >
                  {item.type}
                </Text>
              </VStack>
            );
          })}
        </HStack>
      </ScrollView>
    </Box>
  );
};

const WeatherNextWeek = () => {
  return (
    <Box
      bgColor="$backgroundLight0"
      sx={{
        '@md': {
          p: '$4',
          mt: '$0',
          borderBottomLeftRadius: '$sm',
          borderBottomRightRadius: '$sm',
        },
        '_dark': { bgColor: '$backgroundDark800' },
      }}
      flex={1}
      py="$1"
      px="$0"
      mt="$4"
    >
      <Text
        fontSize="$md"
        fontWeight="$bold"
        color="$textLight800"
        sx={{ _dark: { color: '$textDark50' } }}
        px="$4"
        py="$3"
      >
        Next 7 Days
      </Text>
      <VStack>
        {sevenDayWeather.map((item, index) => {
          return (
            <HStack justifyContent="space-between" key={index} px="$4" py="$3">
              <Text
                fontSize="$md"
                color="$textLight800"
                sx={{ _dark: { color: '$textDark50' } }}
              >
                {item.day}
              </Text>
              <Text
                fontWeight="$bold"
                fontSize="$sm"
                color="$textLight500"
                sx={{ _dark: { color: '$textDark400' } }}
              >
                {item.minTemp}
                <Text
                  fontSize="$sm"
                  fontWeight="$normal"
                  color="$textLight500"
                  sx={{ _dark: { color: '$textDark400' } }}
                >
                  /{item.maxTemp}
                </Text>
              </Text>
            </HStack>
          );
        })}
      </VStack>
    </Box>
  );
};

export default function () {
  return (
    <DashboardLayout
      title="Weather"
      displaySidebar={false}
      rightPanelMobileHeader={true}
    >
      <VStack
        flex={1}
        sx={{
          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        <Box flex={2}>
          <VStack
            w="$full"
            sx={{
              '@base': {
                _dark: {
                  bg: '$backgroundDark800',
                },
              },
              '@md': {
                pt: '$0',
                _dark: {
                  bg: '$backgroundDark700',
                },
              },
            }}
          >
            <WeatherCard />
            <WeatherDegreeUnits />
          </VStack>
        </Box>
        <Box
          sx={{
            '@md': {
              flex: 3,
            },
          }}
        >
          <WeatherPredictions />
          <Divider
            display="none"
            bg="$backgroundLight200"
            sx={{
              '@md': {
                display: 'flex',
              },
              '_dark': {
                bg: '$backgroundDark700',
              },
            }}
          />
          <WeatherNextWeek />
        </Box>
      </VStack>
    </DashboardLayout>
  );
}
