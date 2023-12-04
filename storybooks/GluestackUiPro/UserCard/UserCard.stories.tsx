import type { ComponentMeta } from '@storybook/react-native';
import UserCardWithTags from './UserCardWithTags';
import UserCardGrid from './UserCardGrid';
import UserCardBackground from './UserCardBackground';

const UserCard: ComponentMeta<typeof UserCardWithTags> = {
  title: 'stories/UserCard',
  component: UserCardWithTags,
};

export default UserCard;

export { UserCardWithTags, UserCardGrid, UserCardBackground };
