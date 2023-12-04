import React, { useState } from 'react';
import { HStack, Heading, Switch, Text, VStack } from '@gluestack-ui/themed';

type Props = {
  item: {
    title: string;
    text: string;
    enabled: boolean;
  };
  index: number;
  toggleSwitch: Function;
};

const INITIAL_DATA = [
  {
    title: 'Email',
    text: 'Receive email updates on comments you followed',
    enabled: true,
  },
  {
    title: 'Text messages',
    text: 'Receive updates by SMS',
    enabled: false,
  },
  {
    title: 'Browser',
    text: "We'll send via our desktop or mobile app",
    enabled: true,
  },
];

const SwitchList = ({ item, index, toggleSwitch }: Props) => {
  return (
    <HStack
      alignItems="flex-start"
      borderTopWidth="$1"
      borderTopColor="$borderDark100"
      pt="$4"
      justifyContent="space-between"
      sx={{
        _dark: {
          borderTopColor: '$borderDark700',
        },
      }}
    >
      <VStack flex={1}>
        <Heading m="$0" lineHeight={'$md'} fontSize="$sm" fontWeight="$medium">
          {item.title}
        </Heading>
        <Text
          sx={{ _dark: { color: '$backgroundLight0' } }}
          fontSize="$sm"
          mt="$0.5"
          fontWeight="$light"
          color="$gray600"
        >
          {item.text}
        </Text>
      </VStack>
      <Switch onValueChange={() => toggleSwitch(index)} value={item.enabled} />
    </HStack>
  );
};

const CardWithSwitch = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const toggleSwitch = (index: number) => {
    setData((prevData) =>
      prevData.map((item, currentIndex) =>
        index === currentIndex ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <VStack
      p="$4"
      m="$4"
      rounded="$lg"
      space="md"
      bg="$backgroundLight0"
      sx={{
        '_dark': { bg: '$backgroundDark950' },
        'shadowColor': '$gray600',
        'shadowOpacity': '$10',
        'shadowRadius': '$1',
        'elevation': '$20',
        '@md': { w: 700, p: '$6', mx: '$auto' },
      }}
    >
      <VStack>
        <Heading lineHeight="$md" fontSize="$lg" fontWeight="$medium">
          Notifications
        </Heading>
        <Text
          sx={{ _dark: { color: '$backgroundLight0' } }}
          fontSize="$sm"
          mt="$1"
          fontWeight="$light"
          color="$gray600"
        >
          Receive notifications about Gluestack UI updates.
        </Text>
      </VStack>
      {data.map((item, index) => (
        <SwitchList item={item} index={index} toggleSwitch={toggleSwitch} />
      ))}
    </VStack>
  );
};

export default CardWithSwitch;
