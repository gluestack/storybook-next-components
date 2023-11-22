import React, { useEffect, useState } from 'react';
import {
  Text,
  VStack,
  Image,
  Button,
  HStack,
  Pressable,
  Icon,
  Box,
  FlatList,
  Input,
  Fab,
  StarIcon,
  ButtonText,
  InputField,
  FabIcon,
  InputIcon,
  Heading,
} from '@gluestack-ui/themed';
import { ListRenderItemInfo, useWindowDimensions } from 'react-native';
import DashboardLayout from '../../Layouts/DashboardLayout';
import Map from './Map';
import {
  Bike,
  CarIcon,
  Clock,
  Globe2,
  LocateFixed,
  LucideIcon,
  MapPin,
  PersonStanding,
  Phone,
} from 'lucide-react-native';

type ImageList = {
  storyImageUrl: any;
};

type Information = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};

type InformationList = {
  Overview: Information[];
  About: Information[];
  Reviews: Information[];
  Photos: Information[];
};

type Icon = {
  iconName: LucideIcon | typeof Icon;
};

const footerIcons: Icon[] = [
  { iconName: CarIcon },
  { iconName: Bike },
  { iconName: PersonStanding },
];

const information: InformationList = {
  Overview: [
    {
      iconName: MapPin,
      iconText:
        '17/R, 1st floor, 18th Cross, 18th Main, Sector 3, HSR Layout, Bangalore, Karnataka 560102',
    },
    {
      iconName: Clock,
      iconText: 'Open 24 hours',
    },
    {
      iconName: Globe2,
      iconText: 'http://www.bookingkhazana.com',
    },
    {
      iconName: Phone,
      iconText: '080-2349854281',
    },
  ],
  About: [
    {
      iconName: Clock,
      iconText: 'Open 24 hours',
    },
    {
      iconName: MapPin,
      iconText:
        '17/R, 1st floor, 18th Cross, 18th Main, Sector 3, HSR Layout, Bangalore, Karnataka 560102',
    },
    {
      iconName: Clock,
      iconText: 'Open 24 hours',
    },
    {
      iconName: Globe2,
      iconText: 'http://www.bookingkhazana.com',
    },
  ],
  Reviews: [
    {
      iconName: Clock,
      iconText: 'Open 24 hours',
    },
    {
      iconName: Clock,
      iconText: 'Open 24 hours',
    },
    {
      iconName: Clock,
      iconText: 'Open 24 hours',
    },
    {
      iconName: Globe2,
      iconText: 'http://www.bookingkhazana.com',
    },
  ],
  Photos: [
    {
      iconName: Clock,
      iconText: 'Open 24 hours',
    },
    {
      iconName: Globe2,
      iconText: 'http://www.bookingkhazana.com',
    },
    {
      iconName: Phone,
      iconText: '080-2349854281',
    },
    {
      iconName: Phone,
      iconText: '080-2349854281',
    },
  ],
};

const imageList: ImageList[] = [
  {
    storyImageUrl: require('../assets/images/hotel3.png'),
  },
  {
    storyImageUrl: require('../assets/images/hotel2.png'),
  },
  {
    storyImageUrl: require('../assets/images/hotel1.png'),
  },
  {
    storyImageUrl: require('../assets/images/hotel1.png'),
  },
];

const tabs = [
  {
    id: 1,
    title: 'Overview',
  },
  {
    id: 2,
    title: 'About',
  },
  {
    id: 3,
    title: 'Reviews',
  },
  {
    id: 4,
    title: 'Photos',
  },
];

function HotelInformation() {
  const [selected, setSelected] = useState(CarIcon);

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      px="$4"
      sx={{
        '@lg': {
          px: '$8',
        },
      }}
      flexWrap="wrap"
    >
      <HStack alignItems="center" space="md">
        <Image
          source={require('../assets/images/Hotel.png')}
          alt="Alternate Text"
          size="md"
        />
        <VStack space="sm">
          <Heading>Taj Hotel</Heading>
          <HStack alignItems="center" space="sm">
            <Icon
              size="md"
              as={StarIcon}
              color="$amber400"
              sx={{
                props: {
                  fill: '$amber400',
                },
              }}
            />
            <Text
              fontSize="$sm"
              color="$textLight800"
              sx={{ _dark: { color: '$textDark50' } }}
            >
              4.9
            </Text>
            <Text
              fontSize="$sm"
              color="$textLight500"
              sx={{ _dark: { color: '$textDark400' } }}
            >
              (129)
            </Text>
          </HStack>
          <HStack alignItems="center" space="sm">
            <Text
              fontSize="$sm"
              fontWeight="$medium"
              color="$primary500"
              sx={{ _dark: { color: '$primary300' } }}
            >
              15 min
            </Text>
            <Text
              fontSize="$sm"
              fontWeight="$medium"
              color="$textLight500"
              sx={{ _dark: { color: '$textDark400' } }}
            >
              (1.3 Kms)
            </Text>
          </HStack>
        </VStack>
      </HStack>
      <HStack
        alignItems="center"
        mt="$2"
        sx={{
          '@base': {
            w: '$full',
          },
          '@xs': {
            w: 'auto',
          },
        }}
      >
        <VStack
          space="xl"
          sx={{
            '@base': {
              w: '$full',
            },
            '@xs': {
              w: 'auto',
            },
          }}
        >
          <HStack alignItems="center" space="lg" justifyContent="space-around">
            {footerIcons.map((item, index) => {
              const selectedItem = selected == item.iconName;
              return (
                <Pressable
                  key={index}
                  rounded="$full"
                  p="$1.5"
                  sx={{
                    '_light': {
                      'bg': selectedItem ? '$primary500' : '$primary50',
                      ':hover': {
                        bg: selectedItem ? '$primary600' : '$primary100',
                      },
                    },
                    '_dark': {
                      bg: selectedItem ? '$primary300' : '$backgroundDark700',
                    },
                    ':hover': {
                      bg: selectedItem ? '$primary400' : '$backgroundDark600',
                    },
                  }}
                  onPress={() => {
                    setSelected(item.iconName);
                  }}
                >
                  <Icon
                    as={item.iconName}
                    size="lg"
                    sx={{
                      _light: {
                        color: selectedItem ? '$textLight50' : '$primary500',
                      },
                      _dark: {
                        color: '$textLight50',
                      },
                    }}
                  />
                </Pressable>
              );
            })}
          </HStack>
          <Button variant="solid" size="xs" onPress={() => {}}>
            <ButtonText> START</ButtonText>
          </Button>
        </VStack>
      </HStack>
    </HStack>
  );
}

function HotelImageSlider() {
  return (
    <HStack mt="$6" mb="$3" px="$2.5" sx={{ '@lg': { px: '$7' } }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={imageList}
        keyExtractor={(_, index) => 'key' + index}
        renderItem={({ item }: ListRenderItemInfo<ImageList>) => (
          <Image
            alt="Image"
            width="$35"
            height="$35"
            rounded="$lg"
            source={item.storyImageUrl}
            mx="$1.5"
          />
        )}
      />
    </HStack>
  );
}

function InformationTab({ currentTab }: { currentTab: Information[] }) {
  return (
    <Box py="$3">
      {currentTab.map((item, index: number) => {
        return (
          <HStack alignItems="center" py="$3" px="$4" space="lg" key={index}>
            <Icon
              as={item.iconName}
              size="md"
              color="$primary500"
              sx={{ _dark: { color: '$primary300' } }}
            />
            <Text fontSize="$xs" flex={1}>
              {item.iconText}
            </Text>
          </HStack>
        );
      })}
    </Box>
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
    <Pressable onPress={() => handleTabChange(tabName)} pt="$2">
      <Text
        fontSize="$sm"
        fontWeight="medium"
        letterSpacing="$xl"
        sx={{
          '@sm': {
            px: '$4',
          },
          '_light': {
            color: tabName === currentTab ? '$primary500' : '$textLight500',
          },
          '_dark': {
            color: tabName === currentTab ? '$primary300' : '$textDark400',
          },
        }}
        px="$3"
        py="$2"
      >
        {tabName}
      </Text>
      {tabName === currentTab && (
        <Box
          borderTopLeftRadius="$sm"
          borderTopRightRadius="$sm"
          bg="$primary500"
          sx={{ _dark: { bg: '$primary300' } }}
          h="$1"
        />
      )}
    </Pressable>
  );
}

function Overview() {
  const [tabName, setTabName] = React.useState('Overview');
  const [info, setInfo] = React.useState<Information[]>(information.Overview);
  useEffect(() => {
    switch (tabName) {
      case 'About':
        setInfo(information.About);
        return;
      case 'Overview':
        setInfo(information.Overview);
        return;
      case 'Photos':
        setInfo(information.Photos);
        return;
      case 'Reviews':
        setInfo(information.Reviews);
        return;
    }
  }, [tabName]);
  return (
    <Box sx={{ _dark: { bg: '$backgroundDark}800' } }} px="$4">
      <HStack sx={{ '@md': { px: '$4' } }}>
        {tabs.map(({ id, title }) => (
          <TabItem
            key={id}
            tabName={title}
            currentTab={tabName}
            handleTabChange={(tab) => setTabName(tab)}
          />
        ))}
      </HStack>
      <InformationTab currentTab={info} />
    </Box>
  );
}

export default function StoreLocatorTwo() {
  const [textInput, setTextInput] = useState('');
  const { width: windowWidth } = useWindowDimensions();

  return (
    <DashboardLayout
      scrollable={false}
      title="Location"
      displaySidebar={false}
      maxWidth={windowWidth - 64}
      displayScreenTitle={false}
      displaySearchButton={true}
    >
      <HStack flex={1} rounded="$sm">
        <VStack
          pt="$5"
          bg="$backgroundLight0"
          flex={1}
          sx={{
            '@md': { pt: '$8', maxWidth: '$422' },
            '@xl': { maxWidth: '$622' },
            '_dark': { bg: '$backgroundDark800' },
          }}
        >
          <Box display="none" sx={{ '@md': { display: 'flex' } }}>
            <Input
              mx="$8"
              mb="$6"
              px="$0"
              sx={{ _dark: { borderColor: '$borderDark700' } }}
              alignItems="center"
            >
              <InputIcon ml="$3" mr="$2">
                <Icon as={LocateFixed} color="$textDark400" />
              </InputIcon>
              <InputField
                value={textInput}
                onChangeText={setTextInput}
                placeholder="Your location"
                fontSize="$md"
                fontWeight="$medium"
                color="$textDark400"
              />
            </Input>
          </Box>

          <HotelInformation />
          <HotelImageSlider />
          <Overview />
        </VStack>

        <Box display="none" sx={{ '@md': { display: 'flex' } }} flex={1}>
          {/* <Map /> */}
          <Fab
            placement="bottom right"
            bg="$primary500"
            sx={{ _dark: { bg: '$primary300' } }}
          >
            <FabIcon as={LocateFixed} />
          </Fab>
        </Box>
      </HStack>
    </DashboardLayout>
  );
}
