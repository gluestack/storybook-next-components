import React, { FC } from 'react';
import {
  Badge,
  Box,
  Button,
  Text,
  VStack,
  Heading,
  HStack,
  BadgeIcon,
  BadgeText,
  ButtonText,
  ButtonIcon,
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
      borderRadius="$lg"
      sx={{
        '_light': {
          bg: '$backgroundLight100',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
        '@md': {
          flex: 1,
          mx: '$2',
        },
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
            bg="transparent"
            p="$0"
          >
            <BadgeIcon
              as={stat.type === 'positive' ? PlusIcon : MinusIcon}
              size="xs"
              fontWeight="$medium"
            />
            <BadgeText fontSize="$xs" lineHeight="$sm" fontWeight="$medium">
              {stat.percent}
            </BadgeText>
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
          <ButtonText
            fontStyle="normal"
            fontWeight="$semibold"
            fontSize="$xs"
            lineHeight="$sm"
          >
            View Report
          </ButtonText>
          <ButtonIcon as={ArrowRight} w="$3" h="$3" ml="$1" />
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

const StatsWithCTA: FC = (_props: any) => {
  return (
    <Box
      maxWidth="$full"
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
          // p: '$8',
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
