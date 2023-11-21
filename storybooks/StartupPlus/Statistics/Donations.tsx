import React from 'react';
import {
  Box,
  Text,
  HStack,
  VStack,
  ScrollView,
  Pressable,
  Image,
  Progress,
  Divider,
  FlatList,
  ProgressFilledTrack,
  useBreakpointValue,
  useColorMode,
  Icon,
} from '@gluestack-ui/themed';
import { ImageSourcePropType } from 'react-native';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  BookOpen,
  Bus,
  Cross,
  Lightbulb,
  LucideIcon,
  MoreVertical,
  Train,
} from 'lucide-react-native';

type Content = {
  imageUri: ImageSourcePropType;
  itemName: string;
  itemCompany: string;
  discountedPrice: string;
  actualPrice: string;
  discountPercentage: number;
};

type MobileIcon = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};
const trendingContentList: Content[] = [
  {
    imageUri: require('./assets/images/trendingfundraise1.png'),
    itemName: 'Covid Warriors',
    itemCompany: 'BABY GROW',
    discountedPrice: '$5,53,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('./assets/images/trendingfundraise2.png'),
    itemName: 'HELP',
    itemCompany: 'YK',
    discountedPrice: '$5,53,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('./assets/images/trendingfundraise2.png'),
    itemName: 'HELP',
    itemCompany: 'YK',
    discountedPrice: '$5,53,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('./assets/images/trendingfundraise2.png'),
    itemName: 'HELP',
    itemCompany: 'YK',
    discountedPrice: '$5,53,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
];
const contentList: Content[] = [
  {
    imageUri: require('./assets/images/fundraise1.png'),
    itemName: 'Covid Warriors',
    itemCompany: 'BABY GROW',
    discountedPrice: '$5,53,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('./assets/images/fundraise2.png'),
    itemName: 'Fly NGO',
    itemCompany: 'YK',
    discountedPrice: '$5,53,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('./assets/images/fundraise3.png'),
    itemName: 'Covid Warriors',
    itemCompany: 'Mother care',
    discountedPrice: '$5,53,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('./assets/images/fundraise4.png'),
    itemName: 'Fly NGO',
    itemCompany: 'YK',
    discountedPrice: '$5,53,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('./assets/images/fundraise5.png'),
    itemName: 'Fly NGO',
    itemCompany: 'YK',
    discountedPrice: '$5,53,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
  {
    imageUri: require('./assets/images/fundraise6.png'),
    itemName: 'Fly NGO',
    itemCompany: 'YK',
    discountedPrice: '$5,53,000',
    actualPrice: '5,000',
    discountPercentage: 60,
  },
];
const mobileIconsList: MobileIcon[] = [
  {
    iconName: BookOpen,
    iconText: 'Education',
  },
  {
    iconName: Lightbulb,
    iconText: 'Creative',
  },
  {
    iconName: Train,
    iconText: 'Railway',
  },
  {
    iconName: Cross,
    iconText: 'Health',
  },
  {
    iconName: MoreVertical,
    iconText: 'More',
  },
];

function TrendingFundraisersCard(props: { item: Content }) {
  return (
    <Pressable
      rounded="$lg"
      sx={{
        _light: {
          bg: '$backgroundLight100',
        },
        _dark: {
          bg: '$backgroundDark700',
        },
      }}
    >
      <Box
        sx={{
          _light: {
            bg: '$backgroundLight100',
          },
          _dark: {
            bg: '$backgroundDark700',
          },
        }}
        rounded="$lg"
      >
        <Image
          w="$56"
          h="$40"
          source={props.item.imageUri}
          alt="Alternate Text"
          resizeMode="cover"
        />
        <VStack p="$3" space="md">
          <Text
            fontSize="$sm"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {props.item.itemName}
          </Text>

          <Progress
            value={40}
            sx={{
              _light: {
                bg: '$emerald100',
              },
              _dark: {
                bg: '$backgroundDark500',
              },
            }}
          >
            <ProgressFilledTrack bg="$emerald600" />
          </Progress>

          <HStack alignItems="center" justifyContent="space-between">
            <Text
              fontSize="$xs"
              fontWeight="$medium"
              sx={{
                _light: {
                  color: '$textLight500',
                },
                _dark: {
                  color: '$textDark400',
                },
              }}
            >
              Total Raised
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
              fontSize="$md"
              fontWeight="$bold"
            >
              {props.item.discountedPrice}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Pressable>
  );
}

function CardFundraisers(props: { item: Content; key: number }) {
  return (
    <Pressable
      onPress={() => {}}
      sx={{
        '@base': {
          w: '$1/3',
        },
        '@md': {
          w: '$1/4',
        },
      }}
      px="$2"
      pt="$4"
    >
      <Image
        sx={{
          '@base': {
            h: '$32',
          },
          '@md': {
            h: '$200',
          },
        }}
        w="$full"
        rounded="$sm"
        source={props.item.imageUri}
        alt="Alternate Text"
        resizeMode="cover"
      />
    </Pressable>
  );
}

function CategoriesIcon(props: { item: MobileIcon }) {
  const colormode = useColorMode();

  return (
    <VStack space="md" alignItems="center">
      <Box
        rounded="$full"
        sx={{
          '_light': {
            bg: '$primary100',
          },
          '_dark': {
            bg: '$backgroundDark700',
          },
          '@base': {
            p: '$2',
          },
          '@md': {
            p: '$4',
          },
        }}
      >
        <Pressable>
          <Icon
            size="xl"
            as={props.item.iconName}
            color="$primary500"
            sx={{ _dark: { color: '$textDark0' } }}
          />
        </Pressable>
      </Box>
      <Text
        sx={{
          '@base': {
            fontSize: '$xs',
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          },
          '@md': {
            fontSize: '$sm',
            fontWeight: '$medium',
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          },
        }}
      >
        {props.item.iconText}
      </Text>
    </VStack>
  );
}

function MainContent() {
  return (
    <>
      <Text
        fontSize="$md"
        fontWeight="$bold"
        sx={{
          '@md': {
            px: '$2',
          },
          '_light': {
            color: '$textLight800',
          },
          '_dark': {
            color: '$textDark50',
          },
        }}
      >
        Trending Fundraisers
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <HStack
          mx="$4"
          space="md"
          mt="$3"
          alignItems="center"
          sx={{
            '@md': {
              px: '$2',
            },
            '_light': {
              bg: '$backgroundLight50',
            },
            '_dark': {
              bg: '$backgroundDark800',
            },
          }}
        >
          {trendingContentList.map((item, index) => {
            return <TrendingFundraisersCard key={index} item={item} />;
          })}
        </HStack>
      </ScrollView>
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
        <Divider my="$5" w="$full" />
      </Box>

      <Text
        fontWeight="$bold"
        fontSize="$md"
        sx={{
          '@base': {
            mt: '$5',
          },
          '@md': {
            px: '$2',
            mt: '$0',
          },
          '_light': {
            color: '$textLight800',
          },
          '_dark': {
            color: '$textDark50',
          },
        }}
      >
        Categories
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <HStack
          space="lg"
          mt="$4"
          alignItems="center"
          sx={{
            '@md': {
              px: '$2',
            },
            '_light': {
              bg: '$backgroundLight50',
            },
            '_dark': {
              bg: '$backgroundDark800',
            },
          }}
        >
          {mobileIconsList.map((item, index) => {
            return <CategoriesIcon key={index} item={item} />;
          })}
        </HStack>
      </ScrollView>
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
          my="$5"
          w="$full"
          bg="$backgroundLight200"
          sx={{ _dark: { bg: '$backgroundDark700' } }}
        />
      </Box>

      <Text
        fontWeight="$bold"
        fontSize="$md"
        sx={{
          '@base': {
            mt: '$5',
          },
          '@md': {
            px: '$2',
            mt: '$0',
          },
          '_light': {
            color: '$textLight800',
          },
          '_dark': {
            color: '$textDark50',
          },
        }}
      >
        Fundraisers
      </Text>
    </>
  );
}

export default function () {
  const noColumnFundraisers = useBreakpointValue({
    base: 3,
    md: 4,
  });
  return (
    <DashboardLayout scrollable={false} displaySidebar={false} title="Donation">
      <FlatList
        ListHeaderComponent={
          <Box
            sx={{
              '@base': {
                px: '$2',
              },
              '@md': {
                px: '$0',
                rounded: '$sm',
              },
              '_light': {
                bg: '$backgroundLight50',
              },
              '_dark': {
                bg: '$backgroundDark800',
              },
            }}
          >
            <MainContent />
          </Box>
        }
        mb="$1"
        sx={{
          '@base': {
            py: '$5',
            px: '$2',
          },
          '@md': {
            py: '$8',
            px: '$6',
          },
          '_light': {
            bg: '$backgroundLight50',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
        bounces={false}
        numColumns={noColumnFundraisers}
        data={contentList}
        keyExtractor={(index) => 'key' + index}
        renderItem={({ item, index }: { item: Content; index: number }) => (
          <CardFundraisers item={item} key={index} />
        )}
        key={noColumnFundraisers}
        showsVerticalScrollIndicator={false}
      />
    </DashboardLayout>
  );
}
