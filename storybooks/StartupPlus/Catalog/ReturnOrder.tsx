import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  Button,
  Radio,
  Modal,
  Link,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
  CircleIcon,
  ModalBackdrop,
  ModalContent,
  RadioGroup,
  Icon,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import { ImageSourcePropType } from 'react-native';
import { CheckCircle2 } from 'lucide-react-native';

type ProductProps = {
  id: string;
  orderId: string;
  imageUri: ImageSourcePropType;
  item: string;
  details: string;
  size: string;
  delivery: string;
  amount: string;
};
const productList: ProductProps[] = [
  {
    id: '1',
    orderId: '#9726895435345',
    imageUri: require('./assets/images/lamp.png'),
    item: 'BEDLAMP',
    details: 'Automatic sensor,Multi color',
    size: 'Medium',
    delivery: 'Delivered',
    amount: '₹1635.00',
  },
];
const reasonList: string[] = [
  'Quality of product not as expected',
  'Received damaged product',
  'Received wrong item',
  'Don’t want product anymore',
  'Other',
];

function Card(props: ProductProps) {
  return (
    <VStack
      sx={{
        _light: {
          bg: '$backgroundDark100',
        },
        _dark: {
          bg: '$backgroundDark700',
        },
      }}
      borderRadius="$sm"
      p="$3"
      space="md"
    >
      <HStack justifyContent="space-between">
        <Text
          fontSize="$xs"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          Order : {props.orderId}
        </Text>
        <Text fontSize="$xs" color="$emerald600">
          {props.delivery}
        </Text>
      </HStack>
      <HStack space="md">
        <Link borderRadius="$sm" href="#">
          <Image source={props.imageUri} alt="Alternate Text" h="$24" w="$20" />
        </Link>
        <Box
          sx={{
            _web: {
              flexShrink: 'unset',
            },
          }}
        >
          <Link href="#">
            <Text
              fontSize="$md"
              fontWeight="$bold"
              sx={{
                _light: { color: '$textLight800' },
                _dark: { color: '$textDark50' },
              }}
            >
              {props.item}
            </Text>
          </Link>
          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            {props.details}
          </Text>
          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            Size : {props.size}
          </Text>
          <Text
            fontSize="$sm"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
            mt="$0.5"
          >
            {props.amount}
          </Text>
        </Box>
      </HStack>
    </VStack>
  );
}
function CardSection() {
  return (
    <VStack
      space="lg"
      sx={{
        '@base': {
          px: '$4',
          pt: '$5',
          pb: '$4',
        },
        '@md': {
          px: '$0',
          pt: '$0',
          pb: '$0',
        },
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
    >
      {productList.map((item, index) => {
        return <Card key={index} {...item} />;
      })}
    </VStack>
  );
}
function ReasonForReturn() {
  return (
    <Box
      sx={{
        '@base': {
          px: '$4',
          py: '$2',
          mt: '$4',
        },
        '@md': {
          px: '$0',
          py: '$0',
          mt: '$3',
        },
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      mb="$8"
    >
      <Text
        fontSize="$sm"
        fontWeight="$medium"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
        my="$3"
      >
        Reason for return
      </Text>
      <RadioGroup>
        {reasonList.map((item, index) => {
          return (
            <Box key={index} my="$3">
              <Radio
                size="lg"
                isInvalid={false}
                isDisabled={false}
                sx={{
                  _light: {
                    borderColor: '$borderLight300',
                  },
                  _dark: {
                    borderColor: '$borderDark500',
                  },
                }}
                key={index}
                value={item}
              >
                <RadioIndicator mr="$2">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>
                  <Text
                    fontSize="$sm"
                    fontWeight="$normal"
                    sx={{
                      _light: {
                        color: '$textLight500',
                      },
                      _dark: {
                        color: '$textLight400',
                      },
                    }}
                  >
                    {item}
                  </Text>
                </RadioLabel>
              </Radio>
            </Box>
          );
        })}
      </RadioGroup>
    </Box>
  );
}
function MainContent() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Box
      flex={1}
      sx={{
        '@base': {
          px: '$0',
          py: '$0',
          _light: {
            bg: '$primary50',
          },
          _dark: {
            bg: '$backgroundDark800',
          },
        },
        '@md': {
          px: '$8',
          py: '$8',
          rounded: '$sm',
          _light: {
            bg: '$backgroundLight0',
          },
          _dark: {
            bg: '$backgroundDark800',
          },
        },
        '@lg': {
          px: '$16',
        },
        '@xl': {
          px: '$35',
        },
      }}
    >
      <CardSection />
      <ReasonForReturn />
      <Modal
        isOpen={modalVisible}
        onClose={setModalVisible}
        size="lg"
        w="$full"
      >
        <ModalBackdrop />
        <ModalContent
          p="$6"
          sx={{
            '@base': {
              w: '$80',
            },
            '@md': {
              w: '$96',
            },
            '_dark': {
              bg: '$backgroundDark800',
            },
          }}
          borderRadius="$md"
        >
          <Box rounded="$xl" alignItems="center">
            <Icon
              as={CheckCircle2}
              h="$16"
              w="$16"
              sx={{
                _light: {
                  color: '$emerald500',
                },
                _dark: {
                  color: '$emerald400',
                },
              }}
            />

            <Text
              fontSize="$md"
              sx={{
                _light: {
                  color: '$textLight800',
                },
                _dark: {
                  color: '$textDark50',
                },
              }}
              textAlign="center"
              mt="$5"
            >
              Your return has been Accepted. Please retain return information
              for records.
            </Text>
            <Button variant="solid" w="$full" mt="$6">
              <Text color="$backgroundDark50" fontSize="$sm">
                VIEW ALL ORDERS
              </Text>
            </Button>
          </Box>
        </ModalContent>
      </Modal>
      <Button
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        sx={{
          '@base': {
            mx: '$4',
            mb: '$4',
          },
          '@md': {
            mx: '$0',
            mb: '$0',
          },
        }}
        variant="solid"
        mt="auto"
      >
        <Text color="$textLight50" fontSize="$sm">
          RETURN
        </Text>
      </Button>
    </Box>
  );
}

export default function ReturnOrder() {
  return (
    <DashboardLayout title="Return Order" displaySidebar>
      <MainContent />
    </DashboardLayout>
  );
}
