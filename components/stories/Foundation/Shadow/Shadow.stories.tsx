import type { ComponentMeta } from '@storybook/react-native';
import Shadow from './Shadow';

const ShadowMeta: ComponentMeta<typeof Shadow> = {
  title: 'stories/FOUNDATION/Shadow',
  component: Shadow,
  argTypes: {
    variant: {
      control: 'select',
      options: ['hardShadow', 'softShadow'],
    },
    values: {
      control: 'select',
      options: ['1', '2', '3', '4'],
    },
  },
  args: {
    variant: 'hardShadow',
    values: '1',
  },
};

export default ShadowMeta;

export { Shadow };
