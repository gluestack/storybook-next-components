import React from 'react';
import {
  Image,
  FlatList,
  Text,
  Pressable,
  Box,
  useBreakpointValue,
} from '@gluestack-ui/themed';
import { ImageSourcePropType, useWindowDimensions } from 'react-native';
import DashboardLayout from '../Layouts/DashboardLayout';

type Folder = {
  imageUri: ImageSourcePropType;
};

type CardProps = {
  item: Folder;
};

const folder: Folder[] = [
  {
    imageUri: require('./assets/images/archived-1.png'),
  },
  {
    imageUri: require('./assets/images/archived-2.png'),
  },
  {
    imageUri: require('./assets/images/archived-3.png'),
  },
  {
    imageUri: require('./assets/images/archived-4.png'),
  },
  {
    imageUri: require('./assets/images/archived-5.png'),
  },
  {
    imageUri: require('./assets/images/archived-6.png'),
  },
  {
    imageUri: require('./assets/images/archived-7.png'),
  },
  {
    imageUri: require('./assets/images/archived-8.png'),
  },
  {
    imageUri: require('./assets/images/archived-9.png'),
  },
  {
    imageUri: require('./assets/images/archived-10.png'),
  },
  {
    imageUri: require('./assets/images/archived-11.png'),
  },
  {
    imageUri: require('./assets/images/archived-12.png'),
  },
  {
    imageUri: require('./assets/images/archived-13.png'),
  },
  {
    imageUri: require('./assets/images/archived-14.png'),
  },
  {
    imageUri: require('./assets/images/archived-15.png'),
  },
  {
    imageUri: require('./assets/images/archived-16.png'),
  },
  {
    imageUri: require('./assets/images/archived-17.png'),
  },
  {
    imageUri: require('./assets/images/archived-18.png'),
  },
  {
    imageUri: require('./assets/images/archived-19.png'),
  },
  {
    imageUri: require('./assets/images/archived-20.png'),
  },
];

function Card(props: CardProps) {
  return (
    <Pressable
      sx={{
        '@md': {
          px: '$0',
          mx: '$2',
          maxWidth: '$1/4',
        },
        '@lg': {
          maxWidth: '$1/5',
        },
      }}
      px="$2"
      maxWidth="$1/3"
      mt="$4"
      flex={1}
    >
      <Image
        size="md"
        sx={{ '@md': { h: '$56' } }}
        h="$40"
        w="$full"
        rounded="$sm"
        source={props.item.imageUri}
        alt="gluestack-ui"
      />
    </Pressable>
  );
}

function MainContent() {
  const { height } = useWindowDimensions();
  const noColumn = useBreakpointValue({
    base: 3,
    md: 4,
    lg: 5,
  });
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
          mb: '$20',
          pt: '$5',
          px: '$4',
        },
        '@md': {
          mb: '$0',
          pt: '$8',
          px: '$4.5',
          rounded: '$sm',
        },
      }}
    >
      <FlatList
        ListHeaderComponent={
          <Text
            mt="$3"
            fontSize="$sm"
            textAlign="center"
            fontWeight="normal"
            display="flex"
            sx={{
              '@md': {
                display: 'none',
              },
              '_light': {
                color: '$textLight500',
              },
              '_dark': {
                color: '$textDark400',
              },
            }}
          >
            Only you can see the posts you’ve archived
          </Text>
        }
        bounces={false}
        horizontal={false}
        numColumns={noColumn}
        data={folder}
        renderItem={({ item }: { item: Folder }) => <Card item={item} />}
        key={noColumn}
        keyExtractor={(index) => 'key' + index}
        sx={{
          '@md': {
            _web: {
              h: '$full',
            },
          },
          '_web': {
            h: height,
          },
        }}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}

export default function Archived() {
  return (
    <DashboardLayout
      displayScreenTitle={true}
      displaySidebar={false}
      title="Archived"
      rightPanelMobileHeader={true}
      rightHeaderPanel
    >
      <MainContent />
    </DashboardLayout>
  );
}
