import React from 'react';
import {
  HStack,
  Icon,
  Heading,
  Pressable,
  Menu,
  MenuItem,
  MenuItemLabel,
} from '@gluestack-ui/themed';
import { MoreVertical } from 'lucide-react-native';

const CardHeaderWithContextMenu = () => {
  return (
    <HStack
      m="$4"
      alignItems="center"
      justifyContent="space-between"
      bg="$backgroundLight0"
      p="$6"
      rounded="$lg"
      sx={{
        '_dark': {
          bg: '$backgroundDark950',
        },
        '@md': {
          m: '$8',
        },
        'shadowColor': '$backgroundLight800',
        // @ts-ignore
        'shadowOffset': {
          width: 0,
          height: 1,
        },
        'shadowOpacity': 0.22,
        'shadowRadius': 2.22,
        'elevation': 3,
      }}
    >
      <Heading fontWeight="normal">Member Overview</Heading>

      <Menu
        placement="bottom right"
        offset={10}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={(triggerProps) => {
          return (
            <Pressable {...triggerProps}>
              <Icon
                as={MoreVertical}
                color="$backgroundDark950"
                sx={{
                  _dark: {
                    color: '$white',
                  },
                }}
              />
            </Pressable>
          );
        }}
      >
        <MenuItem key="Profile" textValue="Profile">
          <MenuItemLabel>Profile</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Settings" textValue="Settings">
          <MenuItemLabel>Settings</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Log out" textValue="Log out">
          <MenuItemLabel>Log out</MenuItemLabel>
        </MenuItem>
      </Menu>
    </HStack>
  );
};

export default CardHeaderWithContextMenu;
