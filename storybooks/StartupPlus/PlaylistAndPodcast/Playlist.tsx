import React, { useEffect } from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Actionsheet,
  Pressable,
  Divider,
  // useDisclose,
  ScrollView,
  Slider,
  Tooltip,
  Progress,
  TooltipContent,
  TooltipText,
  SliderTrack,
  SliderFilledTrack,
  Button,
  ButtonIcon,
  ProgressFilledTrack,
  ActionsheetContent,
} from '@gluestack-ui/themed';
import { ImageSourcePropType, useWindowDimensions } from 'react-native';
import DashboardLayout from '../Layouts/DashboardLayout';
import { Carousel } from '../components/Carousel';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import MobileFooter from '../components/MobileFooter';
import {
  Heart,
  MoreHorizontal,
  MoreVertical,
  Pause,
  Shuffle,
  SkipBack,
  SkipForward,
  Home,
  Search,
  Podcast,
  ListMusic,
  LucideIcon,
  List,
} from 'lucide-react-native';

type RootStackParamList = {
  Home: undefined;
  Podcast: undefined;
  Search: undefined;
  Mylibrary: undefined;
};
const StackNavigator = createStackNavigator<RootStackParamList>();

type Props = StackScreenProps<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = Props['navigation'];

type SongList = {
  songName: string;
  artist: string;
  imageUri: ImageSourcePropType;
  duration: string;
};
type SongListProps = {
  song: SongList;
};
type SongProps = {
  currentSongTab: SongList[];
};
type SongTabItemType = {
  Allsongs: SongList[];
  Favourites: SongList[];
  Albums: SongList[];
  Workouts: SongList[];
};
const songsList: SongTabItemType = {
  Allsongs: [
    {
      songName: 'Counting stars',
      artist: 'One republic',
      imageUri: require('./assets/images/songfull.png'),
      duration: '4:30',
    },

    {
      songName: 'Work',
      artist: 'One republic',
      imageUri: require('./assets/images/work.png'),
      duration: '3:48',
    },

    {
      songName: 'Secrets',
      artist: 'One republic',
      imageUri: require('./assets/images/secrets.png'),
      duration: '3:36',
    },

    {
      songName: 'Rescue Me',
      artist: 'One republic',
      imageUri: require('./assets/images/rescueme.png'),
      duration: '3:30',
    },

    {
      songName: 'Apologize',
      artist: 'One republic',
      imageUri: require('./assets/images/apologies.png'),
      duration: '3:27',
    },

    {
      songName: 'Counting stars',
      artist: 'One republic',
      imageUri: require('./assets/images/songfull.png'),
      duration: '4:30',
    },
    {
      songName: 'Secrets',
      artist: 'One republic',
      imageUri: require('./assets/images/secrets.png'),
      duration: '3:36',
    },
  ],
  Favourites: [
    {
      songName: 'Counting stars',
      artist: 'One republic',
      imageUri: require('./assets/images/songfull.png'),
      duration: '4:30',
    },
    {
      songName: 'Secrets',
      artist: 'One republic',
      imageUri: require('./assets/images/secrets.png'),
      duration: '3:36',
    },
    {
      songName: 'Counting stars',
      artist: 'One republic',
      imageUri: require('./assets/images/songfull.png'),
      duration: '4:30',
    },

    {
      songName: 'Work',
      artist: 'One republic',
      imageUri: require('./assets/images/work.png'),
      duration: '3:48',
    },

    {
      songName: 'Secrets',
      artist: 'One republic',
      imageUri: require('./assets/images/secrets.png'),
      duration: '3:36',
    },

    {
      songName: 'Rescue Me',
      artist: 'One republic',
      imageUri: require('./assets/images/rescueme.png'),
      duration: '3:30',
    },

    {
      songName: 'Apologize',
      artist: 'One republic',
      imageUri: require('./assets/images/apologies.png'),
      duration: '3:27',
    },

    {
      songName: 'Counting stars',
      artist: 'One republic',
      imageUri: require('./assets/images/songfull.png'),
      duration: '4:30',
    },
    {
      songName: 'Secrets',
      artist: 'One republic',
      imageUri: require('./assets/images/secrets.png'),
      duration: '3:36',
    },
  ],
  Albums: [
    {
      songName: 'Work',
      artist: 'One republic',
      imageUri: require('./assets/images/work.png'),
      duration: '3:48',
    },

    {
      songName: 'Secrets',
      artist: 'One republic',
      imageUri: require('./assets/images/secrets.png'),
      duration: '3:36',
    },

    {
      songName: 'Rescue Me',
      artist: 'One republic',
      imageUri: require('./assets/images/rescueme.png'),
      duration: '3:30',
    },
    {
      songName: 'Counting stars',
      artist: 'One republic',
      imageUri: require('./assets/images/songfull.png'),
      duration: '4:30',
    },

    {
      songName: 'Work',
      artist: 'One republic',
      imageUri: require('./assets/images/work.png'),
      duration: '3:48',
    },

    {
      songName: 'Secrets',
      artist: 'One republic',
      imageUri: require('./assets/images/secrets.png'),
      duration: '3:36',
    },

    {
      songName: 'Rescue Me',
      artist: 'One republic',
      imageUri: require('./assets/images/rescueme.png'),
      duration: '3:30',
    },

    {
      songName: 'Apologize',
      artist: 'One republic',
      imageUri: require('./assets/images/apologies.png'),
      duration: '3:27',
    },

    {
      songName: 'Counting stars',
      artist: 'One republic',
      imageUri: require('./assets/images/songfull.png'),
      duration: '4:30',
    },
    {
      songName: 'Secrets',
      artist: 'One republic',
      imageUri: require('./assets/images/secrets.png'),
      duration: '3:36',
    },
  ],
  Workouts: [
    {
      songName: 'Secrets',
      artist: 'One republic',
      imageUri: require('./assets/images/secrets.png'),
      duration: '3:36',
    },

    {
      songName: 'Rescue Me',
      artist: 'One republic',
      imageUri: require('./assets/images/rescueme.png'),
      duration: '3:30',
    },
    {
      songName: 'Secrets',
      artist: 'One republic',
      imageUri: require('./assets/images/secrets.png'),
      duration: '3:36',
    },

    {
      songName: 'Rescue Me',
      artist: 'One republic',
      imageUri: require('./assets/images/rescueme.png'),
      duration: '3:30',
    },

    {
      songName: 'Apologize',
      artist: 'One republic',
      imageUri: require('./assets/images/apologies.png'),
      duration: '3:27',
    },

    {
      songName: 'Counting stars',
      artist: 'One republic',
      imageUri: require('./assets/images/songfull.png'),
      duration: '4:30',
    },
    {
      songName: 'Secrets',
      artist: 'One republic',
      imageUri: require('./assets/images/secrets.png'),
      duration: '3:36',
    },
    {
      songName: 'Work',
      artist: 'One republic',
      imageUri: require('./assets/images/work.png'),
      duration: '3:48',
    },

    {
      songName: 'Counting stars',
      artist: 'One republic',
      imageUri: require('./assets/images/songfull.png'),
      duration: '4:30',
    },

    {
      songName: 'Work',
      artist: 'One republic',
      imageUri: require('./assets/images/work.png'),
      duration: '3:48',
    },
  ],
};

type FullScreenSongProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Icon = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};
type FooterIcon = {
  iconName: LucideIcon | typeof Icon;
  iconText: keyof RootStackParamList;
};

const footerIcons: FooterIcon[] = [
  { iconName: Home, iconText: 'Home' },
  { iconName: Podcast, iconText: 'Podcast' },
  { iconName: Search, iconText: 'Search' },
  { iconName: ListMusic, iconText: 'Mylibrary' },
];
function CarouselLayout() {
  const { height } = useWindowDimensions();
  return (
    <Carousel
      images={[
        require('./assets/images/image1.png'),
        require('./assets/images/image2.png'),
        require('./assets/images/image3.png'),
        require('./assets/images/image4.png'),
      ]}
      activeIndicatorBgColor="$primary700"
      inactiveIndicatorBgColor="$backgroundLight300"
      height={height * 0.75}
    />
  );
}
function MobileHeader() {
  return (
    <Box alignItems="flex-start">
      <Image
        h="$56"
        w="$full"
        resizeMode="cover"
        alt="Banner Image"
        source={require('./assets/images/songbanner.png')}
      />
    </Box>
  );
}

function SongCard({ song }: SongListProps) {
  return (
    <Pressable
      p="$2"
      borderRadius="$sm"
      sx={{
        ':hover': {
          _light: {
            backgroundColor: '$backgroundLight100',
          },
          _dark: {
            backgroundColor: '$backgroundDark700',
          },
        },
        ':active': {
          _light: {
            backgroundColor: '$backgroundLight200',
          },
          _dark: {
            backgroundColor: '$backgroundDark700',
          },
        },
      }}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <HStack
          alignItems="center"
          sx={{
            props: {
              '@base': {
                space: 'md',
              },
              '@md': {
                space: 'lg',
              },
            },
          }}
        >
          <Image
            source={song.imageUri}
            alt="Song cover"
            height="$60"
            width="$60"
            rounded="$md"
          />
          <VStack pl="$2">
            <Pressable>
              <Text fontSize="$md" fontWeight="$bold">
                {song.songName}
              </Text>
            </Pressable>
            <Text
              color="$textLight500"
              sx={{
                _dark: {
                  color: '$textDark400',
                },
              }}
              fontSize="$sm"
            >
              {song.artist}
            </Text>
          </VStack>
        </HStack>
        <HStack alignItems="center" space="md">
          <Text
            color="$textLight500"
            sx={{
              _dark: {
                color: '$textDark500',
              },
            }}
          >
            {song.duration}
          </Text>
          <Tooltip
            placement="top"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Icon
                    as={MoreVertical}
                    m="$2"
                    size="lg"
                    color="$textLight500"
                    sx={{
                      _dark: {
                        color: '$textDark500',
                      },
                    }}
                  />
                </Pressable>
              );
            }}
            openDelay={500}
          >
            <TooltipContent>
              <TooltipText>More Options</TooltipText>
            </TooltipContent>
          </Tooltip>
        </HStack>
      </HStack>
    </Pressable>
  );
}
function FullScreenSong(props: FullScreenSongProps) {
  const window = useWindowDimensions();

  return (
    <Actionsheet
      zIndex={999}
      // hideDragIndicator
      isOpen={props.isOpen}
      // isOpen={true}
      onClose={props.onClose}
    >
      <ActionsheetContent
        bg="$backgroundLight0"
        sx={{ _dark: { bg: '$backgroundDark800' } }}
        zIndex={999}
        h={window.height * 0.75}
        px="$10"
        pt="$8"
      >
        <Box flex={1}>
          <CarouselLayout />
        </Box>
        <VStack width="$full" pb="$6" space="md" pt="$4">
          <Text
            fontSize="$lg"
            fontWeight="$bold"
            textAlign="center"
            color="$textLight800"
            sx={{ _dark: { color: '$textDark50' } }}
          >
            Escape from reality
          </Text>
          <Text
            fontSize="$sm"
            fontWeight="$normal"
            color="$textLight500"
            sx={{ _dark: { color: '$textDark400' } }}
            textAlign="center"
          >
            One republic
          </Text>
          <VStack>
            <Slider defaultValue={65}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
            </Slider>

            <HStack justifyContent="space-between">
              <Text
                fontSize="$sm"
                fontWeight="$normal"
                color="$textLight800"
                sx={{ _dark: { color: '$textDark50' } }}
              >
                1.25
              </Text>
              <Text
                fontSize="$sm"
                fontWeight="$normal"
                color="$textLight800"
                sx={{ _dark: { color: '$textDark50' } }}
              >
                3.25
              </Text>
            </HStack>
          </VStack>
          <HStack alignItems="center" space="sm" justifyContent="center">
            <Tooltip
              placement="top"
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <Icon
                      as={SkipBack}
                      size="lg"
                      sx={{
                        _light: {
                          color: '$textLight800',
                          props: {
                            fill: '$textLight800',
                          },
                        },
                        _dark: {
                          color: '$textDark50',
                          props: {
                            fill: '$textDark50',
                          },
                        },
                      }}
                    />
                  </Pressable>
                );
              }}
              openDelay={500}
            >
              <TooltipContent>
                <TooltipText>hdewhiuw song</TooltipText>
              </TooltipContent>
            </Tooltip>
            <Tooltip
              placement="top"
              trigger={(triggerProps: any) => {
                return (
                  <Button
                    {...triggerProps}
                    size="sm"
                    variant="solid"
                    action="primary"
                    rounded="$full"
                    p="$0"
                    w="$8"
                    h="$8"
                  >
                    <ButtonIcon as={Pause} size="lg" />
                  </Button>
                );
              }}
              openDelay={500}
            >
              <TooltipContent>
                <TooltipText>Pause/play</TooltipText>
              </TooltipContent>
            </Tooltip>

            <Tooltip
              placement="top"
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <Icon
                      as={SkipForward}
                      m="$1"
                      size="lg"
                      sx={{
                        _light: {
                          color: '$textLight800',
                          props: {
                            fill: '$textLight800',
                          },
                        },
                        _dark: {
                          color: '$textDark50',
                          props: {
                            fill: '$textDark50',
                          },
                        },
                      }}
                    />
                  </Pressable>
                );
              }}
              openDelay={500}
            >
              <TooltipContent>
                <TooltipText>Next song</TooltipText>
              </TooltipContent>
            </Tooltip>
          </HStack>
          <HStack justifyContent="space-between" pt="$3">
            <Tooltip
              placement="top"
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <Icon
                      as={List}
                      size="lg"
                      sx={{
                        _light: {
                          color: '$textLight800',
                        },
                        _dark: {
                          color: '$textDark50',
                        },
                      }}
                    />
                  </Pressable>
                );
              }}
              openDelay={500}
            >
              <TooltipContent>
                <TooltipText>Songs List</TooltipText>
              </TooltipContent>
            </Tooltip>
            <Tooltip
              placement="top"
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <Icon
                      as={Heart}
                      size="lg"
                      sx={{
                        _light: {
                          color: '$textLight800',
                        },
                        _dark: {
                          color: '$textDark50',
                        },
                      }}
                    />
                  </Pressable>
                );
              }}
              openDelay={500}
            >
              <TooltipContent>
                <TooltipText>Add to Favourite</TooltipText>
              </TooltipContent>
            </Tooltip>
            <Tooltip
              placement="top"
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <Icon
                      as={Shuffle}
                      size="lg"
                      sx={{
                        _light: {
                          color: '$textLight800',
                        },
                        _dark: {
                          color: '$textDark50',
                        },
                      }}
                    />
                  </Pressable>
                );
              }}
              openDelay={500}
            >
              <TooltipContent>
                <TooltipText>Shuffle</TooltipText>
              </TooltipContent>
            </Tooltip>

            <Tooltip
              placement="top"
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <Icon
                      as={MoreHorizontal}
                      size="lg"
                      sx={{
                        _light: {
                          color: '$textLight800',
                        },
                        _dark: {
                          color: '$textDark50',
                        },
                      }}
                    />
                  </Pressable>
                );
              }}
              openDelay={500}
            >
              <TooltipContent>
                <TooltipText>More</TooltipText>
              </TooltipContent>
            </Tooltip>
          </HStack>
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
}
function DesktopMinimizedSong() {
  return (
    <Box
      position="absolute"
      left="$0"
      right="$0"
      bottom="$0"
      width="$full"
      sx={{
        '@md': {
          display: 'flex',
        },
        '_light': {
          bg: '$backgroundLight50',
        },
        '_dark': {
          bg: '$backgroundDark700',
        },
      }}
    >
      <Slider defaultValue={65} zIndex={1}>
        <SliderTrack>
          <SliderFilledTrack
            sx={{
              _light: {
                bg: '$primary500',
              },
              _dark: {
                bg: '$primary300',
              },
            }}
          />
        </SliderTrack>
      </Slider>
      <HStack
        space="md"
        alignItems="center"
        px="$8"
        pb="$3"
        justifyContent="space-between"
      >
        <HStack alignItems="center" space="lg">
          <Image
            height="$10"
            width="$10"
            rounded="$md"
            source={{
              uri: 'https://i1.sndcdn.com/artworks-000040814493-eu3kr3-t500x500.jpg',
            }}
            alt="uri image"
          />
          <VStack>
            <Text bold fontSize="$md">
              Counting Stars
            </Text>
            <Text
              color="$textLight500"
              sx={{
                _dark: {
                  color: '$textDark400',
                },
              }}
            >
              One Republic
            </Text>
          </VStack>
        </HStack>
        <HStack alignItems="center" space="lg">
          <Tooltip
            placement="top"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Icon
                    as={Heart}
                    size="lg"
                    sx={{
                      _light: {
                        color: '$textLight800',
                      },
                      _dark: {
                        color: '$textDark50',
                      },
                    }}
                  />
                </Pressable>
              );
            }}
            openDelay={500}
          >
            <TooltipContent>
              <TooltipText>Add to favourites</TooltipText>
            </TooltipContent>
          </Tooltip>

          <HStack alignItems="center" space="sm">
            <Tooltip
              placement="top"
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <Icon
                      as={SkipBack}
                      size="lg"
                      sx={{
                        _light: {
                          color: '$textLight800',
                          props: {
                            fill: '$textLight800',
                          },
                        },
                        _dark: {
                          color: '$textDark50',
                          props: {
                            fill: '$textDark50',
                          },
                        },
                      }}
                    />
                  </Pressable>
                );
              }}
              openDelay={500}
            >
              <TooltipContent>
                <TooltipText>Previous song</TooltipText>
              </TooltipContent>
            </Tooltip>
            <Tooltip
              placement="top"
              trigger={(triggerProps: any) => {
                return (
                  <Button
                    {...triggerProps}
                    size="sm"
                    variant="solid"
                    action="primary"
                    rounded="$full"
                    p="$0"
                    w="$8"
                    h="$8"
                  >
                    <ButtonIcon as={Pause} size="lg" />
                  </Button>
                );
              }}
              openDelay={500}
            >
              <TooltipContent>
                <TooltipText>Pause/play</TooltipText>
              </TooltipContent>
            </Tooltip>

            <Tooltip
              placement="top"
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <Icon
                      as={SkipForward}
                      size="lg"
                      sx={{
                        props: {
                          _light: {
                            fill: '$textLight800',
                          },
                          _dark: {
                            fill: '$textDark50',
                          },
                        },
                        _light: {
                          color: '$textLight800',
                          props: {
                            fill: '$textLight800',
                          },
                        },
                        _dark: {
                          color: '$textDark50',
                          props: {
                            fill: '$textDark50',
                          },
                        },
                      }}
                    />
                  </Pressable>
                );
              }}
              openDelay={500}
            >
              <TooltipContent>
                <TooltipText>Next song</TooltipText>
              </TooltipContent>
            </Tooltip>
          </HStack>

          <Tooltip
            placement="top"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Icon
                    as={Shuffle}
                    size="lg"
                    sx={{
                      _light: {
                        color: '$textLight800',
                      },
                      _dark: {
                        color: '$textDark50',
                      },
                    }}
                  />
                </Pressable>
              );
            }}
            openDelay={500}
          >
            <TooltipContent>
              <TooltipText>Shuffle</TooltipText>
            </TooltipContent>
          </Tooltip>
        </HStack>
        <HStack>
          <Tooltip
            placement="top"
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Icon
                    as={MoreHorizontal}
                    size="lg"
                    sx={{
                      _light: {
                        color: '$textLight800',
                      },
                      _dark: {
                        color: '$textDark50',
                      },
                    }}
                  />
                </Pressable>
              );
            }}
            openDelay={500}
          >
            <TooltipContent>
              <TooltipText>More Options</TooltipText>
            </TooltipContent>
          </Tooltip>
        </HStack>
      </HStack>
    </Box>
  );
}

function MobileMinimizedSong() {
  // const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <VStack
      position="absolute"
      bottom="$75"
      left="$0"
      width="$full"
      sx={{
        _light: {
          bg: '$backgroundLight50',
        },
        _dark: {
          bg: '$backgroundDark700',
        },
      }}
      display="flex"
    >
      <Pressable
        // onPress={onOpen}
        bg="$backgroundLight50"
        sx={{
          _dark: {
            bg: '$backgroundDark700',
          },
        }}
      >
        <Box px="$4" pt="$3">
          <HStack justifyContent="space-between" alignItems="center">
            <HStack space="md" alignItems="center">
              <Image
                h="$12"
                w="$12"
                rounded="$full"
                source={{
                  uri: 'https://i1.sndcdn.com/artworks-000040814493-eu3kr3-t500x500.jpg',
                }}
                alt="song-banner"
              />
              <VStack space="sm">
                <Text
                  color="$textLight800"
                  sx={{
                    _dark: {
                      color: '$textDark50',
                    },
                  }}
                  fontWeight="$bold"
                  fontSize="$md"
                >
                  Counting Stars
                </Text>
                <Text
                  color="$textLight500"
                  sx={{
                    _dark: {
                      color: '$textDark400',
                    },
                  }}
                >
                  One Republic
                </Text>
              </VStack>
            </HStack>

            <HStack alignItems="center" space="md">
              <Pressable>
                <Icon
                  as={SkipBack}
                  size="lg"
                  sx={{
                    _light: {
                      color: '$textLight800',
                      props: {
                        fill: '$textLight800',
                      },
                    },
                    _dark: {
                      color: '$textDark50',
                      props: {
                        fill: '$textDark50',
                      },
                    },
                  }}
                />
              </Pressable>

              <Button
                size="sm"
                variant="solid"
                action="primary"
                rounded="$full"
                p="$0"
                w="$8"
                h="$8"
              >
                <ButtonIcon as={Pause} size="lg" />
              </Button>
              <Pressable>
                <Icon
                  as={SkipForward}
                  size="lg"
                  sx={{
                    _light: {
                      color: '$textLight800',
                      props: {
                        fill: '$textLight800',
                      },
                    },
                    _dark: {
                      color: '$textDark50',
                      props: {
                        fill: '$textDark50',
                      },
                    },
                  }}
                />
              </Pressable>

              <Pressable>
                <Icon
                  as={Heart}
                  sx={{
                    _light: {
                      color: '$textLight800',
                      props: {
                        fill: '$textLight800',
                      },
                    },
                    _dark: {
                      color: '$textDark50',
                      props: {
                        fill: '$textDark50',
                      },
                    },
                  }}
                  size="lg"
                />
              </Pressable>
            </HStack>
          </HStack>
        </Box>
      </Pressable>
      <Progress
        mt="$3"
        size="xs"
        value={64}
        rounded="$xs"
        sx={{
          _light: {
            bg: '$backgroundLight100',
          },
          _dark: {
            bg: '$backgroundDark700',
          },
        }}
      >
        <ProgressFilledTrack
          sx={{
            _light: {
              bg: '$primary500',
            },
            _dark: {
              bg: '$primary300',
            },
          }}
        />
      </Progress>
      <FullScreenSong
        isOpen={false}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
        // isOpen={isOpen} onClose={onClose}
      />
    </VStack>
  );
}

function DesktopBanner() {
  return (
    <Box zIndex={-1}>
      <Image
        rounded="$md"
        h="$56"
        w="$full"
        resizeMode="cover"
        alt="Banner Image"
        source={require('./assets/images/songbanner.png')}
      />
    </Box>
  );
}

const SongsList = (props: SongProps) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
      bounces={false}
    >
      <VStack
        space="md"
        bg="$backgroundLight0"
        sx={{
          '@base': {
            px: '$4',
            py: '$5',
          },
          '@md': {
            p: '$8',
            _dark: {
              bg: '$backgroundDark900',
            },
          },
        }}
      >
        {props.currentSongTab.map(
          (song: SongList, index: React.Key | null | undefined) => {
            return (
              <VStack space="md" key={index}>
                <SongCard song={song} />
                {index !== props.currentSongTab.length - 1 && (
                  <Divider
                    bg="$backgroundLight200"
                    sx={{ _dark: { bg: '$backgroundDark700' } }}
                  />
                )}
              </VStack>
            );
          }
        )}
      </VStack>
    </ScrollView>
  );
};
const tabs = [
  {
    id: 1,
    title: 'Allsongs',
  },
  {
    id: 2,
    title: 'Favourites',
  },
  {
    id: 3,
    title: 'Albums',
  },
  {
    id: 4,
    title: 'Workouts',
  },
];
function TabItem({
  tabName,
  currentTab,
  handleTabChange,
}: {
  tabName: string;
  currentTab: string;
  handleTabChange: (tabTitle: string) => void;
  px?: { base?: string; md?: string; lg?: string };
}) {
  return (
    <Pressable onPress={() => handleTabChange(tabName)} pt="$2">
      <VStack px="$2">
        <Text
          fontSize="$sm"
          fontWeight="$medium"
          letterSpacing="$lg"
          sx={{
            _light: {
              color: tabName === currentTab ? '$primary500' : '$textLight500',
            },
            _dark: {
              color: tabName === currentTab ? '$primary300' : '$textDark400',
            },
          }}
          py="$2"
        >
          {tabName}
        </Text>
        {tabName === currentTab && (
          <Box
            sx={{
              borderTopLeftRadius: '$sm',
              borderTopRightRadius: '$sm',
              _light: {
                bg: '$primary500',
              },
              _dark: {
                bg: '$primary300',
              },
            }}
            h="$1"
          />
        )}
      </VStack>
    </Pressable>
  );
}

function PlaylistScreen({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) {
  const [tabName, setTabName] = React.useState('Allsongs');
  const [songs, setSongs] = React.useState<SongList[]>(songsList.Allsongs);
  useEffect(() => {
    switch (tabName) {
      case 'Allsongs':
        setSongs(songsList.Allsongs);
        return;
      case 'Favourites':
        setSongs(songsList.Favourites);
        return;
      case 'Albums':
        setSongs(songsList.Albums);
        return;
      case 'Workouts':
        setSongs(songsList.Workouts);
        return;
    }
  }, [tabName]);
  return (
    <VStack
      flex={1}
      bg="$primary50"
      sx={{ _dark: { bg: '$backgroundDark800' } }}
    >
      <DashboardLayout
        title="Playlist"
        displayScreenTitle={true}
        displayMenuButton
        rightPanelMobileHeader={true}
        scrollable={false}
      >
        <Box
          flex={1}
          sx={{
            '@base': {
              flexDirection: 'column',
            },
            '@md': {
              flexDirection: 'row',
            },
            '_light': {
              borderTopColor: '$borderLight200',
            },
            '_dark': {
              bg: '$backgroundDark700',
              borderTopColor: '$borderDark700',
            },
          }}
          bg="$backgroundLight0"
        >
          <VStack flex={1}>
            <Box
              flex={1}
              pb="$40"
              sx={{
                '@base': {
                  display: 'flex',
                },
                '@md': {
                  display: 'none',
                },
              }}
            >
              <ScrollView
                sx={{
                  _light: {
                    bg: '$backgroundLight0',
                  },
                  _dark: {
                    bg: '$backgroundDark700',
                  },
                }}
                flex={1}
                stickyHeaderIndices={[1]}
                bounces={false}
              >
                <MobileHeader />
                <VStack>
                  <HStack
                    sx={{
                      _light: {
                        bg: '$backgroundLight100',
                      },
                      _dark: {
                        bg: '$backgroundDark700',
                      },
                    }}
                    w="$full"
                    justifyContent="space-between"
                    rounded="$sm"
                  >
                    {tabs.map(({ id, title }) => (
                      <TabItem
                        key={id}
                        tabName={title}
                        currentTab={tabName}
                        handleTabChange={(tab) => setTabName(tab)}
                      />
                    ))}
                  </HStack>
                </VStack>
                <SongsList currentSongTab={songs} />
              </ScrollView>
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
              <VStack
                maxWidth="$containerWidth"
                flex={1}
                width="$full"
                mx="$auto"
              >
                <DesktopBanner />
                <HStack
                  sx={{
                    _light: {
                      bg: '$backgroundLight100',
                    },
                    _dark: {
                      bg: '$backgroundDark700',
                    },
                  }}
                  w="$full"
                  justifyContent="space-between"
                  rounded="$sm"
                >
                  {tabs.map(({ id, title }) => (
                    <TabItem
                      key={id}
                      tabName={title}
                      currentTab={tabName}
                      handleTabChange={(tab) => setTabName(tab)}
                    />
                  ))}
                </HStack>
                <SongsList currentSongTab={songs} />
              </VStack>
            </Box>
          </VStack>
        </Box>
      </DashboardLayout>
      <Box sx={{ '@md': { display: 'none' } }} display="flex">
        <MobileMinimizedSong />
      </Box>
      <Box display="none" sx={{ '@md': { display: 'flex' } }}>
        <DesktopMinimizedSong />
      </Box>
      <MobileFooter footerIcons={footerIcons}/>
    </VStack>
  );
}
 function Playlist() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNavigator.Screen name="Home" component={PlaylistScreen} />
        <StackNavigator.Screen name="Podcast" component={PlaylistScreen} />
        <StackNavigator.Screen name="Search" component={PlaylistScreen} />
        <StackNavigator.Screen name="Mylibrary" component={PlaylistScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default PlaylistScreen;
