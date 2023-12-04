import type { ComponentMeta } from '@storybook/react-native';
import BlogWithSingleColumn from './BlogWithSingleColumn';
import BlogWithCards from './BlogWithCards';
import BlogWithThreeColumns from './BlogWithThreeColumns';
import BlogWithHeroImage from './BlogWithHeroImage';

const Blog: ComponentMeta<typeof BlogWithSingleColumn> = {
  title: 'stories/Blog',
  component: BlogWithSingleColumn,
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

export default Blog;

export {
  BlogWithSingleColumn,
  BlogWithCards,
  BlogWithThreeColumns,
  BlogWithHeroImage,
};
