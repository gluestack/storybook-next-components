import React from 'react';
import {
  Alert,
  InfoIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  AlertCircleIcon,
  VStack,
  Icon,
  Box,
  Button,
} from '../../../ui-components';

function AlertStory({ ...props }: any) {
  return (
    <Alert {...props}>
      {/* <Alert.Icon as={InfoIcon} mr='$3' /> */}
      <Alert.Text>Selection successfully moved!</Alert.Text>
      <Button
        ml='$3'
        dataSet={{
          'component-props': JSON.stringify({
            instance: true,
            'instance-name': 'Button',
            variant: 'solid',
            size: 'md',
            action: 'primary',
          }),
        }}
      >
        <Button.Text>Hello</Button.Text>
      </Button>
    </Alert>
  );
}

export default AlertStory;

export {
  Alert,
  InfoIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  BellIcon,
  AlertCircleIcon,
  Icon,
  VStack,
};
