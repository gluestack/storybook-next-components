import React from 'react';
import {
  Text,
  Divider,
  VStack,
  HStack,
  Box,
  Center,
  Heading,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';

const DividerBasic = ({ ...props }) => {
  return (
    <HStack
      flexDirection={props.orientation === 'vertical' ? 'row' : 'column'}
      h={props.orientation === 'vertical' ? 30 : 'auto'}
      alignItems='center'
      justifyContent='center'
    >
      <Heading
        size='sm'
        fontWeight='$semibold'
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Heading',
            size: 'sm',
          }),
        }}
        p='$3'
      >
        Firefox
      </Heading>
      <Divider {...props} />
      <Heading
        size='sm'
        fontWeight='$semibold'
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Heading',
            size: 'sm',
          }),
        }}
        p='$3'
      >
        Chrome
      </Heading>
    </HStack>
  );
};

DividerBasic.description =
  'This is a basic Divider component example.  A divider is a thin line that groups content in lists and layouts.';

export default DividerBasic;

export {
  Text,
  VStack,
  HStack,
  Divider,
  Box,
  Center,
  Heading,
  Button,
  ButtonText,
};
