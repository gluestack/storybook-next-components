import React from 'react';
import { Box, HStack, Icon, Pressable, Text } from '@gluestack-ui/themed';
import {
  FileText,
  HelpCircle,
  LucideIcon,
  Server,
  Shield,
  Smartphone,
} from 'lucide-react-native';
import DashboardLayout from '../Layouts/DashboardLayout';

type OptionItemProps = {
  name: string;
  iconName: LucideIcon | typeof Icon;
};

const settings: OptionItemProps[] = [
  {
    name: 'Storage',
    iconName: Server,
  },
  {
    name: 'About',
    iconName: Smartphone,
  },
  {
    name: 'Help',
    iconName: HelpCircle,
  },
  {
    name: 'Legal',
    iconName: Shield,
  },
  {
    name: 'Terms and Conditions',
    iconName: FileText,
  },
];

function OptionItem({ name, iconName }: OptionItemProps) {
  return (
    <Pressable
      px="$4"
      py="$3"
      sx={{
        '_dark': {
          ':hover': {
            bg: '$backgroundDark700',
          },
          ':pressed': {
            bg: '$backgroundDark600',
          },
        },
        '_light': {
          ':hover': {
            bg: '$backgroundLight100',
          },
          ':pressed': {
            bg: '$primary200',
          },
        },
        '@md': {
          rounded: '$md',
        },
      }}
    >
      <HStack alignItems="center" space="lg">
        <Icon
          as={iconName}
          fontSize="$lg"
          sx={{
            _light: {
              color: '$backgroundLight500',
            },
            _dark: {
              color: '$backgroundDark400',
            },
          }}
        />

        <Text
          fontSize="$md"
          fontWeight="$normal"
          sx={{
            _light: {
              color: '$backgroundLight800',
            },
            _dark: {
              color: '$backgroundDark50',
            },
          }}
        >
          {name}
        </Text>
      </HStack>
    </Pressable>
  );
}

export default function General() {
  return (
    <DashboardLayout displaySidebar={true} title="General">
      <Box
        sx={{
          '_light': {
            bg: '$backgroundLight0',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
          '@base': {
            px: '$0',
            py: '$3',
          },
          '@md': {
            px: '$4',
            py: '$5',
            rounded: '$sm',
          },
        }}
      >
        {settings.map((setting, index) => {
          return <OptionItem key={index} {...setting} />;
        })}
      </Box>
    </DashboardLayout>
  );
}
