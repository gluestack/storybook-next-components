import React from "react";
import {
  Avatar,
  AvatarImage,
  Box,
  Divider,
  Fab,
  FabIcon,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import {
  Mail,
  MapPin,
  MessageSquare,
  Pen,
  Phone,
  Smartphone,
  Video,
} from "lucide-react-native";

import DashboardLayout from "../Layouts/DashboardLayout";

const contactOptions = [
  {
    icon: Phone,
    name: "Call",
  },
  {
    icon: Video,
    name: "Video",
  },
  {
    icon: MessageSquare,
    name: "Message",
  },
  {
    icon: Mail,
    name: "Email",
  },
];
type Contact = {
  name: string;
  mobile: string;
  home: string;
  email: string;
  state: string;
  country: string;
};
const contactDetail: Contact = {
  name: "Alexander Leslie",
  state: "New York",
  country: "United States",
  email: "Alexander20@gmail.com",
  mobile: "(316) 555-0116",
  home: "(316) 555-0116",
};
const ContactOptions = ({ name, icon }: { name: string; icon: {} }) => (
  <Pressable alignItems="center" onPress={() => {}}>
    <Icon
      sx={{
        "@base": {
          _light: { color: "$textLight50" },
          _dark: { color: "$textDark400" },
        },
        "@md": {
          _light: { color: "$textLight500" },
          _dark: { color: "$textDark500" },
        },
      }}
      size="xl"
      mx="$2"
      as={icon}
    />

    <Text
      mt="$2"
      sx={{
        "@base": {
          _light: { color: "$textLight0" },
          _dark: { color: "$textDark0" },
        },
        "@md": {
          _light: { color: "$textLight500" },
          _dark: { color: "$textDark400" },
        },
      }}
      fontSize="$md"
    >
      {name}
    </Text>
  </Pressable>
);
const ProfileCard = ({ name, country }: { name: string; country: string }) => {
  return (
    <Box
      sx={{
        "@base": {
          _light: { bg: "$primary500" },
          _dark: { bg: "$backgroundDark900" },
        },
        "@md": {
          _light: { bg: "$backgroundLight0" },
          _dark: { bg: "$backgroundDark800" },
        },
      }}
      pt="$8"
      pb="$6"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        rounded="$full"
        size="xl"
        source={require("./assets/images/profile1.png")}
      />
      <Text
        sx={{
          "@base": {
            _light: { color: "$textLight0" },
            _dark: { color: "$textDark0" },
          },
          "@md": {
            _light: { color: "$textLight800" },
            _dark: { color: "$textDark50" },
          },
        }}
        mt="$4"
        fontSize="$2xl"
        fontWeight="$medium"
        color="$textLight0"
      >
        {name}
      </Text>
      <Text
        my="$2"
        sx={{
          "@base": {
            _light: { color: "$textLight50" },
            _dark: { color: "$textDark50" },
          },
          "@md": {
            _light: { color: "$textLight500" },
            _dark: { color: "$textDark500" },
          },
        }}
        fontSize="$sm"
      >
        {country}
      </Text>
      <HStack space="3xl" mt="$6" alignItems="center">
        {contactOptions.map((contact, index) => {
          return (
            <ContactOptions
              name={contact.name}
              icon={contact.icon}
              key={index}
            />
          );
        })}
      </HStack>
    </Box>
  );
};
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Call":
    case "Home":
      return Phone;
    case "Email":
      return Mail;
    case "Message":
      return MessageSquare;
    case "Mobile":
      return Smartphone;
    case "Video":
      return Video;
    case "Location":
      return MapPin;
    default:
      return undefined;
  }
};
const ContactDetails = ({
  label,
  detail,
}: {
  label: string;
  detail: string;
}) => (
  <HStack width="$full" px="$4" space="md" mt="$7">
    <Icon
      sx={{
        _light: { color: "$primary500" },
        _dark: { color: "$primary300" },
      }}
      size="xl"
      as={getIcon(label)}
    />

    <VStack space="md">
      <Text
        fontSize="$md"
        fontWeight="$medium"
        sx={{
          _light: { color: "$textLight800" },
          _dark: { color: "$textLight50" },
        }}
      >
        {detail}
      </Text>
      <Text
        fontSize="$md"
        fontWeight="$normal"
        sx={{
          _light: { color: "$textLight500" },
          _dark: { color: "$textDark500" },
        }}
      >
        {label}
      </Text>
    </VStack>
  </HStack>
);
function Details({ mobile, home, email, state, country }: Contact) {
  return (
    <Box justifyContent="space-between" flex={1}>
      <Box
        sx={{
          _light: { bg: "$backgroundLight0" },
          _dark: { bg: "$backgroundDark800" },
          "@base": {
            py: "$3",
          },
          "@md": {
            flexDirection: "row",
            alignItems: "center",
            py: "$3",
            flexWrap: "wrap",
          },
          "@lg": {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            py: "$3",
            flexWrap: "wrap",
          },
        }}
      >
        <Box>
          <ContactDetails label="Mobile" detail={mobile} />
          <ContactDetails label="Email" detail={email} />
        </Box>
        <Box>
          <ContactDetails label="Home" detail={home} />
          <ContactDetails label="Location" detail={`${state}, ${country}`} />
        </Box>
      </Box>
    </Box>
  );
}

const Contact = () => {
  const Main = () => {
    return (
      <Box
        sx={{
          _light: { bg: "$backgroundLight0" },
          _dark: { bg: "$backgroundDark800" },
        }}
        flex={1}
      >
        <Box
          flex={1}
          sx={{
            "@xs": { flex: 1 },
            "@sm": { h: "$5/6" },
            "@lg": {
              mt: "$4",
              my: "$8",
              h: "$5/6",
            },
          }}
        >
          <ProfileCard {...contactDetail} />

          <Divider
            sx={{
              _light: { bg: "$backgroundLight200" },
              _dark: { bg: "$backgroundDark700" },
            }}
          />

          <Details {...contactDetail} />

          <Box
            h="$16"
            w="$16"
            alignSelf="flex-end"
            sx={{
              "@md": { display: "none" },
            }}
            borderRadius="$md"
          >
            <Fab
              sx={{
                "@md": { display: "none" },
                _light: { bg: "$primary500" },
                _dark: { bg: "$primary300" },
              }}
              overflow="hidden"
              size="md"
              placement="bottom right"
              isHovered={false}
              isDisabled={false}
              isPressed={false}
            >
              <FabIcon as={Pen} size="lg" />
            </Fab>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <DashboardLayout title="Contact Details">
      <Main />
    </DashboardLayout>
  );
};

export default Contact;
