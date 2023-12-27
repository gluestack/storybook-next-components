import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  VStack,
  ScrollView,
  ButtonText,
} from '@gluestack-ui/themed';
import { TwitterIcon } from 'lucide-react-native';
import { GithubCircleIcon, LinkedInIcon } from '../assets/icons/Social';

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
    profilePic: require('../assets/Team0F.jpeg'),
    message:
      'I am passionate about leading our team towards success and fostering a culture of innovation.',
  },
  {
    id: 1,
    name: 'Jane Smith',
    designation: 'Co-Founder / CEO',
    profilePic: require('../assets/Team01M.jpeg'),
    message:
      'I believe in empowering our team to reach their full potential for remarkable results.',
  },
  {
    id: 2,
    name: 'David Johnson',
    designation: 'Marketing Manager',
    profilePic: require('../assets/Team02M.jpeg'),
    message:
      'I create compelling marketing strategies that resonate with our target audience.',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    designation: 'Manager, Business Relations',
    profilePic: require('../assets/Team03M.jpeg'),
    message:
      'Building strong relationships with our partners for driving mutual growth and success.',
  },
  {
    id: 4,
    name: 'Michael Brown',
    designation: 'Chief Operating Officer',
    profilePic: require('../assets/Team04F.jpeg'),
    message:
      'I am dedicated to optimizing and ensuring seamless execution of our business strategies.',
  },
  {
    id: 5,
    name: 'Emily Davis',
    designation: 'Head of Human Resources',
    profilePic: require('../assets/Team05M.jpeg'),
    message:
      'My mission is to foster a positive and inclusive work environment for our employees growth.',
  },
];

const TeamList: React.FC<TeamListProps> = ({ user }) => {
  return (
    <VStack
      space="md"
      py="$8"
      w="$full"
      sx={{
        '@md': { flexBasis: '$1/2', px: '$8' },
        '@lg': { flexBasis: '$1/3' },
      }}
    >
      <Image
        w="$full"
        h="$72"
        source={{ uri: user.profilePic }}
        alt="Profile Image"
      />
      <VStack space="md">
        <VStack>
          <Text size="xl">{user.name}</Text>
          <Text color="$primary500" size="lg">
            {user.designation}
          </Text>
        </VStack>

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
             // fill="currentColor"
              size="lg"
            />
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

const TeamWithLargeImage = (_props: any) => {
  return (
    <ScrollView>
      <VStack
        w="$full"
        p="$8"
        alignItems="center"
        bg="$backgroundLight0"
        sx={{
          '@md': { py: '$24', px: '$16' },
          '_dark': { bg: '$backgroundDark950' },
        }}
      >
        <VStack
          w="$full"
          sx={{
            '@lg': {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          }}
        >
          <VStack flex={1} space="md" py="$3">
            <Text color="$primary500" fontWeight="semibold">
              We're hiring
            </Text>
            <Heading size="3xl" fontWeight="$normal">
              Meet our team
            </Heading>
            <Text size="xl" letterSpacing="$xl">
              Chocolate chip cookie dough ice cream sprinkled with caramel and
            </Text>
          </VStack>
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

        <VStack
          mt="$4"
          mb="$8"
          width="$full"
          alignItems="center"
          justifyContent="center"
          sx={{
            '@md': { flexDirection: 'row', flexWrap: 'wrap' },
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

export default TeamWithLargeImage;