import React, { FC } from 'react';
import {
  Badge,
  Divider,
  Text,
  VStack,
  Heading,
  HStack,
  BadgeIcon,
  BadgeText,
} from '@gluestack-ui/themed';
import { MinusIcon, PlusIcon } from 'lucide-react-native';

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
      sx={{
        '@md': { w: 'auto', flex: 1 },
      }}
    >
      <Text size="sm">{stat.label}</Text>

      <Heading size="lg" pt="$0.5">
        {stat.value}
      </Heading>

      <HStack pt="$2.5">
        <Badge
          variant="solid"
          action={stat.type === 'positive' ? 'success' : 'error'}
          bgColor="transparent"
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
        <Text fontSize="$xs" lineHeight="$sm" fontStyle="normal" pl="$1">
          than last week
        </Text>
      </HStack>
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

const StatsWithDivider: FC = (_props: any) => {
  return (
    <VStack
      maxWidth="$full"
      mx="auto"
      w="$full"
      alignItems="center"
      p="$4"
    >
      <VStack
        rounded="$lg"
        w="$full"
        p="$4"
        sx={{
          '_light': {
            bg: '$backgroundLight100',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
          '@md': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        }}
      >
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <StatCard stat={stat} />

            {index !== stats.length - 1 && (
              <>
                <Divider
                  orientation="vertical"
                  mx="$6"
                  sx={{
                    '_light': {
                      bg: '$backgroundLight300',
                    },
                    '_dark': { bg: '$backgroundDark600' },
                    'display': 'none',
                    '@md': {
                      display: 'flex',
                    },
                  }}
                />
                <Divider
                  my="$4"
                  sx={{
                    '_light': {
                      bg: '$backgroundLight300',
                    },
                    '_dark': { bg: '$backgroundDark600' },
                    'display': 'flex',
                    '@md': {
                      display: 'none',
                    },
                  }}
                />
              </>
            )}
          </React.Fragment>
        ))}
      </VStack>
    </VStack>
  );
};

export default StatsWithDivider;
