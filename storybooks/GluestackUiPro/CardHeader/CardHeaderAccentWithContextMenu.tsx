import React from 'react';
import {
  HStack,
  Icon,
  Heading,
  Menu,
  Pressable,
  MenuItem,
  MenuItemLabel,
} from '@gluestack-ui/themed';
import { MoreVertical } from 'lucide-react-native';

const CardHeaderAccentWithContextMenu = (_props: any) => {
  return (
    <HStack
      m="$3"
      alignItems="center"
      justifyContent="space-between"
      p="$6"
      borderTopWidth="$4"
      sx={{
        '_light': { bg: '$backgroundLight100', borderTopColor: '$primary500' },
        '_dark': {
          bg: '$backgroundDark800',
          borderTopColor: '$primary500',
        },
        '@md': {
          m: '$8',
        },
        'shadowColor': '$backgroundLight800',
        'shadowOffset': {
          width: 0,
          height: 1,
        },
        'shadowOpacity': 0.22,
        'shadowRadius': 2.22,
        'elevation': 3,
      }}
    >
      <Heading
        sx={{
          _light: { color: '$textLight900' },
          _dark: { color: '$textDark0' },
        }}
      >
        Member Overview
      </Heading>

      <Menu
        placement="bottom right"
        offset={10}
        trigger={(triggerProps) => {
          return (
            <Pressable {...triggerProps}>
              <Icon
                as={MoreVertical}
                sx={{
                  _light: { color: '$textLight900' },
                  _dark: {
                    color: '$textDark0',
                  },
                }}
              />
            </Pressable>
          );
        }}
      >
        <MenuItem key="Profile" textValue="Profile">
          <MenuItemLabel
            sx={{
              _light: { color: '$textLight900' },
              _dark: { color: '$textDark0' },
            }}
          >
            Profile
          </MenuItemLabel>
        </MenuItem>
        <MenuItem key="Settings" textValue="Settings">
          <MenuItemLabel
            sx={{
              _light: { color: '$textLight900' },
              _dark: { color: '$textDark0' },
            }}
          >
            Settings
          </MenuItemLabel>
        </MenuItem>
        <MenuItem key="Log out" textValue="Log out">
          <MenuItemLabel
            sx={{
              _light: { color: '$textLight900' },
              _dark: { color: '$textDark0' },
            }}
          >
            Log out
          </MenuItemLabel>
        </MenuItem>
      </Menu>
    </HStack>
  );
};

export default CardHeaderAccentWithContextMenu;
