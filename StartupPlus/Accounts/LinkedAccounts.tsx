import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Box, HStack, Image, Switch, Text } from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

type LinkedAccountProp = {
  imageUri: ImageSourcePropType;
  text: string;
  isChecked: boolean;
};

const itemList: LinkedAccountProp[] = [
  {
    imageUri: require('./assets/images/facebook.png'),
    text: 'Facebook',
    isChecked: true,
  },
  {
    imageUri: require('./assets/images/twitter.png'),
    text: 'Twitter',
    isChecked: false,
  },
  {
    imageUri: require('./assets/images/google.png'),
    text: 'Google',
    isChecked: false,
  },
  {
    imageUri: require('./assets/images/apple.png'),
    text: 'Apple',
    isChecked: false,
  },
];
const Main = () => {
  return (
    <Box
      sx={{
        '@base': { py: '$3', px: '$0' },
        '@md': { py: '$5', px: '$4', rounded: '$sm' },
        '_light': { bg: '$backgroundLight0' },
        '_dark': { bg: '$backgroundDark800' },
      }}
    >
      {itemList.map((item, index) => {
        return <LinkedAccountCard key={index} {...item} />;
      })}
    </Box>
  );
};
const LinkedAccountCard = ({
  text,
  imageUri,
  isChecked,
}: LinkedAccountProp) => {
  const [isSwitchChecked, setIsSwitchChecked] = React.useState(isChecked);
  return (
    <HStack px="$4" py="$3" alignItems="center" space="md">
      <Image
        size="2xs"
        alt="gluestack-ui"
        resizeMode="contain"
        source={imageUri}
      />
      <Text
        fontSize="$md"
        sx={{
          _dark: { color: '$backgroundDark50' },
          _light: { color: '$backgroundLight800' },
        }}
      >
        {text}
      </Text>
      <Switch
        size="sm"
        defaultValue={isSwitchChecked}
        onValueChange={() => setIsSwitchChecked(!isSwitchChecked)}
        ml="auto"
      />
    </HStack>
  );
};
const LinkedAccounts = () => {
  return (
    <DashboardLayout title="Linked Accounts">
      <Main />
    </DashboardLayout>
  );
};

export default LinkedAccounts;
