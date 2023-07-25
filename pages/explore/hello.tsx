import {
  Box,
  Modal,
  Icon,
  CloseIcon,
  Heading,
  Text,
  Button,
} from '@/components';
import React from 'react';

function hello() {
  return (
    <Box>
      <Modal isOpen={true}>
        <Modal.Backdrop />
        <Modal.Content>
          <Modal.Header>
            <Heading maxWidth='80%'>Engage with Modals</Heading>
            <Modal.CloseButton>
              <Icon as={CloseIcon} />
            </Modal.CloseButton>
          </Modal.Header>
          <Modal.Body>
            <Text fontSize='$sm'>
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline' size='sm' action='secondary' mr='$3'>
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button
              size='sm'
              action='positive'
              sx={{
                bg: '$success700',
                ':hover': {
                  bg: '$success800',
                },
                ':active': {
                  bg: '$success900',
                },
                _dark: {
                  bg: '$success600',
                  ':hover': {
                    bg: '$success700',
                  },
                  ':active': {
                    bg: '$success800',
                  },
                },
              }}
            >
              <Button.Text>Explore</Button.Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
}

export default hello;
