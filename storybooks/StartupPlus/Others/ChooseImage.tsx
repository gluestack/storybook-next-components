import React from 'react';
import {
  Text,
  VStack,
  Image,
  FlatList,
  HStack,
  Pressable,
  Icon,
  Box,
  Button,
  ButtonText,
  useBreakpointValue,
} from '@gluestack-ui/themed';
import { ImageSourcePropType, useWindowDimensions } from 'react-native';
import DashboardLayout from '../Layouts/DashboardLayout';
// import * as ImagePicker from 'expo-image-picker';
import { ChevronDown, Upload } from 'lucide-react-native';

type ImageList = {
  imageUri: ImageSourcePropType | { uri: string };
};

const folder: ImageList[] = [
  {
    imageUri: null,
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
];

function Card({
  addImageToList,
  ...props
}: { item: ImageList } & { addImageToList: (image: string) => void }) {
  const pickImage = async () => {
    // const result: ImagePicker.ImagePickerResult =
    //   await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //   });

    // if (!result.canceled) {
    //   addImageToList(result.assets[0].uri);
    // }
  };

  const isImageUriString = () => {
    if (props.item.imageUri) {
      if (typeof props.item.imageUri === 'string') {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      {props.item.imageUri ? (
        isImageUriString() ? (
          <Pressable
            mx="$2"
            sx={{
              '@md': {
                w: '$1/4',
              },
              '@lg': {
                w: '$1/6',
              },
            }}
            width="$1/3"
            mt="$4"
          >
            <Image
              w="$full"
              sx={{
                '@md': {
                  h: '$56',
                },
              }}
              h="$40"
              rounded="$sm"
              source={{ uri: `${props.item.imageUri}` }}
              alt="Alternate Text"
            />
          </Pressable>
        ) : (
          <Pressable
            mx={2}
            sx={{
              '@md': {
                w: '$1/4',
              },
              '@lg': {
                w: '$1/6',
              },
            }}
            width="$1/3"
          >
            <Image
              mt="$4"
              width="$full"
              sx={{
                '@md': {
                  h: '$56',
                },
              }}
              h="$40"
              rounded="$sm"
              source={props.item.imageUri}
              alt="Alternate Text"
            />
          </Pressable>
        )
      ) : (
        <Box
          mx={2}
          sx={{
            '@md': {
              w: '$1/4',
            },
            '@lg': {
              w: '$1/6',
            },
          }}
          width="$1/3"
        >
          <Box
            sx={{
              '@md': {
                h: '$56',
              },
              '_light': {
                bg: '$primary100',
              },
              '_dark': {
                bg: '$backgroundDark700',
              },
            }}
            h="$40"
            mt="$4"
            rounded="$sm"
            alignItems="center"
            justifyContent="center"
          >
            <Pressable onPress={pickImage}>
              <Icon
                as={Upload}
                h="$6"
                w="$6"
                sx={{
                  _light: {
                    color: '$textDark800',
                  },
                  _dark: {
                    color: '$textLight50',
                  },
                }}
              />
            </Pressable>
            {props.item.imageUri === null ? (
              <Text
                mt="$2"
                sx={{
                  '@md': { fontSize: '$sm', display: 'flex' },
                  '_dark': {
                    color: '$textDark50',
                  },
                  '_light': {
                    color: '$textLight800',
                  },
                }}
                display="none"
              >
                Upload Photo
              </Text>
            ) : null}
          </Box>
        </Box>
      )}
    </>
  );
}

function MainContent() {
  const noColumn = useBreakpointValue({
    base: 3,
    md: 4,
    lg: 5,
  });

  const [images, setImages] = React.useState<ImageList[]>(folder);
  const addImageToList = (image: string) => {
    setImages((prev) => [...prev, { imageUri: { uri: image } }]);
  };

  return (
    <FlatList
      ListHeaderComponent={
        <HStack
          alignItems="center"
          gap="$0.5"
          px="$2"
          key="listHeaderChooseImage"
        >
          <Text
            fontSize="$lg"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            Recents
          </Text>

          <Pressable>
            <Icon
              as={ChevronDown}
              size="lg"
              sx={{
                _light: {
                  color: '$textLight800',
                },
                _dark: {
                  color: '$textDark50',
                },
              }}
            />
          </Pressable>
        </HStack>
      }
      bounces={false}
      numColumns={noColumn}
      data={images}
      renderItem={({ item }: { item: ImageList }) => (
        <Card item={item} addImageToList={addImageToList} />
      )}
      key={noColumn}
      keyExtractor={(index) => 'keyImage' + index}
    />
  );
}
export default function () {
  return (
    <DashboardLayout
      scrollable={false}
      displayScreenTitle={true}
      displaySidebar={false}
      title="Choose Image"
      rightHeaderPanel
      rightPanelMobileHeader
    >
      <VStack
        flex={1}
        sx={{
          '@md': {
            pt: '$8',
            pb: '$8',
            px: '$6',
            rounded: '$sm',
            _dark: {
              bg: '$backgroundDark.900',
            },
          },
          '_light': {
            bg: '$backgroundLight50',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
        pt="$4"
        pb="$5"
        px="$2"
      >
        <MainContent />

        <Button
          variant="solid"
          mt="auto"
          mx="$2"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText fontSize="$sm">CONTINUE </ButtonText>
        </Button>
      </VStack>
    </DashboardLayout>
  );
}
