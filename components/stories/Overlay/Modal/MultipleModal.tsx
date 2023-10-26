import React from 'react';

import {
  Center,
  Button,
  ButtonText,
  CloseIcon,
  Text,
  Icon,
} from '../../../ui-components';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  HStack,
  Heading,
} from '../../../ui-components';

const MultipleModalStory = ({ ...props }: any) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  return (
    <>
      <Center>
        <Button onPress={() => setShowModal(true)}>
          <ButtonText>Button</ButtonText>
        </Button>
      </Center>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        {...props}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading>Order</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <VStack space="sm">
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="$medium">Sub Total</Text>
                <Text color="$blueGray400">$298.77</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="$medium">Tax</Text>
                <Text color="$blueGray400">$38.84</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="$medium">Total Amount</Text>
                <Text color="$green500">$337.61</Text>
              </HStack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowModal(false);
              }}
              sx={{ mr: '$3' }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal2(true);
              }}
            >
              <ButtonText>Continue</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={showModal2}
        onClose={() => {
          setShowModal2(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent {...props}>
          <ModalHeader>
            <Heading>Order</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Center h={100}>
              <Heading>Second Modal</Heading>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button
              onPress={() => {
                setShowModal2(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MultipleModalStory;
