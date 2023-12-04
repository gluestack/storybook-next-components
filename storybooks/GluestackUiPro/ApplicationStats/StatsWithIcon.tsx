import React, { FC } from 'react';
import {
  Box,
  Icon,
  Text,
  VStack,
  Heading,
  Button,
  HStack,
  ButtonText,
} from '@gluestack-ui/themed';

import { Users, ThumbsUp, Share2, ArrowRight } from 'lucide-react-native';

type Stat = {
  label: string;
  value: string;
  type: 'positive' | 'negative';
  percent: string;
  icon: FC<any>;
  lightIconBg: string;
  darkIconBg: string;
  lightIconColor: string;
  darkIconColor: string;
};

type StatCardProps = {
  stat: Stat;
};

const StatCard: FC<StatCardProps> = ({ stat }) => {
  return (
    <VStack
      space="md"
      w="$full"
      p="$4"
      my="$3"
      bg="$backgroundLight0"
      borderRadius="$lg"
      sx={{
        '_dark': {
          bg: '$backgroundDark950',
        },
        '@md': {
          flex: 1,
          p: '$5',
          my: '$0',
          mx: '$2',
        },
        'shadowColor': '$backgroundLight800',
        'shadowOffset': {
          width: 0,
          height: 1,
        },
        'shadowOpacity': 0.22,
        'shadowRadius': 2.22,
        'elevation': 3,
      }}
    >
      <HStack justifyContent="space-between">
        <VStack>
          <Box
            p="$3.5"
            rounded="$full"
            bg={stat.lightIconBg}
            sx={{ _dark: { bg: stat.darkIconBg } }}
            alignSelf="flex-start"
          >
            <Icon
              as={stat.icon}
              color={stat.lightIconColor}
              size="lg"
              sx={{
                _dark: {
                  color: stat.darkIconColor,
                },
              }}
            />
          </Box>

          <Text size="sm" pt="$4">
            {stat.label}
          </Text>

          <Heading size="lg" pt="$0.5">
            {stat.value}
          </Heading>
        </VStack>
        <Button
          variant="link"
          px="$0"
          pb="$0"
          height="auto"
          alignSelf="flex-end"
        >
          <ButtonText
            fontStyle="normal"
            fontWeight="$semibold"
            fontSize="$xs"
            lineHeight="$sm"
          >
            View Report
          </ButtonText>
          <Button.Icon as={ArrowRight} w="$3" h="$3" ml="$1" />
        </Button>
      </HStack>
    </VStack>
  );
};

const stats: Stat[] = [
  {
    label: 'Total Followers',
    value: '60,340',
    type: 'positive',
    percent: '3.48%',
    icon: Users,
    lightIconBg: '$pink100',
    darkIconBg: '$pink800',
    lightIconColor: '$pink600',
    darkIconColor: '$pink300',
  },
  {
    label: 'Total Likes',
    value: '36,880',
    type: 'negative',
    percent: '3.48%',
    icon: ThumbsUp,
    lightIconBg: '$blue100',
    darkIconBg: '$blue800',
    lightIconColor: '$blue600',
    darkIconColor: '$blue300',
  },
  {
    label: 'Total Shares',
    value: '10,546',
    type: 'negative',
    percent: '1.10%',
    icon: Share2,
    lightIconBg: '$success100',
    darkIconBg: '$green800',
    lightIconColor: '$green600',
    darkIconColor: '$green300',
  },
];

const StatsWithIcon: FC = () => {
  return (
    <VStack
      maxWidth={1280}
      mx="auto"
      w="$full"
      alignItems="center"
      p="$4"
      sx={{
        '@md': {
          flexDirection: 'row',
          justifyContent: 'space-between',
          p: '$8',
        },
      }}
    >
      {stats.map((stat, index) => (
        <StatCard stat={stat} key={index} />
      ))}
    </VStack>
  );
};

export default StatsWithIcon;
