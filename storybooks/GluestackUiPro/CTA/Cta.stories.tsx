import type { ComponentMeta } from '@storybook/react-native';
import CtaCentred from './CtaCentred';
import CtaCentredOnAccent from './CtaCentredOnAccent';
import CtaWithImage from './CtaWithImage';
import CtaBoxed from './CtaBoxed';
import CtaBoxedOnAccent from './CtaBoxedOnAccent';

// var st = document.createElement('style');
// st.innerHTML = `#story--alertdialog--basic{ height: 350px }`;
// document.body.append(st);

const CtaCentered: ComponentMeta<typeof CtaCentred> = {
  title: 'stories/CTA',
  component: CtaCentred,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  args: {
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Used to display a prominent call-to-action that converts leads to customers.    ',
      },
    },
  },
};

export default CtaCentered;
export {
  CtaCentred,
  CtaCentredOnAccent,
  CtaWithImage,
  CtaBoxed,
  CtaBoxedOnAccent,
};
