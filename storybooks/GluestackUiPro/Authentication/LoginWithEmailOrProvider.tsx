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
  Heading,
  Image,
  useToast,
  Toast,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  ButtonText,
  ButtonIcon,
} from '@gluestack-ui/themed';
import { Keyboard } from 'react-native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { AlertTriangle, GithubIcon, TwitterIcon } from 'lucide-react-native';
import { FacebookIcon, GoogleIcon } from '../assets/icons/Social';
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

const LoginWithEmailOrProvider = (_props: any) => {
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
    <HStack
      alignItems="center"
      justifyContent="center"
      bg="$backgroundLight0"
      flex={1}
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
      h="$full"
    >
      <VStack
        w="$full"
        p="$4"
        maxWidth={384}
        alignItems="center"
        justifyContent="center"
        space="md"
      >
        <Image
          height="$16"
          width="$16"
          source={require('../assets/GlustackSubstitute.png')}
        />
        <Heading
          size="xl"
          sx={{
            '@md': { fontSize: '$3xl' },
          }}
          letterSpacing={0.8}
        >
          Log in to your account
        </Heading>
        <Text fontWeight="$light">Start making your dreams come true</Text>
        <FormControl
          isInvalid={!!errors?.email || !validated.emailValid}
          mt="$4"
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
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  type="text"
                  placeholder="Enter your email"
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
                (!validated.emailValid && 'User not found')}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button w="$full" onPress={handleSubmit(onSubmit)}>
          <ButtonText>Continue with email</ButtonText>
        </Button>

        <HStack
          w="$full"
          my="$2"
          alignItems="center"
          justifyContent="center"
          space="md"
        >
          <Divider flex={1} />
          <Text fontSize="$sm" fontWeight="$light">
            OR
          </Text>
          <Divider flex={1} />
        </HStack>
        <Button
          variant="outline"
          action="secondary"
          w="$full"
          onPress={() => {}}
        >
          <ButtonIcon as={GoogleIcon} />
          <ButtonText fontWeight="$medium" ml="$3">
            Continue with Google
          </ButtonText>
        </Button>
        <Button
          variant="outline"
          action="secondary"
          w="$full"
          onPress={() => {}}
        >
          <ButtonIcon as={TwitterIcon} />
          <ButtonText fontWeight="$medium" ml="$3">
            Continue with Twitter
          </ButtonText>
        </Button>
        <Button
          variant="outline"
          action="secondary"
          w="$full"
          onPress={() => {}}
        >
          <ButtonIcon as={GithubIcon} />
          <ButtonText fontWeight="$medium" ml="$3">
            Continue with GitHub
          </ButtonText>
        </Button>
        <HStack space="sm">
          <Text
            sx={{ _dark: { color: '$backgroundLight0' } }}
            fontSize="$sm"
            letterSpacing="$lg"
          >
            Having issues?
          </Text>
          <Link href="" isExternal>
            <Text size="sm" fontWeight="$semibold">
              Contact us
            </Text>
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default LoginWithEmailOrProvider;
