import StartupPlusStoryData, {
  config as StartupPlusconfig,
} from '@/storybook-startup-plus.config';

import GluestackStoryData, {
  config as GluestackUIconfig,
} from '@/storybook-gluestack-ui.config';

const GluestackUI = {
  GENERATION_TYPE: 'Components',
  StoryData: GluestackStoryData,
  config: StartupPlusconfig,
  BRANCH: 'patch',
  GITHUB_REPO_URL: 'git@github.com:gluestack/gluestack-ui.git',
  STORIES_SOURCE_PATH: 'example/storybook/src/components',
  STORIES_TARGET_PATH: 'components/stories',
};

const StartupPlus = {
  GENERATION_TYPE: 'Screens',
  StoryData: StartupPlusStoryData,
  config: StartupPlusconfig,
  BRANCH: 'startup-plus-main',
  GITHUB_REPO_URL: 'git@github.com:gluestack/gluestack-ui-pro.git',
  STORIES_SOURCE_PATH: 'src/stories/StartupPlus',
  STORIES_TARGET_PATH: 'storybooks/StartupPlus/',
};

export default StartupPlus;