import { Box, Center, Icon } from '@gluestack-ui/themed';
import React from 'react';

import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
  AddIcon,
  InfoIcon,
  ButtonSpinner,
  ArrowUpIcon,
  Heading,
  Text,
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
  InputField,
} from '@gluestack-ui/themed';

import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';

const ButtonBasic = ({
  // leftIcon,
  // rightIcon,
  colorMode,
  ...props
}: any) => {
  return (
    <Button {...props} gap='$2'>
      {/* {leftIcon && (
        <ButtonIcon
          as={AddIcon}
          dataSet={{
            'component-props': JSON.stringify({
              instance: true,
              'instance-name': 'Icon',
              as: 'AddIcon',
              size: 'md',
              colorMode: colorMode,
            }),
          }}
        />
      )} */}

      <ButtonText
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            size: props.size,
          }),
        }}
      >
        Button
      </ButtonText>

      {/* {rightIcon && (
        <ButtonIcon
          as={AddIcon}
          dataSet={{
            'component-props': JSON.stringify({
              instance: true,
              'instance-name': 'Icon',
              as: 'AddIcon',
              size: 'md',
              colorMode: colorMode,
            }),
          }}
        />
      )} */}
    </Button>
  );
};

ButtonBasic.description =
  'This is a basic Button component example.  A button is a component that users can tap to trigger an action.';

export default ButtonBasic;

export {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
  Icon,
  AddIcon,
  InfoIcon,
  ButtonSpinner,
  EditIcon,
  ArrowUpIcon,
  Heading,
  Text,
  Box,
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
  InputField,
  ArrowLeftIcon,
  Center,
};
