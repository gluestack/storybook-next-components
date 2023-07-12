import React from 'react';

import { Link as LinkTemp, Icon, HStack, Text } from '../../../ui-components';
import { ArrowUpRightIcon } from 'lucide-react-native';

const LinkStory = ({ ...props }) => {
  return (
    <LinkTemp href='https://google.com' isExternal {...props}>
      <LinkTemp.Text>Gluestack</LinkTemp.Text>
    </LinkTemp>
  );
};

export default LinkStory;

export { LinkTemp, ArrowUpRightIcon, Icon, HStack, Text };
