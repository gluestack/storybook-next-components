import React, { useState } from 'react';
import { Switch, VStack, Text, HStack } from '../../../ui-components';

const SwitchStory = ({
  isDisabled = false,
  isEnabled: isEnabledProp = false,
  ...props
}: any) => {
  const [isEnabled, setIsEnabled] = useState(isEnabledProp);
  return (
    <Switch
      value={isEnabled}
      onValueChange={(val: any) => setIsEnabled(val)}
      isDisabled={isDisabled}
      {...props}
    />
  );
};

export default SwitchStory;

export { Switch, VStack, Text, HStack };
