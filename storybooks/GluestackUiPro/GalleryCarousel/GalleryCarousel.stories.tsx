import type { ComponentMeta } from '@storybook/react-native';
import GalleryCarousel from './GalleryWithCarousel';
import GalleryVerticalCarousel from './GalleryWithVerticalCarousel';
import GalleryHorizontalCarousel from './GalleryWithHorizontalCarousel';

const Gallery: ComponentMeta<typeof GalleryCarousel> = {
  title: 'stories/GalleryCarousel',
  component: GalleryCarousel,
  argTypes: {},
  args: {
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        component: 'Used to display a bunch of Image galleries ',
      },
    },
  },
};

export default Gallery;

export { GalleryCarousel, GalleryVerticalCarousel, GalleryHorizontalCarousel };
