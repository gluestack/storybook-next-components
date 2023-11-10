import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Pressable,
  Input,
  Divider,
  Menu,
  Box,
  AvatarImage,
  InputIcon,
  ArrowLeftIcon,
  InputField,
  CloseIcon,
  MenuItem,
  MenuItemLabel,
  InputSlot,
  Badge,
  BadgeText,
} from '@gluestack-ui/themed';
import type { ImageSourcePropType } from 'react-native';
import DashboardLayout from '../Layouts/DashboardLayout';
import { CheckCheck, Image, MoreVertical } from 'lucide-react-native';

type ChatItemType = {
  name: string;
  imageUri: ImageSourcePropType;
  isLastMessagePhoto: boolean;
  text: string;
  isUnread: boolean;
  unread: number;
  time: string;
  isLastMessageRead?: boolean;
};

const chatItemsList: ChatItemType[] = [
  {
    name: 'John Legend',
    imageUri: require('./assets/images/brandy.png'),
    isLastMessagePhoto: false,
    text: 'Good Morning',
    isUnread: true,
    unread: 2,
    time: '11:00 AM',
    isLastMessageRead: false,
  },
  {
    name: 'Marsh',
    imageUri: require('./assets/images/Chat2.png'),
    isLastMessagePhoto: false,
    text: 'Emily: Good Morning',
    isUnread: true,
    unread: 2,
    time: '11:00 AM',
    isLastMessageRead: false,
  },
  {
    name: 'Lad',
    imageUri: require('./assets/images/Chat3.png'),
    isLastMessagePhoto: false,
    text: 'Good Morning ❤️',
    isUnread: true,
    unread: 2,
    time: '11:00 AM',
    isLastMessageRead: false,
  },
  {
    name: 'Rita',
    imageUri: require('./assets/images/Chat4.png'),
    isLastMessagePhoto: false,
    text: 'Good Morning every one ',
    isUnread: true,
    unread: 2,
    time: '11:00 AM',
    isLastMessageRead: false,
  },
  {
    name: 'CrazyK',
    imageUri: require('./assets/images/Chat5.png'),
    isLastMessagePhoto: false,
    text: 'Good Morning every one ',
    isUnread: false,
    unread: 2,
    time: 'Yesterday',
    isLastMessageRead: true,
  },
  {
    name: 'Riya',
    imageUri: require('./assets/images/Chat6.png'),
    isLastMessagePhoto: false,
    text: 'Hey Riya, let’s catch upthis weekend?',
    isUnread: false,
    unread: 2,
    time: 'Sunday',
    isLastMessageRead: true,
  },
  {
    name: 'Sunny',
    imageUri: require('./assets/images/Chat7.png'),
    isLastMessagePhoto: false,
    text: 'Good Morning',
    isUnread: false,
    unread: 7,
    time: 'Sunday',
    isLastMessageRead: true,
  },
  {
    name: 'Sunny',
    imageUri: require('./assets/images/Chat8.png'),
    isLastMessagePhoto: false,
    text: 'Good Morning every one 😇 ',
    isUnread: false,
    unread: 1,
    time: 'Sunday',
    isLastMessageRead: true,
  },
  {
    name: 'Sunny',
    imageUri: require('./assets/images/Chat9.png'),
    isLastMessagePhoto: true,
    text: 'Good Morning',
    isUnread: false,
    unread: 1,
    time: 'Sunday',
    isLastMessageRead: true,
  },
];

function ChatItem({
  imageUri,
  name,
  isLastMessagePhoto,
  isUnread,
  isLastMessageRead,
  text,
  time,
  unread,
}: ChatItemType) {
  return (
    <Box>
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
        <HStack
          w="$full"
          space="md"
          alignItems="center"
          sx={{
            ':hover': {
              backgroundColor: '$red',
            },
          }}
        >
          <Avatar size="md">
            <AvatarImage source={imageUri} />
          </Avatar>

          <VStack flex={1}>
            <Text
              fontSize="$sm"
              fontWeight="medium"
              sx={{
                _light: {
                  color: '$textLight800',
                },
                _dark: {
                  color: '$textDark50',
                },
              }}
            >
              {name}
            </Text>
            <HStack alignItems="center">
              {isLastMessagePhoto ? (
                <Icon
                  size="sm"
                  sx={{
                    _light: {
                      color: '$textLight500',
                    },
                  }}
                  as={Image}
                />
              ) : (
                isLastMessageRead && (
                  <Icon
                    sx={{
                      _light: {
                        color: '$textLight800',
                      },
                      _dark: {
                        color: '$textDark50',
                      },
                    }}
                    as={CheckCheck}
                    size="md"
                  />
                )
              )}
              <Text
                fontSize="$sm"
                sx={{
                  _light: {
                    color: '$textLight500',
                  },
                  _dark: {
                    color: '$textDark400',
                  },
                }}
                isTruncated={true}
              >
                {isLastMessagePhoto ? 'Photo' : text.substring(0, 40)}
              </Text>
            </HStack>
          </VStack>
          <VStack space="xs" alignItems="flex-end">
            <Text
              fontSize="$xs"
              fontWeight="medium"
              sx={{
                _light: {
                  color: '$textLight800',
                },
                _dark: {
                  color: '$textDark50',
                },
              }}
              mb={isUnread ? '$0' : '$2.5'}
            >
              {time}
            </Text>

            {isUnread && (
              <Badge
                mt={isUnread ? '$0' : '$1'}
                px="$1.5"
                h="$5"
                w="$5"
                variant="solid"
                borderRadius="$full"
                action="success"
                sx={{
                  _light: {
                    bg: '$primary500',
                  },
                  _dark: {
                    bg: '$primary300',
                  },
                }}
              >
                <BadgeText
                  fontSize="$xs"
                  color="$textLight50"
                  sx={{ _dark: { color: '$textDark50' } }}
                >
                  {unread}
                </BadgeText>
              </Badge>
            )}
          </VStack>
        </HStack>
      </Pressable>
      <Divider
        my="$2"
        bg="$backgroundLight200"
        sx={{ _dark: { bg: '$backgroundDark700' } }}
      />
    </Box>
  );
}

function SearchBarWeb() {
  return (
    <HStack justifyContent="space-between" alignItems="center" space="xs">
      <Input
        flex={1}
        variant="outline"
        size="md"
        px="$0"
        py="$3"
        sx={{
          _dark: {
            bg: '$backgroundDark700',
            borderColor: '$borderDark500',
          },
        }}
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputSlot>
          <InputIcon
            as={ArrowLeftIcon}
            ml="$4"
            color="$backgroundDark400"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {},
            }}
          />
        </InputSlot>

        <InputField placeholder="Search here" />

        <InputSlot>
          <InputIcon as={CloseIcon} mr="$4" color="$backgroundDark400" />
        </InputSlot>
      </Input>

      <Menu
        w="$40"
        defaultIsOpen={false}
        trigger={(triggerProps) => (
          <Pressable
            accessibilityLabel="More options menu"
            p="$2"
            {...triggerProps}
          >
            <Icon size="lg" color="$textLight400" as={MoreVertical} />
          </Pressable>
        )}
        mt="$2"
        placement="bottom right"
      >
        <MenuItem key="Community" textValue="Community">
          <MenuItemLabel size="sm">New group</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Community" textValue="Community">
          <MenuItemLabel size="sm">New broadcast</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Community" textValue="Community">
          <MenuItemLabel size="sm">Linked device</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Community" textValue="Community">
          <MenuItemLabel size="sm">Starred messages</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Community" textValue="Community">
          <MenuItemLabel size="sm">Settings</MenuItemLabel>
        </MenuItem>
      </Menu>
    </HStack>
  );
}

export default function ChatList() {
  return (
    <DashboardLayout
      title="Chats"
      displaySidebar={false}
      rightPanelMobileHeader
      displayMenuButton
      displayNotificationButton
    >
      <Box
        p="$4"
        sx={{
          '@md': {
            p: '$8',
            rounded: '$sm',
          },
          '_light': {
            bg: '$backgroundLight50',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
        flex={1}
      >
        <Box
          sx={{
            '@md': {
              display: 'flex',
            },
          }}
          display="none"
        >
          <SearchBarWeb />
        </Box>

        <VStack
          sx={{
            '@md': {
              mt: '$8',
            },
          }}
          mt="$1"
          space="xs"
        >
          {chatItemsList.map((item, index) => {
            return <ChatItem {...item} key={'chatItem' + index} />;
          })}
        </VStack>
      </Box>
    </DashboardLayout>
  );
}
