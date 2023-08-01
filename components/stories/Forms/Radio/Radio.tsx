import React from 'react';
/* eslint-disable no-console */
// @ts-ignore
import { CircleIcon } from '../../../ui-components';
import {
  Center,
  Radio,
  VStack,
  HStack,
  Box,
  Heading,
  Text,
  FormControl,
} from '../../../ui-components';

const RadioStory = ({ ...props }: any) => {
  const [values, setValues]: any = React.useState(
    props.isActive ? 'Default' : ''
  );
  return (
    <Radio.Group value={values} onChange={setValues}>
      <Radio
        value='Default'
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        {...props}
      >
        <Radio.Indicator>
          <Radio.Icon
            as={CircleIcon}
            dataSet={{
              'component-props': JSON.stringify({
                instance: true,
                'instance-name': 'Icon',
                name: 'CircleIcon',
                size: props.size,
              }),
            }}
          />
        </Radio.Indicator>
        <Radio.Label ml='$2'>Default</Radio.Label>
      </Radio>
    </Radio.Group>
  );
};

export default RadioStory;

export {
  Radio,
  CircleIcon,
  Center,
  VStack,
  HStack,
  Box,
  Heading,
  Text,
  FormControl,
};
