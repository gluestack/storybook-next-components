import React, { useState } from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Button,
  Link,
  Center,
  Pressable,
  Textarea,
  TextareaInput,
  ButtonText,
  StarIcon,
} from '@gluestack-ui/themed';
import type { ImageSourcePropType } from 'react-native';
import DashboardLayout from '../Layouts/DashboardLayout';
import * as ImagePicker from 'expo-image-picker';

import { UploadCloud } from 'lucide-react-native';

type StarIconProps = {
  index: number;
  selected: number;
  setSelected: (arg0: number) => void;
};

type ProductType = {
  imageUri: ImageSourcePropType;
  itemName: string;
  itemCompany: string;
  price: string;
};

const item: ProductType = {
  imageUri: require('./assets/images/Product1.png'),
  itemName: 'Sweater dress',
  itemCompany: 'Girls self design',
  price: '₹1,199',
};

function ItemCard() {
  return (
    <Link href="" borderRadius="$sm" overflow="hidden">
      <HStack
        space="sm"
        p="$3"
        borderRadius="$sm"
        sx={{
          _light: {
            bg: '$backgroundLight100',
          },
          _dark: {
            bg: '$backgroundDark700',
          },
        }}
        w="$full"
      >
        <Image
          height="$24"
          width="$20"
          size="md"
          rounded="$md"
          source={item.imageUri}
          alt="item"
        />

        <Box>
          <Text
            fontSize="$md"
            fontWeight="bold"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {item.itemName}
          </Text>
          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textDark500',
              },
              _dark: {
                color: '$textLight400',
              },
            }}
          >
            {item.itemCompany}
          </Text>
          <Text
            fontWeight="medium"
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textDark800',
              },
              _dark: {
                color: '$textLight50',
              },
            }}
            mt="auto"
          >
            {item.price}
          </Text>
        </Box>
      </HStack>
    </Link>
  );
}

function RateStar(props: StarIconProps) {
  return (
    <Pressable
      onPress={() => {
        props.setSelected(props.index);
      }}
    >
      <Icon
        as={StarIcon}
        my="$1.5"
        size="md"
        color={props.selected < props.index ? '$textLight500' : '$amber400'}
        fill={props.selected < props.index ? '$textLight500' : '$amber400'}
        sx={{
          _dark: {
            color: props.selected < props.index ? '$textDark400' : '$amber400',
          },
        }}
      />
    </Pressable>
  );
}

function AddPhoto() {
  const [image, setImage] = useState('');

  const pickImage = async () => {
    const result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Box
      sx={{
        '@md': {
          p: '$0',
        },
        '_light': {
          bg: '$backgroundLightmain',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      p="$4"
    >
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
        fontWeight="medium"
        mb="$3"
      >
        Add Photo or Video
      </Text>

      <Center
        width="$full"
        height="$122"
        sx={{
          _light: {
            borderColor: '$borderLight300',
          },
          _dark: {
            borderColor: '$borderDark700',
          },
        }}
        borderWidth="$1"
        borderRadius="$sm"
        borderStyle="dashed"
      >
        <Pressable alignItems="center" onPress={pickImage}>
          {image === '' ? (
            <>
              <Icon as={UploadCloud} color="$textLight400" size="lg" />
              <Text fontSize="$sm" mt="$0" color="$textLight400">
                Upload
              </Text>
            </>
          ) : (
            <Image alt="upload image" source={{ uri: image }} size="lg" />
          )}
        </Pressable>
      </Center>
    </Box>
  );
}

function Description() {
  const [name, setName] = React.useState('');
  return (
    <Box
      sx={{
        '@md': {
          p: '$0',
        },
        '_light': {
          bg: '$backgroundLightmain',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      p="$4"
    >
      <Text
        fontSize="$sm"
        fontWeight="medium"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
      >
        Share your experience
      </Text>

      <Textarea
        size="md"
        isReadOnly={false}
        isInvalid={false}
        isDisabled={false}
        h="$32"
        mt="$3"
        sx={{
          _light: {
            borderColor: '$borderLight300',
          },
          _dark: {
            borderColor: '$borderDark700',
          },
        }}
      >
        <TextareaInput
          placeholder="Would you like to write about the product?"
          placeholderTextColor="$textLight400"
          value={name}
          onChangeText={setName}
        />
      </Textarea>
    </Box>
  );
}

function SubmitButton() {
  return (
    <Button
      size="lg"
      mx="$4"
      mt="auto"
      sx={{
        '@md': {
          mx: '$0',
        },
      }}
      variant="solid"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
    >
      <ButtonText fontSize="$sm">SUBMIT </ButtonText>
    </Button>
  );
}

function MainContent() {
  const [selected, setSelected] = useState(-1);

  return (
    <VStack
      flex={1}
      sx={{
        '@md': {
          px: '$8',
          pt: '$8',
          pb: '$8',
          rounded: '$sm',
          _light: {
            bg: '$backgroundLight50',
          },
          _dark: {
            bg: '$backgroundDark800',
          },
        },
        '@lg': {
          px: '$32',
        },
        '_dark': {
          bg: '$backgroundDark700',
        },
      }}
      space="xl"
      px="$0"
      pt="$0"
      pb="$4"
    >
      <Box
        sx={{
          '@md': {
            p: '$0',
          },
          '_light': {
            bg: '$backgroundLight50',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
        p="$4"
      >
        <ItemCard />

        <VStack
          space="xs"
          mt="$6"
          sx={{
            '@md': {
              mt: '$8',
            },
          }}
        >
          <Text
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
            fontWeight="medium"
            fontSize="$sm"
          >
            Rate your experience
          </Text>

          <HStack alignItems="center" space="xs">
            {Array.from({ length: 5 }, (_, index) => (
              <RateStar
                key={index}
                index={index}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </HStack>
          <Text fontSize="$sm" color="$textLight400">
            Tap the stars
          </Text>
        </VStack>
      </Box>

      <AddPhoto />
      <Description />
      <SubmitButton />
    </VStack>
  );
}
export default function () {
  return (
    <DashboardLayout title="Product Feedback">
      <MainContent />
    </DashboardLayout>
  );
}
