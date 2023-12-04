import React, { FC } from 'react';
import {
  Badge,
  Box,
  Button,
  Text,
  VStack,
  Heading,
  HStack,
} from '@gluestack-ui/themed';
import { PlusIcon, MinusIcon, ArrowRight } from 'lucide-react-native';

type Stat = {
  label: string;
  value: string;
  type: 'positive' | 'negative';
  percent: string;
};

type StatCardProps = {
  stat: Stat;
};

const StatCard: FC<StatCardProps> = ({ stat }) => {
  return (
    <VStack
      w="$full"
      mb="$4"
      p="$4"
      bg="$backgroundLight0"
      borderRadius="$lg"
      sx={{
        '_dark': {
          bg: '$backgroundDark950',
        },
        '@md': {
          flex: 1,
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
      <Text size="sm">{stat.label}</Text>

      <Heading size="lg" pt="$0.5">
        {stat.value}
      </Heading>

      <Box
        flexDirection="column"
        justifyContent="space-between"
        pt="$2.5"
        sx={{
          '@sm': {
            flexDirection: 'row',
          },
          '@md': {
            flexDirection: 'column',
          },
          '@lg': {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}
      >
        <HStack>
          <Badge
            variant="solid"
            action={stat.type === 'positive' ? 'success' : 'error'}
            bgColor="transparent"
            p="$0"
          >
            <Badge.Icon
              as={stat.type === 'positive' ? PlusIcon : MinusIcon}
              size="xs"
              fontWeight="$medium"
            />
            <Badge.Text fontSize="$xs" lineHeight="$sm" fontWeight="$medium">
              {stat.percent}
            </Badge.Text>
          </Badge>
          <Text
            fontSize="$xs"
            lineHeight="$sm"
            fontStyle="normal"
            fontWeight="$normal"
            pl="$1"
          >
            than last week
          </Text>
        </HStack>
        <Button
          variant="link"
          px="$0"
          pb="$0"
          height="auto"
          justifyContent="flex-start"
          pt="$0.5"
          sx={{
            '@sm': {
              pt: '$0',
            },
            '@md': {
              pt: '$0.5',
            },
            '@lg': {
              pt: '$0',
            },
          }}
        >
          <Button.Text
            fontStyle="normal"
            fontWeight="$semibold"
            fontSize="$xs"
            lineHeight="$sm"
          >
            View Report
          </Button.Text>
          <Button.Icon as={ArrowRight} w="$3" h="$3" ml="$1" />
        </Button>
      </Box>
    </VStack>
  );
};

const stats: Stat[] = [
  {
    label: 'Total Followers',
    value: '60,340',
    type: 'positive',
    percent: '32%',
  },
  {
    label: 'Total Likes',
    value: '36,880',
    type: 'positive',
    percent: '30%',
  },
  {
    label: 'Total Shares',
    value: '10,546',
    type: 'positive',
    percent: '20%',
  },
];

const StatsWithCTA: FC = () => {
  return (
    <Box
      maxWidth={1280}
      mx="auto"
      w="$full"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      p="$4"
      sx={{
        '@md': {
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '$8',
        },
      }}
    >
      {stats.map((stat, index) => (
        <StatCard stat={stat} key={index} />
      ))}
    </Box>
  );
};

export default StatsWithCTA;
