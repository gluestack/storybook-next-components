import React from 'react';

import {
  AddIcon,
  Fab,
  FabIcon,
  FabLabel,
  Box,
  MenuIcon,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  SearchIcon,
  Link,
  VStack,
  HStack,
  Avatar,
  Heading,
  Text,
  Divider,
  Image,
} from '../../../ui-components';

import { CheckIcon, EditIcon, ShoppingCartIcon } from 'lucide-react-native';

const FabStory = ({
  placement = 'bottom right',
  showLabel = true,
  showIcon = true,
  ...props
}: any) => {
  return (
    <Box
      position="relative"
      bg="$trueGray200"
      h="$full"
      w="$full"
      sx={{ _web: { w: 300, h: 300 } }}
    >
      <Fab placement={placement} {...props}>
        {showIcon && (
          <FabIcon
            as={MenuIcon}
            mr={showLabel ? '$1' : '$0'}
            dataSet={{
              'component-props': JSON.stringify({
                'instance': true,
                'instance-name': 'Icon',
                'name': 'CloseIcon',
                'size': 'md',
              }),
            }}
          />
        )}
        {showLabel && <FabLabel>Menu</FabLabel>}
      </Fab>
    </Box>
  );
};

const FigmaFabStory = ({
  placement = 'bottom right',
  showLabel = true,
  _showIcon = true,
  ...props
}: any) => {
  return (
    <Box
      position="relative"
      bg="$trueGray200"
      h="$full"
      w="$full"
      sx={{ _web: { w: 300, h: 300 } }}
    >
      <Fab placement={placement} {...props}>
        <Fab.Icon
          as={MenuIcon}
          mr={showLabel ? '$1' : '$0'}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'MenuIcon',
              'size': 'md',
            }),
          }}
        />
        {showLabel && <Fab.Label>Menu</Fab.Label>}
      </Fab>
    </Box>
  );
};

export default FigmaFabStory;

export {
  FabStory,
  Fab,
  FabIcon,
  FabLabel,
  SearchIcon,
  EditIcon,
  Box,
  VStack,
  HStack,
  Avatar,
  Heading,
  Text,
  Divider,
  AddIcon,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  Image,
  Link,
  ShoppingCartIcon,
};
