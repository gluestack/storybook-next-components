import type { ComponentMeta } from '@storybook/react-native';
import {
  AddIcon,
  AlertCircleIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  AtSignIcon,
  BellIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpDownIcon,
  CircleIcon,
  ClockIcon,
  CloseCircleIcon,
  CloseIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  ExternalLinkIcon,
  EyeIcon,
  EyeOffIcon,
  FavouriteIcon,
  GlobeIcon,
  GripVerticalIcon,
  HelpCircleIcon,
  InfoIcon,
  LinkIcon,
  LoaderIcon,
  LockIcon,
  MailIcon,
  MenuIcon,
  MessageCircleIcon,
  MoonIcon,
  PaperclipIcon,
  PhoneIcon,
  PlayIcon,
  RemoveIcon,
  Repeat1Icon,
  RepeatIcon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  SlashIcon,
  StarIcon,
  SunIcon,
  ThreeDotsIcon,
  TrashIcon,
  UnlockIcon,
} from '@gluestack-ui/themed';
import Icon from './Icon';

const IconMeta: ComponentMeta<typeof Icon> = {
  title: 'stories/MEDIA AND ICONS/Icons',
  component: Icon,
  metaInfo: {
    clusteringOrder: [['name', 'displayName'], 'size'],
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs', '2xs'],
    },
    name: {
      control: 'select',
      options: [
        // AddIcon,
        // AlertCircleIcon,
        // ArrowUpIcon,
        // ArrowDownIcon,
        // ArrowRightIcon,
        // ArrowLeftIcon,
        // AtSignIcon,
        // BellIcon,
        // CalendarDaysIcon,
        // CheckIcon,
        // CheckCircleIcon,
        // ChevronUpIcon,
        // ChevronDownIcon,
        // ChevronLeftIcon,
        // ChevronRightIcon,
        // ChevronsLeftIcon,
        // ChevronsRightIcon,
        // ChevronsUpDownIcon,
        // CircleIcon,
        // ClockIcon,
        // CloseIcon,
        // CloseCircleIcon,
        // CopyIcon,
        // DownloadIcon,
        // EditIcon,
        // EyeIcon,
        // EyeOffIcon,
        // FavouriteIcon,
        // GlobeIcon,
        // GripVerticalIcon,
        // HelpCircleIcon,
        InfoIcon,
        // LinkIcon,
        // ExternalLinkIcon,
        // LoaderIcon,
        // LockIcon,
        // MailIcon,
        // MenuIcon,
        // MessageCircleIcon,
        // MoonIcon,
        // PaperclipIcon,
        // PhoneIcon,
        // PlayIcon,
        // RemoveIcon,
        // RepeatIcon,
        // Repeat1Icon,
        // SearchIcon,
        // SettingsIcon,
        // ShareIcon,
        // SlashIcon,
        // StarIcon,
        // SunIcon,
        // ThreeDotsIcon,
        // TrashIcon,
        // UnlockIcon,
      ],
    },
  },
  args: {
    size: 'md',
    name: AddIcon,
  },
};

export default IconMeta;
export { Icon };
