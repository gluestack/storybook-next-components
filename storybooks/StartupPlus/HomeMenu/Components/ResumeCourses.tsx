import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Avatar,
  Image,
  Pressable,
  AvatarGroup,
  AvatarFallbackText,
  AvatarImage,
  Button,
  ButtonIcon,
} from '@gluestack-ui/themed';

import { ImageSourcePropType, FlatList } from 'react-native';
import { Play } from 'lucide-react-native';

export type Course = {
  id: number;
  name?: string;
  chapter?: string;
  imageUri: ImageSourcePropType;
};

const ResumeCourses = ({ courses }: { courses: Course[] }) => {
  return (
    <VStack
      sx={{
        '@md': {
          px: '$8',
        },
      }}
      px="$4"
      space="lg"
    >
      <Text fontSize="$md" fontWeight="$bold">
        Resume your course
      </Text>

      <FlatList
        data={courses}
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: { item: Course }) => {
          return (
            <Pressable>
              <Card course={item} />
            </Pressable>
          );
        }}
        keyExtractor={(index) => 'key' + index}
        ItemSeparatorComponent={() => <Box w="$4" />}
      />
    </VStack>
  );
};

const Card = ({ course }: { course: Course }) => {
  return (
    <Box
      overflow="hidden"
      borderRadius="$lg"
      sx={{
        '@md': {
          w: 334,
        },
      }}
      w="$72"
    >
      <Image
        size="md"
        w="$full"
        sx={{
          h: '$112',
        }}
        source={course.imageUri}
        alt="gluestack-ui"
      />

      <HStack
        sx={{
          _light: {
            bg: '$backgroundDark100',
          },
          _dark: {
            bg: '$backgroundDark700',
          },
        }}
        p="$3"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <VStack>
          <Text fontSize="$xs" fontWeight="$medium">
            {course.chapter}
          </Text>
          <Text fontSize="$sm" fontWeight="$bold">
            {course.name}
          </Text>
          <HStack space="sm" alignItems="center">
            <Text fontSize="$xs" textAlign="center">
              Active Users
            </Text>

            <AvatarGroup px="$2">
              <Avatar
                size="xs"
                borderWidth="$1"
                sx={{
                  _light: {
                    borderColor: '$borderLight100',
                  },
                  _dark: {
                    borderColor: '$borderLight700',
                  },
                }}
              >
                <AvatarFallbackText>John Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}
                />
              </Avatar>
              <Avatar
                size="xs"
                borderWidth="$1"
                sx={{
                  _light: {
                    borderColor: '$borderLight100',
                  },
                  _dark: {
                    borderColor: '$borderLight700',
                  },
                }}
              >
                <AvatarFallbackText>John Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                  }}
                />
              </Avatar>
              <Avatar
                size="xs"
                borderWidth="$1"
                sx={{
                  _light: {
                    borderColor: '$borderLight100',
                  },
                  _dark: {
                    borderColor: '$borderLight700',
                  },
                }}
              >
                <AvatarFallbackText>John Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}
                />
              </Avatar>
              <Avatar
                size="xs"
                borderWidth="$1"
                sx={{
                  _light: {
                    borderColor: '$borderLight100',
                  },
                  _dark: {
                    borderColor: '$borderLight700',
                  },
                }}
              >
                <AvatarFallbackText>John Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                  }}
                />
              </Avatar>
            </AvatarGroup>
          </HStack>
        </VStack>

        <Button
          size="sm"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          rounded="$full"
          p="$0"
          w="$8"
          h="$8"
        >
          <ButtonIcon as={Play} size="xs" />
        </Button>
      </HStack>
    </Box>
  );
};

export default ResumeCourses;
