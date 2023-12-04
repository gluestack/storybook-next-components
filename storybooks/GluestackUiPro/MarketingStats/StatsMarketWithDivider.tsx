import React from 'react';
import {
  Divider,
  Heading,
  Text,
  VStack,
  ScrollView,
} from '@gluestack-ui/themed';

type Stat = {
  value: string;
  label: string;
};

type StatMarketingData = {
  heading: string;
  description: string;
  stats: Stat[];
};

type StatCard = {
  index: number;
  stat: Stat;
  statlength: number;
};

const STATS_DATA: Stat[] = [
  {
    value: '210+',
    label: 'Components',
  },
  {
    value: '60%',
    label: 'Less development costs',
  },
  {
    value: '25k',
    label: 'GitHub stars',
  },
];

const STATS_MARKETING_DATA: StatMarketingData = {
  heading: 'Why Gluestack UI pro ?',
  description:
    'Because this beautiful and responsive React components will help your to realize your next project in no time.',
  stats: STATS_DATA,
};

const StatsCard = ({ index, stat, statlength }: StatCard) => {
  return (
    <VStack
      key={index}
      sx={{
        '@md': {
          flexBasis: '$1/3',
          flexDirection: 'row',
        },
      }}
    >
      <VStack mx="auto" space="sm" alignItems="center" justifyContent="center">
        <Heading
          size="5xl"
          sx={{
            _dark: {
              color: '$primary200',
            },
          }}
          color="$primary400"
        >
          {stat.value}
        </Heading>
        <Text size="lg">{stat.label}</Text>
      </VStack>
      {index !== statlength - 1 ? (
        <Divider
          orientation="vertical"
          display="none"
          bgColor="$gray300"
          m="$4"
          sx={{
            '@md': {
              display: 'flex',
            },
          }}
        />
      ) : null}
    </VStack>
  );
};

const StatsMarketWithDivider = () => {
  return (
    <ScrollView>
      <VStack
        alignItems="center"
        alignSelf="center"
        space="lg"
        maxWidth={1280}
        px="$4"
        py="$16"
        flex={1}
        sx={{
          '@md': {
            px: '$8',
            py: '$24',
            p: '$0',
          },
        }}
      >
        <Heading textAlign="center" size="3xl" fontWeight="$semibold">
          {STATS_MARKETING_DATA.heading}
        </Heading>
        <Text
          letterSpacing="$xl"
          textAlign="center"
          size="xl"
          fontWeight="$light"
          sx={{
            '@md': {
              maxWidth: '75%',
            },
          }}
        >
          {STATS_MARKETING_DATA.description}
        </Text>
        <VStack
          mx="auto"
          w="$full"
          borderRadius="$xl"
          sx={{
            '@md': {
              flexDirection: 'row',
              flexWrap: 'wrap',
              mt: '$16',
            },
          }}
        >
          {STATS_MARKETING_DATA.stats.map((stat, index, statArray) => {
            return (
              <StatsCard
                index={index}
                stat={stat}
                statlength={statArray.length}
              />
            );
          })}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default StatsMarketWithDivider;
