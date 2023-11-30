import React from 'react';

import {
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Pressable,
  Divider,
  Badge,
  Box,
  FlatList,
  useColorMode,
} from '@gluestack-ui/themed';
import {
  Home,
  Search,
  Podcast,
  ListMusic,
  LucideIcon,
  MoreVertical,
  Lightbulb,
  VenetianMask,
  Bug,
  PersonStanding,
  Cross,
  Dumbbell,
  Dribbble,
} from 'lucide-react-native';

import { ImageSourcePropType } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MobileFooter from '../components/MobileFooter';
import DashboardLayout from '../Layouts/DashboardLayout';

import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

const StackNavigator = createStackNavigator();
type RootStackParamList = {
  Home: undefined;
  Podcast: undefined;
  Search: undefined;
  Mylibrary: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = Props['navigation'];

type Album = {
  imageUri: ImageSourcePropType;
};

const album: Album[] = [
  {
    imageUri: require('./assets/images/featured1.png'),
  },
  {
    imageUri: require('./assets/images/featured2.png'),
  },
  {
    imageUri: require('./assets/images/featured3.png'),
  },
  {
    imageUri: require('./assets/images/featured2.png'),
  },
];

type Category = {
  name: string;
  iconName: LucideIcon | typeof Icon;
};

const categoriesIconsList: Category[] = [
  {
    name: 'Meditation',
    iconName: PersonStanding,
  },
  {
    name: 'Virus',
    iconName: Bug,
  },
  {
    name: 'Innovations',
    iconName: Lightbulb,
  },
  {
    name: 'Comedy',
    iconName: VenetianMask,
  },
  {
    name: 'Health',
    iconName: Cross,
  },
  {
    name: 'Fitness',
    iconName: Dumbbell,
  },
  {
    name: 'Sports',
    iconName: Dribbble,
  },
  {
    name: 'More',
    iconName: MoreVertical,
  },
];

type CarousalType = {
  imageUri: ImageSourcePropType;
  name: string;
};

const trending: CarousalType[] = [
  {
    imageUri: require('./assets/images/trending1.png'),
    name: 'Story Seeds',
  },
  {
    imageUri: require('./assets/images/trending2.png'),
    name: 'Dare to lead',
  },
  {
    imageUri: require('./assets/images/trending3.png'),
    name: 'Artificial Intelligence',
  },
  {
    imageUri: require('./assets/images/trending4.png'),
    name: 'Angular',
  },
  {
    imageUri: require('./assets/images/trending5.png'),
    name: 'AR/VR',
  },
];

const speakers: CarousalType[] = [
  {
    imageUri: require('./assets/images/speaker1.png'),
    name: 'John ',
  },
  {
    imageUri: require('./assets/images/speaker2.png'),
    name: 'Tim Luca',
  },
  {
    imageUri: require('./assets/images/speaker3.png'),
    name: 'Frank Underwood',
  },
  {
    imageUri: require('./assets/images/speaker4.png'),
    name: 'Thomus ',
  },
  {
    imageUri: require('./assets/images/speaker5.png'),
    name: 'Titus Kitamura ',
  },
];

type Icon = {
  iconName: LucideIcon | typeof Icon;
  iconText: keyof RootStackParamList;
};

const footerIcons: Icon[] = [
  {
    iconName: Home,
    iconText: 'Home',
  },
  { iconName: Podcast, iconText: 'Podcast' },
  { iconName: Search, iconText: 'Search' },
  { iconName: ListMusic, iconText: 'Mylibrary' },
];

function FeaturedShows() {
  const Separator = () => (
    <Box
      w="$4"
      sx={{
        flex: 1,
      }}
    />
  );
  return (
    <VStack space="sm">
      <Box
        sx={{
          '@base': {
            px: '$4',
          },
          '@md': {
            px: '$8',
          },
        }}
      >
        <Badge variant="solid" bg="$primary500" alignSelf="flex-start">
          <Text fontSize="$2xs" color="$backgroundDark100" fontWeight="$bold">
            FEATURED SHOWS
          </Text>
        </Badge>
        <Text
          fontWeight="$bold"
          mt="$1"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
          fontSize="$sm"
        >
          How to Become Better leader
        </Text>
      </Box>
      <FlatList
        sx={{
          '@base': {
            px: '$4',
            mr: '$4',
          },
          '@md': {
            px: '$8',
            mr: '$0',
          },
        }}
        data={album}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(_, index) => `${index}`}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }: { item: Album }) => (
          <Pressable rounded={4}>
            <Image
              width="$80"
              height="$35"
              rounded="$sm"
              alt="Banner Image"
              source={item.imageUri}
            />
          </Pressable>
        )}
      />
    </VStack>
  );
}

function Categories() {
  const colorMode = useColorMode();
  return (
    <VStack mt="$5" space="lg">
      <Text
        fontWeight="$bold"
        fontSize="$md"
        sx={{
          '_light': {
            color: '$textLight800',
          },
          '_dark': {
            color: '$textDark50',
          },
          '@base': {
            px: '$4',
          },
          '@md': {
            px: '$8',
          },
        }}
      >
        Categories
      </Text>
      <FlatList
        sx={{
          '@base': {
            px: '$4',
          },
          '@md': {
            px: '$8',
          },
        }}
        data={categoriesIconsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => `category-${index}`}
        renderItem={({ item }: { item: Category }) => (
          <VStack
            mr="$8"
            space="md"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              rounded="$full"
              p="$2"
              mb="$2"
              justifyContent="center"
              alignItems="center"
              sx={{
                _light: {
                  bg: '$primary50',
                },
                _dark: {
                  bg: '$backgroundDark700',
                },
              }}
            >
              <Pressable>
                <Icon
                  size="xl"
                  as={item.iconName}
                  color="$primary500"
                  sx={{ _dark: { color: '$primary300' } }}
                />
              </Pressable>
            </Box>

            <Text
              fontWeight="$normal"
              fontSize="$xs"
              sx={{
                _light: {
                  color: '$textLightk800',
                },
                _dark: {
                  color: '$textDark50',
                },
              }}
            >
              {item.name}
            </Text>
          </VStack>
        )}
      />
    </VStack>
  );
}

function Carousal({
  itemList,
  heading,
}: {
  itemList: CarousalType[];
  heading: string;
}) {
  const Separator = () => (
    <Box
      w="$4"
      sx={{
        flex: 1,
      }}
    />
  );
  return (
    <VStack space="lg" mt="$5">
      <HStack
        justifyContent="space-between"
        sx={{
          '@base': {
            px: '$4',
          },
          '@md': {
            px: '$8',
          },
        }}
      >
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
          {heading}
        </Text>
        <Pressable>
          <Text color="$primary500" fontSize="$sm" fontWeight="$medium">
            See All
          </Text>
        </Pressable>
      </HStack>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        sx={{
          '@base': {
            px: '$4',
            mr: '$4',
          },
          '@md': {
            px: '$8',
            mr: '$0',
          },
        }}
        data={itemList}
        keyExtractor={(_, index) => `trending-${index}`}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }: { item: CarousalType }) => (
          <Pressable rounded="$sm">
            <Image
              source={item.imageUri}
              alt={item.name}
              sx={{
                '_web': {
                  borderTopRadius: '$sm',
                },
                '@base': {
                  w: '$48',
                },
                '@md': {
                  w: '$56',
                },
                'h': 112,
              }}
            />
            <Box
              rounded="$sm"
              p="$3"
              sx={{
                _light: {
                  bg: '$cyan100',
                },
                _dark: {
                  bg: '$backgroundDark700',
                },
              }}
            >
              <Text
                sx={{
                  _light: {
                    color: '$textLight800',
                  },
                  _dark: {
                    color: '$textDark50',
                  },
                }}
                fontSize="$md"
                fontWeight="$medium"
              >
                {item.name}
              </Text>
            </Box>
          </Pressable>
        )}
      />
    </VStack>
  );
}

function PodcastScreen({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) {
  return (
    <>
      <DashboardLayout
        scrollable={false}
        title="Podcasts"
        displayScreenTitle={true}
        displayMenuButton
      >
        <Box
          sx={{
            '_light': {
              bg: '$backgroundLight0',
            },
            '_dark': {
              bg: '$backgroundDark800',
            },
            '@base': {
              mb: '$16',
              pt: '$5',
            },
            '@md': {
              mb: '$0',
              pt: '$8',
              rounded: '$sm',
            },
          }}
          pb="$8"
        >
          <FeaturedShows />
          <Box
            sx={{
              '@base': {
                display: 'none',
              },
              '@md': {
                display: 'flex',
              },
            }}
          >
            <Divider
              mt="$5"
              bg="$backgroundLight200"
              sx={{ _dark: { bg: '$backgroundDark700' } }}
            />
          </Box>
          <Categories />
          <Box
            sx={{
              '@base': {
                display: 'none',
              },
              '@md': {
                display: 'flex',
              },
            }}
          >
            <Divider
              mt="$5"
              bg="$backgroundLight200"
              sx={{ _dark: { bg: '$backgroundDark700' } }}
            />
          </Box>
          <Carousal itemList={trending} heading="Trending Courses" />
          <Box
            sx={{
              '@base': {
                display: 'none',
              },
              '@md': {
                display: 'flex',
              },
            }}
          >
            <Divider
              mt="$5"
              bg="$backgroundLight200"
              sx={{ _dark: { bg: '$backgroundDark700' } }}
            />
          </Box>
          <Carousal itemList={speakers} heading="Speakers" />
        </Box>
      </DashboardLayout>
      <MobileFooter footerIcons={footerIcons} />
    </>
  );
}

function PodcastMain() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNavigator.Screen name="Home" component={PodcastScreen} />
        <StackNavigator.Screen name="Podcast" component={PodcastScreen} />
        <StackNavigator.Screen name="Search" component={PodcastScreen} />
        <StackNavigator.Screen name="MyLibrary" component={PodcastScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default PodcastScreen;
