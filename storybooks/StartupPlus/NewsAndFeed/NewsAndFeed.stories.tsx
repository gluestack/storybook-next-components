import type { ComponentMeta } from '@storybook/react-native';
import Feed from './Feed';
import Newsletter from './Newsletter';

const NewsAndFeed: ComponentMeta<typeof Newsletter> = {
  title: 'stories/STARTUP PLUS/NewsAndFeed',
  component: Newsletter,
};

export default NewsAndFeed;

export { Newsletter, Feed };
