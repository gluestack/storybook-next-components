import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Pressable,
  Divider,
  Button,
  Radio,
  Modal,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
  CircleIcon,
  Actionsheet,
  Link,
  ModalBackdrop,
  ModalContent,
  ActionsheetContent,
  RadioGroup,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';
import type { ImageSourcePropType } from 'react-native';
import { Minus, Plus } from 'lucide-react-native';

type ProductProps = {
  productId: string;
  imageUri: ImageSourcePropType;
  item: string;
  size: string;
  amount: number;
  discount: string;
};

type Detail = {
  name: string;
  nameAmount: string;
};

const productList: ProductProps[] = [
  {
    productId: '1',
    imageUri: require('./assets/images/bedlamp.png'),
    item: 'BEDLAMP',
    size: 'Size : Small',
    amount: 79,
    discount: ' (25% OFF)',
  },
  {
    productId: '2',
    imageUri: require('./assets/images/perfume.png'),
    item: 'SAFEGUARD',
    size: 'Size : Large',
    amount: 999,
    discount: ' (45% OFF)',
  },
  {
    productId: '3',
    imageUri: require('./assets/images/skin.png'),
    item: 'SKIN CARE KIT',
    size: 'Size : Medium',
    amount: 1899,
    discount: ' (60% OFF)',
  },
];

const orderDetails: Detail[] = [
  {
    name: 'Total MRP',
    nameAmount: '3,561.0',
  },
  {
    name: 'Discount on MRP',
    nameAmount: '-214.0',
  },
  {
    name: 'Coupon Discount',
    nameAmount: 'Apply Coupon',
  },
  {
    name: 'Shipping',
    nameAmount: 'Free',
  },
];
const reasonList = [
  {
    primaryText: 'Monday',
    secondaryText: '- Free Delivery',
  },
  {
    primaryText: 'Tuesday',
    secondaryText: '- Delivery Fee ₹50 ',
  },
  {
    primaryText: '2 Business Days ',
    secondaryText: '- Delivery Fee ₹150',
  },
  {
    primaryText: 'Pickup',
    secondaryText: '- Find a Location',
  },
];

function NumberOfOrder() {
  const [numberOfOrder, setNumberOfOrder] = React.useState(1);

  return (
    <HStack
      alignItems="center"
      space="xs"
      sx={{ '@sm': { props: { '@sm': { space: 'md' } } } }}
      ml="auto"
      mr="$1"
    >
      <Pressable
        p="$1.5"
        rounded="$xs"
        sx={{
          _light: {
            bg: '$primary200',
          },
          _dark: {
            bg: '$primary300',
          },
        }}
        onPress={() => {
          if (numberOfOrder === 0) {
            return numberOfOrder;
          } else {
            setNumberOfOrder(numberOfOrder - 1);
          }
          return;
        }}
      >
        <Icon
          as={Minus}
          sx={{
            '_light': {
              color: '$primary500',
            },
            '_dark': {
              color: '$primary800',
            },
            '@sm': {
              size: 'md',
            },
          }}
          size="2xs"
        />
      </Pressable>

      <Text
        fontSize="$sm"
        fontWeight="$bold"
        textAlign="center"
        minWidth="$5"
        sx={{
          _light: {
            color: '$textLight500',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
      >
        {numberOfOrder}
      </Text>

      <Pressable
        p="$1.5"
        rounded="$xs"
        sx={{
          _light: {
            bg: '$primary200',
          },
          _dark: {
            bg: '$primary300',
          },
        }}
        onPress={() => {
          setNumberOfOrder(numberOfOrder + 1);
        }}
      >
        <Icon
          as={Plus}
          sx={{
            '_light': {
              color: '$primary500',
            },
            '_dark': {
              color: '$primary800',
            },
            '@sm': {
              size: 'md',
            },
          }}
          size="2xs"
        />
      </Pressable>
    </HStack>
  );
}
function PopUp() {
  const [value, setValue] = React.useState('0');
  return (
    <>
      <VStack
        justifyContent="flex-start"
        w="$full"
        px="$6"
        pb="$6"
        sx={{
          '_light': {
            bg: '$backgroundLight0',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
          '@base': {
            pt: '$3',
          },
          '@md': {
            pt: '$6',
          },
        }}
      >
        <HStack space="md">
          <Image
            source={require('./assets/images/delivery.png')}
            alt="Alternate Text"
            h="$74"
            w="$16"
            rounded="$lg"
          />
          <VStack>
            <Text
              fontSize="$md"
              fontWeight="$bold"
              sx={{
                _light: {
                  color: '$textLight800',
                },
                _dark: {
                  color: '$textDark50',
                },
              }}
            >
              Body Suit
            </Text>
            <Text fontSize="$sm" fontWeight="$normal" color="$textLight400">
              Mother care
            </Text>
            <Text
              mt="$2"
              fontSize="$sm"
              fontWeight="$normal"
              sx={{
                _light: {
                  color: '$textLight800',
                },
                _dark: {
                  color: '$textDark50',
                },
              }}
            >
              ₹500
            </Text>
          </VStack>
        </HStack>
        <Text
          fontSize="$lg"
          sx={{
            _light: {
              color: '$textLight800',
            },
            _dark: {
              color: '$textDark50',
            },
          }}
          fontWeight="$bold"
          mt="$6"
          letterSpacing="$sm"
        >
          Choose a delivery option:
        </Text>
        <RadioGroup
          mt="$2"
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue);
          }}
        >
          {reasonList.map((item, index) => {
            return (
              <Box key={index} py="$2">
                <Radio key={index} value={index.toString()}>
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel
                    fontWeight="$medium"
                    fontSize="$md"
                    sx={{
                      _light: {
                        color: '$primary500',
                      },
                      _dark: {
                        color: '$primary300',
                      },
                    }}
                    ml="$2"
                  >
                    {item.primaryText}
                    <Text
                      fontWeight="$medium"
                      fontSize="$sm"
                      sx={{
                        _light: {
                          color: '$textLight800',
                        },
                        _dark: {
                          color: '$textLight50',
                        },
                      }}
                      letterSpacing="$lg"
                    >
                      {item.secondaryText}
                    </Text>
                  </RadioLabel>
                </Radio>
              </Box>
            );
          })}
        </RadioGroup>

        <Button variant="solid" size="lg" mt="$5">
          <Text
            fontSize="$sm"
            fontWeight="$medium"
            letterSpacing="$sm"
            color="$textLight50"
          >
            CONTINUE
          </Text>
        </Button>
      </VStack>
    </>
  );
}
function Card({ imageUri, amount, discount, item, size }: ProductProps) {
  const convertCommaSepratedNumbers = (value: number) => {
    let stringValue: any = value.toString();
    let valueAfterDecimalPoint = '';

    if (stringValue.indexOf('.') > 0)
      valueAfterDecimalPoint = stringValue.substring(
        stringValue.indexOf('.'),
        stringValue.length
      );

    stringValue = Math.floor(stringValue);
    stringValue = stringValue.toString();
    let lastThree = stringValue.substring(stringValue.length - 3);
    const otherNumbers = stringValue.substring(0, stringValue.length - 3);
    if (otherNumbers !== '') lastThree = ',' + lastThree;
    const finalResult =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
      lastThree +
      valueAfterDecimalPoint;

    return finalResult;
  };

  return (
    <HStack
      alignItems="center"
      rounded="$sm"
      sx={{
        '@base': {
          p: '$3',
        },
        '@md': {
          p: '$4',
        },
        '_light': {
          bg: '$backgroundLight100',
        },
        '_dark': {
          bg: '$backgroundDark700',
        },
      }}
    >
      <Pressable>
        <Image
          sx={{
            '@base': {
              w: '$20',
              h: '$20',
            },
            '@md': {
              w: '$16',
              h: '$16',
            },
            '@lg': {
              w: '$20',
              h: '$20',
            },
          }}
          rounded="$sm"
          alt="Product Image"
          source={imageUri}
        />
      </Pressable>

      <VStack ml="$3">
        <Link href="">
          <Text
            fontSize="$sm"
            fontWeight="$bold"
            color="$textLight800"
            sx={{
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {item}
          </Text>
        </Link>

        <Text
          fontWeight="$normal"
          fontSize="$xs"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          {size}
        </Text>

        <HStack alignItems="center">
          <Text
            fontSize="$sm"
            fontWeight="$medium"
            sx={{
              _dark: {
                color: '$textLight50',
              },
            }}
          >
            {'\u20B9'}
            {convertCommaSepratedNumbers(amount)}
          </Text>
          <Text
            ml="$1"
            fontSize="$2xs"
            color="$emerald600"
            fontWeight="$normal"
          >
            {discount}
          </Text>
        </HStack>
      </VStack>
      <NumberOfOrder />
    </HStack>
  );
}
function CardSection() {
  return (
    <VStack
      space="md"
      sx={{
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
        '@base': {
          px: '$4',
          pt: '$5',
          pb: '$4',
          mb: '$4',
        },
        '@md': {
          px: '$8',
          pt: '$8',
          pb: '$0',
          mb: '$0',
        },
        '@lg': {
          px: '$24',
        },
        '@xl': {
          px: '$35',
        },
      }}
    >
      {productList.map((item, index) => {
        return <Card key={index} {...item} />;
      })}
    </VStack>
  );
}
function OrderDetails() {
  return (
    <Box
      sx={{
        '@base': {
          px: '$4',
          py: '$4',
        },
        '@md': {
          px: '$8',
        },
        '@lg': {
          px: '$24',
        },
        '@xl': {
          px: '$35',
        },
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
      mb="$4"
    >
      <Text
        sx={{
          _dark: {
            color: '$textDark50',
          },
        }}
        fontWeight="$medium"
        fontSize="$sm"
        pb="$2"
      >
        Order Details ( 3 items )
      </Text>

      {orderDetails.map((item, index) => {
        return (
          <HStack
            py="$2"
            key={index}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              sx={{
                _dark: {
                  color: '$textDark50',
                },
              }}
              fontWeight="$normal"
              fontSize="$xs"
            >
              {item.name}
            </Text>
            {item.nameAmount === 'Apply Coupon' ? (
              <Link href="">
                <Text
                  fontSize="$xs"
                  sx={{
                    _light: {
                      color: '$primary500',
                    },
                    _dark: {
                      color: '$primary300',
                    },
                  }}
                >
                  {item.nameAmount}
                </Text>
              </Link>
            ) : (
              <Text
                fontSize="$xs"
                fontWeight="$normal"
                sx={{
                  _dark: {
                    color: '$textDark50',
                  },
                }}
              >
                {item.nameAmount}
              </Text>
            )}
          </HStack>
        );
      })}
      <Divider mt="$0.5" />
      <HStack alignItems="center" justifyContent="space-between" pt="$2">
        <Text
          fontWeight="$medium"
          fontSize="$sm"
          sx={{
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          Total Amount
        </Text>
        <Text
          fontWeight="$normal"
          fontSize="$sm"
          sx={{
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          3340.00
        </Text>
      </HStack>
    </Box>
  );
}
function DeliveryAddress() {
  return (
    <HStack
      sx={{
        '@base': {
          mb: '$3',
        },
        '@md': {
          mb: '$7',
        },
      }}
      justifyContent="space-between"
    >
      <VStack
        sx={{
          '@base': {
            flex: 0.6,
          },
          '@md': {
            flex: 1,
          },
        }}
      >
        <Text mb="$3" fontSize="$sm" fontWeight="$medium">
          Select Delivery Address
        </Text>
        <Text
          sx={{
            '@base': {
              fontSize: '$xs',
            },
            '@md': {
              fontSize: '$sm',
              lineHeight: '$lg',
            },
            '_light': {
              color: '$textLight500',
            },
            '_dark': {
              color: '$textDark400',
            },
          }}
          fontWeight="$bold"
        >
          Meagan Stith
        </Text>
        <Text
          sx={{
            '@base': {
              fontSize: '$xs',
            },
            '@md': {
              fontSize: '$sm',
              lineHeight: '$lg',
            },
            '_light': {
              color: '$textLight500',
            },
            '_dark': {
              color: '$textDark400',
            },
          }}
        >
          606-3727 Ullamcorper. Street Roseville NH 11523…
        </Text>
      </VStack>
      <Pressable>
        <Text
          sx={{
            '@base': {
              fontSize: '$xs',
            },
            '@md': {
              fontSize: '$sm',
              lineHeight: '$lg',
            },
            '_light': {
              color: '$primary500',
            },
            '_dark': {
              color: '$primary300',
            },
          }}
          fontWeight="$normal"
        >
          Change
        </Text>
      </Pressable>
    </HStack>
  );
}
function MainContent() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <Box>
        <CardSection />
        <OrderDetails />
      </Box>
      <VStack
        sx={{
          '_light': {
            bg: '$backgroundLight0',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
          '@base': {
            p: '$4',
          },

          '@md': {
            mt: '$4',
            p: '$8',
            rounded: '$sm',
          },
          '@lg': {
            px: '$24',
          },
          '@xl': {
            px: '$35',
          },
        }}
      >
        <DeliveryAddress />
        <Button
          variant="solid"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text fontSize="$sm" fontWeight="$medium" color="$textLight50">
            PLACE ORDER
          </Text>
        </Button>
        <Box
          sx={{
            '@base': {
              display: 'flex',
            },
            '@md': {
              display: 'none',
            },
          }}
        >
          <Actionsheet>
            <ActionsheetContent
              sx={{
                _light: {
                  bg: '$backgroundLight0',
                },
                _dark: {
                  bg: '$backgroundDark800',
                },
              }}
              p="$0"
            >
              <PopUp />
            </ActionsheetContent>
          </Actionsheet>
        </Box>

        <Box
          sx={{
            '@base': {
              display: 'none',
            },
            '@md': {
              display: 'flex',
            },
          }}
        >
          <Modal
            isOpen={modalVisible}
            onClose={setModalVisible}
            size="lg"
            margin="$auto"
          >
            <ModalBackdrop />
            <ModalContent
              sx={{
                '@base': {
                  w: '$full',
                },
                '@md': {
                  maxWidth: '$96',
                },
                '_light': {
                  bg: '$backgroundLight50',
                },
                '_dark': {
                  bg: '$backgroundDark800',
                },
              }}
            >
              <PopUp />
            </ModalContent>
          </Modal>
        </Box>
      </VStack>
    </>
  );
}
export default function MyCart() {
  return (
    <DashboardLayout title="My Cart">
      <MainContent />
    </DashboardLayout>
  );
}
