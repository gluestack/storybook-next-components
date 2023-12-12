import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  Button,
  ButtonText,
  HStack,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
  ScrollView,
} from '@gluestack-ui/themed';
import { TwitterIcon } from 'lucide-react-native';
import { GithubCircleIcon, LinkedInIcon } from '../../../assets/icons/Social';

type User = {
  id: number;
  name: string;
  designation: string;
  profilePic: string;
  message: string;
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
    message:
      'I am passionate about leading our team towards success and fostering a culture of innovation.',
  },
  {
    id: 1,
    name: 'Jane Smith',
    designation: 'Co-Founder / CEO',
    profilePic: require('../../../assets/Team01M.jpeg'),
    message:
      'I believe in empowering our team to reach their full potential for remarkable results.',
  },
  {
    id: 2,
    name: 'David Johnson',
    designation: 'Marketing Manager',
    profilePic: require('../../../assets/Team02M.jpeg'),
    message:
      'I create compelling marketing strategies that resonate with our target audience.',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    designation: 'Manager, Business Relations',
    profilePic: require('../../../assets/Team03M.jpeg'),
    message:
      'Building strong relationships with our partners for driving mutual growth and success.',
  },
  {
    id: 4,
    name: 'Michael Brown',
    designation: 'Chief Operating Officer',
    profilePic: require('../../../assets/Team04F.jpeg'),
    message:
      'I am dedicated to optimizing and ensuring seamless execution of our business strategies.',
  },
  {
    id: 5,
    name: 'Emily Davis',
    designation: 'Head of Human Resources',
    profilePic: require('../../../assets/Team05M.jpeg'),
    message:
      'My mission is to foster a positive and inclusive work environment for our employees growth.',
  },
];

const TeamList: React.FC<TeamListProps> = ({ user }) => {
  return (
    <HStack
      alignItems="flex-start"
      space="md"
      p="$6"
      sx={{ '@md': { flexBasis: '$1/2' } }}
    >
      <Avatar w="$20" h="$20">
        <AvatarImage source={{ uri: user.profilePic }} />
        <AvatarFallbackText sx={{ '@lg': { fontSize: '$4xl' } }}>
          {user.name}
        </AvatarFallbackText>
      </Avatar>
      <VStack space="sm" flex={1}>
        <VStack>
          <Text size="xl">{user.name}</Text>
          <Text color="$primary500">{user.designation}</Text>
        </VStack>
        <Text>{user.message}</Text>
        <HStack space="md">
          <Link href="">
            <Icon
              as={GithubCircleIcon}
              sx={{
                color: '$backgroundLight600',
              }}
              size="lg"
            />
          </Link>
          <Link href="">
            <Icon
              as={LinkedInIcon}
              sx={{
                color: '$backgroundLight600',
              }}
              size="lg"
            />
          </Link>
          <Link href="">
            <Icon
              as={TwitterIcon}
              sx={{
                color: '$backgroundLight600',
              }}
              //fill="currentColor"
              size="lg"
            />
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
};

const TeamWithInlineHeading = (_props: any) => {
  return (
    <ScrollView>
      <VStack
        py="$8"
        px="$4"
        w="$full"
        bg="$backgroundLight0"
        sx={{
          '@md': { py: '$24', px: '$16' },
          '@lg': { flexDirection: 'row' },
          '_dark': { bg: '$backgroundDark950' },
        }}
      >
        <VStack flex={1} space="md" p="$3">
          <Text color="$primary500" fontWeight="semibold">
            We're hiring
          </Text>
          <Heading size="3xl" fontWeight="$normal">
            Meet our team
          </Heading>
          <Text
            size="xl"
            sx={{
              '@md': {
                maxWidth: '$3/4',
              },
            }}
            letterSpacing="$xl"
          >
            Chocolate chip cookie dough ice cream sprinkled with caramel and
            nuts.
          </Text>
          <Box
            flexDirection="column-reverse"
            mt="$2"
            sx={{ '@md': { flexDirection: 'row' } }}
          >
            <Button variant="outline" sx={{ '@md': { marginRight: '$2' } }}>
              <ButtonText>Contact us</ButtonText>
            </Button>
            <Button mb="$2" sx={{ '@md': { mb: '$0' } }}>
              <ButtonText>Join our team</ButtonText>
            </Button>
          </Box>
        </VStack>
        <Box
          flexDirection="column"
          sx={{
            '@md': { flexDirection: 'row' },
            '@lg': { flex: 2 },
          }}
          flexWrap="wrap"
        >
          {TEAM_DATA.map((user) => (
            <TeamList key={user.id} user={user} />
          ))}
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default TeamWithInlineHeading;
