import React, { useEffect, useState, useRef, FC } from 'react';
import {
  Box,
  VStack,
  Text,
  HStack,
  Icon,
  CloseIcon,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';

type TimerComponentProps = {
  time: string;
  parameter: string;
};

const TimerComponent: FC<TimerComponentProps> = ({ time, parameter }) => {
  return (
    <VStack alignItems="center" justifyContent="center">
      <Text size="xl" color="$textLight0">
        {time}
      </Text>
      <Text size="xs" color="$textLight0">
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

const CountDownOnColoredBackground: FC = () => {
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
        bg="$primary500"
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
          position="absolute"
          top={15}
          right={10}
          zIndex={999}
          ml="$2"
          mb="$4"
          p="$3"
          onPress={() => setIsVisible(false)}
        >
          <Icon as={CloseIcon} color="$textDark50" />
        </Button>
        <HStack space="lg">
          <TimerComponent time={days} parameter="DAY" />
          <TimerComponent time={hours} parameter="HRS" />
          <TimerComponent time={minutes} parameter="MIN" />
          <TimerComponent time={seconds} parameter="SEC" />
        </HStack>
        <Text
          size="xl"
          color="$textLight0"
          mx="$12"
          sx={{ '@md': { mx: '$24' } }}
          textAlign="center"
        >
          Sale ends soon! 50% off shoes
        </Text>

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
          <ButtonText color="$primary500" onPress={handleShopNowBtnPress}>
            Shop Now
          </ButtonText>
        </Button>
      </VStack>
    </Box>
  );
};

export default CountDownOnColoredBackground;
