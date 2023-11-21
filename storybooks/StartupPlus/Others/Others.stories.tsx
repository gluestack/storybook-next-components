import type { ComponentMeta } from '@storybook/react-native';
import AppUpdate from './AppUpdate';
import BluetoothPairing from './BluetoothPairing';
import Archived from './Archived';
import ChooseImage from './ChooseImage';
import SeatSelection from './SeatSelection';
import PhotoFilters from './PhotoFilters';
import Restaurant from './Restaurant';
import Page404 from './Page404';
const Catalog: ComponentMeta<typeof AppUpdate> = {
  title: 'stories/STARTUP PLUS/Others',
  component: AppUpdate,
};

export default Catalog;

export {
  AppUpdate,
  BluetoothPairing,
  Archived,
  ChooseImage,
  SeatSelection,
  PhotoFilters,
  Restaurant,
  Page404,
};
