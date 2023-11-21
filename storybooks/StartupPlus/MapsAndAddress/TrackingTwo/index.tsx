import React from 'react';
import {
  Text,
  VStack,
  Button,
  Center,
  Box,
  HStack,
  Icon,
  SearchIcon,
  ButtonText,
  Divider,
  Pressable,
} from '@gluestack-ui/themed';
import DashboardLayout from '../../Layouts/DashboardLayout';
import Map from './Map';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  Home,
  LucideIcon,
  MapPin,
  Store,
  User,
  UtensilsCrossed,
} from 'lucide-react-native';
import MobileFooter from '../../components/MobileFooter';
const StackNavigator = createStackNavigator();

type RestaurentInfo = {
  iconName: LucideIcon | typeof Icon;
  name: string;
  address: string;
};
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

const restaurentInfo: RestaurentInfo[] = [
  {
    iconName: Store,
    name: 'Aami Bangali Restaurant',
    address: '47 W 13th St, New York, NY 11214',
  },
  {
    iconName: MapPin,
    name: 'Drop Location',
    address: 'Lafayette St, New York, NY 10013',
  },
];
function InformationBox() {
  return (
    <Box
      bg="$backgroundLight0"
      sx={{
        '@md': { mb: '$0', py: '$8' },
        '_dark': { bg: '$backgroundDark800' },
      }}
      py="$2"
      px="$4"
      width="$full"
      mb="$20"
      mt="auto"
      alignItems="center"
    >
      <Box maxWidth="$736" w="$full">
        <VStack>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            py="$3"
            px="$4"
          >
            <Text
              fontSize="$md"
              fontWeight="$medium"
              color="$textLight800"
              sx={{ _dark: { color: '$textDark50' } }}
            >
              Food Order
            </Text>
            <Text
              fontSize="$sm"
              color="$textLight500"
              sx={{ _dark: { color: '$textDark400' } }}
            >
              40 min | 0.3 miles
            </Text>
          </HStack>
          <Divider
            mt="$3"
            bg="$backgroundLight200"
            sx={{ _dark: { bg: '$backgroundDark700' } }}
          />
          <VStack space="sm" mt="$5">
            {restaurentInfo.map((item, index) => {
              return (
                <HStack alignItems="center" space="xs" key={index}>
                  <Center
                    bg="$primary50"
                    sx={{ _dark: { bg: '$backgroundDark700' } }}
                    p="$2"
                    rounded="$full"
                  >
                    <Icon as={item.iconName} size="md" color="$primary500" />
                  </Center>
                  <VStack space="xs">
                    <Text
                      fontSize="$xs"
                      fontWeight="$normal"
                      color="$textLight500"
                      sx={{ _dark: { color: '$textDark400' } }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      fontSize="$sm"
                      fontWeight="$normal"
                      color="$textLight800"
                      sx={{ _dark: { color: '$textDark50' } }}
                    >
                      {item.address}
                    </Text>
                  </VStack>
                </HStack>
              );
            })}
          </VStack>
          <Box mt="$8">
            <Button variant="solid" size="lg">
              <ButtonText fontSize="$sm">ACCEPT</ButtonText>
            </Button>
            <Button variant="outline" size="lg" mt="$3">
              <ButtonText fontSize="$sm">REJECT</ButtonText>
            </Button>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

function Tracking({ navigation }: { navigation: any }) {
  return (
    <>
      <DashboardLayout
        title="Track order"
        displaySidebar={false}
        displayBackIcon={false}
      >
        <Map />
        <InformationBox />
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
        <StackNavigator.Screen name="Home" component={Tracking} />
        <StackNavigator.Screen name="Order" component={Tracking} />
        <StackNavigator.Screen name="Search" component={Tracking} />
        <StackNavigator.Screen name="Profile" component={Tracking} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
