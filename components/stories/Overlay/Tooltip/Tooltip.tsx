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
  2;
  return (
    <Tooltip
      offset={10}
      placement={placement}
      isOpen={showTooltipProp}
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={(triggerProps: any) => {
        return (
          <Button {...triggerProps}>
            <Button.Text>More</Button.Text>
          </Button>
        );
      }}
    >
      <Tooltip.Content>
        <Tooltip.Text>{text}</Tooltip.Text>
      </Tooltip.Content>
    </Tooltip>
  );
};

const FigmaTooltipStory = ({
  showTooltip: _showTooltipProp = true,
  _placement = 'bottom',
  ...props
}: any) => {
  2;

  return (
    <Tooltip
      {...props}
      offset={10}
      placement='top'
      isOpen={true}
      _experimentalOverlay={false}
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={(triggerProps: any) => {
        return (
          <Center w={300} h={300} bg='$red500'>
            <Button {...triggerProps}>
              <Button.Text>More</Button.Text>
            </Button>
          </Center>
        );
      }}
    >
      <Tooltip.Content>
        <Tooltip.Text>Hello world!</Tooltip.Text>
      </Tooltip.Content>
    </Tooltip>
  );
};

export default FigmaTooltipStory;

export {
  TooltipStory,
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
