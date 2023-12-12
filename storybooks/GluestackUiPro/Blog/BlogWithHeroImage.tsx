import React, { useState, FC } from 'react';
import {
  HStack,
  Input,
  Text,
  VStack,
  Image,
  Heading,
  Button,
  Avatar,
  ScrollView,
  AvatarFallbackText,
  AvatarImage,
  InputIcon,
  InputSlot,
  InputField,
  ButtonText,
  ButtonIcon,
} from '@gluestack-ui/themed';
import { ArrowRight, SearchIcon } from 'lucide-react-native';

interface BlogData {
  category: string;
  bannerUri: string;
  userProfileUri: string;
  title: string;
  description: string;
  username: string;
  publishedDate: string;
  designation: string;
}

interface BlogCardProps extends BlogData {
  index: number;
  length: number;
}

const BLOG_DATA: BlogData[] = [
  {
    category: 'Research',
    bannerUri:
      'https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80',
    userProfileUri:
      'https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'The Power of Positive Thinking',
    description:
      'Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.',
    username: 'John Smith',
    publishedDate: 'May 15, 2023',
    designation: 'Motivational Speaker',
  },
  {
    category: 'Community',
    bannerUri:
      'https://images.unsplash.com/photo-1587143185764-e7d1c3051308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    userProfileUri:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'The Science of Happiness',
    description:
      'Delve into the science behind happiness and explore evidence-based practices. Discover the factors that contribute to long-lasting happiness and strategies to incorporate them into your daily routine.',
    username: 'Jessica Adams',
    publishedDate: 'July 28, 2023',
    designation: 'Psychology Researcher',
  },
  {
    category: 'Design',
    bannerUri:
      'https://images.unsplash.com/photo-1568790309276-16462ea4161d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    userProfileUri:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
    title: 'The Key to Productivity',
    description:
      'Learn effective time management strategies to optimize your productivity and accomplish more in less time. Explore techniques for prioritization, goal setting, and overcoming common time-wasting habits.',
    username: 'Sarah Johnson',
    publishedDate: 'June 2, 2023',
    designation: 'Productivity Expert',
  },
];

const BlogCard: FC<BlogCardProps> = ({
  bannerUri,
  userProfileUri,
  title,
  description,
  designation,
  username,
  publishedDate,
  index,
  length,
}) => {
  return (
    <VStack
      p="$5"
      justifyContent="space-between"
      mt={index > 0 ? '$7' : '$0'}
      sx={{
        '@md': {
          p: '$3',
          mr: index < length - 1 ? '$4' : '$0',
          mt: '$0',
          flex: 1,
        },
        '@lg': {
          mr: index < length - 1 ? '$7' : '$0',
          p: '$5',
        },
        '_light': { bg: '$backgroundLight100' },
        '_dark': {
          bg: '$backgroundDark800',
        },
        'borderRadius': '$lg',
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
      <VStack>
        <Image
          height="$64"
          width="$full"
          source={{
            uri: bannerUri,
          }}
          sx={{
            borderRadius: '$sm',
          }}
        />

        <Text pt="$4" pb="$2" size="sm">
          {publishedDate}
        </Text>

        <Heading size="md" letterSpacing="$sm">
          {title}
        </Heading>

        <Text pt="$2" fontSize="$sm" lineHeight="$sm">
          {description}
        </Text>
      </VStack>

      <VStack mt="$6">
        <HStack space="md" flexWrap="wrap">
          <Avatar>
            <AvatarFallbackText>{username}</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: userProfileUri,
              }}
            />
          </Avatar>

          <VStack>
            <Heading size="sm" fontWeight="bold" letterSpacing="$sm">
              {username}
            </Heading>

            <Text size="sm" pt="$1">
              {designation}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};


const BlogWithHeroImage: FC = (_props: any) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <ScrollView>
      <VStack
        bg="$backgroundLight50"
        sx={{
          _dark: { bg: '$backgroundDark900' },
        }}
      >
        <Image
          h={500}
          w="$full"
          source={{
            uri: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
          }}
          sx={{
            '@md': {
              h: 420,
            },
          }}
        />

        <VStack
          p="$9"
          alignItems="flex-start"
          mb="$20"
          mt="-60%"
          sx={{
            '_light': { bg: '$primary500' },
            '_dark': { bg: '$primary400' },
            '@xs': {
              mt: '-40%',
            },
            '@sm': {
              mt: '-20%',
            },
            '@md': {
              mt: -120,
              borderRadius: '$sm',
              justifyContent: 'center',
              alignItems: 'center',
              mx: '$8',
            },
            '@lg': {
              mx: '$16',
            },
          }}
        >
          <Text
            fontWeight="$bold"
            fontSize="$sm"
            lineHeight="$xs"
            color="$textLight0"
            sx={{
              '@md': {
                fontSize: '$md',
                lineHeight: '$lg',
              },
            }}
          >
            LATEST INSIGHTS
          </Text>
          <Heading
            fontSize="$3xl"
            lineHeight="$3xl"
            pt="$1.5"
            color="$textLight0"
            sx={{
              '@md': {
                fontSize: '$4xl',
                lineHeight: '$5xl',
                pt: '$1',
              },
            }}
          >
            Welcome to Our Blog
          </Heading>

          <Text
            pt="$1.5"
            fontSize="$sm"
            lineHeight="$xs"
            color="$textLight0"
            sx={{
              '@md': {
                fontSize: '$lg',
                lineHeight: '$xl',
                pt: '$1',
              },
            }}
          >
            Stay informed with our latest blog posts for valuable insights.
          </Text>

          <VStack
            space="md"
            mt="$8"
            w="$full"
            sx={{
              '@md': {
                w: 'auto',
              },
              '@lg': {
                flexDirection: 'row',
              },
            }}
          >
            <Input
              size="md"
              w="$full"
              mx="auto"
              bg="$backgroundLight0"
              sx={{
                '@md': {
                  w: 480,
                  h: '$11',
                  _input: {
                    fontSize: '$lg',
                  },
                  _icon: {
                    h: '$4',
                    w: '$4',
                  },
                },
              }}
            >
              <InputSlot>
                <InputIcon
                  as={SearchIcon}
                  sx={{
                    _light: { color: '$textLight500' },
                    _dark: { color: '$textDark400' },
                  }}
                  pl="$3"
                />
              </InputSlot>
              <InputField
                value={searchValue}
                onChangeText={setSearchValue}
                placeholder="Search"
                color="$textLight900"
                placeholderTextColor="$textLight500"
              />
            </Input>
          </VStack>
        </VStack>

        <VStack
          px="$8"
          pb="$16"
          sx={{
            '@lg': {
              px: '$16',
            },
          }}
        >
          <HStack justifyContent="space-between" pb="$4">
            <Heading fontWeight="$bold" letterSpacing="$sm" size="lg">
              Recent blog posts
            </Heading>

            <Button
              variant="link"
              size="sm"
              p="$0"
              display="none"
              sx={{
                '@md': {
                  display: 'flex',
                },
              }}
            >
              <ButtonText fontSize="$md">See All</ButtonText>
              <ButtonIcon as={ArrowRight} size="lg" pl="$1" />
            </Button>
          </HStack>

          <VStack
            sx={{
              '@md': {
                flexDirection: 'row',
              },
            }}
          >
            {BLOG_DATA.map((item, i, arr) => {
              const {
                category,
                bannerUri,
                userProfileUri,
                title,
                description,
                username,
                publishedDate,
                designation,
              } = item;
              return (
                <BlogCard
                  category={category}
                  bannerUri={bannerUri}
                  userProfileUri={userProfileUri}
                  title={title}
                  description={description}
                  designation={designation}
                  username={username}
                  publishedDate={publishedDate}
                  index={i}
                  length={arr.length}
                />
              );
            })}
          </VStack>
          <Button
            variant="link"
            size="sm"
            p="$0"
            display="flex"
            alignSelf="baseline"
            mt="$4"
            sx={{
              '@md': {
                display: 'none',
              },
            }}
          >
            <ButtonText fontSize="$sm">See All</ButtonText>
            <ButtonIcon as={ArrowRight} pl="$1" />
          </Button>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default BlogWithHeroImage;
