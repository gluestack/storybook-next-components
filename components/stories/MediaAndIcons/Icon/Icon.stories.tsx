import type { ComponentMeta } from '@storybook/react-native';
import {
  Icon,
  AddIcon,
  AlertCircleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  AtSignIcon,
  BellIcon,
  CalendarDaysIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpDownIcon,
  CircleIcon,
  ClockIcon,
  CloseIcon,
  CloseCircleIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  EyeIcon,
  EyeOffIcon,
  FavouriteIcon,
  GlobeIcon,
  GripVerticalIcon,
  HelpCircleIcon,
  InfoIcon,
  LinkIcon,
  ExternalLinkIcon,
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
  RepeatIcon,
  Repeat1Icon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  SlashIcon,
  StarIcon,
  SunIcon,
  ThreeDotsIcon,
  TrashIcon,
  UnlockIcon,
} from './Icon';

const IconMeta: ComponentMeta<typeof Icon> = {
  title: 'stories/MEDIA AND ICONS/Icons',
  component: Icon,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    clusteringOrder: [['as', 'displayName'], 'size'],
    componentDescription:
      'Icons are often used to enhance the usability and accessibility of digital products by providing users with clear and intuitive visual cues. It serves as an intuitive and easily recognizable way to communicate with users.',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs', '2xs'],
    },
    as: {
      control: 'select',
      options: [
        AddIcon,
        AlertCircleIcon,
        ArrowUpIcon,
        ArrowDownIcon,
        ArrowRightIcon,
        ArrowLeftIcon,
        AtSignIcon,
        BellIcon,
        CalendarDaysIcon,
        CheckIcon,
        CheckCircleIcon,
        ChevronUpIcon,
        ChevronDownIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        ChevronsLeftIcon,
        ChevronsRightIcon,
        ChevronsUpDownIcon,
        CircleIcon,
        ClockIcon,
        CloseIcon,
        CloseCircleIcon,
        CopyIcon,
        DownloadIcon,
        EditIcon,
        EyeIcon,
        EyeOffIcon,
        FavouriteIcon,
        GlobeIcon,
        GripVerticalIcon,
        HelpCircleIcon,
        InfoIcon,
        LinkIcon,
        ExternalLinkIcon,
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
        RepeatIcon,
        Repeat1Icon,
        SearchIcon,
        SettingsIcon,
        ShareIcon,
        SlashIcon,
        StarIcon,
        SunIcon,
        ThreeDotsIcon,
        TrashIcon,
        UnlockIcon,
      ],
    },
  },
  args: {
    size: 'md',
    as: AddIcon,
  },
};

export default IconMeta;
export { Icon };
