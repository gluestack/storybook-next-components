import React from 'react';

import {
  Box,
  ChevronRightIcon,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

type PrivacySetting = {
  title: string;
  defaultOption: string;
};

const settings: PrivacySetting[] = [
  { title: 'Blocked Users', defaultOption: 'None' },
  { title: 'Phone Number', defaultOption: 'Nobody' },
  { title: 'Last Seen & Online', defaultOption: 'My Contacts' },
  { title: 'Profile Photo', defaultOption: 'Nobody' },
  { title: 'Calls', defaultOption: 'My Contacts' },
  { title: 'Groups', defaultOption: 'Everybody' },
];

function OptionItem({ title, defaultOption }: PrivacySetting, key: number) {
  return (
    <Pressable
      px="$4"
      py="$2"
      sx={{
        '_light': {
          ':hover': {
            bg: '$backgroundLight100',
          },
          ':pressed': {
            bg: '$primary200',
          },
        },
        '_dark': {
          ':hover': {
            bg: '$backgroundDark700',
          },
          ':pressed': {
            bg: '$backgroundDark600',
          },
        },
        '@md': {
          rounded: '$md',
        },
      }}
      key={key}
    >
      <HStack justifyContent="space-between" alignItems="center">
        <VStack space="xs">
          <Text
            fontSize="$md"
            fontWeight="$medium"
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
          <Text
            fontSize="$xs"
            fontWeight="$normal"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            {defaultOption}
          </Text>
        </VStack>

        <Icon
          as={ChevronRightIcon}
          fontSize="$md"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        />
      </HStack>
    </Pressable>
  );
}

export default function PrivacySettings() {
  return (
    <DashboardLayout displaySidebar={true} title="Privacy Settings">
      <Box
        sx={{
          '@base': {
            pt: '$1',
            pb: '$5',
          },
          '@md': {
            pt: '$4',
            pb: '$8',
            px: '$4',
            rounded: '$sm',
          },
          '_light': {
            bg: '$backgroundLight0',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
      >
        <VStack space="sm" p="$4">
          {settings.map((setting, index) => (
            <OptionItem
              title={setting.title}
              defaultOption={setting.defaultOption}
              key={index}
            />
          ))}
        </VStack>
      </Box>
    </DashboardLayout>
  );
}
