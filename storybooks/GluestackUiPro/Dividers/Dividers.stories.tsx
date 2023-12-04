import type { ComponentMeta } from '@storybook/react-native';
import DividerWithText from './DividerWithText';
import DividerWithButton from './DividerWithButton';
import DividerIconButton from './DividerIconButton';
import DividerWithButtonGroup from './DividerWithButtonGroup';
import DividerWithIconGroup from './DividerWithIconGroup';

const Dividers: ComponentMeta<typeof DividerWithText> = {
  title: 'stories/Dividers',
  component: DividerWithText,
};

export default Dividers;

export {
  DividerWithText,
  DividerWithButton,
  DividerIconButton,
  DividerWithButtonGroup,
  DividerWithIconGroup,
};
