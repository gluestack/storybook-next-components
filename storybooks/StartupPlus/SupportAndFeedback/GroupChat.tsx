import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  ScrollView,
  Switch,
  Pressable,
  Center,
  Badge,
  Divider,
  AvatarImage,
  BadgeText,
} from '@gluestack-ui/themed';
import type { ImageSourcePropType } from 'react-native';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  Link,
  LogOut,
  LucideIcon,
  Pen,
  ThumbsDown,
  UserPlus,
} from 'lucide-react-native';

type User = {
  image: ImageSourcePropType;
  name: string;
  status: string;
  role: string;
};

const userList: User[] = [
  {
    image: require('./assets/images/member2.png'),
    name: 'Varsha',
    status: 'Happy Days',
    role: 'Admin',
  },
  {
    image: require('./assets/images/member3.png'),
    name: 'Apritha',
    status: 'DND',
    role: 'Admin',
  },
  {
    image: require('./assets/images/member1.png'),
    name: 'Suresh',
    status: 'Typing..',
    role: 'Admin',
  },
];

const groupSettingsData = [
  {
    name: 'Exit Group',
    icon: { name: LogOut },
  },
  {
    name: 'Report Group',
    icon: { name: ThumbsDown },
  },
];

const UserCard = ({
  user,
  handleRemoveUser,
}: {
  user: User;
  handleRemoveUser: (name: string) => void;
}) => {
  return (
    <>
      <Pressable w="$full" px="$4" key={user.name}>
        <HStack alignItems="center" space="xs">
          <Avatar size="md">
            <AvatarImage source={user.image} />
          </Avatar>
          <VStack space="xs">
            <Text
              fontWeight="medium"
              fontSize="$sm"
              sx={{
                _light: {
                  color: '$textLight800',
                },
                _dark: {
                  color: '$textDark50',
                },
              }}
              lineHeight="$sm"
            >
              {user.name}
            </Text>
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
              lineHeight="$sm"
            >
              {user.status}
            </Text>
          </VStack>

          <Pressable onPress={() => handleRemoveUser(user.name)} ml="auto">
            <Text
              sx={{
                _light: {
                  color: '$red700',
                },
                _dark: {
                  color: '$red500',
                },
              }}
            ></Text>
          </Pressable>

          {user.role && (
            <Badge
              size="md"
              variant="outline"
              borderRadius="$xs"
              action="muted"
              sx={{
                _light: {
                  borderColor: '$primary500',
                  bg: '$backgroundLight0',
                },
                _dark: {
                  borderColor: '$primary300',
                  bg: '$backgroundDark800',
                },
              }}
            >
              <BadgeText
                px="$2"
                py="$0.5"
                sx={{
                  _light: {
                    color: '$primary500',
                  },
                  _dark: {
                    color: '$primary300',
                  },
                }}
              >
                {user.role}
              </BadgeText>
            </Badge>
          )}
        </HStack>
      </Pressable>
      <Divider sx={{ _dark: { bg: '$backgroundDark600' } }} my="$4" />
    </>
  );
};

function GroupHeader() {
  return (
    <Box>
      <Image
        sx={{
          '@md': {
            display: 'none',
          },
        }}
        display="flex"
        size="md"
        w="$full"
        h="$48"
        source={require('./assets/images/group-mobile.png')}
        alt="group-mobile"
      />

      <Image
        sx={{
          '@md': {
            display: 'flex',
          },
        }}
        display="none"
        size="md"
        w="$full"
        h="$48"
        source={require('./assets/images/group.png')}
        alt="group-web"
      />

      <HStack
        py="$3"
        px="$6"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          _dark: {
            bg: '$backgroundDark600',
          },
          _light: {
            bg: '$primary500',
          },
        }}
      >
        <Box>
          <Text
            color="$textLight50"
            fontWeight="$medium"
            fontSize="$sm"
            sx={{ _dark: { color: '$textDark50' } }}
          >
            Party Time
          </Text>
          <Text
            fontSize="$xs"
            color="$textLight50"
            fontWeight="$medium"
            sx={{ _dark: { color: '$textDark50' } }}
          >
            Created by Sunny
          </Text>
        </Box>
        <Pressable>
          <Icon
            as={Pen}
            color="$textLight50"
            sx={{ _dark: { color: '$textDark50' } }}
            size="md"
          />
        </Pressable>
      </HStack>
    </Box>
  );
}

function GroupActionItem({
  actionTitle,
  as,
}: {
  actionTitle: string;
  as: LucideIcon | typeof Icon;

  size: string;
}) {
  return (
    <>
      <Pressable px="$4">
        <HStack alignItems="center" space="md">
          <Box
            rounded="$full"
            p="$2"
            sx={{
              _light: {
                bg: '$primary500',
              },
              _dark: {
                bg: '$primary300',
              },
            }}
          >
            <Icon
              as={as}
              color="$textLight50"
              sx={{ _dark: { color: '$textDark50' } }}
              size="md"
            />
          </Box>

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
          >
            {actionTitle}
          </Text>
        </HStack>
      </Pressable>
      <Divider
        bg="$backgroundLight200"
        sx={{ _dark: { bg: '$backgroundDark700' } }}
      />
    </>
  );
}

function GroupActionList() {
  const [isSwitchChecked, setIsSwitchChecked] = React.useState(false);
  return (
    <>
      <VStack
        sx={{
          _light: {
            bg: '$backgroundLight50',
          },
          _dark: {
            bg: '$backgroundDark800',
          },
        }}
        space="md"
        mt="$2"
        py="$3"
      >
        <HStack px="$4" justifyContent="space-between" alignItems="center">
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
            lineHeight="$lg"
          >
            Mute Notifications
          </Text>

          <Switch
            size="sm"
            defaultValue={isSwitchChecked}
            onValueChange={() => setIsSwitchChecked(!isSwitchChecked)}
            ml="auto"
          />
        </HStack>
        <Divider
          bg="$backgroundLight200"
          sx={{ _dark: { bg: '$backgroundDark700' } }}
        />

        <GroupActionItem
          actionTitle="Add Participants"
          as={UserPlus}
          size="md"
        />
        <GroupActionItem actionTitle="Invite via link" as={Link} size="md" />
      </VStack>
    </>
  );
}

function GroupMembers() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(userList[0].name);

  const handleRemoveUser = (username: string) => {
    setSelectedUser(username);
    setModalVisible(true);
  };

  return (
    <Box>
      <Text
        sx={{
          _light: {
            color: '$primary500',
          },
          _dark: {
            color: '$primary300',
          },
        }}
        py="$3"
        px="$4"
        fontSize="$sm"
        fontWeight="medium"
      >
        {userList.length} Participants
      </Text>
      <VStack space="xs" pb="$4">
        {userList.map((data, index) => (
          <UserCard
            key={index}
            user={data}
            handleRemoveUser={handleRemoveUser}
          />
        ))}

        {groupSettingsData.map((item, index) => (
          <Pressable px="$4" my="$2" key={item.name + index}>
            <HStack alignItems="center" space="md">
              <Center
                sx={{
                  _light: {
                    bg: '$red700',
                  },
                  _dark: {
                    bg: '$red500',
                  },
                }}
                p="$2"
                rounded="$full"
              >
                <Icon as={item.icon.name} color="$textLight50" size="md" />
              </Center>

              <Text
                fontSize="$md"
                sx={{
                  _light: {
                    color: '$red700',
                  },
                  _dark: {
                    color: '$red500',
                  },
                }}
              >
                {item.name}
              </Text>
            </HStack>
          </Pressable>
        ))}
      </VStack>
      <Divider
        bg="$backgroundLight200"
        sx={{ _dark: { bg: '$backgroundDark700' } }}
      />
    </Box>
  );
}
function MainContent() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      sx={{
        _light: {
          bg: '$backgroundLight50',
        },
        _dark: {
          bg: '$backgroundDark800',
        },
      }}
    >
      <Box
        sx={{
          '@md': {
            rounded: '$sm',
          },
        }}
        flex={1}
        pb="$8"
      >
        <GroupHeader />
        <GroupActionList />
        <GroupMembers />
      </Box>
    </ScrollView>
  );
}
export default function GroupChatEdit() {
  return (
    <DashboardLayout title="Group" showGroupInfoHeader displaySidebar={false}>
      <MainContent />
    </DashboardLayout>
  );
}
