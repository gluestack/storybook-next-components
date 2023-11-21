import React from 'react';

import {
  Box,
  Text,
  Pressable,
  Image,
  HStack,
  VStack,
  Divider,
  Link,
  Icon,
  CircleIcon,
  useColorMode,
} from '@gluestack-ui/themed';
import type { ImageSourcePropType } from 'react-native';

import DashboardLayout from '../Layouts/DashboardLayout';

import { ChevronDownIcon } from 'lucide-react-native';

type FaqItemList = {
  title: string;
  text: string;
};

type IconType = {
  imageName: ImageSourcePropType;
};

const Icons: IconType[] = [
  {
    imageName: require('./assets/images/facebook.png'),
  },
  {
    imageName: require('./assets/images/Whatsapp.png'),
  },
  {
    imageName: require('./assets/images/Twitter.png'),
  },
];

const faqItemList: FaqItemList[] = [
  {
    title: 'How it works ?',
    text: 'Works are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.',
  },
  {
    title: 'How much do i get ?',
    text: 'Works are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.',
  },
  {
    title: 'Terms and conditions for referral?',
    text: 'Works are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites.',
  },
];

function PromoCode() {
  return (
    <HStack
      mt="$10"
      alignItems="center"
      borderRadius="$lg"
      justifyContent="space-around"
      borderStyle="dashed"
      borderWidth="$2"
      sx={{
        _light: {
          borderColor: '$borderLight300',
        },
        _dark: {
          borderColor: '$borderDark500',
        },
      }}
    >
      <VStack alignItems="center" py="$4" px="$8" space="xs">
        <Text
          fontSize="$xs"
          fontWeight="$normal"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
          lineHeight="$xs"
        >
          Your referral Code
        </Text>
        <Text
          fontSize="$md"
          fontWeight="$bold"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
          lineHeight="$lg"
        >
          Native50
        </Text>
      </VStack>
      <Divider
        orientation="vertical"
        sx={{
          _light: {
            bg: '$backgroundLight200',
          },
          _dark: {
            bg: '$backgroundDark500',
          },
        }}
        h="$1/2"
      />
      <Pressable py="$4" px="$6">
        <Text
          fontSize="$sm"
          fontWeight="$medium"
          color="$primary500"
          lineHeight="$md"
        >
          Copy Code
        </Text>
      </Pressable>
    </HStack>
  );
}

function SocialIcon() {
  return (
    <>
      <Text
        sx={{
          '@base': {
            mt: '$7',
          },
          '@md': {
            mt: '$6',
          },
          '_light': {
            color: '$textLight800',
          },
          '_dark': {
            color: '$textDark50',
          },
        }}
        fontSize="$md"
        lineHeight="$lg"
      >
        Share your referral code
      </Text>

      <HStack mt="$5" alignItems="center" space="xl">
        {Icons.map((item, index) => {
          return (
            <Link href="" key={index}>
              <Image
                source={item.imageName}
                alt="Alternate Text"
                h="$8"
                w="$8"
              />
            </Link>
          );
        })}
      </HStack>
    </>
  );
}

function Collapsable({
  index,
  currentIndex,
  isOpen,
  toggleCollapsable,
  title,
  description,
}: {
  index: number;
  currentIndex: number;
  isOpen: boolean;
  toggleCollapsable: (ind: number) => void;
  title: string;
  description: string;
}) {
  return (
    <Box
      sx={{
        _light: {
          bg: '$backgroundLight100',
        },
        _dark: {
          bg: '$backgroundDark700',
        },
      }}
      borderRadius="$sm"
      w="$full"
      mb="$3"
    >
      <Pressable onPress={() => toggleCollapsable(index)}>
        <HStack alignItems="center" p="$2">
          <Icon
            mr="$2.5"
            as={CircleIcon}
            sx={{
              w: '$1.5',
              h: '$1.5',
              _light: {
                fill: '$textLight800',
              },
              _dark: {
                fill: '$textDark50',
              },
            }}
          />
          <Text
            fontSize="$sm"
            fontWeight="$normal"
            maxWidth="$4/5"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {title}
          </Text>

          <Icon
            ml="auto"
            size="md"
            as={ChevronDownIcon}
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
      {currentIndex === index && isOpen ? (
        <Text
          px="$4"
          pb="$4"
          fontSize="$sm"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          {description}
        </Text>
      ) : null}
    </Box>
  );
}

function FAQModal() {
  const [currentItemNumber, setCurrentItemNumber] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const toggleCollapsable = (index: number) => {
    if (currentItemNumber === index) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
      setCurrentItemNumber(index);
    }
  };

  return (
    <VStack
      w="$full"
      sx={{
        '@base': {
          mt: '$9',
        },
        '@md': {
          mt: '$12',
          pb: '$4',
        },
      }}
    >
      <Text
        fontSize="$md"
        fontWeight="$medium"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textLight50',
          },
        }}
        lineHeight="$2xl"
        mb="$4"
      >
        Frequently Asked Questions
      </Text>
      {faqItemList.map((item, index) => {
        return (
          <Collapsable
            key={index}
            index={index}
            currentIndex={currentItemNumber}
            isOpen={isOpen}
            toggleCollapsable={toggleCollapsable}
            title={item.title}
            description={item.text}
          />
        );
      })}
    </VStack>
  );
}

function MainContent() {
  const colorMode = useColorMode();
  return (
    <Box
      alignItems="center"
      sx={{
        '@base': {
          py: '$4',
          px: '$4',
        },
        '@lg': {
          px: '$35',
        },
        '@md': {
          borderRadius: '$sm',
          py: '$8',
          px: '$8',
        },
        '_light': {
          bg: '$backgroundLight50',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      flex={1}
    >
      <Image
        // key={imageSource}
        alt="Banner Image"
        sx={{
          '@base': {
            w: '$64',
            h: '$48',
          },
          '@md': {
            w: '$96',
            h: '$72',
          },
        }}
        source={
          colorMode == 'light'
            ? require('./assets/images/Refer.png')
            : require('./assets/images/ReferDark.png')
        }
      />
      <PromoCode />
      <SocialIcon />
      <FAQModal />
    </Box>
  );
}

export default function ReferAndEarn2() {
  return (
    <DashboardLayout title="Refer And Earn" displaySidebar={false}>
      <MainContent />
    </DashboardLayout>
  );
}
