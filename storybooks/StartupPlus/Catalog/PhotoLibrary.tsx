import React from 'react';
import {
  Image,
  FlatList,
  Box,
  Link,
  HStack,
  useBreakpointValue,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  ImageSourcePropType,
  ListRenderItem,
  useWindowDimensions,
} from 'react-native';

type PhotoCardProp = {
  imageUri: ImageSourcePropType;
};

const photoLibrary: PhotoCardProp[] = [
  {
    imageUri: require('./assets/images/photo-library-1.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-2.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-3.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-4.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-5.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-6.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-7.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-8.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-9.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-10.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-11.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-12.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-13.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-14.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-15.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-16.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-17.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-18.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-19.png'),
  },
  {
    imageUri: require('./assets/images/photo-library-20.png'),
  },
];

function Card(props: PhotoCardProp) {
  return (
    <Link
      mb="$4"
      href=""
      sx={{
        '@base': {
          w: '$1/3',
        },
        '@md': {
          w: '$1/4',
        },
        '@lg': {
          w: '$1/5',
        },
      }}
      px="$2"
    >
      <Image
        w="$full"
        sx={{
          '@base': {
            h: '$40',
          },
          '@md': {
            h: '$56',
          },
        }}
        rounded="$sm"
        source={props.imageUri}
        alt="Photo"
      />
    </Link>
  );
}
function MainContent() {
  const noColumn = useBreakpointValue({
    base: 3,
    md: 5,
    lg: 5,
    xl: 5,
  });
  const { height } = useWindowDimensions();
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
          pt: '$5',
          px: '$2',
        },
        '@md': {
          rounded: '$sm',
          pb: '$4',
          pt: '$8',
          px: '$6',
        },
      }}
    >
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
        <HStack
          flexWrap="wrap"
          justifyContent="flex-start"
          sx={{
            '_web': {
              overflowY: '$auto',
            },
            '@base': {
              h: height,
            },
            '@md': {
              h: '$full',
            },
          }}
        >
          {photoLibrary.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </HStack>
      </Box>

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
        <FlatList
          key={'#' + noColumn}
          numColumns={noColumn}
          data={photoLibrary}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }: ListRenderItem<PhotoCardProp>) => (
            <Card imageUri={0} {...item} key={index} />
          )}
          keyExtractor={(index) => 'key' + index}
          bounces={false}
        />
      </Box>
    </Box>
  );
}
export default function PhotoLibrary() {
  return (
    <DashboardLayout
      displayScreenTitle={true}
      displaySidebar={false}
      title="Photo Library"
    >
      <MainContent />
    </DashboardLayout>
  );
}
