import React from 'react';
import {
  Divider,
  Heading,
  Icon,
  Image,
  Link,
  LinkText,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

type Stat = {
  value: string;
  label: string;
  link: string;
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
    label: 'Beautiful components',
    link: 'Explore components',
  },
  {
    value: '60%',
    label: 'Less development costs',
    link: 'Learn more',
  },
  {
    value: '25k',
    label: 'GitHub stars',
    link: 'Show me',
  },
  {
    value: '2500+',
    label: 'Satisfied customers',
    link: 'View reviews',
  },
];

const STATS_MARKETING_DATA: StatMarketingData = {
  heading: 'Why Gluestack UI pro ?',
  description:
    'Because this beautiful and responsive React components will help your to realize your next project in no time.',
  stats: STATS_DATA,
};

const StatCard = ({ index, stat }: StatCard) => {
  return (
    <VStack
      key={index}
      sx={{
        '@md': {
          flexBasis: '$1/2',
          flexDirection: 'row',
          mt: '$8',
        },
        '@lg': {
          flexBasis: '$1/4',
        },
      }}
    >
      <Divider
        orientation="vertical"
        sx={{
          '_dark': {
            bg: '$primary200',
          },
          'bg': '$primary400',
          'width': '$0.5',
          'h': '$full',
          '@md': {
            display: 'flex',
          },
        }}
        display="none"
      />
      <Divider
        orientation="horizontal"
        mt="$8"
        sx={{
          '_dark': {
            bg: '$primary200',
          },
          'bg': '$primary400',
          'height': '$0.5',
          'width': '$full',
          '@md': {
            display: 'none',
          },
        }}
        display="flex"
      />
      <VStack space="md" px="$4" w="$full">
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
        <Text size="lg" letterSpacing="$xl">
          {stat.label}
        </Text>
        <Link
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$2',
          }}
          href=""
          isExternal
        >
          <LinkText
            fontWeight="$semibold"
            sx={{
              _dark: {
                color: '$primary200',
              },
            }}
            color="$primary400"
          >
            {stat.link}
          </LinkText>

          <Icon as={ArrowRight} color="$primary400" />
        </Link>
      </VStack>
    </VStack>
  );
};

const StatsMarketWithCTA = (_props: any) => {
  return (
    <ScrollView>
      <VStack
        alignItems="center"
        space="lg"
        maxWidth={1280}
        mx="auto"
        w="$full"
        px="$4"
        py="$16"
        sx={{
          '@md': {
            px: '$8',
            py: '$24',
          },
        }}
      >
        <Image
          source={require('../assets/GlustackSubstitute.png')}
          h="$16"
          w="$16"
        />
        <Heading size="3xl" fontWeight="$semibold">
          {STATS_MARKETING_DATA.heading}
        </Heading>
        <Text
          textAlign="center"
          size="xl"
          fontWeight="$light"
          fontFamily="$mono"
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
          sx={{
            '@md': {
              flexDirection: 'row',
              flexWrap: 'wrap',
            },
          }}
        >
          {STATS_MARKETING_DATA.stats.map((stat, index) => (
            <StatCard stat={stat} index={index} />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default StatsMarketWithCTA;
