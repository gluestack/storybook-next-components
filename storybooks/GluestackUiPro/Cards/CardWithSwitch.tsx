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
      pt="$4"
      justifyContent="space-between"
      sx={{
        _light: {
          borderTopColor: '$borderLight300',
        },
        _dark: {
          borderTopColor: '$borderDark600',
        },
      }}
    >
      <VStack flex={1}>
        <Heading m="$0" lineHeight="$md" fontSize="$sm" fontWeight="$medium">
          {item.title}
        </Heading>
        <Text
          sx={{
            _light: { color: '$textLight400' },
            _dark: { color: '$textDark500' },
          }}
          fontSize="$sm"
          mt="$0.5"
          fontWeight="$light"
        >
          {item.text}
        </Text>
      </VStack>
      <Switch onValueChange={() => toggleSwitch(index)} value={item.enabled} />
    </HStack>
  );
};

const CardWithSwitch = (_props: any) => {
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
      sx={{
        '_light': { bg: '$backgroundLight100' },
        '_dark': { bg: '$backgroundDark800' },
        'shadowColor': '$backgroundLight800',
        'shadowOpacity': '$10',
        'shadowRadius': '$1',
        'elevation': '$20',
        '@md': { w: 700, p: '$6', mx: '$auto' },
      }}
    >
      <VStack>
        <Heading
          lineHeight="$md"
          sx={{
            _light: { color: '$textLight900' },
            _dark: { color: '$textDark0' },
          }}
        >
          Notifications
        </Heading>
        <Text
          sx={{
            _light: { color: '$textLight400' },
            _dark: { color: '$textDark500' },
          }}
          fontSize="$sm"
          mt="$1"
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
