import type { ComponentMeta } from '@storybook/react-native';
import FeatureHeroImage from './FeatureHeroImage';
import FeatureHeroImageAccent from './FeatureHeroImageAccent';
import FeatureSideBySideImage from './FeatureSideBySideImage';
import FeatureThreeColumns from './FeatureThreeColumns';
import FeatureThreeColumnsCentered from './FeatureThreeColumnsCentered';

const Features: ComponentMeta<typeof FeatureHeroImage> = {
  title: 'stories/Features',
  component: FeatureHeroImage,
};

export default Features;

export {
  FeatureHeroImage,
  FeatureHeroImageAccent,
  FeatureSideBySideImage,
  FeatureThreeColumns,
  FeatureThreeColumnsCentered,
};
