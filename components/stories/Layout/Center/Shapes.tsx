import type { ComponentStory } from '@storybook/react-native';
import { Text, HStack, Center } from '../../../ui-components';
import React from 'react';

type MyCenterStory = ComponentStory<typeof Center>;

const ShapeExample: MyCenterStory = ({ ...props }: any) => {
  return (
    <HStack space={'md'}>
      <Center bg="$pink800" h={60} w={60} borderRadius={999} {...props}>
        <Text
          color="white"
          fontWeight="$bold"
          dataSet={{
            'component-props': JSON.stringify({
              'is-text-style': true,
              'component-name': 'Text',
              'size': 'md',
            }),
          }}
        >
          Circle
        </Text>
      </Center>
    </HStack>
  );
};

export default ShapeExample;

// Shapes.parameters = {
//   // options: {
//   //   withKnobs: {
//   //     disable: true, // do not show the knobs addon on this story
//   //   },
//   // },
//   controls: {
//     exclude: /.*/g,
//   },
//   docs: {
//     description: {
//       story:
//         "Put any child element inside it, give it any width or/and height. It'll ensure the child is centered.",
//     },
//   },
// };
