import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, Text } from '../../../ui-components';

export const TextStory = ({ size, text, ...props }: any) => {
  return (
    <Text size={size} {...props}>
      Hello Gluestack
    </Text>
  );
};

export { Text };
