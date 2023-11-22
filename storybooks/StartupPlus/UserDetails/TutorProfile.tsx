import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  Center,
  Pressable,
  AvatarImage,
  AvatarBadge,
  FlatList,
  useBreakpointValue,
} from "@gluestack-ui/themed";
import DashboardLayout from "../Layouts/DashboardLayout";
import { Play } from "lucide-react-native";

type VideoType = {
  imageUri: any;
  title: string;
};

type Stat = {
  talkNumber: string;
  text: string;
};

type VideoTabItemType = {
  Video: VideoType[];
  Documents: VideoType[];
  About: VideoType[];
};

const videoList: VideoTabItemType = {
  Video: [
    {
      imageUri: require("./assets/images/TutorProfile6.png"),
      title: "Science and Evolution",
    },
    {
      imageUri: require("./assets/images/TutorProfile5.png"),
      title: "Fitness",
    },
    {
      imageUri: require("./assets/images/TutorProfile7.png"),
      title: "Web Design",
    },
    {
      imageUri: require("./assets/images/TutorProfile4.png"),
      title: "Gaming",
    },
    {
      imageUri: require("./assets/images/TutorProfile3.png"),
      title: "Social",
    },
    {
      imageUri: require("./assets/images/TutorProfile2.png"),
      title: "Politics",
    },
    {
      imageUri: require("./assets/images/TutorProfile1.png"),
      title: "Technology",
    },
    {
      imageUri: require("./assets/images/TutorProfile8.png"),
      title: "Medicine",
    },
    {
      imageUri: require("./assets/images/TutorProfile3.png"),
      title: "Web Design",
    },
    {
      imageUri: require("./assets/images/TutorProfile5.png"),
      title: "Fitness",
    },
    {
      imageUri: require("./assets/images/TutorProfile6.png"),
      title: "Science and Evolution",
    },
    {
      imageUri: require("./assets/images/TutorProfile1.png"),
      title: "Technology",
    },
  ],
  Documents: [
    {
      imageUri: require("./assets/images/TutorProfile3.png"),
      title: "Social",
    },
    {
      imageUri: require("./assets/images/TutorProfile2.png"),
      title: "Politics",
    },
    {
      imageUri: require("./assets/images/TutorProfile6.png"),
      title: "Science and Evolution",
    },
    {
      imageUri: require("./assets/images/TutorProfile5.png"),
      title: "Fitness",
    },
    {
      imageUri: require("./assets/images/TutorProfile7.png"),
      title: "Web Design",
    },
    {
      imageUri: require("./assets/images/TutorProfile4.png"),
      title: "Gaming",
    },
    {
      imageUri: require("./assets/images/TutorProfile1.png"),
      title: "Technology",
    },
    {
      imageUri: require("./assets/images/TutorProfile8.png"),
      title: "Medicine",
    },
    {
      imageUri: require("./assets/images/TutorProfile3.png"),
      title: "Web Design",
    },
    {
      imageUri: require("./assets/images/TutorProfile5.png"),
      title: "Fitness",
    },
    {
      imageUri: require("./assets/images/TutorProfile6.png"),
      title: "Science and Evolution",
    },
    {
      imageUri: require("./assets/images/TutorProfile1.png"),
      title: "Technology",
    },
  ],
  About: [
    {
      imageUri: require("./assets/images/TutorProfile4.png"),
      title: "Gaming",
    },
    {
      imageUri: require("./assets/images/TutorProfile3.png"),
      title: "Social",
    },
    {
      imageUri: require("./assets/images/TutorProfile2.png"),
      title: "Politics",
    },
    {
      imageUri: require("./assets/images/TutorProfile1.png"),
      title: "Technology",
    },
    {
      imageUri: require("./assets/images/TutorProfile8.png"),
      title: "Medicine",
    },
    {
      imageUri: require("./assets/images/TutorProfile3.png"),
      title: "Web Design",
    },
    {
      imageUri: require("./assets/images/TutorProfile5.png"),
      title: "Fitness",
    },
    {
      imageUri: require("./assets/images/TutorProfile6.png"),
      title: "Science and Evolution",
    },
    {
      imageUri: require("./assets/images/TutorProfile1.png"),
      title: "Technology",
    },
  ],
};

const tabs = [
  {
    id: 1,
    title: "Videos",
  },
  {
    id: 2,
    title: "Documents",
  },
  {
    id: 3,
    title: "About",
  },
];

const stats: Stat[] = [
  {
    talkNumber: "46",
    text: "Talks",
  },
  {
    talkNumber: "46K",
    text: "Followers",
  },
  {
    talkNumber: "20M",
    text: "Watch Min",
  },
];

function Card(props: any) {
  return (
    <Pressable
      rounded="$lg"
      mt="$4"
      bg="$backgroundLight100"
      sx={{
        _dark: { bg: "$backgroundDark700" },
        "@base": {
          w: "$9/20",
        },
        "@xl": {
          w: "$6/25",
        },
        "@lg": {
          w: "$3/10",
        },
      }}
    >
      <Image
        w="$full"
        h="$32"
        source={props.imageUri}
        alt="alternate text"
        key={`${props.title}-${Math.random()}`}
        sx={{
          _web: {
            borderTopRadius: "$sm",
          },
          "@lg": { w: "$48" },
        }}
      />
      <VStack
        h="$40"
        w="$full"
        position="absolute"
        alignItems="center"
        justifyContent="center"
      >
        <Center
          bgColor="$backgroundLight50"
          sx={{
            _dark: { bg: "$backgroundDark700" },
          }}
          p="$2"
          opacity={0.8}
          rounded="$full"
        >
          <Icon
            as={Play}
            color="$primary500"
            sx={{
              _dark: {
                color: "$primary300",
              },
            }}
            size="sm"
          />
        </Center>
      </VStack>

      <Text
        fontSize="$xs"
        fontWeight="$medium"
        color="$textLight800"
        sx={{ _dark: { color: "$textDark50" } }}
        p="$3"
      >
        {props.title}
      </Text>
    </Pressable>
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
    <Pressable onPress={() => handleTabChange(tabName)} px="$2" pt="$2">
      <VStack>
        <Text
          fontSize="$sm"
          fontWeight="$medium"
          letterSpacing="$xl"
          color={tabName === currentTab ? "$primary500" : "$textLight500"}
          sx={{
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

const UserProfile = () => {
  return (
    <>
      <Avatar size="lg">
        <AvatarImage source={require("./assets/images/TutorProfile9.png")} />
        <AvatarBadge
          sx={{
            _dark: {
              borderColor: "$black",
            },
          }}
        />
      </Avatar>
      <Text
        mt="$2"
        fontSize="$md"
        fontWeight="$bold"
        color="$textLight800"
        sx={{
          _dark: { color: "$textDark50" },
        }}
      >
        Cristinan John
      </Text>
      <Text
        fontSize="$sm"
        fontWeight="$medium"
        color="$textLight800"
        sx={{
          _dark: { color: "$textDark400" },
        }}
      >
        Canada
      </Text>
      <Text
        mt="$3"
        px="$6"
        textAlign="center"
        color="$textLight800"
        sx={{
          maxWidth: "$422",
          "@md": { px: "$0" },
          _dark: { color: "$textDark50" },
        }}
      >
        A user profile is a collection of settings and info with a user. It
        contains critical information that is used identify an individual.
      </Text>
    </>
  );
};

const StatsComponent = () => {
  return (
    <HStack
      w="$3/5"
      sx={{
        "@md": {
          w: "$1/2",
          mt: "$10",
        },
      }}
      my="$6"
      justifyContent="space-between"
    >
      {stats.map((item, index) => {
        return (
          <Box alignItems="center" key={index + item.text}>
            <Text
              fontSize="$lg"
              fontWeight="$medium"
              color="$textLight800"
              sx={{
                _dark: { color: "$textDark50" },
              }}
            >
              {item.talkNumber}
            </Text>
            <Text
              fontSize="$sm"
              fontWeight="$medium"
              color="$textLight500"
              sx={{
                _dark: { color: "$textDark300" },
              }}
            >
              {item.text}
            </Text>
          </Box>
        );
      })}
    </HStack>
  );
};

export default function TutorProfile() {
  const [numColumns, setNumColumns] = useState(5);
  const [tabName, setTabName] = React.useState("Videos");
  const [videos, setVideos] = React.useState<VideoType[]>(videoList.Video);
  const noColumn = useBreakpointValue({
    base: 2,
    lg: 3,
    xl: 4,
  });
  const noColumnStyle = useBreakpointValue({
    base: "space-evenly",
    md: "space-between",
  });
  useEffect(() => {
    switch (tabName) {
      case "Video":
        setVideos(videoList.Video);
        return;
      case "Documents":
        setVideos(videoList.Documents);
        return;
      case "About":
        setVideos(videoList.About);
        return;
    }
  }, [tabName]);
  useEffect(() => {
    if (noColumn !== numColumns) {
      setNumColumns(noColumn);
    }
  }, [noColumn]);

  return (
    <DashboardLayout scrollable={false} title="Tutor Profile">
      <FlatList
        bg="$backgroundLight0"
        ListHeaderComponent={
          <Box
            pt="$4"
            sx={{
              "@md": { pt: "$10" },
              _dark: { bg: "$backgroundDark800" },
            }}
            bg="$backgroundLight0"
            alignItems="center"
          >
            <UserProfile />
            <StatsComponent />
            <Box w="$full">
              <HStack
                bg="$backgroundLight100"
                sx={{
                  _dark: {
                    bg: "$backgroundDark700",
                  },
                }}
                w="$full"
                justifyContent="space-between"
                borderRadius="$sm"
              >
                {tabs.map(({ id, title }) => (
                  <TabItem
                    key={id + "-" + title}
                    tabName={title}
                    currentTab={tabName}
                    handleTabChange={(tab) => setTabName(tab)}
                  />
                ))}
              </HStack>
            </Box>
          </Box>
        }
        key={"#" + numColumns}
        numColumns={numColumns}
        columnWrapperStyle={{ justifyContent: noColumnStyle }}
        data={videos}
        renderItem={({ item }: { item: VideoType }) => <Card {...item} />}
        keyExtractor={(index) => "key" + index + Math.random()}
        contentContainerStyle={{
          width: "100%",
          alignSelf: "center",
        }}
        sx={{
          _dark: { bg: "$backgroundDark800" },
          "@base": { pb: "$7", px: "$0" },
          "@lg": { px: "$35" },
          "@md": {
            rounded: "$sm",
            px: "$6",
          },
        }}
        bounces={false}
      />
    </DashboardLayout>
  );
}
