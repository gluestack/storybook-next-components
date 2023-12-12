import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  FormControl,
  HStack,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
  Link,
  Image,
  useToast,
  Toast,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  ButtonText,
  ButtonIcon,
  AvatarImage,
  ToastTitle,
} from '@gluestack-ui/themed';
import {
  AlertTriangle,
  GithubIcon,
  StarIcon,
  TwitterIcon,
} from 'lucide-react-native';
import { Keyboard } from 'react-native';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  GoogleIcon,
  QuotesLeftIcon,
  QuotesRightIcon,
} from '../../../assets/icons/Social';
import { LinkText } from '@gluestack-ui/themed';

const signUpSchema = z.object({
  name: z.string().min(3, 'Enter atleast 3 characters'),
  email: z.string().min(1, 'Email is required').email(),
  password: z
    .string()
    .min(6, 'Must be at least 8 characters in length')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character'
    ),
});

type SignUpSchemaType = z.infer<typeof signUpSchema>;

const profileDetail = {
  profileQuote: 'What can I say - I fell in love with gluestack-ui pro.',
  profileName: 'Geetanjali Shree',
  profileEmail: 'geetanjalis@geekyants.com',
  profileImg: require('../../../assets/AuthModule/avatar.jpeg'),
  profileRating: [1, 2, 3, 4, 5],
};

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });
  const toast = useToast();
  const onSubmit = (_data: SignUpSchemaType) => {
    toast.show({
      placement: 'bottom right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <ToastTitle>Signed up successfully</ToastTitle>
          </Toast>
        );
      },
    });
    reset();
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      sx={{
        _light: { bg: '$backgroundLight50' },
        _dark: {
          backgroundColor: '$backgroundDark900',
        },
      }}
      h="$full"
    >
      <VStack
        alignItems="center"
        justifyContent="center"
        space="lg"
        w="$full"
        flex={1}
        p="$6"
        mx="$2"
        maxWidth={450}
        sx={{
          '_light': {
            bg: '$backgroundLight100',
            shadowColor: '$backgroundLight800',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          },
          '_dark': {
            backgroundColor: '$backgroundDark800',
            shadowColor: '$backgroundDark100',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          },
          '@md': {
            p: '$8',
          },
          '@lg': { mr: '$6' },
        }}
        borderRadius="$md"
      >
        <Image
          height="$16"
          width="$16"
          source={require('../../../assets/GlustackSubstitute.png')}
        />
        <Heading fontWeight="$medium" size="2xl">
          Create an account
        </Heading>
        <HStack space="sm">
          <Text fontWeight="$light" size="md">
            Already have an account?
          </Text>
          <Link href="" isExternal>
            <LinkText fontWeight="$medium" size="md">
              Log in
            </LinkText>
          </Link>
        </HStack>
        <FormControl isInvalid={!!errors.name} isRequired={true} w="$full">
          <FormControlLabel alignItems="flex-start">
            <FormControlLabelText mr="$1">Name</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="name"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ name: value });
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
            <FormControlErrorText>{errors?.name?.message}</FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl isInvalid={!!errors.email} isRequired={true} w="$full">
          <FormControlLabel alignItems="flex-start">
            <FormControlLabelText mr="$1">Email</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="email"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ email: value });
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
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl isInvalid={!!errors.password} isRequired={true} w="$full">
          <FormControlLabel alignItems="flex-start">
            <FormControlLabelText mr="$1">Password</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ password: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  type="password"
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
              {errors?.password?.message}
            </FormControlErrorText>
          </FormControlError>

          <FormControlHelper>
            <FormControlHelperText fontSize="$sm">
              At least 8 characters long
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>

        <Button w="$full" onPress={handleSubmit(onSubmit)}>
          <ButtonText>Create Account</ButtonText>
        </Button>
        <HStack
          w="$full"
          my="$2"
          alignItems="center"
          space="md"
          justifyContent="center"
        >
          <Divider flex={1} />
          <Text size="xs" fontWeight="$light">
            Or Sign Up With
          </Text>
          <Divider flex={1} />
        </HStack>
        <HStack w="$full" justifyContent="space-between" space="md">
          <Button
            flex={1}
            action="secondary"
            variant="outline"
            onPress={() => {}}
          >
            <ButtonIcon as={GoogleIcon} />
          </Button>
          <Button
            flex={1}
            action="secondary"
            variant="outline"
            onPress={() => {}}
          >
            <ButtonIcon
              as={TwitterIcon}
              fill="$primary500"
              color="$primary500"
            />
          </Button>
          <Button
            flex={1}
            action="secondary"
            variant="outline"
            onPress={() => {}}
          >
            <ButtonIcon as={GithubIcon} />
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default SignUpForm;
