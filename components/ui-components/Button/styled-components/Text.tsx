import { Text } from '../../Text/';

import { styled } from '../../styled';

export default styled(
  Text,
  {
    //@ts-ignore
    userSelect: 'none',
  },
  { ancestorStyle: ['_text'], DEBUG: 'STYLEDBUTTONTEXT' }
);
