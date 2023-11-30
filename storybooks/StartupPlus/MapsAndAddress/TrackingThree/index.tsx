import React from 'react';
import {
  Text,
  VStack,
  Button,
  Center,
  Box,
  HStack,
  Avatar,
  Icon,
  SearchIcon,
  AvatarImage,
  StarIcon,
  ButtonText,
} from '@gluestack-ui/themed';
import DashboardLayout from '../../Layouts/DashboardLayout';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import {
  Home,
  LucideIcon,
  MapPin,
  MessageSquare,
  Phone,
  User,
  UtensilsCrossed,
} from 'lucide-react-native';
import Map from './Map';
import MobileFooter from '../../components/MobileFooter';
const StackNavigator = createStackNavigator();

type RestaurentInfo = {
  iconName: LucideIcon | typeof Icon;
  name: string;
  address: string;
};
type IconType = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};
const footerIcons: IconType[] = [
  { iconName: Home, iconText: 'Home' },
  { iconName: UtensilsCrossed, iconText: 'Order' },
  { iconName: SearchIcon, iconText: 'Search' },
  { iconName: User, iconText: 'Profile' },
];

const restaurentInfo: RestaurentInfo = {
  iconName: MapPin,
  name: 'Drop Location',
  address: 'Lafayette St, New York, NY 10013',
};

function InformationBox() {
  return (
    <Box
      bg="$backgroundLight0"
      sx={{
        '@md': { mb: '$0', py: '$8' },
        '_dark': { bg: '$backgroundDark800' },
      }}
      py="$8"
      width="$full"
      mt="auto"
      alignItems="center"
    >
      <Box maxWidth="$736" w="$full">
        <HStack alignItems="center" justifyContent="space-between" px="$4">
          <HStack alignItems="center" space="xs">
            <Avatar>
              <AvatarImage source={require('../assets/images/burger.png')} />
            </Avatar>
            <VStack>
              <Text
                fontSize="$md"
                fontWeight="$medium"
                color="$textLight800"
                sx={{ _dark: { color: '$textDark100' } }}
              >
                Prime Burger
              </Text>
              <HStack alignItems="center" space="xs" mt="$1">
                <Icon size="md" color="$yellow400" as={StarIcon} />
                <Text
                  fontSize="$sm"
                  color="$textLight800"
                  sx={{ _dark: { color: '$textDark100' } }}
                >
                  4.9
                </Text>
                <Text
                  fontSize="$sm"
                  color="$textLight500"
                  sx={{ _dark: { color: '$textDark400' } }}
                >
                  (120)
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack alignItems="center" space="md">
            <Icon p="$0" as={MessageSquare} size="md" color="$textLight400" />
            <Icon p="$0" as={Phone} size="md" color="$textLight400" />
          </HStack>
        </HStack>
        <HStack alignItems="center" space="sm" mt="$6" px="$4">
          <Center
            bg="$primary50"
            sx={{ _dark: { bg: '$backgroundDark700' } }}
            p="$2"
            rounded="$full"
          >
            <Icon as={restaurentInfo.iconName} size="md" color="$primary500" />
          </Center>
          <VStack>
            <Text
              fontSize="$xs"
              fontWeight="normal"
              color="$textLight500"
              sx={{ _dark: { color: '$textDark400' } }}
            >
              {restaurentInfo.name}
            </Text>
            <Text
              fontSize="$sm"
              fontWeight="$normal"
              color="$textLight900"
              sx={{ _dark: { color: '$textDark0' } }}
            >
              {restaurentInfo.address}
            </Text>
          </VStack>
        </HStack>
        <VStack space="xs" mt="$9" px="$4">
          <Button variant="solid" size="lg">
            <ButtonText fontSize="$sm"> START PICKUP</ButtonText>
          </Button>
          <Button variant="outline" size="lg" mt="$3">
            <ButtonText fontSize="$sm">CANCEL ORDER</ButtonText>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

function TrackingThree({ navigation }: { navigation: any }) {
  return (
    <>
      <DashboardLayout
        title="Track Order"
        displaySidebar={false}
        displayBackIcon={false}
      >
        <Box pb="$10">
          <Map />
          <InformationBox />
        </Box>
      </DashboardLayout>

      <MobileFooter footerIcons={footerIcons}  />
    </>
  );
}

function TrackingThreeMain() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNavigator.Screen name="Home" component={TrackingThree} />
        <StackNavigator.Screen name="Order" component={TrackingThree} />
        <StackNavigator.Screen name="Search" component={TrackingThree} />
        <StackNavigator.Screen name="Profile" component={TrackingThree} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default TrackingThree;
