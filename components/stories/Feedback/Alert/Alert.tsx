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
} from '../../../ui-components';

function AlertStory({ ...props }: any) {
  return (
    <Alert {...props}>
      <Box
        dataSet={{
          'component-props': JSON.stringify({
            instance: true,
            'instance-name': 'Icon',
            name: 'InfoIcon',
            size: 'md',
          }),
        }}
      >
        <Alert.Icon as={InfoIcon} mr='$3' />
      </Box>
      <Alert.Text>Selection successfully moved!</Alert.Text>
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
