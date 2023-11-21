import React from 'react';

import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Pressable,
  Text,
  Image,
  useColorMode,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

import { CheckCircle2 } from 'lucide-react-native';

type OptionListType = {
  planTitle: string;
};

const planOptionsList: OptionListType[] = [
  {
    planTitle: 'Unlock over 15 courses.',
  },
  {
    planTitle: 'Save upto 1000 words',
  },
  {
    planTitle: 'Unlock over 120 learning courses.',
  },
  {
    planTitle: 'Maintain notes and access them anytime',
  },
];

function PlanDescriptionItem({ planTitle }: { planTitle: string }) {
  return (
    <HStack
      space="md"
      sx={{
        '@base': {
          w: '$full',
        },
        '@md': {
          w: '$1/2',
        },
      }}
      mb="$5"
    >
      <Icon w="$6" h="$6" as={CheckCircle2} color="$primary500" />
      <Text
        flex={1}
        fontSize="$sm"
        sx={{
          _light: {
            color: '$backgroundLight800',
          },
          _dark: {
            color: '$backgroundDark50',
          },
        }}
        fontWeight="$normal"
      >
        {planTitle}
      </Text>
    </HStack>
  );
}

function PlanOption() {
  return (
    <Box>
      <HStack
        alignItems="center"
        sx={{
          '@base': {
            mt: '$7',
          },
          '@md': {
            mt: '$8',
          },
        }}
        mb="$5"
        space="sm"
      >
        <Text color="$primary500" fontSize="$xl" fontWeight="$bold">
          50% off
        </Text>
        <Text
          sx={{
            _light: {
              color: '$backgroundLight500',
            },
            _dark: {
              color: '$backgroundDark400',
            },
          }}
          fontSize="$sm"
          fontWeight="$medium"
        >
          until Sunday, June 25th
        </Text>
      </HStack>
      <HStack flexWrap="wrap">
        {planOptionsList.map((plan, index) => (
          <PlanDescriptionItem key={index} {...plan} />
        ))}
      </HStack>
    </Box>
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
  const getCurrentTabStyle = () => {
    return tabName === currentTab
      ? {
          _light: {
            bg: '$primary500',
            color: '$backgroundLight50',
          },
          _dark: {
            bg: '$primary500',
            color: '$backgroundDark50',
          },
        }
      : {
          _light: {
            bg: '$primary100',
            color: '$backgroundLight500',
          },
          _dark: {
            bg: '$backgroundDark700',
            color: '$backgroundDark40',
          },
        };
  };

  return (
    <Pressable
      onPress={() => {
        handleTabChange(tabName);
      }}
      flex={1}
      rounded={tabName === currentTab ? '$sm' : '$none'}
      overflow="hidden"
    >
      <Text
        textAlign="center"
        fontSize="$sm"
        fontWeight="$medium"
        sx={{
          ...getCurrentTabStyle(),
        }}
        py="$4"
      >
        {tabName}
      </Text>
    </Pressable>
  );
}

function OptionSection() {
  const [tabName, setTabName] = React.useState('Premium');

  return (
    <>
      <HStack
        mt="$5"
        alignItems="center"
        w="$full"
        rounded="$sm"
        overflow="hidden"
      >
        <TabItem
          tabName="Free"
          currentTab={tabName}
          handleTabChange={(tab) => setTabName(tab)}
        />
        <TabItem
          tabName="Premium"
          currentTab={tabName}
          handleTabChange={(tab) => setTabName(tab)}
        />
        <TabItem
          tabName="Business"
          currentTab={tabName}
          handleTabChange={(tab) => setTabName(tab)}
        />
      </HStack>
      {tabName === 'Free' ? (
        <Text
          fontSize="$sm"
          mb="$8"
          sx={{
            '@base': {
              mt: '$7',
            },
            '@md': {
              mt: '$8',
            },
            '_light': {
              color: '$backgroundLight800',
            },
            '_dark': {
              color: '$backgroundDark50',
            },
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      ) : tabName === 'Business' ? (
        <Text
          fontSize="$sm"
          sx={{
            '@base': {
              mt: '$7',
            },
            '@md': {
              mt: '$8',
            },
            '_light': {
              color: '$backgroundLight800',
            },
            '_dark': {
              color: '$backgroundDark50',
            },
          }}
          mb="$8"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </Text>
      ) : (
        <PlanOption />
      )}
    </>
  );
}

function MainContent() {
  const colorMode = useColorMode();
  return (
    <Box
      sx={{
        '@base': {
          px: '$4',
          pb: '$4',
        },
        '@lg': {
          px: '$35',
        },
        '@md': {
          px: '$8',
          pb: '$8',
          borderRadius: '$md',
          minHeight: 716,
        },
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      pt="$8"
      flex={1}
    >
      <Center>
        <Image
          source={
            colorMode == 'light'
              ? require('./assets/images/subscription.png')
              : require('./assets/images/subscriptionDark.png')
          }
          w="$101"
          h="$203"
          alt="Alternate Text"
        />
      </Center>

      <Text
        sx={{
          _light: {
            color: '$backgroundLight800',
          },
          _dark: {
            color: '$backgrounddark50',
          },
        }}
        fontSize="$lg"
        textAlign="center"
        fontWeight="$bold"
        mt="$8"
      >
        Upgrade to premium
      </Text>
      <Text
        mt="$2"
        sx={{
          _light: {
            color: '$backgroundLight800',
          },
          _dark: {
            color: '$backgroundDark50',
          },
        }}
        fontSize="$sm"
        textAlign="center"
        fontWeight="$normal"
      >
        Unlock over 15 courses, 120 chats and so more!
      </Text>
      <OptionSection />

      <Button variant="solid" size="lg" mt="auto">
        <Text fontWeight="$normal" color="$backgroundLight0">
          SUBSCRIBE NOW
        </Text>
      </Button>
    </Box>
  );
}

export default function SubscriptionPlan() {
  return (
    <DashboardLayout displaySidebar={false} title="Subscription Plans">
      <MainContent />
    </DashboardLayout>
  );
}
