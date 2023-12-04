import type { ComponentMeta } from '@storybook/react-native';
import BannerWithButton from './BannerWithButton';
import BannerWithTwoButtonsOnAccent from './BannerWithTwoButtonsOnAccent';
import BannerWithTwoButtonsFloatingOnAccent from './BannerWithTwoButtonsFloatingOnAccent';
import BannerWithTextOnAccent from './BannerWithTextOnAccent';
import BannerWithTextFloatingOnAccent from './BannerWithTextFloatingOnAccent';
import BannerWithTwoButtonsFloating from './BannerWithTwoButtonsFloating';
import BannerWithTwoButtons from './BannerWithTwoButtons';
import BannerWithTextFloating from './BannerWithTextFloating';
import BannerWithText from './BannerWithText';
import BannerWithButtonFloatingOnAccent from './BannerWithButtonFloatingOnAccent';
import BannerWithForm from './BannerWithForm';
import BannerWithFormFloating from './BannerWithFormFloating';
import BannerWithFormFloatingOnAccent from './BannerWithFormFloatingOnAccent';
import BannerWithFormOnAccent from './BannerWithFormOnAccent';
import BannerWithButtonOnAccent from './BannerWithButtonOnAccent';
import BannerWithButtonFloating from './BannerWithButtonFloating';
const Banner: ComponentMeta<typeof BannerWithTwoButtonsOnAccent> = {
  title: 'stories/Banner',
  component: BannerWithTwoButtonsOnAccent,
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
        component: '**markdown** description goes here',
      },
    },
  },
};

export default Banner;

export {
  BannerWithButton,
  BannerWithTwoButtonsOnAccent,
  BannerWithTwoButtonsFloatingOnAccent,
  BannerWithTextOnAccent,
  BannerWithTextFloatingOnAccent,
  BannerWithTwoButtonsFloating,
  BannerWithTwoButtons,
  BannerWithTextFloating,
  BannerWithText,
  BannerWithButtonFloatingOnAccent,
  BannerWithForm,
  BannerWithFormFloating,
  BannerWithFormFloatingOnAccent,
  BannerWithFormOnAccent,
  BannerWithButtonOnAccent,
  BannerWithButtonFloating,
};
