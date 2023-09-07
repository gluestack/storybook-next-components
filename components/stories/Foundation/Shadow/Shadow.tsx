import React from 'react';
import { Center, Text } from '../../../ui-components';

function ShadowStory({ ...props }: any) {
  const shadowProps: any = {};
  shadowProps[props.variant] = props.values;

  return (
    <Center
      h={150}
      w={400}
      bg='$white'
      {...shadowProps}
      dataSet={{
        'component-props': JSON.stringify({
          name: 'Shadow',
          variant: props.variant,
          value: props.values,
        }),
      }}
    >
      <Text>
        {props.variant} : {props.values}
      </Text>
    </Center>
  );
}

export default ShadowStory;

export { Center, Text };
