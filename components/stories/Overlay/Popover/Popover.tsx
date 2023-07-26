import React, { useState } from 'react';
import {
  Text,
  Button,
  Popover,
  CloseIcon,
  Icon,
  Box,
  Center,
  Heading,
  Pressable,
  HStack,
  VStack,
  Avatar,
  CircleIcon,
  AddIcon,
} from '../../../ui-components';

import { PhoneIcon, Clock3Icon, MailIcon } from 'lucide-react-native';

const PopoverStory = ({
  showPopover: showPopoverProp = true,
  placement = 'bottom',
  size,
  ...props
}: any) => {
  console.log(size);
  return (
    <Center w='$full' h='$full'>
      <Popover
        _experimentalOverlay={false}
        offset={20}
        isOpen={true}
        placement='top'
        size={size}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={(triggerProps) => {
          return (
            <Box w={1200} pt={300} pb={100} alignItems='center'>
              <Button {...triggerProps}>
                <Button.Text>Popover</Button.Text>
              </Button>
            </Box>
          );
        }}
      >
        {/* <Popover.Backdrop /> */}
        <Popover.Content>
          <Popover.Header>
            <Heading>Welcome!</Heading>
            <Popover.CloseButton>
              <Icon as={CloseIcon} />
            </Popover.CloseButton>
          </Popover.Header>
          <Popover.Body>
            <Text>
              Join the product tour and start creating your own checklist. Are
              you ready to jump in?
            </Text>
          </Popover.Body>
          <Popover.Footer>
            <Text size='xs' flex={1}>
              Step 2 of 3
            </Text>
            {/* @ts-ignore */}
            <Button.Group space='md'>
              <Button variant='outline' action='secondary'>
                <Button.Text>Back</Button.Text>
              </Button>
              <Button>
                <Button.Text>Next</Button.Text>
              </Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Center>
  );
};

export default PopoverStory;

export {
  Text,
  Popover,
  Button,
  CloseIcon,
  Box,
  Heading,
  Icon,
  Pressable,
  HStack,
  VStack,
  Avatar,
  CircleIcon,
  AddIcon,
  Center,
  PhoneIcon,
  Clock3Icon,
  MailIcon,
  useState,
};
