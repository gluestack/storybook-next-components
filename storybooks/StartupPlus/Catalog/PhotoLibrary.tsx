import React, { useEffect, useState } from "react";
import {
  Image,
  FlatList,
  Box,
  Link,
  HStack,
  useBreakpointValue,
} from "@gluestack-ui/themed";
import DashboardLayout from "../Layouts/DashboardLayout";
import {
  ImageSourcePropType,
  ListRenderItem,
  useWindowDimensions,
} from "react-native";

type PhotoCardProp = {
  id: string;
  imageUri: ImageSourcePropType;
};

const photoLibrary: PhotoCardProp[] = [
  {
    id: "0",
    imageUri: require("./assets/images/photo-library-1.png"),
  },
  {
    id: "1",
    imageUri: require("./assets/images/photo-library-2.png"),
  },
  {
    id: "2",
    imageUri: require("./assets/images/photo-library-3.png"),
  },
  {
    id: "3",
    imageUri: require("./assets/images/photo-library-4.png"),
  },
  {
    id: "4",
    imageUri: require("./assets/images/photo-library-5.png"),
  },
  {
    id: "5",
    imageUri: require("./assets/images/photo-library-6.png"),
  },
  {
    id: "6",
    imageUri: require("./assets/images/photo-library-7.png"),
  },
  {
    id: "7",
    imageUri: require("./assets/images/photo-library-8.png"),
  },
  {
    id: "8",
    imageUri: require("./assets/images/photo-library-9.png"),
  },
  {
    id: "9",
    imageUri: require("./assets/images/photo-library-10.png"),
  },
  {
    id: "10",
    imageUri: require("./assets/images/photo-library-11.png"),
  },
  {
    id: "11",
    imageUri: require("./assets/images/photo-library-12.png"),
  },
  {
    id: "12",
    imageUri: require("./assets/images/photo-library-13.png"),
  },
  {
    id: "13",
    imageUri: require("./assets/images/photo-library-14.png"),
  },
  {
    id: "14",
    imageUri: require("./assets/images/photo-library-15.png"),
  },
  {
    id: "15",
    imageUri: require("./assets/images/photo-library-16.png"),
  },
  {
    id: "16",
    imageUri: require("./assets/images/photo-library-17.png"),
  },
  {
    id: "17",
    imageUri: require("./assets/images/photo-library-18.png"),
  },
  {
    id: "18",
    imageUri: require("./assets/images/photo-library-19.png"),
  },
  {
    id: "19",
    imageUri: require("./assets/images/photo-library-20.png"),
  },
];

function Card(props: PhotoCardProp) {
  return (
    <Link
      mb="$4"
      href=""
      sx={{
        "@base": {
          w: "$1/3",
        },
        "@md": {
          w: "$1/4",
        },
        "@lg": {
          w: "$1/5",
        },
      }}
      px="$2"
    >
      <Image
        w="$full"
        sx={{
          "@base": {
            h: "$40",
          },
          "@md": {
            h: "$56",
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
  const [numColumns, setNumColumns] = useState(5);
  const noColumn = useBreakpointValue({
    base: 3,
    md: 5,
    lg: 5,
    xl: 5,
  });
  useEffect(() => {
    if (noColumn !== numColumns) {
      setNumColumns(noColumn);
    }
  }, [noColumn]);
  const { height } = useWindowDimensions();
  return (
    <Box
      sx={{
        _light: {
          bg: "$backgroundLight0",
        },
        _dark: {
          bg: "$backgroundDark800",
        },
        "@base": {
          pt: "$5",
          px: "$2",
        },
        "@md": {
          rounded: "$sm",
          pb: "$4",
          pt: "$8",
          px: "$6",
        },
      }}
    >
      <Box
        sx={{
          "@base": {
            display: "none",
          },
          "@md": {
            display: "flex",
          },
        }}
      >
        <HStack
          flexWrap="wrap"
          justifyContent="flex-start"
          sx={{
            _web: {
              overflowY: "$auto",
            },
            "@base": {
              h: height,
            },
            "@md": {
              h: "$full",
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
          "@base": {
            display: "flex",
          },
          "@md": {
            display: "none",
          },
        }}
      >
        <FlatList
          key={"#" + numColumns}
          numColumns={numColumns}
          data={photoLibrary}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }: ListRenderItem<PhotoCardProp>) => (
            <Card {...item} />
          )}
          keyExtractor={(item: PhotoCardProp) => item.id}
          bounces={false}
        />
      </Box>
    </Box>
  );
}
export default function PhotoLibrary() {
  return (
    <DashboardLayout
      scrollable={false}
      displayScreenTitle={true}
      displaySidebar={false}
      title="Photo Library"
    >
      <MainContent />
    </DashboardLayout>
  );
}
