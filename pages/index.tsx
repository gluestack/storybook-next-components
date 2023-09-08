import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';
import {
  Box,
  Toast,
  VStack,
  ToastTitle,
  ToastDescription,
  CloseIcon,
  Icon,
  Center,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Heading,
  Button,
  ButtonText,
  HStack,
  Badge,
  BadgeText,
  BadgeIcon,
} from '@gluestack-ui/themed';

export const CustomModal = () => {
  return (
    <Center h={700} w={700} bg='$black' py='$12'>
      <VStack w={400} rounded='$md' bg='$white' p='$4' space='md'>
        <HStack alignItems='center' justifyContent='space-between'>
          <Heading>Explore Modal</Heading>
          <Icon as={CloseIcon} w='$6' h='$6' />
        </HStack>
        <Text>
          Elevate user interactions with our versatile modals. Seamlessly
          integrate notifications, forms, and media displays. Make an impact
          effortlessly.
        </Text>
        <HStack justifyContent='flex-end' space='md'>
          <Button>
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button>
            <ButtonText>Submit</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
};

const Home: NextPage = () => {
  return <>Hello</>;
};

export default Home;
