import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Center,
  Pressable,
  Image,
  ChevronRightIcon,
  useColorMode,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  LucideIcon,
  Mail,
  MessageSquareIcon,
  Phone,
} from 'lucide-react-native';

type OptionListItemProps = {
  iconName: LucideIcon | typeof Icon;
  text: string;
};
const list: OptionListItemProps[] = [
  {
    iconName: MessageSquareIcon,
    text: 'Chat Support',
  },
  {
    iconName: Phone,
    text: 'Voice Support',
  },
  {
    iconName: Mail,
    text: 'Mail Support',
  },
];

const ListItem = ({ item }: { item: OptionListItemProps }) => {
  return (
    <Pressable
      py="$3"
      px="$4"
      rounded="$sm"
      sx={{
        ':hover': {
          _light: {
            bg: '$primary100',
          },
          _dark: {
            bg: '$backgroundDark700',
          },
        },
        ':active': {
          _light: {
            bg: '$primary200',
          },
          _dark: {
            bg: '$backgroundDark600',
          },
        },
      }}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <HStack space="lg" alignItems="center">
          <Center
            alignItems="center"
            justifyContent="center"
            sx={{
              _light: {
                bg: '$primary100',
              },
              _dark: {
                bg: '$backgroundDark700',
              },
            }}
            p="$2"
            rounded="$full"
          >
            <Icon
              as={item.iconName}
              size="md"
              sx={{
                _light: {
                  color: '$primary500',
                },
                _dark: {
                  color: '$primary300',
                },
              }}
            />
          </Center>

          <Text
            alignItems="center"
            fontSize="$md"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {item.text}
          </Text>
        </HStack>

        <Icon
          as={ChevronRightIcon}
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
      </HStack>
    </Pressable>
  );
};

function OptionList() {
  return (
    <Box
      pt="$3"
      sx={{
        '@md': {
          px: '$40',
        },
      }}
    >
      {list.map((item, index) => {
        return <ListItem key={index} item={item} />;
      })}
    </Box>
  );
}

function MainImage() {
  const colorMode = useColorMode();
  return (
    <Center>
      <Image
        sx={{
          '@md': {
            w: '$80',
          },
        }}
        h="$72"
        w="$80"
        source={
          colorMode == 'light'
            ? require('./assets/images/helplight.png')
            : require('./assets/images/helpdark.png')
        }
        alt="help image"
      />
    </Center>
  );
}

function PageText() {
  return (
    <VStack space="xs" mt="$8" alignItems="center" px="$4" pb="$3">
      <Text fontSize="$xl" textAlign="center" fontWeight="$bold" mb="$4">
        How can we help you today?
      </Text>
      <Text
        sx={{
          '@md': {
            w: '$1/3',
          },
          '_light': {
            color: '$backgroundDark500',
          },
          '_dark': {
            color: '$backgroundDark400',
          },
        }}
        width="$full"
        fontSize="$sm"
        textAlign="center"
        fontWeight="$medium"
      >
        It looks like you are experiencing some problem. We are here to help
        you. Please get in touch with us!
      </Text>
    </VStack>
  );
}
export default function HelpAndSupport() {
  return (
    <DashboardLayout
      title="Help & Support"
      displaySidebar={false}
      rightPanelMobileHeader={true}
    >
      <Box
        sx={{
          '@md': {
            rounded: '$sm',
            pt: '$8',
          },
          '_light': {
            bg: '$backgroundLight0',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
        pt="$5"
        pb="$8"
        flex={1}
      >
        <MainImage />
        <PageText />
        <OptionList />
      </Box>
    </DashboardLayout>
  );
}
