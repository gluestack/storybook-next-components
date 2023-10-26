import { styled } from '../../styled';
import { Text } from '../../Text';

export default styled(
  Text,
  {
    color: '$textLight50',
  },
  { ancestorStyle: ['_text'] }
);
