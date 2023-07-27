import { TooltipContent } from './TooltipContent';
import { TooltipText } from './TooltipText';
import { Tooltip as TooltipMain } from './Tooltip';
export function createTooltip(_ref) {
  let {
    Text,
    Root,
    Content,
    AnimatePresence
  } = _ref;
  const Tooltip = TooltipMain(Root);
  Tooltip.Content = TooltipContent(Content, AnimatePresence);
  Tooltip.Text = TooltipText(Text);
  Tooltip.displayName = 'Tooltip';
  Tooltip.Content.displayName = 'Tooltip.Content';
  Tooltip.Text.displayName = 'Tooltip.Text';
  return Tooltip;
}
//# sourceMappingURL=index.js.map