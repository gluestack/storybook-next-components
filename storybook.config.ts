import StartupPlusStoryData from '@/storybook-startup-plus.config';
import GluestackStoryData from '@/storybook-gluestack-ui.config';

const GENERATION_TYPE = 'Components';
// const GENERATION_TYPE = 'Screens';

export default {
  GENERATION_TYPE: 'Components',
  StoryData: GluestackStoryData,
  // GENERATION_TYPE : 'Screens',
  // StoryData : StartupPlusStoryData
};
