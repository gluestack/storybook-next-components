import React from 'react';
import {
  Box,
  Text,
  VStack,
  Image,
  Pressable,
  FlatList,
} from '@gluestack-ui/themed';
import { ImageSourcePropType, ListRenderItemInfo } from 'react-native';

export type Course = {
  id: number;
  name?: string;
  chapter?: string;
  imageUri: ImageSourcePropType;
};

const TrendingCourses = ({ courses }: { courses: Course[] }) => {
  return (
    <VStack
      pb="$16"
      px="$4"
      sx={{
        '@md': {
          pb: '$0',
          px: '$8',
        },
      }}
    >
      <Text mb="$4" fontSize="$md" fontWeight="$bold">
        Trending Courses
      </Text>

      <FlatList
        data={courses}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: ListRenderItemInfo<Course>) => {
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
    <Box h="$32" overflow="hidden" rounded="$lg" width="$56">
      <Image w="$full" flex={1} source={course.imageUri} alt="Alternate Text" />
      <Text
        px="$3"
        py="$3"
        fontSize="$sm"
        fontWeight="$medium"
        sx={{
          _light: {
            bg: '$backgroundDark100',
          },
          _dark: {
            bg: '$backgroundDark700',
          },
        }}
      >
        {course.name}
      </Text>
    </Box>
  );
};

export default TrendingCourses;
