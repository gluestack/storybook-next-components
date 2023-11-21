import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Center,
  Divider,
  Pressable,
  CircleIcon,
  Badge,
  BadgeText,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import { Platform } from 'react-native';
import { TrainIcon } from 'lucide-react-native';

function DividersOrCircles(props: { num: number; type: string }) {
  const items: React.ReactNode[] = [];
  for (let i = 0; i < props.num; i++) {
    if (props.type === 'divider') {
      items.push(
        <Divider
          mt="$1"
          orientation="vertical"
          h="$2"
          bg="$backgroundLight200"
          sx={{
            _dark: {
              bg: '$backgroundDark700',
            },
          }}
        />
      );
    } else if (props.type === 'circle') {
      items.push(
        <Pressable>
          <Icon
            mt="$5"
            w="$2"
            h="$2"
            color="$textLight400"
            sx={{ _dark: { color: '$textDark500' } }}
            as={CircleIcon}
          />
        </Pressable>
      );
    }
  }

  return <>{items}</>;
}
function Track() {
  return (
    <VStack
      alignItems="center"
      rounded="$full"
      w="$6"
      pb="$5"
      bg="$backgroundLight100"
      sx={{ _dark: { bg: '$backgroundDark700' } }}
    >
      <DividersOrCircles num={4} type="circle" />
      <VStack
        mt="$5"
        alignItems="center"
        w="$full"
        rounded="$full"
        bg="$primary500"
        sx={{
          _dark: { bg: '$primary300' },
        }}
      >
        <Pressable>
          <Icon
            mt="$4"
            mb={-1}
            w="$2"
            h="$2"
            color="$textLight0"
            sx={{ _dark: { color: '$textDark800' } }}
            as={CircleIcon}
          />
        </Pressable>

        <DividersOrCircles num={9} type="divider" />
        <Center
          borderWidth="$1"
          bg="$backgroundLight0"
          borderColor="$primary500"
          sx={{
            _dark: {
              bg: '$backgroundDark800',
              borderColor: '$primary300',
            },
          }}
          rounded="$full"
          p="$2"
        >
          <Icon
            color="$primary500"
            sx={{ _dark: { color: '$primary300' } }}
            as={TrainIcon}
          />
        </Center>
        <DividersOrCircles num={9} type="divider" />
        <Pressable>
          <Icon
            mb="$5"
            w="$2"
            h="$2"
            color="$textLight0"
            sx={{ _dark: { color: '$textDark800' } }}
            as={CircleIcon}
          />
        </Pressable>
      </VStack>
      <DividersOrCircles num={6} type="circle" />
    </VStack>
  );
}
export default function TrainTracking() {
  return (
    <DashboardLayout displaySidebar={false} title="HBL to BLR">
      <HStack
        space="2xl"
        px="$4"
        pt="$4"
        pb="$20"
        bg="$backgroundLight0"
        sx={{
          '@md': {
            p: '$10',
            rounded: '$lg',
          },

          '_dark': { bg: '$backgroundDark800' },
        }}
      >
        <Track />
        <VStack flex={1} my="$1">
          <HStack mt="$1" alignItems="center" justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="$textLight800"
                sx={{ _dark: { color: '$textDark50' } }}
              >
                Start Majestic
              </Text>

              <Badge action="muted" size="lg" ml="$2" variant="solid">
                <BadgeText>PF 1</BadgeText>
              </Badge>
            </HStack>
            <Text
              color="$textLight500"
              sx={{ _dark: { color: '$textDark400' } }}
              fontWeight="$normal"
              fontSize="$sm"
            >
              14:30
            </Text>
          </HStack>
          <Text
            mt="$10"
            fontSize="$xs"
            color="$textLight500"
            sx={{ _dark: { color: '$textDark400' } }}
          >
            10 Stations ( 110 Kms )
          </Text>
          <HStack mt="$10" justifyContent="space-between" alignItems="center">
            <HStack alignItems="center">
              <Text
                color="$textLight800"
                sx={{ _dark: { color: '$textDark50' } }}
              >
                Tumkur
              </Text>

              <Badge action="muted" ml="$2" size="lg" variant="solid">
                <BadgeText>PF 1</BadgeText>
              </Badge>
            </HStack>
            <Text
              color="$textLight500"
              sx={{ _dark: { color: '$textDark400' } }}
              fontWeight="$normal"
              fontSize="$sm"
            >
              15:00
            </Text>
          </HStack>
          <Text
            color="$success600"
            fontSize="$xs"
            fontWeight="$medium"
            sx={{
              _dark: {
                color: '$success400',
              },
            }}
          >
            On Time
          </Text>
          <Text
            mt="$8"
            fontSize="$xs"
            color="$textLight500"
            sx={{ _dark: { color: '$textDark400' } }}
          >
            6 Stations ( 87 Kms )
          </Text>
          <HStack mt="$7" justifyContent="space-between" alignItems="center">
            <HStack alignItems="center">
              <Text
                fontWeight="$medium"
                color="$textLight800"
                sx={{ _dark: { color: '$textDark50' } }}
              >
                Davangeri
              </Text>

              <Badge action="error" ml="$2" size="lg" variant="solid">
                <BadgeText>PF 1</BadgeText>
              </Badge>
            </HStack>
            <Text
              color="$textLight500"
              sx={{ _dark: { color: '$textDark400' } }}
              fontWeight="$normal"
              fontSize="$sm"
            >
              15:00
            </Text>
          </HStack>
          <Text
            color="$error600"
            sx={{ _dark: { color: '$error400' } }}
            fontSize="$xs"
            fontWeight="$medium"
          >
            Delayed by 10 min
          </Text>
          <HStack mt="$70" justifyContent="space-between">
            <HStack
              mt={Platform.OS === 'ios' ? '$4' : '$2'}
              alignItems="center"
            >
              <Text
                fontWeight="$medium"
                color="$textLight800"
                sx={{ _dark: { color: '$textDark50' } }}
              >
                Haveri
              </Text>
              <Badge action="muted" ml="$2" size="lg" variant="solid">
                <BadgeText>PF 1</BadgeText>
              </Badge>
            </HStack>
            <VStack>
              <Text
                color="$success600"
                sx={{ _dark: { color: '$success400' } }}
                fontWeight="$normal"
                fontSize="$sm"
                textAlign="right"
                pt="$2"
              >
                19:00
              </Text>
              <Text
                color="$textLight500"
                sx={{ _dark: { color: '$textDark400' } }}
                fontWeight="$normal"
                fontSize="$sm"
              >
                Expected
              </Text>
            </VStack>
          </HStack>
          <Text
            mt="$70"
            fontSize="$xs"
            color="$textLight500"
            sx={{ _dark: { color: '$textDark400' } }}
          >
            4 Stations ( 56 Kms )
          </Text>
          <HStack mt="$60" justifyContent="space-between" alignItems="center">
            <HStack alignItems="center">
              <Text
                color="$textLight800"
                sx={{ _dark: { color: '$textDark50' } }}
                fontWeight="$medium"
              >
                Hubbali
              </Text>

              <Badge action="muted" ml="$2" size="lg" variant="solid">
                <BadgeText>PF 1</BadgeText>
              </Badge>
            </HStack>

            <Text
              color="$textLight500"
              sx={{ _dark: { color: '$textDark400' } }}
              fontWeight="$normal"
              fontSize="$sm"
              textAlign="right"
            >
              21:00
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </DashboardLayout>
  );
}
