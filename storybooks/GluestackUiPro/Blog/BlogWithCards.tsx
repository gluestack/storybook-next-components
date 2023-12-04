import React, { FC } from 'react';
import {
  Button,
  HStack,
  Input,
  Text,
  VStack,
  Image,
  Box,
  Heading,
  Avatar,
  FormControl,
  useToast,
  Toast,
  AvatarFallbackText,
  AvatarImage,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  ButtonText,
  ButtonIcon,
} from '@gluestack-ui/themed';
import { ScrollView, Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { AlertCircle, ArrowRight } from 'lucide-react-native';
import { zodResolver } from '@hookform/resolvers/zod';

const blogSubscriptionSchema: any = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('Invalid email address'),
});

interface FormData {
  email: string;
}

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

const BLOGS_DATA: BlogData[] = [
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
      justifyContent="space-between"
      p="$5"
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

        '_dark': {
          bg: '$backgroundDark950',
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
          height={240}
          width="$full"
          source={{
            uri: bannerUri,
          }}
          sx={{
            borderRadius: '$sm',
          }}
        />

        <Text pt="$4" pb="$2" size="sm" fontWeight="$normal">
          {publishedDate}
        </Text>

        <Heading size="md" letterSpacing="$sm" fontStyle="normal">
          {title}
        </Heading>

        <Text pt="$2" fontSize="$sm" fontStyle="normal" lineHeight="$sm">
          {description}
        </Text>
      </VStack>

      <HStack space="md" flexWrap="wrap" mt="$6">
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
  );
};

const BlogMain: FC = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(blogSubscriptionSchema),
  });
  const toast = useToast();

  const onSubmit = () => {
    reset();

    toast.show({
      placement: 'top right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success" px="$4">
            <Toast.Title
              sx={{
                _dark: {
                  color: '$white',
                },
              }}
              textAlign="left"
              fontSize="$sm"
              lineHeight="$sm"
            >
              Subscribed Successfully!
            </Toast.Title>
          </Toast>
        );
      },
    });
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <ScrollView>
      <Box
        py="$16"
        px="$8"
        bg="$backgroundLight0"
        sx={{
          '_dark': { bg: '$backgroundDark950' },
          '@lg': {
            px: '$16',
          },
        }}
      >
        <VStack
          alignItems="flex-start"
          mb="$20"
          sx={{
            '@md': {
              alignItems: 'center',
            },
          }}
        >
          <Text
            fontStyle="normal"
            fontWeight="$bold"
            fontSize="$sm"
            lineHeight="$xs"
            letterSpacing="$sm"
            color="$primary600"
            sx={{
              '_dark': {
                color: '$primary300',
              },
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
            sx={{
              '@md': { fontSize: '$lg', lineHeight: '$xl', pt: '$1' },
            }}
          >
            Stay informed with our latest blog posts for valuable insights.
          </Text>

          <FormControl
            w="$full"
            sx={{
              '@md': {
                maxWidth: 480,
              },
            }}
            isInvalid={errors.email ? true : false}
          >
            <VStack
              mt="$8"
              sx={{
                '@md': {
                  flexDirection: 'row',
                },
              }}
              space="lg"
            >
              <VStack
                sx={{
                  '@md': {
                    flexGrow: 1,
                  },
                }}
              >
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        type="text"
                        placeholder="Enter your email"
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                      />
                    </Input>
                  )}
                  name="email"
                  defaultValue=""
                />
                <FormControlError mt="$1">
                  <FormControlErrorIcon as={AlertCircle} size="md" />
                  <FormControlErrorText
                    sx={{
                      fontSize: '$sm',
                      lineHeight: '$sm',
                      fontWeight: '$normal',
                    }}
                  >
                    {errors.email && errors.email.message}
                  </FormControlErrorText>
                </FormControlError>
              </VStack>
              <Button
                onPress={handleSubmit(onSubmit)}
                ml="$0"
                sx={{
                  '@md': {
                    ml: '$3',
                  },
                }}
              >
                <ButtonText>Subscribe</ButtonText>
              </Button>
            </VStack>
          </FormControl>
        </VStack>

        <HStack justifyContent="space-between" pb="$4">
          <Heading
            fontWeight="$bold"
            fontStyle="normal"
            letterSpacing="$sm"
            size="lg"
          >
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
            <ButtonText fontSize="$md" fontStyle="normal">
              See All
            </ButtonText>
            <ButtonIcon as={ArrowRight} size="lg" pl="$1" />
          </Button>
        </HStack>

        <Box
          sx={{
            '@md': {
              flexDirection: 'row',
            },
          }}
        >
          {BLOGS_DATA.map((item, i, arr) => {
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
        </Box>

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
          <ButtonText fontSize="$sm" fontStyle="normal">
            See All
          </ButtonText>
          <ButtonIcon as={ArrowRight} pl="$1" />
        </Button>
      </Box>
    </ScrollView>
  );
};

const BlogWithCards: FC = () => {
  return <BlogMain />;
};

export default BlogWithCards;
