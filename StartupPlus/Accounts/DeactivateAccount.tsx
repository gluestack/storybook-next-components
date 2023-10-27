import React from 'react';

import {
  Box,
  Button,
  ButtonText,
  FormControl,
  HStack,
  Image,
  Input,
  InputField,
  Link,
  Text,
  Textarea,
  TextareaInput,
  VStack,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';

function Main() {
  type DeactivateForm = {
    reason: string;
    password: string;
  };
  const [deactivateForm, setDeactivateForm] = React.useState<DeactivateForm>({
    reason: '',
    password: '',
  });
  const { reason, password } = deactivateForm;

  const handleFormUpdate = (name: string, value: string) =>
    setDeactivateForm((prev) => ({ ...prev, [name]: value }));
  return (
    <Box
      sx={{
        '@base': { px: '$4', py: '$4' },
        '@md': { px: '$5', py: '$8', rounded: '$sm' },
        '@lg': { px: '$32' },
        '_light': { bg: '$backgroundLight0' },
        '_dark': { bg: '$backgroundDark800' },
      }}
      flex={1}
    >
      <Box sx={{ '@md': { mx: '$3' } }}>
        <HStack space="md" alignItems="center">
          <Image
            alt="person3"
            rounded="$3xl"
            size="xs"
            source={require('./assets/images/person3.png')}
          />
          <Box>
            <Text
              fontWeight="$bold"
              sx={{
                _light: { color: '$backgroundLight800' },
                _dark: { color: '$backgroundDark50' },
              }}
            >
              Chandler Bing
            </Text>
            <Text
              sx={{
                _light: { color: '$backgroundLight500' },
                _dark: { color: '$backgroundDark400' },
              }}
              fontSize="$xs"
            >
              chandlerbing@gmail.com
            </Text>
          </Box>
        </HStack>
        <FormControl>
          <VStack space="md" mt="$6">
            <Text
              fontSize="$md"
              fontWeight="$medium"
              sx={{
                _light: { color: '$backgroundLight800' },
                _dark: { color: '$backgroundDark50' },
              }}
            >
              Why are you disabling your account?
            </Text>
            <Textarea h="$40">
              <TextareaInput
                sx={{
                  _light: { color: '$backgroundLight800' },
                  _dark: { color: '$backgroundDark50' },
                }}
                value={reason}
                onChangeText={(txt: string) => handleFormUpdate('reason', txt)}
                placeholder="Please enter the reason for disabling your account."
              />
            </Textarea>
          </VStack>
          <VStack mt="$6" space="md">
            <Text
              fontSize="$md"
              fontWeight="$medium"
              sx={{
                _light: { color: '$backgroundLight800' },
                _dark: { color: '$backgroundDark50' },
              }}
            >
              To continue, please re-enter your password
            </Text>

            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Password" />
            </Input>
          </VStack>
          <Box mt="$3">
            <Link href="" isExternal>
              <Text color="$primary500" fontSize="$sm" mb="$5">
                Forgot Password?
              </Text>
            </Link>

            <Text
              sx={{
                '@base': { mt: '$4' },
                '@md': { mt: '$6' },
                '_light': { color: '$backgroundLight500' },
                '_dark': { color: '$backgroundDark400' },
              }}
              fontSize="$sm"
              mb="$8"
            >
              Note: If you disable, your account will reactivate the next time
              you sign in. Deleted accounts are gone forever. In either case,
              your account disappears.
            </Text>
          </Box>
        </FormControl>
      </Box>
      <Button
        mt="auto"
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>CONFIRM </ButtonText>
      </Button>
    </Box>
  );
}
const DeactivateAccount = () => {
  return (
    <DashboardLayout title="Deactivated Account">
      <Main />
    </DashboardLayout>
  );
};

export default DeactivateAccount;
