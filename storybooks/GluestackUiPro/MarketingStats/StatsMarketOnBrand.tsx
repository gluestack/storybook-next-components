import React from 'react';

import { Heading, Text, VStack, ScrollView } from '@gluestack-ui/themed';

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

const StatsCard = ({ index, stat }: StatCard) => {
  return (
    <VStack
      key={index}
      space="md"
      alignItems="center"
      justifyContent="center"
      mb="$8"
      mx="auto"
      sx={{
        '@md': {
          flexBasis: '$1/3',
        },
      }}
    >
      <Heading size="5xl" color="$white">
        {stat.value}
      </Heading>
      <Text size="lg" color="$white" letterSpacing="$xl">
        {stat.label}
      </Text>
    </VStack>
  );
};

const StatsMarketOnBrand = () => {
  return (
    <ScrollView>
      <VStack
        alignItems="center"
        space="lg"
        maxWidth={1280}
        alignSelf="center"
        flex={1}
        px="$4"
        py="$16"
        sx={{
          '@md': {
            mx: '$8',
            my: '$24',
            p: '$0',
          },
        }}
      >
        <Heading textAlign="center" size="3xl" fontWeight="$semibold">
          {STATS_MARKETING_DATA.heading}
        </Heading>
        <Text
          size="xl"
          textAlign="center"
          fontWeight="$light"
          letterSpacing="$xl"
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
          p="$16"
          mt="$8"
          backgroundColor="$primary600"
          borderRadius="$2xl"
          sx={{
            '@md': {
              flexDirection: 'row',
              flexWrap: 'wrap',
              mt: '$16',
            },
          }}
        >
          {STATS_MARKETING_DATA.stats.map((stat, index) => (
            <StatsCard index={index} stat={stat} />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default StatsMarketOnBrand;
