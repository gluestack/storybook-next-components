import type { ComponentMeta } from '@storybook/react-native';
import DeliveryMethod from './DeliveryMethod';
import ManageAddress from './ManageAddress';
import TrainTracking from './TrainTracking';
import WeatherDisplay from './WeatherDisplay';
import AutoDetectLocation from './AutoDetectLocation';
import StoreLocatorOne from './StoreLocatorOne';
import StoreLocatorTwo from './StoreLocatorTwo';
import TrackingOne from './TrackingOne';
import TrackingTwo from './TrackingTwo';
import TrackingThree from './TrackingThree';

const MapsAndAddress: ComponentMeta<typeof DeliveryMethod> = {
  title: 'stories/STARTUP PLUS/MapsAndAddress',
  component: DeliveryMethod,
};

export default MapsAndAddress;

export {
  DeliveryMethod,
  ManageAddress,
  TrainTracking,
  WeatherDisplay,
  AutoDetectLocation,
  StoreLocatorOne,
  StoreLocatorTwo,
  TrackingOne,
  TrackingTwo,
  TrackingThree,
};
