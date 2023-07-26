import { createMenu } from '../../../packages/menu/src';
import { Root, Item, Label, Backdrop } from './styled-components';
import { styled } from '../styled';
export const Menu = createMenu({
  Root,
  Item,
  Label,
  Backdrop,
  //@ts-ignore
  AnimatePresence: styled.Component,
});
