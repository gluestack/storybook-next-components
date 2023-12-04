import type { ComponentMeta } from '@storybook/react-native';
import TestimonialWithImage from './TestimonialWithImage';
import TestimonialWithRatingTwoColumns from './TestimonialWithRatingTwoColumns';
import TestimonialWithTwoColumns from './TestimonialWithTwoColumns';
import TestimonialWithLogo from './TestimonialWithLogo';
import TestimonialWithCurve from './TestimonialWithCurve';

const Testimonials: ComponentMeta<typeof TestimonialWithImage> = {
  title: 'stories/Testimonials',
  component: TestimonialWithImage,
};

export default Testimonials;

export {
  TestimonialWithImage,
  TestimonialWithRatingTwoColumns,
  TestimonialWithTwoColumns,
  TestimonialWithLogo,
  TestimonialWithCurve,
};
