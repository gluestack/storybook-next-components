import React, { useRef, useState } from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import {
  Box,
  Button,
  ButtonText,
  EyeIcon,
  EyeOffIcon,
  HStack,
  Icon,
  Image,
  Input,
  InputField,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';

function Pin() {
  const [show, setShow] = React.useState(false);
  const firstInput = useRef<HTMLDivElement>(null);
  const secondInput = useRef<HTMLDivElement>(null);
  const thirdInput = useRef<HTMLDivElement>();
  const fourthInput = useRef<HTMLDivElement>();

  const refList = [firstInput, secondInput, thirdInput, fourthInput];

  const handleState = () => {
    setShow(!show);
  };
  const [inputFocus, setInputFocus] = useState<number>(-1);
  return (
    <VStack space="lg" my="$8">
      <HStack space="md" justifyContent="center">
        {Array.from({ length: 4 }, (_, index) => (
          <>
            <Input
              key={index}
              secureTextEntry={!show}
              w="$7/50"
              textAlign="center"
              variant="underlined"
              ref={refList[index]}
              onChangeText={(text: string | any[]) => {
                if (text.length === 1 && index < 3) {
                  refList[index + 1].current?.focus();
                  setInputFocus(index + 1);
                } else if (text.length === 0 && index > 0) {
                  refList[index - 1].current?.focus();
                }
              }}
              rounded={0}
              _light={{
                color: '$backgroundLight800',
                borderBottomColor: '$borderLight500',
              }}
              _dark={{
                color: '$backgroundDark400',
                borderBottomColor: '$borderDark100',
              }}
            >
              <InputField
                type={show ? 'text' : 'password'}
                sx={{
                  _light: { borderColor: '$borderLight400' },
                  _dark: { borderColor: '$borderDark400' },
                }}
                borderBottomWidth="$1"
                maxLength={1}
                w="$10"
              />
            </Input>
          </>
        ))}
      </HStack>
      <Box justifyContent="center" alignItems="center">
        <Pressable>
          <HStack alignItems="center" space="sm">
            <Pressable
              onPress={handleState}
              flexDirection="row"
              alignItems="center"
            >
              {show ? (
                <Icon
                  as={EyeIcon}
                  size="md"
                  sx={{
                    _light: { color: 'textLight400' },
                    _dark: { color: 'textDark500' },
                  }}
                />
              ) : (
                <Icon
                  as={EyeOffIcon}
                  size="md"
                  sx={{
                    _light: { color: 'textLight400' },
                    _dark: { color: 'textDark500' },
                  }}
                />
              )}

              <Text
                sx={{
                  _light: { color: '$textLight500' },
                  _dark: { color: '$textDark400' },
                }}
                fontSize="$sm"
                minWidth="$20"
                ml="$1"
              >
                {show ? 'Show' : "Don't Show"}
              </Text>
            </Pressable>
          </HStack>
        </Pressable>
      </Box>
    </VStack>
  );
}

export default function UpiPaymentsOne() {
  return (
    <DashboardLayout title="UPI Payment" displaySidebar={false}>
      <Box
        sx={{
          '_light': { bg: '$backgroundLight0' },
          '_dark': { bg: '$backgroundDark800' },
          '@base': { pt: '$10', pb: '$4', px: '$4' },
          '@md': { pt: '$20', pb: '$8', rounded: '$sm', px: '$9' },
        }}
        flex={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack alignItems="center">
          <Image
            sx={{ _light: { display: 'flex' }, _dark: { display: 'none' } }}
            source={require('./assets/images/Payment2.png')}
            w="$122"
            h="$170"
            alt="payment"
          />
          <Image
            sx={{ _light: { display: 'none' }, _dark: { display: 'flex' } }}
            source={require('./assets/images/Payment2Dark.png')}
            w="$122"
            alt="payment"
            h="$170"
          />
          <VStack space="sm" alignItems="center" mt="$9">
            <Text
              fontSize="$md"
              fontWeight="$medium"
              sx={{
                _light: { color: '$textLight800' },
                _dark: { color: '$textDark50' },
              }}
            >
              Enter 4-Digit UPI PIN
            </Text>
            <Text
              sx={{
                _light: { color: '$textLight500' },
                _dark: { color: '$textDark400' },
              }}
              fontSize="$sm"
            >
              Sending to kevinjohn@okaxis
            </Text>
          </VStack>
          <Pin />
        </VStack>
        <Box w="$full" mt="auto">
          <Button variant="solid" size="lg">
            <ButtonText>PROCEED</ButtonText>
          </Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
}
