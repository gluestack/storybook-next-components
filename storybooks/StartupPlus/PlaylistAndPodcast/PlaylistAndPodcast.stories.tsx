import type { ComponentMeta } from '@storybook/react-native';
import Playlist from './Playlist';
import VideoLibrary from './VideoLibrary';
import Podcast from './Podcast';
import EmptyPlaylist from './EmptyPlaylist';
const PlaylistAndPodcast: ComponentMeta<typeof Playlist> = {
  title: 'stories/STARTUP PLUS/PlaylistAndPodcast',
  component: Playlist,
};

export default PlaylistAndPodcast;

export { Playlist, VideoLibrary, Podcast, EmptyPlaylist };
