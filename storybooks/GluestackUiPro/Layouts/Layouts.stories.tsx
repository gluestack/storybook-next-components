import type { ComponentMeta } from '@storybook/react-native';
import LayoutWithFullContentHeight from './LayoutWithFullContentHeight';
import LayoutWithStickySidebar from './LayoutWithStickySidebar';
import LayoutWithStickyNavbar from './LayoutWithStickyNavbar';
import LayoutWithTwoSidebars from './LayoutWithTwoSidebars';
const Layouts: ComponentMeta<typeof LayoutWithFullContentHeight> = {
  title: 'stories/Layouts',
  component: LayoutWithFullContentHeight,
};

export default Layouts;

export {
  LayoutWithFullContentHeight,
  LayoutWithStickySidebar,
  LayoutWithStickyNavbar,
  LayoutWithTwoSidebars,
};
