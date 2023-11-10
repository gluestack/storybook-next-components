import React from "react";
import {
  Box,
  Icon,
  VStack,
  Text,
  Pressable,
  HStack,
  Input,
  Image,
  InputField,
  InputIcon,
  SearchIcon,
  InputSlot,
} from "@gluestack-ui/themed";
import DashboardLayout from "../Layouts/DashboardLayout";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import MobileFooter from "../components/MobileFooter";
import Categories from "./Components/Categories";
import ResumeCourses, { Course } from "./Components/ResumeCourses";
import TrendingCourses from "./Components/TrendingCourses";
import {
  ArrowLeft,
  BookOpen,
  Brain,
  Briefcase,
  Bug,
  Dribbble,
  FlaskConical,
  GaugeIcon,
  HomeIcon,
  Lightbulb,
  LucideIcon,
  MoreVertical,
  Plus,
  UserCheck,
} from "lucide-react-native";
import { handleWebpackExternalForEdgeRuntime } from "next/dist/build/webpack/plugins/middleware-plugin";

type RootStackParamList = {
  Home: undefined;
  Syllabus: undefined;
  Test: undefined;
  Subscribe: undefined;
};

const StackNavigator = createStackNavigator<RootStackParamList>();
type Props = StackScreenProps<RootStackParamList, "Home">;
type HomeScreenNavigationProp = Props["navigation"];

type Icon = {
  icon: LucideIcon | typeof Icon;
  text: string;
};

type FooterIcon = {
  iconName: LucideIcon | typeof Icon;
  iconText: keyof RootStackParamList;
};

const resumedCourses: Course[] = [
  {
    id: 1,
    chapter: "Chapter 1",
    name: "Theory of relativity",
    imageUri: require("./assets/images/emc.png"),
  },
  {
    id: 2,
    chapter: "Chapter 5",
    name: "Big Data Engineer Program",
    imageUri: require("./assets/images/big-data.png"),
  },
  {
    id: 3,
    chapter: "Chapter 12",
    name: "Data Scientist Program",
    imageUri: require("./assets/images/data-scientist.png"),
  },
  {
    id: 4,
    chapter: "Chapter 1",
    name: "Theory of relativity",
    imageUri: require("./assets/images/emc.png"),
  },
];

const trendingCourses: Course[] = [
  {
    id: 1,
    name: "Artificial Intelligence",
    imageUri: require("./assets/images/trending1.png"),
  },
  {
    id: 2,
    name: "Machine Learning",
    imageUri: require("./assets/images/trending2.png"),
  },
  {
    id: 3,
    name: "AWS SysOps Associate",
    imageUri: require("./assets/images/trending3.png"),
  },

  {
    id: 4,
    name: "Angular Training Course",
    imageUri: require("./assets/images/trending2.png"),
  },
  {
    id: 5,
    name: "Artificial Intelligence",
    imageUri: require("./assets/images/trending1.png"),
  },
];

const icons: Icon[] = [
  {
    icon: Plus,
    text: "Maths",
  },
  {
    icon: Lightbulb,
    text: "Physics",
  },
  {
    icon: FlaskConical,
    text: "Chemistry",
  },
  {
    icon: Bug,
    text: "Biology",
  },
  {
    icon: Dribbble,
    text: "Sports",
  },
  {
    icon: Brain,
    text: "Psychology",
  },
  {
    icon: Briefcase,
    text: "Business",
  },
  {
    icon: MoreVertical,
    text: "More",
  },
];

const footerIcons: FooterIcon[] = [
  { iconName: HomeIcon, iconText: "Home" },
  { iconName: BookOpen, iconText: "Syllabus" },
  { iconName: GaugeIcon, iconText: "Test" },
  { iconName: UserCheck, iconText: "Subscribe" },
];

function Banner() {
  return (
    <VStack
      sx={{
        _light: {
          bg: "$primary500",
        },
        _dark: {
          bg: "$backgroundDark900",
        },
        "@md": {
          borderRadius: "$md",
          px: "$8",
          pt: "$8",
          pb: "$0",
          mb: "$4",
          _dark: {
            bg: "$backgroundDark800",
          },
        },
      }}
      zIndex={2}
      px="$4"
      pt="$4"
      pb="$4"
    >
      <Pressable
        sx={{
          "@md": {
            display: "flex",
          },
        }}
        display="none"
      >
        <Icon size="md" pt="$0.5" as={ArrowLeft} color="$textDark50" />
      </Pressable>

      <HStack alignItems="center" justifyContent="space-between">
        <VStack
          space="md"
          w="$1/2"
          sx={{
            "@md": {
              w: "$4/6",
            },
          }}
        >
          <Text
            sx={{
              "@md": {
                mt: "$10",
                fontSize: "$3xl",
              },
              "@base": {
                fontSize: "$lg",
              },
            }}
            color="$textLight0"
            mt="$4"
            bold
          >
            Welcome John
          </Text>

          <Text
            color="$primary300"
            sx={{
              "@md": {
                w: "$72",
                mb: "$8",
                fontSize: "$md",
              },

              _dark: {
                color: "$textDark400",
              },
            }}
            mb="$3"
            fontSize="$xs"
          >
            Choose a goal and start learning from Top Educators
          </Text>
        </VStack>

        <Image
          sx={{
            w: "$122",
            "@md": {
              mb: "$0",
              w: "$56",
              h: "$48",
            },
          }}
          mb={-5}
          h="$20"
          resizeMode="contain"
          alt="nointernet"
          source={require("./assets/images/icongirl.png")}
        />
      </HStack>

      <Input
        mb={-35}
        bg="$backgroundLight0"
        sx={{
          "@md": {
            display: "none",
          },
          _dark: {
            bg: "$backgroundDark700",
            borderColor: "$borderDark400",
          },
        }}
        display="flex"
        variant="outline"
      >
        <InputSlot ml="$3">
          <InputIcon as={SearchIcon} color="$textLight400" />
        </InputSlot>
        <InputField placeholder="Search" />
      </Input>
    </VStack>
  );
}

const Home = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  return (
    <>
      <DashboardLayout
        title="Class 12th"
        displayMenuButton
        displayScreenTitle={false}
        displayAlternateMobileHeader
        rightPanelMobileHeader={true}
      >
        <Banner />
        <VStack
          sx={{
            "@md": {
              py: "$8",
              borderRadius: "$sm",
            },
            _light: {
              bg: "$backgroundLight0",
            },
            _dark: {
              bg: "$backgroundDark800",
            },
          }}
          py="$10"
          space="3xl"
        >
          <ResumeCourses courses={resumedCourses} />
          <Categories icons={icons} />
          <TrendingCourses courses={trendingCourses} />
        </VStack>
      </DashboardLayout>
      <MobileFooter footerIcons={footerIcons} navigation={navigation} />
    </>
  );
};

const HomePage = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <StackNavigator.Screen name="Home" component={Home} />
        <StackNavigator.Screen name="Syllabus" component={Home} />
        <StackNavigator.Screen name="Test" component={Home} />
        <StackNavigator.Screen name="Subscribe" component={Home} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};
export default HomePage;
