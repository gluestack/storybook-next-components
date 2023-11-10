import React from 'react';

import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Link,
  FlatList,
  CheckCircleIcon,
  useBreakpointValue,
} from '@gluestack-ui/themed';

import { ImageSourcePropType } from 'react-native';

import DashboardLayout from '../Layouts/DashboardLayout';

import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { FolderOpen, Home, Play, PlayCircle, User } from 'lucide-react-native';
import MobileFooter from '../components/MobileFooter';
const StackNavigator = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  Explore: undefined;
  Local: undefined;
  Profile: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = Props['navigation'];
type VideoType = {
  imageUri: ImageSourcePropType;
  videoTitle: string;
  channel: string;
  views: string;
  timestamp: string;
  isVerified?: boolean;
};

type Icon = {
  iconName: any;
  iconText: keyof RootStackParamList;
};

const footerIcons: Icon[] = [
  { iconName: Home, iconText: 'Home' },
  { iconName: PlayCircle, iconText: 'Explore' },
  { iconName: FolderOpen, iconText: 'Local' },
  { iconName: User, iconText: 'Profile' },
];

const list: VideoType[] = [
  {
    imageUri: require('./assets/images/videolibrary1.png'),
    videoTitle: 'Body Lotion Lokal untuk Kulit Eczema!| Skincare 101',
    channel: 'Marvel Studios',
    views: '10M Views',
    timestamp: '2 years ago',
    isVerified: true,
  },
  {
    imageUri: require('./assets/images/videolibrary2.png'),
    videoTitle: "What's Inside Poppy's Bag? | Inside Her Bag",
    channel: 'Marvel Studios',
    views: '10M Views',
    timestamp: '2 years ago',
  },
  {
    imageUri: require('./assets/images/videolibrary3.png'),
    videoTitle: 'Skincare Wajib Tahun yang Bikin Glowing! | Skincare 101',
    channel: 'Ticktok Studios',
    views: '10M Views',
    timestamp: '2 years ago',
    isVerified: true,
  },
  {
    imageUri: require('./assets/images/videolibrary4.png'),
    videoTitle: '5 Beauty Sponge Punya! | Skincare 101 | FD Insight',
    channel: 'Marvel Studios',
    views: '10M Views',
    timestamp: '2 years ago',
  },
  {
    imageUri: require('./assets/images/videolibrary5.png'),
    videoTitle: 'Army of the Dead John | Cristine and Mark | Marvel studios',
    channel: 'Marvel Studios',
    views: '10M Views',
    timestamp: '2 years ago',
    isVerified: true,
  },
  {
    imageUri: require('./assets/images/videolibrary6.png'),
    videoTitle: 'Army of the Dead John | Cristine and Maddy',
    channel: 'Marvel Studios',
    views: '10M Views',
    timestamp: '2 years ago',
    isVerified: true,
  },
  {
    imageUri: require('./assets/images/videolibrary7.png'),
    videoTitle: 'Army of the Dead John | Cristine and Maddy',
    channel: 'Ticktok Studios',
    views: '10M Views',
    timestamp: '2 years ago',
    isVerified: true,
  },
  {
    imageUri: require('./assets/images/videolibrary8.png'),
    videoTitle: 'Bad bad batteries',
    channel: 'Marvel Studios',
    views: '10M Views',
    timestamp: '2 years ago',
  },
  {
    imageUri: require('./assets/images/videolibrary9.png'),
    videoTitle: 'The benefits of solar',
    channel: 'Marvel Studios',
    views: '10M Views',
    timestamp: '2 years ago',
  },
  {
    imageUri: require('./assets/images/videolibrary10.png'),
    videoTitle: 'Stop hitting the planet',
    channel: 'Marvel Studios',
    views: '10M Views',
    timestamp: '2 years ago',
  },
  {
    imageUri: require('./assets/images/videolibrary11.png'),
    videoTitle: 'Sustainable packaging trends ',
    channel: 'Marvel Studios',
    views: '10M Views',
    timestamp: '2 years ago',
  },
  {
    imageUri: require('./assets/images/videolibrary12.png'),
    videoTitle: 'Buy earth friendly dog food',
    channel: 'Marvel Studios',
    views: '10M Views',
    timestamp: '2 years ago',
  },
];

function VideoCard({
  imageUri,
  videoTitle,
  views,
  timestamp,
  channel,
  isVerified,
}: VideoType) {
  return (
    <Link
      sx={{
        '@base': {
          mb: '$4',
          w: '$full',
        },
        '@md': {
          px: '$4',
          w: '$1/2',
          minHeight: '$56',
        },
        '@lg': {
          mb: '$4',
          w: '$1/3',
        },
        '@xl': {
          w: '$1/4',
        },
      }}
      href=""
    >
      <HStack
        w="$full"
        sx={{
          '@base': {
            flexDirection: 'row',
          },
          '@md': {
            flexDirection: 'column',
          },
        }}
        alignItems="flex-start"
      >
        <Box
          sx={{
            '@base': {
              w: '$2/5',
            },
            '@md': {
              w: '$full',
            },
          }}
          justifyContent="center"
        >
          <Image
            w="$full"
            sx={{
              '@base': {
                h: '$35',
              },
              '@md': {
                h: '$32',
              },
            }}
            rounded="$sm"
            source={imageUri}
            alt="Alternate Text"
          />

          <Box
            alignSelf="center"
            justifyContent="center"
            alignItems="center"
            rounded="$full"
            position="absolute"
            p="$2"
            h="$7"
            w="$7"
            sx={{
              opacity: 0.6,
              _light: {
                bg: '$backgroundLight50',
              },
              _dark: {
                bg: '$backgroundDark700',
              },
            }}
          >
            <Text
              alignSelf="center"
              justifyContent="center"
              alignItems="center"
              display="flex"
              pl="$0.5"
              color="$primary500"
            >
              <Play size={14} strokeWidth={1.75} />
            </Text>
          </Box>
        </Box>
        <VStack
          sx={{
            '@base': {
              w: '$3/5',
              p: '$3',
              mt: '$4',
            },
            '@md': {
              w: undefined,
              p: '$0',
              mt: '$3',
            },
          }}
          space="xs"
        >
          <Text
            fontSize="$md"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
              _web: {
                lineHeight: '23px',
              },
            }}
            fontWeight="$medium"
            alignItems="center"
            numberOfLines={2}
          >
            {videoTitle}
          </Text>

          <HStack alignItems="center" space="xs" mt="$1">
            <Text
              sx={{
                _light: {
                  color: '$textLight500',
                },
                _dark: {
                  color: '$textDark400',
                },
              }}
              fontSize="$sm"
              fontWeight="$normal"
            >
              {channel}
            </Text>
            {isVerified && (
              <Icon
                as={CheckCircleIcon}
                w="$4"
                h="$4"
                sx={{
                  _light: {
                    color: '$textLight500',
                  },
                  _dark: {
                    color: '$textDark400',
                  },
                }}
              />
            )}
          </HStack>
          <Text
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
            fontWeight="$normal"
            fontSize="$sm"
            numberOfLines={1}
          >
            {views} | {timestamp}
          </Text>
        </VStack>
      </HStack>
    </Link>
  );
}
//TODO: update after themed component update

function Videos() {
  const noColumn = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
    xl: 4,
  });

  return (
    <Box
      sx={{
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
        '@base': {
          mb: '$20',
          pt: '$5',
          px: '$4',
        },
        '@md': {
          mb: '$0',
          pt: '$8',
          px: '$4.5',
          rounded: '$sm',
        },
      }}
    >
      <FlatList
        bounces={false}
        horizontal={false}
        numColumns={4}
        data={list}
        renderItem={({ item }: { item: VideoType }) => <VideoCard {...item} />}
        key={noColumn}
        keyExtractor={(index) => 'key' + index}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}

function VideoLibraryScreen({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) {
  return (
    <>
      <DashboardLayout title="Video Library">
        <Videos />

        <Box
          sx={{
            '@sm': {
              display: 'none',
            },
          }}
        ></Box>
      </DashboardLayout>
      <MobileFooter footerIcons={footerIcons} navigation={navigation} />
    </>
  );
}

export default function VideoLibrary() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNavigator.Screen name="Home" component={VideoLibraryScreen} />
        <StackNavigator.Screen name="Explore" component={VideoLibraryScreen} />
        <StackNavigator.Screen name="Local" component={VideoLibraryScreen} />
        <StackNavigator.Screen name="Profile" component={VideoLibraryScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
