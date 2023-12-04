import type { ComponentMeta } from '@storybook/react-native';
import SizePicker from './SizePicker';
import ColorPicker from './ColorPicker';
import QuantityPicker from './QuantityPicker';

const Pickers: ComponentMeta<typeof SizePicker> = {
  title: 'stories/Pickers',
  component: SizePicker,
};

export default Pickers;

export { SizePicker, ColorPicker, QuantityPicker };
