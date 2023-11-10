import React, { useState } from 'react';

import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  Button,
  Radio,
  Heading,
  FavouriteIcon,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  CircleIcon,
  ButtonText,
  ButtonIcon,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

type SizeType = {
  size: string;
  length: string;
};

type ShirtSizeType = SizeType & {
  chest: string;
  shoulder: string;
};

type PantSizeType = SizeType & {
  waist: string;
  hips: string;
};

const shirtSizeList: ShirtSizeType[] = [
  {
    size: 'Size',
    chest: 'Chest',
    shoulder: 'Shoulder',
    length: 'Length',
  },
  {
    size: '38',
    chest: '40.2',
    shoulder: '16.5',
    length: '29.5',
  },
  {
    size: '40',
    chest: '41.5',
    shoulder: '17.5',
    length: '30',
  },
  {
    size: '42',
    chest: '43',
    shoulder: '18.5',
    length: '30.5',
  },
  {
    size: '44',
    chest: '48.5',
    shoulder: '19.5',
    length: '30.75',
  },
  {
    size: '46',
    chest: '51',
    shoulder: '20.5',
    length: '31',
  },
  {
    size: '48',
    chest: '53.5',
    shoulder: '21.5',
    length: '21.5',
  },
  {
    size: '50',
    chest: '56',
    shoulder: '22.5',
    length: '32',
  },
];

const pantSizeList: PantSizeType[] = [
  {
    size: 'Size',
    waist: 'Waist',
    hips: 'Hips',
    length: 'Length',
  },
  {
    size: '38',
    waist: '40.2',
    hips: '16.5',
    length: '29.5',
  },
  {
    size: '40',
    waist: '41.5',
    hips: '17.5',
    length: '30',
  },
  {
    size: '42',
    waist: '43',
    hips: '18.5',
    length: '30.5',
  },
];

function ConvertValue(value: string, index: number, type: string) {
  if (type === 'cm') {
    return value;
  }
  if (index === 0) {
    return value;
  } else {
    return (Number(value) / 2.54).toFixed(2);
  }
}

function TableCell({ children, ...props }: any) {
  return (
    <Box flex={1} {...props}>
      {children}
    </Box>
  );
}

function TableRow({ children, ...props }: any) {
  return (
    <HStack
      justifyContent="space-between"
      py="$3"
      px="$4"
      w="$full"
      borderColor="$borderLight200"
      sx={{
        _dark: { borderColor: '$borderDark700' },
      }}
      borderWidth="$1"
      {...props}
    >
      {children}
    </HStack>
  );
}

function Table({ children, ...props }: any) {
  return (
    <Box w="$full" {...props}>
      {children}
    </Box>
  );
}

function ProductCard() {
  return (
    <HStack
      sx={{
        '@base': {
          py: '$0',
          px: '$0',
          _light: { bg: '$backgroundLight0' },
          _dark: { bg: '$backgroundDark800' },
        },
        '@md': {
          py: '$4',
          px: '$4',
          _light: { bg: '$backgroundLight50' },
          _dark: { bg: '$backgroundDark700' },
        },
      }}
      w="$full"
      alignItems="flex-start"
      borderRadius="$sm"
      space="md"
    >
      <Image
        sx={{
          '@base': {
            w: '$20',
            h: '$24',
          },
        }}
        rounded="$lg"
        alt="Alternate Text"
        source={require('./assets/images/babyshirt.png')}
      />

      <VStack flex={1} justifyContent="space-between">
        <Heading
          fontSize="$md"
          color="$textLight800"
          sx={{
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          Body Suit
        </Heading>
        <Text
          fontSize="$sm"
          fontWeight="$normal"
          color="$textLight400"
          sx={{
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          Mother care
        </Text>

        <Text
          fontSize="$sm"
          fontWeight="$normal"
          color="$textLight800"
          sx={{
            _dark: { color: '$textDark50' },
          }}
          mt="$5"
        >
          ₹500
        </Text>
      </VStack>
    </HStack>
  );
}

const AddToCartButton = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <HStack
      position="absolute"
      bottom="$0"
      sx={{
        '@base': {
          px: '$4',
          py: '$4',
          _light: { bg: '$backgroundLight0' },
          _dark: { bg: '$backgroundDark800' },
          position: 'absolute',
        },
        '@md': {
          px: '$0',
          py: '$0',
          position: undefined,
          bottom: undefined,
          _light: {
            bg: '$none',
            _dark: {
              bg: '$none',
            },
          },
        },
      }}
      mt="auto"
      w="$full"
      space="lg"
      alignItems="center"
      flex={1}
    >
      <Button
        size="lg"
        variant="solid"
        onPress={() => setFavorite(!favorite)}
        bg="$primary50"
        sx={{
          _dark: { bg: '$backgroundDark700' },
        }}
      >
        {favorite ? (
          <ButtonIcon
            as={FavouriteIcon}
            size="lg"
            color="$primary500"
            sx={{
              _light: {
                props: {
                  fill: '$primary500',
                },
              },
              _dark: {
                color: '$primary300',
                props: {
                  fill: '$primary300',
                },
              },
            }}
          />
        ) : (
          <ButtonIcon
            as={FavouriteIcon}
            size="lg"
            color="$primary500"
            sx={{
              _dark: {
                color: '$primary300',
              },
            }}
          />
        )}
      </Button>

      <Button flex={1} size="lg" variant="solid">
        <ButtonText fontWeight="$medium">ADD TO CART</ButtonText>
      </Button>
    </HStack>
  );
};

function SizeMeasurmentTable({
  sizeOptions,
  caption,
  measurement,
  value,
  setValue,
  ...props
}: any & {
  sizeOptions: PantSizeType[] | ShirtSizeType[];
  caption: string;
  measurement: string;
  value: string;
  setValue: (prev: string) => void;
}) {
  return (
    <Table justifyContent="flex-end" {...props}>
      <RadioGroup
        key={Math.random()}
        w="$full"
        accessibilityLabel="favorite number"
        value={value}
        onChange={(nextValue: any) => {
          setValue(nextValue);
        }}
      >
        <HStack
          flex={1}
          py="$3"
          w="$full"
          justifyContent="center"
          sx={{
            _light: {
              bg: '$backgroundLight50',
              borderColor: '$borderLight200',
            },
            _dark: {
              bg: '$backgroundDark700',
              borderColor: '$borderDark700',
            },
          }}
          borderTopRightRadius="$sm"
          borderTopLeftRadius="$sm"
          borderWidth="$1"
          borderBottomWidth="$0"
        >
          <Heading
            fontSize="$sm"
            color="$textLight500"
            sx={{
              _dark: { color: '$textDark400' },
            }}
          >
            {caption}
          </Heading>
        </HStack>
        {sizeOptions.map(
          (sizeObject: ShirtSizeType | PantSizeType, index: number) => {
            return (
              <TableRow
                key={index}
                borderBottomRadius={index === sizeOptions.length - 1 ? 'sm' : 0}
              >
                <TableCell>
                  {index !== 0 && (
                    <Radio
                      value={index.toString()}
                      accessibilityLabel={'radio' + index}
                    >
                      <RadioIndicator mr="$2">
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                    </Radio>
                  )}
                </TableCell>
                {Object.values(sizeObject).map((val: string, ind: number) => {
                  const isSelectedSize = index === Number(value);
                  const isHeaderRow = index === 0;
                  return (
                    <TableCell key={ind}>
                      {isHeaderRow ? (
                        <Heading
                          fontSize="$2xs"
                          color={
                            isSelectedSize ? '$textLight800' : '$textLight500'
                          }
                          sx={{
                            '@sm': {
                              fontSize: '$sm',
                            },
                            '_dark': {
                              color: isSelectedSize
                                ? '$textDark50'
                                : '$textDark400',
                            },
                          }}
                        >
                          {ConvertValue(val, index, measurement)}
                        </Heading>
                      ) : (
                        <Text
                          fontWeight="$medium"
                          fontSize="$sm"
                          sx={{
                            _light: {
                              color: isSelectedSize
                                ? '$textLight800'
                                : '$textLight500',
                            },
                            _dark: {
                              color: isSelectedSize
                                ? '$textDark50'
                                : '$textDark400',
                            },
                          }}
                        >
                          {ConvertValue(val, index, measurement)}
                        </Text>
                      )}
                    </TableCell>
                  );
                })}

                {Object.keys(sizeObject).length <
                  Object.keys(sizeOptions[0]).length &&
                  Array.from(
                    {
                      length:
                        Object.keys(sizeOptions[0]).length -
                        Object.keys(sizeObject).length,
                    },
                    (_, k) => <TableCell key={k} />
                  )}
              </TableRow>
            );
          }
        )}
      </RadioGroup>
    </Table>
  );
}

function MeasurementUnit({
  measurement,
  setMeasurement,
}: {
  measurement: string;
  setMeasurement: (prev: string) => void;
}) {
  const [selectedMeasurement, setSelectedMeasurement] = useState<string>('cm');

  const handleMeasurementClick = (measurement: string) => {
    setMeasurement(measurement);
    if (measurement !== selectedMeasurement) {
      setSelectedMeasurement(measurement);
    } else {
      setSelectedMeasurement('');
    }
  };
  return (
    <>
      <HStack
        w="$full"
        justifyContent="flex-end"
        space="sm"
        sx={{
          '@base': {
            mt: '$1',
          },
          '@md': {
            mt: '$5',
          },
        }}
      >
        <Button
          py="$1"
          px="$3"
          borderRadius="$sm"
          onPress={() => handleMeasurementClick('cm')}
          sx={{
            _light: {
              'bg': measurement === 'cm' ? '$primary200' : '$primary50',
              ':hover': {
                bg: '$primary100',
              },
              ':pressed': {
                bg: '$primary50',
              },
            },
            _dark: {
              'bg':
                measurement === 'cm'
                  ? '$backgroundDark500'
                  : '$backgroundDark700',
              ':hover': {
                bg: '$backgroundDark600',
              },
              ':active': {
                bg: '$backgroundDark700',
              },
            },
          }}
        >
          <ButtonText
            fontWeight="$medium"
            textAlign="center"
            fontSize="$sm"
            color={measurement === 'cm' ? '$textLight900' : '$textLight800'}
            sx={{
              _dark: {
                color: measurement === 'cm' ? '$textDark50' : '$textDark100',
              },
            }}
          >
            cm
          </ButtonText>
        </Button>
        <Button
          py="$1"
          px="$3"
          borderRadius="$md"
          onPress={() => handleMeasurementClick('inch')}
          sx={{
            _light: {
              'bg': measurement === 'inch' ? '$primary200' : '$primary50',
              ':hover': {
                bg: '$primary100',
              },
              ':pressed': {
                bg: '$primary50',
              },
            },
            _dark: {
              'bg':
                measurement === 'inch'
                  ? '$backgroundDark500'
                  : '$backgroundDark700',
              ':hover': {
                bg: '$backgroundDark600',
              },
              ':pressed': {
                bg: '$backgroundDark700',
              },
            },
          }}
        >
          <ButtonText
            fontWeight="$medium"
            textAlign="center"
            fontSize="$sm"
            color={measurement === 'inch' ? '$textLight900' : '$textLight800'}
            sx={{
              _dark: {
                color: measurement === 'inch' ? '$textDark50' : '$textDark100',
              },
            }}
          >
            in
          </ButtonText>
        </Button>
      </HStack>
    </>
  );
}

function MainContent() {
  const [measurement, setMeasurement] = React.useState('cm');
  const [shirtSize, setShirtSize] = React.useState('5');
  const [pantSize, setPantSize] = React.useState('3');
  return (
    <Box
      flex={1}
      w="$full"
      bg="$backgroundLight0"
      sx={{
        '_dark': { bg: '$backgroundDark800' },
        '@lg': {
          px: '$35',
        },
        '@base': {
          py: '$4',
          px: '$4',
        },
        '@md': {
          borderRadius: '$sm',
          py: '$8',
        },
      }}
      alignItems="center"
      mb="$16"
    >
      <ProductCard />
      <MeasurementUnit
        measurement={measurement}
        setMeasurement={setMeasurement}
      />

      <SizeMeasurmentTable
        sizeOptions={shirtSizeList}
        caption="SHIRT SIZE & FIT GUIDE"
        measurement={measurement}
        value={shirtSize}
        setValue={setShirtSize}
        mt="$3"
      />
      <SizeMeasurmentTable
        sizeOptions={pantSizeList}
        caption="PANT SIZE & FIT GUIDE"
        measurement={measurement}
        value={pantSize}
        setValue={setPantSize}
        mt="$8"
        mb="$4"
      />

      <HStack
        w="$full"
        sx={{
          '@base': {
            display: 'none',
          },
          '@md': {
            display: 'flex',
          },
        }}
      >
        <AddToCartButton />
      </HStack>
    </Box>
  );
}

export default function SizeChart() {
  return (
    <>
      <DashboardLayout showIcons displaySidebar={true} title="Size Chart">
        <MainContent />
      </DashboardLayout>
      <VStack
        sx={{
          '@base': {
            display: 'flex',
          },
          '@md': {
            display: 'none',
          },
        }}
      >
        <AddToCartButton />
      </VStack>
    </>
  );
}
