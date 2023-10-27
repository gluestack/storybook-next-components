import React from 'react';

import {
  Box,
  Button,
  ButtonText,
  HStack,
  Icon,
  Pressable,
  Progress,
  ProgressFilledTrack,
  Text,
} from '@gluestack-ui/themed';
import {
  Cloud,
  Key,
  Languages,
  Link,
  LucideIcon,
  ShieldAlert,
  UserCog,
  UserX,
} from 'lucide-react-native';
import DashboardLayout from '../Layouts/DashboardLayout';
const Settings = () => {
  const Main = () => {
    type Setting = {
      iconName: LucideIcon | typeof Icon;
      name: string;
      option: string | null;
    };
    const settings: Setting[] = [
      {
        iconName: Key,
        name: 'Change password',
        option: null,
      },
      {
        iconName: ShieldAlert,
        name: 'General',
        option: null,
      },
      {
        iconName: UserCog,
        name: 'Manage Accounts',
        option: null,
      },
      {
        iconName: Languages,
        name: 'Language',
        option: 'English',
      },
      {
        iconName: Link,
        name: 'Linked Accounts',
        option: null,
      },
      {
        iconName: UserX,
        name: 'Disable Accounts',
        option: null,
      },
    ];

    function StorageComponent() {
      return (
        <HStack
          py="$3"
          px="$4"
          mt="$8"
          mx="$4"
          space="lg"
          sx={{
            '_dark': { bg: '$backgroundDark800' },
            '_light': { bg: '$backgroundLight0' },
            '@md': {
              mx: '$0',
            },
          }}
          rounded="$sm"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box flex={1}>
            <HStack alignItems="center" space="md">
              <Icon
                sx={{
                  _dark: { color: '$textDark400' },
                  _light: { color: '$textLight500' },
                }}
                as={Cloud}
                size="xl"
              />
              <Text
                sx={{
                  _dark: { color: '$textDark50' },
                  _light: { color: '$textLight800' },
                }}
              >
                Storage
              </Text>
            </HStack>
            <Progress mt="$3" size="sm" value={40} w="$full">
              <ProgressFilledTrack />
            </Progress>

            <Text
              sx={{
                _light: { color: '$textLight800' },
                _dark: { color: '$textDark50' },
              }}
              fontSize="$xs"
              mt="$2"
            >
              4 GB of 15 GB used
            </Text>
          </Box>
          <Button
            bg="transparent"
            sx={{
              _light: { borderColor: '$primary500' },
              _dark: { borderColor: '$borderDark500' },
            }}
            borderWidth={1}
            size="sm"
            py="$0.5"
          >
            <ButtonText
              sx={{
                _dark: { color: '$textDark500' },
                _light: { color: '$primary500' },
              }}
            >
              Buy Storage
            </ButtonText>
          </Button>
        </HStack>
      );
    }
    return (
      <>
        <Box
          sx={{
            '_dark': { bg: '$backgroundDark800' },
            '_light': { bg: '$backgroundLight0' },
            '@md': { mt: '$4' },
          }}
        >
          {settings.map((item, index) => {
            return (
              <Pressable
                sx={{
                  ':hover': {
                    _dark: { bg: '$backgroundDark600' },
                    _light: { bg: '$backgroundLight100' },
                  },
                  ':active': {
                    _dark: { bg: '$backgroundDark600' },
                    _light: { bg: '$backgroundLight200' },
                    borderRadius: '$sm',
                  },
                }}
                key={index}
                justifyContent="flex-start"
                p="$4"
                flexDirection="row"
              >
                <Icon
                  sx={{
                    _dark: { color: '$textDark400' },
                    _light: { color: '$textLight500' },
                  }}
                  size="xl"
                  mr="$4"
                  as={item.iconName}
                />
                <Text
                  sx={{
                    _dark: { color: '$textDark50' },
                    _light: { color: '$textLight800' },
                  }}
                >
                  {item.name}
                </Text>
              </Pressable>
            );
          })}
        </Box>
        <StorageComponent />
      </>
    );
  };
  return (
    <DashboardLayout title="Account Settings">
      <Main />
    </DashboardLayout>
  );
};

export default Settings;
