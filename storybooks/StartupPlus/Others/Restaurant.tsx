import React, { useEffect } from "react";
import {
  Text,
  VStack,
  Button,
  HStack,
  Image,
  Box,
  Icon,
  Switch,
  Divider,
  Pressable,
  ButtonText,
  useBreakpointValue,
} from "@gluestack-ui/themed";
import type { ImageSourcePropType } from "react-native";
import DashboardLayout from "../Layouts/DashboardLayout";
import { Star } from "lucide-react-native";

type DishList = {
  dishtype: string;
  dishName: string;
  dishCategory: string;
  dishAmount: string;
  buttonText: string;
  imageUri: ImageSourcePropType;
};

type TabDishList = {
  Menu: DishList[];
  About: DishList[];
  Reviews: DishList[];
  Photos: DishList[];
};

const dishlist: TabDishList = {
  Menu: [
    {
      dishtype: "veg",
      dishName: "Double Aloo Tikki Burger",
      dishCategory: "In starters",
      dishAmount: "₹500",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes1.png"),
    },
    {
      dishtype: "veg",
      dishName: "Cheese Croissant",
      dishCategory: "In starters",
      dishAmount: "₹100",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes2.png"),
    },
    {
      dishtype: "veg",
      dishName: "Corn & Pepper Lasagne",
      dishCategory: "In starters",
      dishAmount: "₹260",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes3.png"),
    },
  ],
  About: [
    {
      dishtype: "veg",
      dishName: "Cheese Croissant",
      dishCategory: "In starters",
      dishAmount: "₹100",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes2.png"),
    },
    {
      dishtype: "veg",
      dishName: "Corn & Pepper Lasagne",
      dishCategory: "In starters",
      dishAmount: "₹260",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes3.png"),
    },
    {
      dishtype: "veg",
      dishName: "Double Aloo Tikki Burger",
      dishCategory: "In starters",
      dishAmount: "₹500",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes1.png"),
    },
  ],
  Reviews: [
    {
      dishtype: "veg",
      dishName: "Double Aloo Tikki Burger",
      dishCategory: "In starters",
      dishAmount: "₹500",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes1.png"),
    },
    {
      dishtype: "veg",
      dishName: "Cheese Croissant",
      dishCategory: "In starters",
      dishAmount: "₹100",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes2.png"),
    },
    {
      dishtype: "veg",
      dishName: "Corn & Pepper Lasagne",
      dishCategory: "In starters",
      dishAmount: "₹260",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes3.png"),
    },
  ],
  Photos: [
    {
      dishtype: "veg",
      dishName: "Cheese Croissant",
      dishCategory: "In starters",
      dishAmount: "₹100",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes2.png"),
    },
    {
      dishtype: "veg",
      dishName: "Corn & Pepper Lasagne",
      dishCategory: "In starters",
      dishAmount: "₹260",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes3.png"),
    },
    {
      dishtype: "veg",
      dishName: "Double Aloo Tikki Burger",
      dishCategory: "In starters",
      dishAmount: "₹500",
      buttonText: "ADD",
      imageUri: require("./assets/images/dishes1.png"),
    },
  ],
};

const tabs = [
  {
    id: 1,
    title: "Menu",
  },
  {
    id: 2,
    title: "About",
  },
  {
    id: 3,
    title: "Reviews",
  },
  {
    id: 4,
    title: "Photos",
  },
];

function HotelName() {
  return (
    <HStack
      gap="$2"
      sx={{
        "@md": {
          mt: "$8",
        },
      }}
      mb="$6"
      alignItems="center"
    >
      <Image
        rounded="$sm"
        size="md"
        resizeMode="cover"
        alt="Alternate Text "
        source={require("./assets/images/taj.png")}
      />

      <VStack gap="$2">
        <Text
          fontWeight="bold"
          fontSize="$md"
          sx={{
            _light: {
              color: "$textLight800",
            },
            _dark: {
              color: "$textDark50",
            },
          }}
        >
          Taj Hotel
        </Text>
        <HStack gap="$1" alignItems="center">
          <Icon as={Star} size="md" color="$amber400" />
          <Text
            sx={{
              _light: {
                color: "$textLight800",
              },
              _dark: { color: "$textDark50" },
            }}
            fontSize="$sm"
            fontWeight="normal"
          >
            4.9
          </Text>
          <Text
            fontSize="$sm"
            fontWeight="normal"
            sx={{
              _light: {
                color: "$textLight500",
              },
              _dark: {
                color: "$textDark400",
              },
            }}
          >
            (120)
          </Text>
        </HStack>
        <Text
          fontSize="$sm"
          color="$primary500"
          sx={{ _dark: { color: "$primary300" } }}
        >
          15 min{" "}
          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: "$textLight500",
              },
              _dark: {
                color: "$textDark400",
              },
            }}
          >
            (1.3 kms)
          </Text>
        </Text>
      </VStack>

      <Box alignSelf="flex-end" ml="auto">
        <Button
          ml="auto"
          alignSelf="flex-end"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText fontSize="$xs">DIRECTIONS </ButtonText>
        </Button>
      </Box>
    </HStack>
  );
}

function OptionSelector() {
  return (
    <HStack
      alignItems="center"
      space="xs"
      sx={{
        "@md": {
          justifyContent: "flex-start",
        },
      }}
      justifyContent="flex-end"
    >
      <HStack alignItems="center">
        <Text
          fontSize="$sm"
          fontWeight="medium"
          sx={{
            _light: {
              color: "$textLight900",
            },
            _dark: {
              color: "$textDark300",
            },
          }}
        >
          Veg
        </Text>

        <Switch size="sm" isDisabled={false} />
      </HStack>
      <HStack alignItems="center">
        <Text
          fontSize="$sm"
          fontWeight="medium"
          sx={{
            _light: {
              color: "$textLight900",
            },
            _dark: {
              color: "$textDark300",
            },
          }}
        >
          Non-Veg
        </Text>

        <Switch size="sm" isDisabled={false} />
      </HStack>
    </HStack>
  );
}

function TabItem({
  tabName,
  currentTab,
  handleTabChange,
}: {
  tabName: string;
  currentTab: string;
  handleTabChange: (tabTitle: string) => void;
}) {
  return (
    <Pressable onPress={() => handleTabChange(tabName)}>
      <VStack>
        <Text
          fontSize="$sm"
          fontWeight="medium"
          sx={{
            _light: {
              color: tabName === currentTab ? "$primary500" : "$textLight500",
            },
            _dark: {
              color: tabName === currentTab ? "$primary300" : "$textDark400",
            },
          }}
          px="$4"
          py="$2"
        >
          {tabName}
        </Text>
        {tabName === currentTab && (
          <Box
            borderTopLeftRadius="$sm"
            borderTopRightRadius="$sm"
            bg="$primary500"
            sx={{
              _dark: {
                bg: "$primary300",
              },
            }}
            h="$1"
          />
        )}
      </VStack>
    </Pressable>
  );
}

function Dishlist({ currentTab }: { currentTab: DishList[] }) {
  const reverseSequence = useBreakpointValue({ base: true, md: false });

  return (
    <Box w="$full">
      <Box mt="$4">
        <OptionSelector />
      </Box>
      {currentTab.map(
        (
          item: {
            dishName: string;
            dishAmount: string;
            imageUri: ImageSourcePropType;
            buttonText: string;
          },
          index: React.Key | null | undefined
        ) => {
          return (
            <Box key={index} mt="$2" pt="$6">
              <VStack
                space="sm"
                key={index}
                // reversed={reverseSequence}
                sx={{
                  "@md": {
                    justifyContent: "space-between",
                    flexDirection:"row"

                  },
                }}
                flexDirection="column"
                alignItems='flex-start'
              >
                <>
                  <Pressable>
                    <Image
                      rounded="$sm"
                      size="xl"
                      resizeMode="cover"
                      source={item.imageUri}
                      alt="Alternate Text "
                      key={item.dishName}
                    />
                  </Pressable>

                  <Box mt="$1" w="$1/2">
                    <Image
                      source={require("./assets/images/Veg.png")}
                      size="2xs"
                      alt="Alternate text"
                    />
                    <Pressable>
                      <Text
                        mt="$3"
                        sx={{
                          _light: {
                            color: "$textLight800",
                          },
                          _dark: {
                            color: "$textDark50",
                          },
                        }}
                        fontSize="$md"
                        fontWeight="medium"
                      >
                        {item.dishName}
                      </Text>
                    </Pressable>

                    <Text
                      sx={{
                        _light: {
                          color: "$textLight800",
                        },
                        _dark: {
                          color: "$textDark50",
                        },
                      }}
                      fontSize="$md"
                      fontWeight="medium"
                    >
                      {item.dishAmount}
                    </Text>
                    <HStack alignItems="center" mt="$1">
                      <Icon as={Star} size="md" color="$amber400" />
                      <Text
                        sx={{
                          _light: {
                            color: "$textLight800",
                          },
                          _dark: {
                            color: "$textDark50",
                          },
                        }}
                        fontSize="$sm"
                        fontWeight="normal"
                      >
                        4.9
                      </Text>
                      <Text
                        fontSize="$sm"
                        fontWeight="normal"
                        sx={{
                          _light: {
                            color: "textLight.500",
                          },
                          _dark: {
                            color: "textDark.400",
                          },
                        }}
                      >
                        (120)
                      </Text>
                    </HStack>
                  </Box>
                </>

                <Button
                  size="sm"
                  variant="outline"
                  action="primary"
                  isDisabled={false}
                  isFocusVisible={false}
                >
                  <ButtonText fontSize="$xs">{item.buttonText} </ButtonText>
                </Button>
              </VStack>
              {index === currentTab.length - 1 ? null : (
                <Divider
                  mt="$1"
                  bg="$backgroundLight200"
                  sx={{ _dark: { bg: "$backgroundDark700" } }}
                />
              )}
            </Box>
          );
        }
      )}
    </Box>
  );
}

function Details() {
  const [tabName, setTabName] = React.useState("About");
  const [videos, setVideos] = React.useState<DishList[]>(dishlist.About);

  useEffect(() => {
    switch (tabName) {
      case "About":
        setVideos(dishlist.About);
        return;
      case "Menu":
        setVideos(dishlist.Menu);
        return;
      case "Photos":
        setVideos(dishlist.Photos);
        return;
      case "Reviews":
        setVideos(dishlist.Reviews);
        return;
    }
  }, [tabName]);
  return (
    <Box>
      <HStack w="$full" justifyContent="flex-start" borderRadius="$sm">
        {tabs.map(({ id, title }) => (
          <TabItem
            key={id}
            tabName={title}
            currentTab={tabName}
            handleTabChange={(tab) => setTabName(tab)}
          />
        ))}
      </HStack>
      <Dishlist currentTab={videos} />
    </Box>
  );
}

function MainContent() {
  return (
    <Box
      sx={{
        "@md": {
          px: "$8",
          py: "$8",
          rounded: "$sm",
        },
        _light: {
          bg: "backgroundLight50",
        },
        _dark: {
          bg: "$backgroundDark800",
        },
      }}
      px="$4"
      py="$5"
      flex={1}
    >
      <HStack
        alignItems="center"
        space="md"
        flex={1}
        sx={{
          "@md": {
            display: "flex",
          },
        }}
        display="none"
      >
        <Image
          size="md"
          height="$full"
          sx={{
            "@md": {
              w: "$63/100",
            },
            "@lg": {
              w: "$650",
            },
          }}
          rounded="$sm"
          source={require("./assets/images/restaurantbanner1.png")}
          alt="gluestack ui"
        />

        <VStack alignItems="center" space="md" flex={1}>
          <Image
            size="md"
            sx={{
              "@md": {
                h: "$40",
                w: "$full",
              },
              "@lg": {
                h: "$40",
                w: "$80",
              },
            }}
            rounded="$sm"
            source={require("./assets/images/restaurantbanner2.png")}
          />

          <Image
            size="md"
            sx={{
              "@md": {
                h: "$40",
                w: "$full",
              },
              "@lg": {
                h: "$40",
                w: "$80",
              },
            }}
            rounded="$sm"
            source={require("./assets/images/restaurantbanner3.png")}
            alt="gluestack-ui"
          />
        </VStack>
      </HStack>

      <HotelName />
      <Details />
    </Box>
  );
}

export default function Restaurants() {
  return (
    <DashboardLayout
      displaySidebar={false}
      title="Restaurant"
      rightPanelMobileHeader={true}
    >
      <MainContent />
    </DashboardLayout>
  );
}
