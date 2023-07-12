import React, { useState } from 'react';
import { Switch, VStack, Text, HStack } from '../../../ui-components';

const SwitchStory = ({ isValue: isValueProp = false, ...props }: any) => {
  const [value, setValue] = useState(isValueProp);
  return (
    <Switch
      value={value}
      onValueChange={(val: any) => setValue(val)}
      {...props}
    />
  );
};

export default SwitchStory;

export { Switch, VStack, Text, HStack };
