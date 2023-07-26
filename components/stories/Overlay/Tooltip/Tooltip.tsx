import React from 'react';
import {
  Center,
  Button,
  Tooltip,
  Text,
  Avatar,
  Box,
  Heading,
  VStack,
  HStack,
  Icon,
} from '../../../ui-components';
import { Edit, Command } from 'lucide-react-native';

const TooltipStory = ({
  showTooltip: showTooltipProp = true,
  placement = 'bottom',
  text = 'Hello world',
}: any) => {
  return (
    <Tooltip
      _experimentalOverlay={false}
      offset={10}
      placement={placement}
      isOpen={showTooltipProp}
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={(triggerProps: any) => {
        return (
          <Box w={900} h={300} py='$20' alignItems='center'>
            <Button {...triggerProps}>
              <Button.Text>More</Button.Text>
            </Button>
          </Box>
        );
      }}
    >
      <Tooltip.Content>
        <Text>{text}</Text>
      </Tooltip.Content>
    </Tooltip>
  );
};

export default TooltipStory;

export {
  Tooltip,
  Center,
  Button,
  Text,
  Avatar,
  Box,
  Heading,
  Edit,
  VStack,
  Command,
  HStack,
  Icon,
};
