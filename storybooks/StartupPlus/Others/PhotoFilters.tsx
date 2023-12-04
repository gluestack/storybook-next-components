import {
  Button,
  ButtonText,
  HStack,
  Icon,
  Image,
  LinearGradient,
  Pressable,
  ScrollView,
  Text,
  VStack,
  useBreakpointValue,
  useColorMode,
  useTheme,
} from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
import React from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import { Check, FlipHorizontal, X } from "lucide-react-native";

type List = {
  itemName: string;
  colors: string[];
};
type CardProps = {
  item: List;
  shadeIndex: number;
  currentIndex: number;
  handleChangeShade: (a: number) => void;
};

function Compare() {
  return (
    <HStack
      alignItems="center"
      space="sm"
      sx={{
        "@base": { justifyContent: "flex-end" },
        "@md": { justifyContent: "flex-start", mb: "$8", ml: "$2" },
      }}
      mt="$4"
    >
      <Pressable onPress={() => console.log("click for comparison")}>
        <Icon
          sx={{
            _light: { color: "$coolGray500" },
            _dark: { color: "$coolGray400" },
          }}
          size="xl"
          as={FlipHorizontal}
        />
      </Pressable>
      <Text
        fontWeight="medium"
        sx={{
          _light: { color: "$coolGray500" },
          _dark: { color: "$coolGray400" },
        }}
      >
        Compare
      </Text>
    </HStack>
  );
}

function Card(props: CardProps) {
  const primaryText = useColorMode();
  const secondoryText = useColorMode();
  return (
    <Pressable
      onPress={() => {
        props.handleChangeShade(props.currentIndex);
      }}
      sx={{ "@md": { mx: "$2", mb: "$2" } }}
    >
      <VStack alignItems="center" space="md">
        <LinearGradient
          sx={{
            "@base": { w: "$16", h: "$16" },
            "@md": { w: "$21", h: "$24" },
            _light: { borderColor: "$black" },
            _dark: { borderColor: "$white" },
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          opacity="$0.7"
          rounded="$md"
          borderWidth={props.shadeIndex === props.currentIndex ? "$1" : "$0"}
          colors={props.item.colors}
        >
          <Image
            rounded="$md"
            position="absolute"
            zIndex="-1"
            sx={{
              "@base": { w: "$16", h: "$16" },
              "@md": { w: "$21", h: "$24" },
            }}
            source={require("./assets/images/photofilter.png")}
            alt="Alternate Text"
            resizeMode="cover"
          />
        </LinearGradient>
        <Text
          fontSize="$xs"
          color={
            props.shadeIndex === props.currentIndex
              ? primaryText
              : secondoryText
          }
        >
          {props.item.itemName}
        </Text>
      </VStack>
    </Pressable>
  );
}

function FilterImages({
  shadeIndex,
  handleChangeShade,
}: {
  shadeIndex: number;
  handleChangeShade: (a: number) => void;
}) {
  const { colors } = useTheme();
  const list: List[] = [
    {
      itemName: "Original",
      colors: ["", ""],
    },
    {
      itemName: "Pinkfresh",
      colors: ["$rose300", "$rose800"],
    },
    {
      itemName: "Warm",
      colors: ["$orange300", "$orange800"],
    },
    {
      itemName: "Cool",
      colors: ["$emerald300", "$emerald800"],
    },
    {
      itemName: "Film",
      colors: ["$yellow300", "$yellow800"],
    },
    {
      itemName: "Modern",
      colors: ["$rose300", "$rose800"],
    },
    {
      itemName: "Vintage",
      colors: ["$rose300", "$rose800"],
    },
    {
      itemName: "Mist",
      colors: ["$rose300", "$rose800"],
    },

    {
      itemName: "Fade",
      colors: ["$yellow300", "$yellow800"],
    },
  ];
  const maxWidth = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <HStack
      space="sm"
      sx={{
        "@base": { flexWrap: "none", space: "md", mt: "$5" },
        "@md": { flexWrap: "wrap", mt: "$0", maxWidth: "$96" },
      }}
      alignItems="flex-start"
      minWidth="$96"
    >
      {list.map((item, index) => {
        return (
          <Card
            item={item}
            key={index + item.itemName}
            shadeIndex={shadeIndex}
            currentIndex={index}
            handleChangeShade={handleChangeShade}
          />
        );
      })}
    </HStack>
  );
}

function WebContent({
  shadeIndex,
  handleChangeShade,
}: {
  shadeIndex: number;
  handleChangeShade: (a: number) => void;
}) {
  return (
    <>
      <FilterImages
        shadeIndex={shadeIndex}
        handleChangeShade={handleChangeShade}
      />
      <Compare />
      <HStack
        sx={{ "@md": { mx: "$2" } }}
        // mt="auto"
        alignItems="center"
        justifyContent="space-between"
        space="md"
      >
        <Button flex="1">
          <ButtonText> Apply</ButtonText>
        </Button>
        <Button variant="outline" flex="1">
          <ButtonText> Cancel</ButtonText>
        </Button>
      </HStack>
    </>
  );
}

function MobileContent({
  shadeIndex,
  handleChangeShade,
}: {
  shadeIndex: number;
  handleChangeShade: (a: number) => void;
}) {
  return (
    <>
      <Compare />
      <Box sx={{ "@md": { display: "none" } }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <FilterImages
            shadeIndex={shadeIndex}
            handleChangeShade={handleChangeShade}
          />
        </ScrollView>
      </Box>

      <HStack mt="$4" alignItems="center" justifyContent="space-between">
        <Pressable onPress={() => console.log("click to select")}>
          <Icon
            size="xl"
            as={Check}
            sx={{
              _light: { color: "$coolGray800" },
              _dark: { color: "$coolGray50" },
            }}
          />
        </Pressable>
        <Pressable onPress={() => console.log("click to close")}>
          <Icon
            size="xl"
            as={X}
            sx={{
              _light: { color: "$coolGray800" },
              _dark: { color: "$coolGray50" },
            }}
          />
        </Pressable>
      </HStack>
    </>
  );
}

const MainContent = () => {
  const [shadeIndex, setShadeIndex] = React.useState(0);
  const handleChangeShade = (index: number) => {
    setShadeIndex(index);
  };
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
      sx={{ _light: { bg: "$white" }, _dark: { bg: "$coolGray800" } }}
    >
      <VStack
        space="lg"
        sx={{
          "@base": {
            flexDirection: "column",
            pt: "$5",
            pb: "$4",
            pl: "$4",
            pr: "$4",
            _dark: { bg: "$coolGray800" },
          },
          "@md": {
            flexDirection: "row",
            pt: "$8",
            pb: "$8",
            pl: "$8",
            pr: "$6",
            rounded: "sm",
            _dark: { bg: "$coolGray900" },
          },
          _light: { bg: "$white" },
        }}
        flex="1"
      >
        <Image
          rounded="$md"
          sx={{
            "@base": { w: "$full", h: "$96" },
            "@md": { w: "$1/2", h: "$full" },
          }}
          source={require("./assets/images/photofilter.png")}
          alt="Alternate Text"
        />
        <Box
          sx={{ "@base": { pb: "$4" }, "@md": { pb: "$0" } }}
          // key="key"
          flex="1"
        >
          <Box
            sx={{ "@base": { display: "none" }, "@md": { display: "flex" } }}
          >
            <WebContent
              shadeIndex={shadeIndex}
              handleChangeShade={handleChangeShade}
            />
          </Box>
          <Box
            sx={{ "@base": { display: "flex" }, "@md": { display: "none" } }}
          >
            <MobileContent
              shadeIndex={shadeIndex}
              handleChangeShade={handleChangeShade}
            />
          </Box>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default function PhotoFilters() {
  return (
    <DashboardLayout
      displaySidebar={false}
      title="Photo Filters"
      rightPanelMobileHeader={true}
    >
      <MainContent />
    </DashboardLayout>
  );
}
