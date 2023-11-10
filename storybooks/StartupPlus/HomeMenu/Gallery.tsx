import { ImageSourcePropType, ListRenderItemInfo } from "react-native";
import React from "react";
import {
  Box,
  Pressable,
  VStack,
  Text,
  Image,
  FlatList,
} from "@gluestack-ui/themed";
import DashboardLayout from "../Layouts/DashboardLayout";

type List = {
  imageUri: ImageSourcePropType;
  folderName: string;
};

type ListProps = {
  item: List;
};

const list: List[] = [
  {
    imageUri: require("./assets/images/gallery12.png"),
    folderName: "All",
  },
  {
    imageUri: require("./assets/images/gallery2.png"),
    folderName: "Camera",
  },
  {
    imageUri: require("./assets/images/gallery3.png"),
    folderName: "Videos",
  },
  {
    imageUri: require("./assets/images/gallery4.png"),
    folderName: "ScreenShots",
  },
  {
    imageUri: require("./assets/images/gallery5.png"),
    folderName: "Bluetooth",
  },
  {
    imageUri: require("./assets/images/gallery6.png"),
    folderName: "WhatsApp",
  },
  {
    imageUri: require("./assets/images/gallery7.png"),
    folderName: "Facebook",
  },
  {
    imageUri: require("./assets/images/gallery8.png"),
    folderName: "Download",
  },
  {
    imageUri: require("./assets/images/gallery9.png"),
    folderName: "Others",
  },
];

function Card(props: ListProps) {
  return (
    <Box w="$full" my="$2" borderRadius="$sm" overflow="hidden">
      <Image
        h="$24"
        sx={{
          "@md": {
            h: "$56",
          },
        }}
        w='$72'
        source={props.item.imageUri}
        alt="Alternate Text"
      />
      <Box
        sx={{
          "@md": {
            py: "$3",
          },
          _light: {
            bg: "$backgroundDark100",
          },
          _dark: {
            bg: "$backgroundDark700",
          },
        }}
        py="$2"
        px="$3"
      >
        <Text
          sx={{
            "@md": {
              fontSize: "$md",
            },
          }}
          fontSize="$sm"
          fontWeight="$medium"
        >
          {props.item.folderName}
        </Text>
      </Box>
    </Box>
  );
}

const Gallery = () => {
  return (
    <DashboardLayout title="Gallery" displaySidebar={false}>
      <VStack
        flex={1}
        sx={{
          "@md": {
            px: "$8",
            py: "$6",
            rounded: "$sm",
          },
          _light: {
            bg: "$backgroundLight0",
          },
          _dark: {
            bg: "$backgroundDark800",
          },
        }}
        px="$4"
        py="$3"
        space="lg"
        alignItems="center"
      >
        <FlatList
          h="$full"
          w="$full"
          numColumns={3}
          data={list}
          keyExtractor={(index) => "key" + index}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }: ListRenderItemInfo<List>) => (
            <Pressable key={index} width="$8/32">
              <Card item={item} />
            </Pressable>
          )}
          bounces={false}
        />
      </VStack>
    </DashboardLayout>
  );
};

export default Gallery;
