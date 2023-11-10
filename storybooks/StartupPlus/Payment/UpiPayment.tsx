import React from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  ButtonText,
  Center,
  ChevronDownIcon,
  Icon,
  Input,
  InputField,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Text,
  VStack,
} from '@gluestack-ui/themed';

function PersonInformation() {
  return (
    <>
      <Avatar h="$32" w="$32">
        <AvatarImage source={require('./assets/images/Payment1.png')} />
      </Avatar>
      <VStack space="sm" alignItems="center" mt="$1">
        <Text
          sx={{
            _light: { color: '$textLight800' },
            _dark: { color: '$textDark50' },
          }}
          fontSize="$md"
          fontWeight="$normal"
        >
          Paying to Kevin John
        </Text>
        <Text
          sx={{
            _light: { color: '$textLight500' },
            _dark: { color: '$textDark400' },
          }}
          fontSize="$sm"
          fontWeight="$bold"
        >
          Kevinjohn21@okaxis
        </Text>
      </VStack>
    </>
  );
}

function InputFields() {
  return (
    <VStack
      sx={{ '@base': { mt: '$5' }, '@md': { mt: '$12' } }}
      space="md"
      w="$full"
    >
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Email" />
      </Input>

      <Select>
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="Select Bank" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="SBI" value="sbi" />
            <SelectItem label="ICICI" value="icici" />
            <SelectItem label="Axis Bank" value="axis bank" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </VStack>
  );
}
const Main = () => {
  return (
    <>
      <Box
        sx={{
          '@base': { px: '$4', py: '$5' },
          '@md': { px: '$32', py: '$8', rounded: '$sm' },
          '_light': { bg: '$backgroundLight0' },
          '_dark': { bg: '$backgroundDark800' },
        }}
        flex={1}
        justifyContent="space-between"
      >
        <Center mb="$10">
          <VStack width="$full" alignItems="center">
            <PersonInformation />
            <InputFields />
          </VStack>
        </Center>
        <Button variant="solid" size="lg" mt="auto">
          <ButtonText>SEND</ButtonText>
        </Button>
      </Box>
    </>
  );
};
const UpiPayment = () => {
  return (
    <DashboardLayout displaySidebar={false} title="UPI Payment">
      <Main />
    </DashboardLayout>
  );
};

export default UpiPayment;
