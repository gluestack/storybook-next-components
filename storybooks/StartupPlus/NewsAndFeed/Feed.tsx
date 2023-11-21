import React from 'react';

import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Pressable,
  Link,
  Divider,
  AvatarImage,
  FlatList,
} from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { Carousel } from '../components/Carousel';
import {
  Home,
  MessageSquare,
  Search,
  User,
  Tv,
  MoreVertical,
  MessageCircle,
  Heart,
  Send,
  LucideIcon,
} from 'lucide-react-native';
import MobileFooter from '../components/MobileFooter';
import { ListRenderItemInfo } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  IGTV: undefined;
  Search: undefined;
  Chat: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
type Props = StackScreenProps<RootStackParamList, 'Home'>;
type FeedNavigationProp = Props['navigation'];

type UserProfileProps = {
  userId: string | number;
  userName: string;
  userImage?: any;
  likedPosts?: UserPostProps[];
  commentedPosts?: UserPostProps[];
  userLocation?: string;
};

type CommentProps = {
  commentId: string | number;
  commentContent: string;
  user: UserProfileProps;
};

type UserPostProps = {
  postId: string | number;
  postCaption?: string;
  user: UserProfileProps;
  postImageUrls: any;
  postLikes: UserProfileProps[];
  postComments: CommentProps[];
  timeStamp: string;
};

type StoryProps = {
  image: LucideIcon | typeof Icon;
  text: string;
};

const userProfiles: UserProfileProps[] = [
  {
    userId: '1',
    userName: 'Jerome watson',
    userImage: require('./assets/images/NewsFeed7.png'),
    likedPosts: [],
    commentedPosts: [],
    userLocation: 'Toronto, CA',
  },
  {
    userId: '2',
    userName: 'Floyd Miles',
    userImage: require('./assets/images/NewsFeed6.png'),
    likedPosts: [],
    commentedPosts: [],
    userLocation: 'California',
  },
  {
    userId: '3',
    userName: 'Theresa Webb',
    userImage: require('./assets/images/NewsFeed11.png'),
    likedPosts: [],
    commentedPosts: [],
    userLocation: 'South Dakota',
  },
  {
    userId: '4',
    userName: 'John11',
    userImage: require('./assets/images/NewsFeed10.png'),
    likedPosts: [],
    commentedPosts: [],
    userLocation: 'New Jersey 45463',
  },
];

const currentLoggedInUser: UserProfileProps = userProfiles[3];

const userPosts: UserPostProps[] = [
  {
    postId: '1',
    postCaption: 'First Day At Office. Excited!',
    user: userProfiles[0],
    postImageUrls: [
      require('./assets/images/NewsFeed1.png'),
      require('./assets/images/NewsFeed2.png'),
      require('./assets/images/NewsFeed7.png'),
      require('./assets/images/NewsFeed4.png'),
    ],
    postLikes: [userProfiles[0]],
    postComments: [
      {
        commentId: '1',
        commentContent: 'Pretty ',
        user: userProfiles[0],
      },
    ],
    timeStamp: '3 hours ago',
  },
  {
    postId: '2',
    postCaption: 'Good Hair!',
    user: userProfiles[1],
    postImageUrls: [
      require('./assets/images/NewsFeed7.png'),
      require('./assets/images/NewsFeed4.png'),
    ],
    postLikes: [userProfiles[0], userProfiles[2]],
    postComments: [
      {
        commentId: '1',
        commentContent: 'Pretty',
        user: userProfiles[0],
      },
      {
        commentId: '2',
        commentContent: 'Nice photo',
        user: userProfiles[1],
      },
      {
        commentId: '3',
        commentContent: 'Awesome',
        user: userProfiles[2],
      },
    ],
    timeStamp: '5 hours ago',
  },
];

const navigationItems: any = [
  { iconName: Home, iconText: 'Home' },
  { iconName: Tv, iconText: 'IGTV' },
  { iconName: Search, iconText: 'Search' },
  {
    iconName: MessageSquare,
    iconText: 'Chat',
  },
  { iconName: User, iconText: 'Profile' },
];

const storyImage: StoryProps[] = [
  {
    image: require('./assets/images/NewsFeed9.png'),
    text: 'Your Story',
  },
  {
    image: require('./assets/images/NewsFeed5.png'),
    text: 'Robert Fox',
  },
  {
    image: require('./assets/images/NewsFeed2.png'),
    text: 'Floyd Miles',
  },
  {
    image: require('./assets/images/NewsFeed6.png'),
    text: 'Kristin',
  },
  {
    image: require('./assets/images/NewsFeed4.png'),
    text: 'Jane Cooper',
  },
  {
    image: require('./assets/images/NewsFeed3.png'),
    text: 'Savannah',
  },
  {
    image: require('./assets/images/NewsFeed4.png'),
    text: 'Devon Lane',
  },
  {
    image: require('./assets/images/NewsFeed9.png'),
    text: 'Eleanor',
  },
  {
    image: require('./assets/images/NewsFeed1.png'),
    text: 'Eleanor',
  },
  {
    image: require('./assets/images/NewsFeed3.png'),
    text: 'Savannah',
  },
  {
    image: require('./assets/images/NewsFeed4.png'),
    text: 'Devon Lane',
  },
  {
    image: require('./assets/images/NewsFeed9.png'),
    text: 'Eleanor',
  },
  {
    image: require('./assets/images/NewsFeed1.png'),
    text: 'Eleanor',
  },
];

const postActionIcons: any = [
  {
    name: Heart,
  },
  {
    name: MessageCircle,
  },
  {
    name: Send,
  },
];

const suggestedProfileList: UserProfileProps[] = userProfiles.slice(0, 3);

const Story = ({ story }: { story: StoryProps }) => (
  <HStack pl="$4" flex={1} justifyContent="space-evenly">
    <VStack space="sm" alignItems="center">
      <Pressable>
        <Box
          w="$16"
          h="$16"
          borderWidth="$2"
          p="$1"
          rounded="$full"
          borderColor="$red500"
        >
          <Avatar w="$full" h="$full">
            <AvatarImage source={story.image} />
          </Avatar>
        </Box>
      </Pressable>
      <Text fontSize="$xs" fontWeight="$normal">
        {story.text}
      </Text>
    </VStack>
  </HStack>
);

/**
 * @param {StoryProps[]} storiesData - List of all stories
 * @returns Stories list component
 */
function Stories({ storiesData }: { storiesData: StoryProps[] }) {
  /**
   *
   * @param {StoryProps} story - Story object
   * @returns Story component
   */

  return (
    <Box
      sx={{
        '@md': {
          rounded: '$sm',
          mb: '$4',
        },
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      width="$full"
    >
      <VStack py="$4" space="sm" width="$full">
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={storiesData}
          renderItem={({ item, index }: ListRenderItemInfo<StoryProps>) => (
            <Story key={`story-${index}`} story={item} />
          )}
          keyExtractor={(index) => '#' + index}
        />
      </VStack>
    </Box>
  );
}

/**
 *
 * @param {ImageSourcePropType[]} images - list of images to show in carousel
 * @returns CarouselLayout component
 */
function CarouselLayout({ images }: { images: any }) {
  return (
    <Box
      sx={{
        '@base': {
          bg: '$none',
        },
      }}
      mt="$4"
    >
      <Carousel
        images={images}
        height="$72"
        activeIndicatorBgColor="$primary700"
        inactiveIndicatorBgColor="$backgroundLight300"
      />
    </Box>
  );
}

/**
 * @param {UserPostProps[]} postsData - List of all posts
 * @returns Posts list component
 */
const Post = ({
  post,
  postActionsIcons,
}: {
  post: UserPostProps;
  postActionsIcons: any;
  index: number;
}) => {
  return (
    <>
      <Box
        sx={{
          '@base': {
            display: 'flex',
          },
          '@md': {
            display: 'none',
          },
        }}
      >
        <Divider
          bg="$backgroundLight200"
          sx={{ _dark: { bg: '$backgroundDark700' } }}
        />
      </Box>

      <Box
        flexDirection="column"
        sx={{
          'zIndex': 0,
          '@base': {
            pt: '$7',
            pb: '$8',
          },
          '@md': {
            pt: '$4',
            pb: '$6',
          },
          '_light': {
            bg: '$backgroundLight0',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
      >
        <HStack justifyContent="space-between" alignItems="center">
          <HStack space="sm" alignItems="center" px="$4">
            <Avatar
              borderWidth="$1"
              sx={{
                _light: {
                  borderColor: '$primary500',
                },
                _dark: {
                  borderColor: '$primary700',
                },
              }}
              size="sm"
            >
              <AvatarImage source={post.user.userImage} />
            </Avatar>
            <VStack>
              <Pressable onPress={() => {}}>
                <Text fontSize="$sm" fontWeight="$semibold">
                  {post.user.userName}
                </Text>
              </Pressable>

              <Text
                color="$textLight800"
                sx={{
                  _dark: {
                    color: '$textDark50',
                  },
                }}
                fontSize="$xs"
              >
                {post.user.userLocation}
              </Text>
            </VStack>
          </HStack>

          <Pressable
            onPress={() => {}}
            sx={{
              p: '$2.5',
            }}
          >
            <Icon
              color="$textLight800"
              sx={{
                _dark: {
                  color: '$textDark50',
                },
              }}
              size="md"
              as={MoreVertical}
            />
          </Pressable>
        </HStack>

        <CarouselLayout images={post.postImageUrls} />

        <HStack
          alignItems="center"
          space="md"
          pl="$4"
          position="absolute"
          left="$0"
          sx={{
            '@base': {
              top: '$384',
            },
            '@md': {
              top: '$372',
            },
          }}
        >
          {postActionsIcons.map(({ name }: any, idx: any) => {
            return (
              <Box key={idx}>
                <Icon size="md" as={name} color="$textLight400" />
              </Box>
            );
          })}
        </HStack>
        <Text
          fontSize="$xs"
          fontWeight="$normal"
          color="$textLight500"
          alignSelf="flex-end"
          pr="$4"
          position="absolute"
          right="$0"
          sx={{
            '@base': {
              top: '$384',
            },
            '@md': {
              top: '$372',
            },
            '_dark': {
              color: '$textDark400',
            },
          }}
        >
          {post.timeStamp}
        </Text>

        <VStack px="$4" space="sm" pt="$6">
          <HStack alignItems="center" space="sm">
            <Text fontSize="$xs" fontWeight="$normal">
              Liked by
            </Text>
            <Link href="">
              <Text
                fontSize="$sm"
                color="$textLight800"
                sx={{
                  _dark: {
                    color: '$textDark50',
                  },
                }}
              >
                {post?.postLikes[0]?.userName}
              </Text>
            </Link>
            {post.postLikes.length - 1 > 0 && (
              <Text fontSize="$xs" fontWeight="$normal">
                and
              </Text>
            )}
            {post.postLikes.length - 1 > 0 && (
              <Link href="">
                <Text
                  fontSize="$sm"
                  color="$textLight800"
                  sx={{
                    _dark: {
                      color: '$textDark50',
                    },
                  }}
                >
                  {`${`${post.postLikes?.length - 1}`} others`}{' '}
                </Text>
              </Link>
            )}
          </HStack>
          <HStack alignItems="center" space="md">
            <Link href="">
              <Text
                fontSize="$sm"
                color="$textLight800"
                sx={{
                  _dark: {
                    color: '$textDark50',
                  },
                }}
              >
                {`${post.user.userName}`}
              </Text>
            </Link>
            <Text fontSize="$sm" fontWeight="$normal">
              {`${post.postCaption}`}
            </Text>
          </HStack>
          <Pressable onPress={() => {}}>
            {post.postComments.length > 1 && (
              <Text
                fontSize="$sm"
                fontWeight="$normal"
                color="$textLight500"
                sx={{
                  _dark: {
                    color: '$textDark400',
                  },
                }}
              >
                {`View all ${post.postComments?.length} comments`}
              </Text>
            )}
          </Pressable>
          <HStack space="md" alignItems="center">
            <Text fontSize="$sm" fontWeight="$medium">
              {post.postComments[0].user.userName}
            </Text>
            <Text fontSize="$sm" fontWeight="$normal">
              {post.postComments[0].commentContent}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

/**
 *
 * @param {UserProfileProps} user of - CurrentLoggedIn user
 * @returns Account component
 */
const Account = ({ user }: { user: UserProfileProps }) => (
  <HStack space="lg" alignItems="center">
    {/* <Avatar size="16" source={user.userImage} /> */}

    <Avatar size="md">
      <AvatarImage source={user.userImage} />
    </Avatar>
    <VStack>
      <Text fontSize="$md" fontWeight="$medium">
        {user.userName}
      </Text>
      <Text fontSize="$sm" fontWeight="$normal">
        {user.userLocation}
      </Text>
    </VStack>
    <Link
      ml="auto"
      sx={{
        _web: {
          fontWeight: '$medium',
          textDecorationLine: 'none',
          _light: {
            color: '$primary500',
          },
          _dark: {
            color: '$primary300',
          },
        },
      }}
    >
      <Text
        sx={{
          _light: {
            color: '$primary500',
          },
          _dark: {
            color: '$primary300',
          },
        }}
      >
        {' '}
        Switch{' '}
      </Text>
    </Link>
  </HStack>
);

/**
 *
 * @param {UserProfileProps} user - Suggested user profile
 * @returns SuggestedProfile component
 */
const SuggestedProfile = ({ user }: { user: UserProfileProps }) => (
  <HStack alignItems="center" justifyContent="space-between">
    <Pressable onPress={() => {}}>
      <HStack space="sm" alignItems="center" mt="$6">
        <Avatar size="md">
          <AvatarImage source={user.userImage} />
        </Avatar>
        <VStack>
          <Text fontWeight="$medium" fontSize="$sm">
            {user.userName}
          </Text>
          <Text fontWeight="$normal" fontSize="$xs">
            {user.userLocation}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
    <Link
      mt="$2"
      sx={{
        _web: {
          fontSize: '$sm',
          fontWeight: '$medium',
          textDecorationLine: 'none',
          _light: {
            color: '$textLight500',
          },
          _dark: {
            color: '$textDark400',
          },
        },
      }}
    >
      <Text
        fontSize="$sm"
        sx={{
          _light: {
            color: '$textLight500',
          },
          _dark: {
            color: '$textdark400',
          },
        }}
      >
        Follow
      </Text>
    </Link>
  </HStack>
);

/**
 *
 * @param {UserProfileProps[]} suggestedProfilesList - List of suggested profiles
 */
const SuggestedProfilesList = ({
  suggestedProfilesList,
}: {
  suggestedProfilesList: UserProfileProps[];
}) => (
  <FlatList
    data={suggestedProfilesList}
    renderItem={({ item, index }: ListRenderItemInfo<UserProfileProps>) => (
      <SuggestedProfile user={item} key={index} />
    )}
    keyExtractor={(index) => '#' + index}
  />
);

function SidePanel() {
  return (
    <VStack
      sx={{
        'w': '$80',
        '@md': {
          px: '$6',
          borderRadius: '$md',
        },
      }}
    >
      <Account user={currentLoggedInUser} />
      <HStack justifyContent="space-between" alignItems="center" mt="$10">
        <Text fontSize="$sm" fontWeight="$bold">
          Suggestions for you
        </Text>
        <Link
          sx={{
            _web: {
              fontSize: '$sm',
              fontWeight: '$medium',
              textDecorationLine: 'none',
              _light: {
                color: '$primary500',
              },
              _dark: {
                color: '$primary300',
              },
            },
          }}
        >
          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: '$primary500',
              },
              _dark: {
                color: '$primary300',
              },
            }}
          >
            See All
          </Text>
        </Link>
      </HStack>
      <SuggestedProfilesList suggestedProfilesList={suggestedProfileList} />
    </VStack>
  );
}

function FeedScreen({ navigation }: { navigation: FeedNavigationProp }) {
  return (
    <>
      <DashboardLayout
        scrollable={false}
        title="Home"
        displayScreenTitle={false}
        displaySidebar={false}
      >
        <HStack>
          <Box
            flex={1}
            borderWidth="$0"
            sx={{
              'zIndex': 0,
              '_light': {
                bg: '$primary50',
              },
              '_dark': {
                bg: '$backgroundDark700',
              },
              '@base': {
                mb: '$20',
              },
              '@md': {
                mb: '$0',
              },
            }}
          >
            <FlatList
              ListHeaderComponent={<Stories storiesData={storyImage} />}
              data={userPosts}
              renderItem={({
                item,
                index,
              }: ListRenderItemInfo<UserPostProps>) => (
                <Post
                  postActionsIcons={postActionIcons}
                  key={index}
                  post={item}
                  index={index}
                />
              )}
              keyExtractor={(index) => '#' + index}
              showsVerticalScrollIndicator={false}
              bounces={false}
            />
          </Box>

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
            <VStack>
              <SidePanel />
            </VStack>
          </Box>
        </HStack>
      </DashboardLayout>
      <MobileFooter navigation={navigation} footerIcons={navigationItems} />
    </>
  );
}

export default function Feed() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={FeedScreen} />
          <Stack.Screen name="IGTV" component={FeedScreen} />
          <Stack.Screen name="Search" component={FeedScreen} />
          <Stack.Screen name="Chat" component={FeedScreen} />
          <Stack.Screen name="Profile" component={FeedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
