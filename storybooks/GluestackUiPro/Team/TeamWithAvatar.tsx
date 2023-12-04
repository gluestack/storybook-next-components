import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  ScrollView,
  AvatarImage,
  Heading,
  Text,
  VStack,
} from '@gluestack-ui/themed';

type User = {
  id: number;
  name: string;
  designation: string;
  profilePic: string;
};

type TeamListProps = {
  user: User;
};

const TEAM_DATA: User[] = [
  {
    id: 0,
    name: 'John Doe',
    designation: 'Co-Founder / CEO',
    profilePic: require('../../../assets/Team0F.jpeg'),
  },
  {
    id: 1,
    name: 'Jane Smith',
    designation: 'Co-Founder / CFO',
    profilePic: require('../../../assets/Team01M.jpeg'),
  },
  {
    id: 2,
    name: 'David Johnson',
    designation: 'Marketing Manager',
    profilePic: require('../../../assets/Team02M.jpeg'),
  },
  {
    id: 3,
    name: 'Sarah Williams',
    designation: 'Manager, Business Relations',
    profilePic: require('../../../assets/Team03M.jpeg'),
  },
  {
    id: 4,
    name: 'Michael Brown',
    designation: 'Chief Operating Officer',
    profilePic: require('../../../assets/Team04F.jpeg'),
  },
  {
    id: 5,
    name: 'Emily Davis',
    designation: 'Head of Human Resources',
    profilePic: require('../../../assets/Team05M.jpeg'),
  },
];

const TeamList: React.FC<TeamListProps> = ({ user }) => {
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      space="md"
      p="$4"
      sx={{
        '@sm': { flexBasis: '$1/2' },
        '@md': { flexBasis: '$1/3', my: '$4' },
        '@lg': { flexBasis: '$1/4' },
      }}
    >
      <Avatar
        w="$24"
        h="$24"
        sx={{
          '@lg': { w: '$32', h: '$32' },
        }}
      >
        <AvatarImage source={{ uri: user.profilePic }} />
        <AvatarFallbackText sx={{ '@lg': { fontSize: '$4xl' } }}>
          {user.name}
        </AvatarFallbackText>
      </Avatar>
      <VStack alignItems="center">
        <Text size="lg" textAlign="center" fontWeight="medium">
          {user.name}
        </Text>
        <Text color="$primary500" textAlign="center" fontWeight="light">
          {user.designation}
        </Text>
      </VStack>
    </VStack>
  );
};

const TeamWithAvatar: React.FC = () => {
  return (
    <ScrollView>
      <VStack
        p="$8"
        justifyContent="center"
        alignItems="center"
        bg="$backgroundLight0"
        space="lg"
        sx={{
          '@md': { py: '$24', px: '$16' },
          '_dark': { bg: '$backgroundDark950' },
        }}
      >
        <VStack alignItems="center" space="md" p="$3">
          <Text color="$primary500" fontWeight="semibold">
            We're hiring
          </Text>
          <Heading size="3xl" fontWeight="$normal">
            Meet our team
          </Heading>
          <Text
            size="xl"
            textAlign="center"
            sx={{
              '@md': {
                maxWidth: '$3/4',
              },
            }}
            letterSpacing="$xl"
          >
            Chocolate chip cookie dough ice cream sprinkled with caramel and
            nuts. Creamy fudge brownies and a cherry on top.
          </Text>
        </VStack>
        <VStack
          alignItems="center"
          sx={{
            '@sm': {
              flexDirection: 'row',
              flexWrap: 'wrap',
            },
          }}
        >
          {TEAM_DATA.map((user) => (
            <TeamList key={user.id} user={user} />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default TeamWithAvatar;
