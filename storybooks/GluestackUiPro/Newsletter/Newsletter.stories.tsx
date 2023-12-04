import type { ComponentMeta } from '@storybook/react-native';
import NewsletterFormWithImage from './NewsletterFormWithImage';
import NewsletterFormInline from './NewsletterFormInline';
import NewsletterFormInlineBoxed from './NewsletterFormInlineBoxed';
import NewsletterFormCentered from './NewsletterFormCentered';
import NewsletterFormCenteredBoxed from './NewsletterFormCenteredBoxed';

const LoginForm: ComponentMeta<typeof NewsletterFormWithImage> = {
  title: 'stories/Newsletter',
  component: NewsletterFormWithImage,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
  },
  args: {
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        component: '**markdown** description goes here',
      },
    },
  },
};

export default LoginForm;

export {
  NewsletterFormWithImage,
  NewsletterFormInline,
  NewsletterFormInlineBoxed,
  NewsletterFormCentered,
  NewsletterFormCenteredBoxed,
};
