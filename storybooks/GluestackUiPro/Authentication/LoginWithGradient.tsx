import React, { useState } from 'react';
import {
  Button,
  Divider,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
  Link,
  Image,
  Heading,
  useToast,
  Toast,
  ButtonIcon,
  ButtonText,
  InputField,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlError,
} from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Keyboard } from 'react-native';
import { FacebookIcon, GoogleIcon } from '../../../assets/icons/Social';
import { AlertTriangle } from 'lucide-react-native';

const USERS = [
  {
    email: 'gabrial@gmail.com',
    password: 'Gabrial@123',
  },
  {
    email: 'tom@gmail.com',
    password: 'Tom@123',
  },
  {
    email: 'thomas@gmail.com',
    password: 'Thomas@1234',
  },
];

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;


const LoginWithGradient = (_props:any) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const toast = useToast();

  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  });

  const onSubmit = (data: any) => {
    const user = USERS.find((element) => element.email === data.email);
    if (user) {
      setValidated({ emailValid: true, passwordValid: false });
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="accent" action="success">
              <Toast.Title>Logged in successfully!</Toast.Title>
            </Toast>
          );
        },
      });
      reset();
    } else {
      setValidated({ emailValid: false, passwordValid: true });
    }
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };
  return (
    <LinearGradient
      colors={['#005DB4', '#9333ea']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <HStack alignItems="center" justifyContent="center" h="$full" py="$24">
        <VStack
          w="$full"
          maxWidth={450}
          alignItems="center"
          justifyContent="center"
          p="$4"
          bg="$backgroundLight0"
          sx={{
            '_dark': {
              bg: '$backgroundDark950',
            },
            '@sm': {
              p: '$9',
            },
          }}
          space="lg"
          borderRadius="$md"
        >
          <Image
            height="$16"
            width="$16"
            source={require('../../../assets/GlustackSubstitute.png')}
          />
          <Heading
            textAlign="center"
            size="xl"
            letterSpacing={0.8}
            fontWeight="$semibold"
          >
            Log in to your account
          </Heading>
          <Text textAlign="center" fontWeight="$light">
            Start making your dreams come true
          </Text>
          <Button
            mt="$3"
            variant="outline"
            action="secondary"
            w="$full"
            onPress={() => {}}
          >
            <ButtonIcon as={GoogleIcon} />
            <ButtonText textAlign="center" fontWeight="$medium" ml="$3">
              Continue with Google
            </ButtonText>
          </Button>
          <Divider my="$2" />
          <FormControl
            isInvalid={!!errors?.email || !validated.emailValid}
            w="$full"
          >
            <Controller
              defaultValue=""
              name="email"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await loginSchema.parseAsync({ email: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    type="text"
                    placeholder="Enter your email"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.email?.message ||
                  (!validated.emailValid && 'Email ID not found')}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <Button w="$full" onPress={handleSubmit(onSubmit)}>
            <ButtonText fontWeight="$medium">Continue with email</ButtonText>
          </Button>
          <VStack my="$4">
            <Text fontWeight="$light" size="sm">
              Having trouble logging in?
            </Text>
            <Link href="" isExternal>
              <Text textAlign="center" fontWeight="$medium" size="sm">
                Contact us
              </Text>
            </Link>
          </VStack>
          <Text textAlign="center" fontWeight="$light" size="xs">
            By continuing, you acknowledge that you have read, understood, and
            agree to our terms and condition
          </Text>
        </VStack>
      </HStack>
    </LinearGradient>
  );
};

export default LoginWithGradient;