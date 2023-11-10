import React from 'react';

import { Box, Text, VStack } from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

export default function TermsAndConditions() {
  return (
    <DashboardLayout displaySidebar={true} title="Terms and Conditions">
      <VStack
        bg="$backgroundLight0"
        sx={{
          '_dark': {
            bg: '$backgroundDark800',
          },
          '@base': {
            px: '$4',
            pt: '$5',
            pb: '$4',
          },
          '@md': {
            px: '$8',
            pt: '$8',
            pb: '$8',
            rounded: '$sm',
          },
        }}
      >
        <VStack space="md">
          <Text
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
            fontSize="$sm"
            fontWeight="$medium"
          >
            1. Terms
          </Text>

          <Text
            justifyContent="center"
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
            fontWeight="$light"
          >
            You agree, further, not to use or attempt to use any engine,
            software, tool, agent or other device or mechanism (including
            without limitation browsers, spiders, robots, avatars or intelligent
            agents) to navigate or search this Website other than the search
            engine and search agents available from us on this Website.
          </Text>
        </VStack>

        <VStack space="md" mt="$4">
          <Text
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
            fontWeight="$medium"
            fontSize="$sm"
          >
            2. Conditions
          </Text>

          <Text
            justifyContent="center"
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
            fontWeight="$light"
          >
            Violations of system or network security may result in civil or
            criminal liability. We will investigate such violations and
            prosecute users who are involved in such violations.
          </Text>

          <Box mr="$4">
            <Text
              justifyContent="center"
              fontSize="$sm"
              sx={{
                _light: {
                  color: '$textLight500',
                },
                _dark: {
                  color: '$textDark400',
                },
              }}
              fontWeight="$light"
            >
              • You agree not to use any device, software or routine to
              interfere or attempt to interfere with the proper working of this
              Website or any activity being conducted on this
            </Text>
            <Text
              justifyContent="center"
              fontSize="$sm"
              sx={{
                _light: {
                  color: '$textLight500',
                },
                _dark: {
                  color: '$textDark400',
                },
              }}
              fontWeight="$light"
            >
              • You agree, further, not to use or attempt to use any engine,
              software, tool, agent or other device or mechanism (including
              without limitation browsers, spiders, robots, avatars or
              intelligent agents) to navigate or search this Website other than
              the search engine and search agents available from us on this
              Website.
            </Text>
          </Box>
        </VStack>
      </VStack>
    </DashboardLayout>
  );
}
