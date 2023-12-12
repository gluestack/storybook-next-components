import React, { useEffect, useState, useRef, FC } from 'react';
import {
  Box,
  VStack,
  Text,
  HStack,
  Icon,
  CloseIcon,
  Button,
  Heading,
  ButtonText,
} from '@gluestack-ui/themed';

type TimerComponentProps = {
  time: string;
  parameter: string;
};

const TimerComponent: FC<TimerComponentProps> = ({ time, parameter }) => {
  return (
    <VStack alignItems="center" justifyContent="center">
      <Text size="2xl" color="$textLight0">
        {time}
      </Text>
      <Text size="xs" color="$textLight300">
        {parameter}
      </Text>
    </VStack>
  );
};

const useCountdown = (targetDate: string): string[] => {
  const countDownDate = useRef(new Date(targetDate).getTime());
  const [countDown, setCountDown] = useState(
    countDownDate.current - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate.current - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number): string[] => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, '0');
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, '0');

  return [days, hours, minutes, seconds];
};

const CountDownOnBlack: FC = (_props: any) => {
  const [isVisible, setIsVisible] = useState(true);
  const [targetDate, setTargetDate] = useState('2023-06-10');

  const handleShopNowBtnPress = () => {};

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  //* This useEffect is used to showcase the example by restarting the countdown
  //* It can be removed in a real scenario
  useEffect(() => {
    const endDate = new Date(targetDate);
    const currentDate = new Date();

    if (endDate < currentDate) {
      // If countdown has ended, update target date to next month
      const nextMonth = currentDate.getMonth() + 1;
      const nextYear = currentDate.getFullYear();
      const nextMonthDate = new Date(nextYear, nextMonth, 1);
      setTargetDate(nextMonthDate.toISOString().split('T')[0]);
    }
  }, [targetDate]);

  return (
    <Box py="$8" display={isVisible ? 'flex' : 'none'} position="relative">
      <VStack
        bg="$backgroundDark950"
        justifyContent="center"
        alignItems="center"
        space="sm"
        px="$4"
        py="$3"
        sx={{
          '@md': {
            flexDirection: 'row',
            px: '$8',
          },
        }}
      >
        <Button
          bg="$backgroundDark950"
          position="absolute"
          top={15}
          right={10}
          zIndex={999}
          ml="$2"
          mb="$4"
          p="$3"
          sx={{
            ':hover': { bg: '$backgroundLight900' },
            ':active': { bg: '$backgroundLight800' },
          }}
          onPress={() => setIsVisible(false)}
        >
          <Icon as={CloseIcon} color="$textDark50" />
        </Button>
        <Heading size="xl" color="$textLight0" fontWeight="$normal">
          20% OFF sale ends
        </Heading>
        <HStack space="lg" mx="$24">
          <TimerComponent time={days} parameter="Days" />
          <TimerComponent time={hours} parameter="Hours" />
          <TimerComponent time={minutes} parameter="Minutes" />
          <TimerComponent time={seconds} parameter="Seconds" />
        </HStack>
        <Button
          bg="$backgroundLight50"
          display="none"
          sx={{
            '@md': {
              display: 'flex',
            },
            ':hover': {
              bg: '$backgroundLight100',
            },
            ':active': {
              bg: '$backgroundLight200',
            },
          }}
        >
          <ButtonText
            color="$textLight950"
            fontWeight="$semibold"
            onPress={handleShopNowBtnPress}
          >
            Shop Now
          </ButtonText>
        </Button>
      </VStack>
    </Box>
  );
};

export default CountDownOnBlack;
