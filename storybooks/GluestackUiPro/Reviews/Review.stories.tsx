import type { ComponentMeta } from '@storybook/react-native';
import ReviewOverview from './ReviewOverview';
import ReviewQuickOverview from './ReviewQuickOverview';
import Rating from './Rating';

const Reviews: ComponentMeta<typeof ReviewOverview> = {
  title: 'stories/Reviews',
  component: ReviewOverview,
};

export default Reviews;

export { ReviewOverview, Rating, ReviewQuickOverview };
