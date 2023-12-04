import React from 'react';
import {
  Box,
  Text,
  Input,
  Icon,
  InputIcon,
  InputField,
  InputSlot,
} from '@gluestack-ui/themed';
import PageHeaderDescription from './PageHeaderDescription';
import PageHeaderTrigger from './PageHeaderTrigger';
import { SearchIcon } from 'lucide-react-native';

const PageHeaderWithSearch = () => {
  return (
    <Box
      bg="$backgroundlight0"
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
    >
      <Box
        mx="auto"
        maxWidth={1280}
        flexDirection="column"
        pt="$8"
        pb="$24"
        px="$4"
        w="$full"
        sx={{
          '@md': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '$8',
          },
        }}
      >
        <Box>
          <Text
            color="$textDark900"
            size="3xl"
            fontWeight="$medium"
            sx={{
              _dark: {
                color: '$text100',
              },
            }}
          >
            Member overview
          </Text>
          <PageHeaderDescription>
            <Text
              fontSize="$md"
              color="$muted700"
              fontWeight="$light"
              sx={{
                _dark: {
                  color: '$textDark100',
                },
              }}
            >
              All registered users in the overview
            </Text>
          </PageHeaderDescription>
        </Box>

        <PageHeaderTrigger>
          <Box
            mt="$4"
            alignItems="flex-start"
            sx={{
              '@md': {
                alignItems: 'flex-end',
                mt: '$0',
                flex: 1,
              },
            }}
          >
            <Input>
              <InputSlot>
                <InputIcon
                  as={SearchIcon}
                  color="$textLight500"
                  sx={{
                    _dark: {
                      color: '$textDark100',
                    },
                  }}
                  pl="$3"
                />
              </InputSlot>
              <InputField placeholder="Search" />
            </Input>
          </Box>
        </PageHeaderTrigger>
      </Box>
    </Box>
  );
};

export default PageHeaderWithSearch;
