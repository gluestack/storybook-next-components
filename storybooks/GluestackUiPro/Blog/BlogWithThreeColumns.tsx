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
  Divider,
  AvatarFallbackText,
  AvatarImage,
  ToastTitle,
  ScrollView,
  InputField,
  FormControlErrorText,
  FormControlError,
  FormControlErrorIcon,
  ButtonText,
  ButtonIcon,
} from '@gluestack-ui/themed';
import { Keyboard } from 'react-native';
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
}) => {
  return (
    <VStack
      justifyContent="space-between"
      sx={{
        '@md': {
          flex: 1,
        },
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

const BlogWithThreeColumns: FC = (_props: any) => {
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
            <ToastTitle
              sx={{
                _dark: {
                  color: '$textDark100',
                },
              }}
              textAlign="left"
              fontSize="$sm"
              lineHeight="$sm"
            >
              Subscribed Successfully!
            </ToastTitle>
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
        bg="$backgroundLight50"
        sx={{
          '_dark': { bg: '$backgroundDark900' },
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
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Text
            fontWeight="$bold"
            fontSize="$sm"
            lineHeight="$xs"
            letterSpacing="$sm"
            color="$primary500"
            sx={{
              '_dark': {
                color: '$primary400',
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
              '@md': { fontSize: '$4xl', lineHeight: '$5xl', pt: '$1' },
            }}
          >
            Welcome to Our Blog
          </Heading>

          <Text
            pt="$1.5"
            fontSize="$sm"
            lineHeight="$xs"
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
                  <FormControlErrorIcon as={AlertCircle} />
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
            '_light': { bg: '$backgroundLight100' },
            '_dark': { bg: '$backgroundDark800' },
          }}
          p="$4"
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
              <>
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
                {i === arr.length - 1 ? null : (
                  <Divider
                    orientation="vertical"
                    ml="$7"
                    mr="$7"
                    display="none"
                    sx={{
                      '@md': {
                        display: 'flex',
                      },
                      '_light': { bg: '$backgroundLight300' },
                      '_dark': { bg: '$backgroundDark600' },
                    }}
                  />
                )}
                {i === arr.length - 1 ? null : (
                  <Divider
                    orientation="horizontal"
                    mt="$7"
                    mb="$7"
                    display="flex"
                    sx={{
                      '@md': {
                        display: 'none',
                      },
                      '_light': { bg: '$backgroundLight300' },
                      '_dark': { bg: '$backgroundDark600' },
                    }}
                  />
                )}
              </>
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
      </Box>
    </ScrollView>
  );
};

export default BlogWithThreeColumns;
