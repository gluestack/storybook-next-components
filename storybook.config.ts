import StartupPlusStoryData, {config as StartupPlusconfig} from '@/storybook-startup-plus.config';
import GluestackStoryData, {config as GluestackUIconfig} from '@/storybook-gluestack-ui.config';

const GluestackUI = {
  GENERATION_TYPE: "Components",
  StoryData: GluestackStoryData,
  config: GluestackUIconfig
}

const StartupPlus = {
  GENERATION_TYPE: "Screens",
  StoryData: StartupPlusStoryData,
  config: StartupPlusconfig
}

export default StartupPlus;
