import React from 'react';
import { Box, StatusBar, ScrollView, VStack } from '@gluestack-ui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type GuestLayoutProps = {
  children: React.ReactNode;
};

export default function GuestLayout(props: GuestLayoutProps) {
  return (
    // <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Box
        sx={{
          _web: {
            height: '100vh',
            overflow: 'hidden',
          },
        }}
        height="$full"
      >
        <StatusBar
          translucent
          backgroundColor="$none"
          barStyle="light-content"
        />
        <ScrollView
          flex={1}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          sx={{
            '@base': { _light: { bg: '$primary500' } },
            '@md': { _light: { bg: '$primary900' }, p: '$8' },
            '_dark': { bg: '$backgroundDark900' },
          }}
          bounces={false}
        >
          <VStack
            w="$full"
            flex={1}
            overflow="hidden"
            sx={{
              '@md': {
                maxWidth: '$containerWidth',
                flexDirection: 'row',
                rounded: '$xl',
                flex: undefined,
              },
            }}
          >
            {props.children}
          </VStack>
        </ScrollView>
      </Box>
    // </KeyboardAwareScrollView>
  );
}
