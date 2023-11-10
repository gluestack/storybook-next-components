import React from 'react';
import {
  HStack,
  Text,
  VStack,
  Divider,
  Box,
  Link,
  useBreakpointValue,
  Badge,
  Heading,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';

type MutualFund = {
  name: string;
  sip: string;
  investment: string;
  investmentValue: string;
  current: string;
  currentValue: string;
  return: string;
  returnvalue: string;
};
const mutualFundList: MutualFund[] = [
  {
    name: 'Aditya Birla Sun Life Flexi Cap- Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '$450.54',
    current: 'Current Value',
    currentValue: '$106.58',
    return: 'Returns',
    returnvalue: '14%',
  },
  {
    name: 'Axis Sun Life Flexi Cap- Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '$446.61',
    current: 'Current Value',
    currentValue: '$710.68',
    return: 'Returns',
    returnvalue: '12%',
  },

  {
    name: 'Aditya Birla Blue Chip- Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '$490.51',
    current: 'Current Value',
    currentValue: '$739.65',
    return: 'Returns',
    returnvalue: '10%',
  },
  {
    name: 'Kotak Flexi Cap Mutual Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '$630.44',
    current: 'Current Value',
    currentValue: '$928.41',
    return: 'Returns',
    returnvalue: '15%',
  },
  {
    name: 'Sun Life Flexi Cap- Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '$169.43',
    current: 'Current Value',
    currentValue: '$275.43',
    return: 'Returns',
    returnvalue: '8%',
  },
  {
    name: 'Live Life Flexi Cap- Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '$202.87',
    current: 'Current Value',
    currentValue: '$406.27',
    return: 'Returns',
    returnvalue: '20%',
  },
  {
    name: 'GROW Mutual Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '$328.85',
    current: 'Current Value',
    currentValue: '$149.78',
    return: 'Returns',
    returnvalue: '18%',
  },
  {
    name: 'Strength Mutual Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '$105.55',
    current: 'Current Value',
    currentValue: '$351.02',
    return: 'Returns',
    returnvalue: '10%',
  },
  {
    name: 'Sunflower Flexi Cap- Fund',
    sip: 'SIP x 6',
    investment: 'Investment',
    investmentValue: '$782.01',
    current: 'Current Value',
    currentValue: '$778.35',
    return: 'Returns',
    returnvalue: '12%',
  },
];

function TotalInvested() {
  return (
    <HStack
      space="lg"
      sx={{
        '@base': {
          mb: '$5',
        },
        '@md': {
          mb: '$8',
        },
      }}
    >
      <VStack
        flex={1}
        py="$3"
        rounded="$sm"
        alignItems="center"
        borderWidth="$1"
        space="xs"
        sx={{
          _light: {
            borderColor: '$primary800',
          },
          _dark: {
            borderColor: '$primary500',
          },
        }}
      >
        <Heading
          fontWeight="$medium"
          sx={{
            '_light': {
              color: '$primary800',
            },
            '_dark': {
              color: '$primary500',
            },
            '@base': {
              fontSize: '$xl',
            },
            '@md': {
              fontSize: '$2xl',
            },
          }}
        >
          $15303.00
        </Heading>
        <Text
          fontWeight="$medium"
          sx={{
            '@base': {
              fontSize: '$xs',
            },
            '@md': {
              fontSize: '$md',
            },
            '_light': {
              color: '$primary800',
            },
            '_dark': {
              color: '$primary500',
            },
          }}
        >
          Total Invested
        </Text>
      </VStack>

      <VStack
        flex={1}
        py="$3"
        alignItems="center"
        space="xs"
        borderWidth={1}
        rounded="$sm"
        sx={{
          _light: {
            borderColor: '$emerald800',
          },
          _dark: {
            borderColor: '$emerald500',
          },
        }}
      >
        <Heading
          fontWeight="$medium"
          sx={{
            '@base': {
              fontSize: '$xl',
            },
            '@md': {
              fontSize: '$2xl',
            },
            '_light': {
              color: '$emerald800',
            },
            '_dark': {
              color: '$emerald500',
            },
          }}
        >
          $45303.00
        </Heading>
        <Text
          sx={{
            '@base': {
              fontSize: '$xs',
            },
            '@md': {
              fontSize: '$md',
            },
            '_light': {
              color: '$emerald800',
            },
            '_dark': {
              color: '$emerald500',
            },
          }}
          fontWeight="$medium"
        >
          14% Return
        </Text>
      </VStack>
    </HStack>
  );
}
function Card(props: MutualFund) {
  return (
    <Box
      p="$3"
      sx={{
        _light: {
          bg: '$backgroundLight100',
        },
        _dark: {
          bg: '$backgroundDark700',
        },
      }}
      rounded="$sm"
    >
      <Link href="">
        <Text
          fontSize="$sm"
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
          {props.name}
        </Text>
      </Link>
      <Badge
        width="$16"
        px="$2"
        py="$0.5"
        mt="$2"
        sx={{
          _light: {
            bg: '$emerald600',
          },
          _dark: {
            bg: '$emerald500',
          },
        }}
      >
        <Text
          fontSize="$xs"
          sx={{
            _light: {
              color: '$textDark100',
            },
            _dark: {
              color: '$textDark800',
            },
          }}
        >
          {props.sip}
        </Text>
      </Badge>
      <HStack mt="$3" justifyContent="space-between">
        <VStack space="xs">
          <Text
            fontSize="$xs"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            {props.investment}
          </Text>
          <Text
            fontSize="$md"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {props.investmentValue}
          </Text>
        </VStack>
        <VStack space="xs">
          <Text
            fontSize="$xs"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            {props.current}
          </Text>
          <Text
            fontSize="$md"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {props.currentValue}
          </Text>
        </VStack>
        <VStack space="xs">
          <Text
            fontSize="$xs"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            {props.return}
          </Text>
          <Text
            fontSize="$md"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$emerald600',
              },
              _dark: {
                color: '$emerald500',
              },
            }}
          >
            {props.returnvalue}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
function CardSection() {
  return (
    <>
      <Text
        fontSize="$md"
        fontWeight="$medium"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
      >
        Portfolio Details
      </Text>
      <VStack mt="$5" space="md">
        {mutualFundList.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </VStack>
    </>
  );
}
function ListHeaderWeb() {
  return (
    <VStack
      sx={{
        _light: {
          borderColor: '$borderLight200',
        },
        _dark: {
          borderColor: '$borderDark700',
        },
      }}
      borderWidth={1}
      rounded="$sm"
    >
      <HStack pt="$5" pb="$3" pl="$6" justifyContent="space-between">
        <Text
          w="$7/20"
          fontSize="$sm"
          fontWeight="$bold"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          Company Name
        </Text>
        <Text
          w="$7/50"
          fontSize="$sm"
          fontWeight="$bold"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          Investment
        </Text>
        <Text
          w="$7/50"
          fontSize="$sm"
          fontWeight="$bold"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          Current Value
        </Text>
        <Text
          w="$7/50"
          fontSize="$sm"
          fontWeight="$bold"
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          Returns
        </Text>
      </HStack>
      <Divider
        sx={{
          _light: {
            bg: '$backgroundDark200',
          },
          _dark: {
            bg: '$backgroundDark700',
          },
        }}
      />
      {mutualFundList.map((item, index) => {
        return (
          <>
            <HStack key={index} py="$4" pl="$6" justifyContent="space-between">
              <Link href="" w="$7/20">
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
                >
                  {' '}
                  {item.name}
                </Text>
              </Link>

              <Text
                w="$7/50"
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
              >
                {item.investmentValue}
              </Text>
              <Text
                w="$7/50"
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
              >
                {item.currentValue}
              </Text>
              <Text
                w="$7/50"
                fontSize="$sm"
                fontWeight="$medium"
                sx={{
                  _light: {
                    color: '$emerald600',
                  },
                  _dark: {
                    color: '$emerald500',
                  },
                }}
              >
                {item.returnvalue}
              </Text>
            </HStack>
            {index < mutualFundList.length - 1 && (
              <Divider
                sx={{
                  _light: {
                    bg: '$backgroundDark200',
                  },
                  _dark: {
                    bg: '$backgroundDark700',
                  },
                }}
              />
            )}
          </>
        );
      })}
    </VStack>
  );
}

function MainContent() {
  const tabletScreen = useBreakpointValue({
    base: true,
    md: true,
  });
  return (
    <Box
      sx={{
        '@base': {
          px: '$4',
          py: '$5',
        },
        '@md': {
          px: '$10',
          py: '$8',
          rounded: '$sm',
        },
        '@lg': {
          px: 140,
        },
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
      }}
    >
      <TotalInvested />
      {tabletScreen ? <ListHeaderWeb /> : <CardSection />}
    </Box>
  );
}

export default function PortFolioOverview() {
  return (
    <DashboardLayout
      title="Mutual Fund Portfolio"
      displaySidebar={false}
      rightPanelMobileHeader
    >
      <MainContent />
    </DashboardLayout>
  );
}
