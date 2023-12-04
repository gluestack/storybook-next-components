import type { ComponentMeta } from '@storybook/react-native';
import CardHeaderWithContextMenu from './CardHeaderWithContextMenu';
import CardHeaderWithButton from './CardHeaderWithButton';
import CardHeaderAccentWithAvatar from './CardHeaderAccentWithAvatar';
import CardHeaderAccentWithContextMenu from './CardHeaderAccentWithContextMenu';
import CardHeaderAccentWithDescription from './CardHeaderAccentWithDescription';
import CardHeaderAccentWithButton from './CardHeaderAccentWithButton';
import CardHeaderWithDescription from './CardHeaderWithDescription';
import CardHeaderWithAvatar from './CardHeaderWithAvatar';

const CardHeader: ComponentMeta<typeof CardHeaderWithContextMenu> = {
  title: 'stories/CardHeader',
  component: CardHeaderWithContextMenu,
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

export default CardHeader;

export {
  CardHeaderWithContextMenu,
  CardHeaderWithButton,
  CardHeaderAccentWithAvatar,
  CardHeaderAccentWithContextMenu,
  CardHeaderAccentWithDescription,
  CardHeaderAccentWithButton,
  CardHeaderWithDescription,
  CardHeaderWithAvatar,
};
