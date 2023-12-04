import type { ComponentMeta } from '@storybook/react-native';
import TeamWithAvatar from './TeamWithAvatar';
import TeamWithInlineHeading from './TeamWithInlineHeading';
import TeamWithLargeImage from './TeamWithLargeImage';
import TeamWithCard from './TeamWithCard';
import TeamWithSquarePhoto from './TeamWithSquarePhoto';

const Team: ComponentMeta<typeof TeamWithAvatar> = {
  title: 'stories/Team',
  component: TeamWithAvatar,
};

export default Team;

export {
  TeamWithAvatar,
  TeamWithInlineHeading,
  TeamWithLargeImage,
  TeamWithCard,
  TeamWithSquarePhoto,
};
