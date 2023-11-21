import React from 'react';
import {
  Text,
  Box,
  HStack,
  Icon,
  Progress,
  SearchIcon,
  VStack,
  ProgressFilledTrack,
  Pressable,
} from '@gluestack-ui/themed';
import DashboardLayout from '../../Layouts/DashboardLayout';
import Map from './Map';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, LucideIcon, User, UtensilsCrossed } from 'lucide-react-native';
import MobileFooter from '../../components/MobileFooter';
const StackNavigator = createStackNavigator();

type Icon = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};
const footerIcons: Icon[] = [
  { iconName: Home, iconText: 'Home' },
  { iconName: UtensilsCrossed, iconText: 'Order' },
  { iconName: SearchIcon, iconText: 'Search' },
  { iconName: User, iconText: 'Profile' },
];

function InformationBox() {
  return (
    <VStack
      py="$10"
      bg="$backgroundLight0"
      sx={{
        '@md': {
          py: '$24',
        },
        '_dark': { bg: '$backgroundDark800' },
      }}
      w="$full"
      justifyContent="center"
      alignItems="center"
      space="sm"
    >
      <Icon as={SearchIcon} color="$textLight400" size="md" />
      <Text
        fontSize="$md"
        mt="$3"
        color="$textLight500"
        sx={{ _dark: { color: '$textDark400' } }}
      >
        Searching For Orders...
      </Text>
    </VStack>
  );
}

function TrackingOne({ navigation }: { navigation: any }) {
  return (
    <>
      <DashboardLayout
        title="Track order"
        displaySidebar={false}
        displayBackIcon={false}
      >
        <Box pb="$10">
          <Map />
          <Progress
            value={45}
            size="sm"
            rounded="$none"
            sx={{
              _light: {
                bg: '$primary300',
                fill: '$primary500',
              },
              _dark: {
                bg: '$backgroundDark700',
                _filledTrack: { bg: '$primary300' },
              },
            }}
          >
            <ProgressFilledTrack rounded="$none" />
          </Progress>
          <InformationBox />
        </Box>
      </DashboardLayout>
      <MobileFooter footerIcons={footerIcons} navigation={navigation} />
    </>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNavigator.Screen name="Home" component={TrackingOne} />
        <StackNavigator.Screen name="Order" component={TrackingOne} />
        <StackNavigator.Screen name="Search" component={TrackingOne} />
        <StackNavigator.Screen name="Profile" component={TrackingOne} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
