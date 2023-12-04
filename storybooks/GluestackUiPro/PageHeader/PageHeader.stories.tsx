import type { ComponentMeta } from '@storybook/react-native';
import PageHeaderWithSearch from './PageHeaderWithSearch';
import PageHeaderWithProfile from './PageHeaderWithProfile';
import PageHeaderWithTwoButtons from './PageHeaderWithTwoButtons';

//Following will be used after Phase_1
// import { PageHeaderWithDescription } from './PageHeaderWithDescription';
// import { PageHeaderWithInputAccent } from './PageHeaderWithInputAccent';
// import { PageHeaderWithCTA } from './PageHeaderWithCTAs';
// import { PageHeaderWithForm } from './PageHeaderWithForm';
// import { PageHeaderWithInput } from './PageHeaderWithInput';
// import { PageHeaderWithInputAccentCentered } from './PageHeaderAccentCentered';
// import { PageHeaderCentered } from './PageHeaderCentered';

// var st = document.createElement('style');
// st.innerHTML = `#story--alertdialog--basic{ height: 350px }`;
// document.body.append(st);

const PageHeaderStory: ComponentMeta<typeof PageHeaderWithTwoButtons> = {
  title: 'stories/PageHeader',
  component: PageHeaderWithTwoButtons,
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

export default PageHeaderStory;

export {
  PageHeaderWithSearch,
  PageHeaderWithProfile,
  PageHeaderWithTwoButtons,
  // PageHeaderWithDescription,
  // PageHeaderWithInputAccent,
  // PageHeaderWithCTA,
  // PageHeaderWithForm,
  // PageHeaderWithInput,
  // PageHeaderWithInputAccentCentered,
  // PageHeaderCentered,
};
