import { Root, Content, Text } from './styled-components';
import { createTooltip } from '../../../packages/tooltip/src';
import { styled } from '../styled';

export const Tooltip = createTooltip({
  Root,
  Content,
  Text,
  //@ts-ignore
  AnimatePresence: styled.Component,
});
