import React, { useState } from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  Button,
  Progress,
  Pressable,
  Badge,
  AvatarImage,
  AvatarGroup,
  ProgressFilledTrack,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import { Heart } from 'lucide-react-native';

type CategoriesProps = {
  name: string;
};

const categories: CategoriesProps[] = [
  {
    name: 'COVID-19',
  },
  {
    name: 'Food',
  },
  {
    name: 'Health',
  },
];

function CategoryCard({ name }: CategoriesProps) {
  return (
    <Badge
      p="$3"
      mb="$1"
      bg="$primary50"
      sx={{ _dark: { bg: '$backgroundDark700' } }}
    >
      <Text
        fontSize="$sm"
        fontWeight="$normal"
        sx={{
          _light: {
            bg: '$primary50',
            color: '$textLight800',
          },
          _dark: {
            bg: '$backgroundDark700',
            color: '$textDark50',
          },
        }}
      >
        {name}
      </Text>
    </Badge>
  );
}

function CategoriesSection() {
  return (
    <HStack flexWrap="wrap" mt="$5" space="md" alignItems="center">
      {categories.map((item, index) => {
        return <CategoryCard {...item} key={index} />;
      })}
    </HStack>
  );
}

function ProgressSection() {
  return (
    <Box mt="$6">
      <Progress
        w="$full"
        value={45}
        size="sm"
        sx={{
          _light: {
            bg: '$emerald100',
          },
          _dark: {
            bg: '$backgroundDark700',
          },
        }}
      >
        <ProgressFilledTrack
          sx={{
            _light: {
              bg: '$emerald600',
            },
            _dark: {
              bg: '$emerald500',
            },
          }}
        />
      </Progress>
      <HStack mt="$2" alignItems="center" justifyContent="space-between">
        <VStack space="xs">
          <Text
            fontSize="$xs"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            Total Raised
          </Text>
          <Text
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
            fontSize="$md"
            fontWeight="$bold"
          >
            $3,80,000
          </Text>
        </VStack>
        <VStack space="sm">
          <Text
            textAlign="right"
            fontSize="$xs"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            Target
          </Text>
          <Text
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
            fontSize="$md"
            fontWeight="$bold"
          >
            $5,53,000
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

function RecentDonors() {
  return (
    <Box
      sx={{
        '@base': {
          mt: '$4',
        },
        '@md': {
          mt: '$6',
        },
      }}
      alignItems="flex-start"
    >
      <Text
        fontSize="$md"
        fontWeight="$medium"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
      >
        Recent Donors
      </Text>
      <AvatarGroup
        mt="$2"
        sx={{
          _light: {
            borderColor: '$borderLight0',
          },
          _dark: {
            borderColor: '$borderDark800',
          },
        }}
      >
        <Avatar size="lg">
          <AvatarImage
            source={require('./assets/images/campaign-details-avatar-1.png')}
          />
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            source={require('./assets/images/campaign-details-avatar-2.png')}
          />
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            source={require('./assets/images/campaign-details-avatar-3.png')}
          />
        </Avatar>
      </AvatarGroup>
    </Box>
  );
}

function AboutUs() {
  return (
    <VStack
      mt="$4"
      space="md"
      sx={{
        '@base': {
          pb: '$4',
        },
        '@md': {
          pb: '$0',
        },
      }}
    >
      <Text
        fontSize="$md"
        fontWeight="$medium"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
      >
        About Us
      </Text>
      <Text
        fontSize="$sm"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
      >
        Recent Donors Indian Matchmaking is teaming up with Project Ekta and
        Delhi Youth Welfare Association to raise funds for organizations in
        India to help with COVID relief.
      </Text>
    </VStack>
  );
}

function DonateButton() {
  return (
    <Button
      sx={{
        '@base': {
          mt: 'auto',
        },
        '@md': {
          mt: '$6',
        },
      }}
      variant="solid"
      size="lg"
    >
      <Text fontWeight="$medium" color="$backgroundDark50" fontSize="$sm">
        DONATE
      </Text>
    </Button>
  );
}

function MainContent() {
  const [wishlisted, setWishlisted] = useState(false);
  return (
    <Box
      sx={{
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
        '@base': {
          flexDirection: 'column',
          px: '$4',
          py: '$5',
        },

        '@md': {
          flexDirection: 'row',
          p: '$8',
          rounded: '$sm',
        },
      }}
    >
      <Box
        p="$2"
        sx={{
          '_light': {
            bg: '$primary50',
          },
          '_dark': {
            bg: '$backgroundDark700',
          },
          '@md': {
            flex: 0.6,
          },
        }}
        rounded="$sm"
      >
        <Image
          rounded="$sm"
          sx={{
            'width': '$full',

            '@base': {
              h: '$64',
            },
            '@md': {
              h: '$622',
            },
          }}
          alt="Header Image"
          source={require('./assets/images/campaign-details-1.png')}
        />
      </Box>
      <Box
        sx={{
          '@base': {
            mt: '$4',
          },
          '@md': {
            pl: '$4',
            flex: 0.4,
            mt: '$0',
          },
        }}
      >
        <Box justifyContent="center">
          <HStack justifyContent="space-between" alignItems="center">
            <Text
              fontSize="$lg"
              fontWeight="$medium"
              sx={{
                _light: {
                  color: '$textLight800',
                },
                _dark: {
                  color: '$textDark50',
                },
              }}
            >
              India COVID Relief
            </Text>
            <Pressable onPress={() => setWishlisted(!wishlisted)}>
              {wishlisted ? (
                <Icon
                  size="xl"
                  as={Heart}
                  sx={{
                    _light: {
                      color: '$primary500',
                      fill: '$primary500',
                    },
                    _dark: {
                      color: '$primary300',
                      fill: '$primary300',
                    },
                  }}
                />
              ) : (
                <Icon
                  size="xl"
                  as={Heart}
                  sx={{
                    _light: {
                      color: '$primary500',
                    },
                    _dark: {
                      color: '$primary300',
                    },
                  }}
                />
              )}
            </Pressable>
          </HStack>
          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            Created by Project Ekta
          </Text>
        </Box>
        <CategoriesSection />
        <ProgressSection />
        <Box
          sx={{
            '@base': {
              display: 'none',
            },
            '@md': {
              display: 'flex',
            },
          }}
        >
          <DonateButton />
        </Box>
        <RecentDonors />
        <AboutUs />
        <Box
          sx={{
            '@base': {
              display: 'flex',
            },
            '@md': {
              display: 'none',
            },
          }}
        >
          <DonateButton />
        </Box>
      </Box>
    </Box>
  );
}

export default function CampaignDetails() {
  return (
    <DashboardLayout title="Campaign Details" displaySidebar={false}>
      <MainContent />
    </DashboardLayout>
  );
}
