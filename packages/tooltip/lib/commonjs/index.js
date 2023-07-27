"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTooltip = createTooltip;
var _TooltipContent = require("./TooltipContent");
var _TooltipText = require("./TooltipText");
var _Tooltip = require("./Tooltip");
function createTooltip(_ref) {
  let {
    Text,
    Root,
    Content,
    AnimatePresence
  } = _ref;
  const Tooltip = (0, _Tooltip.Tooltip)(Root);
  Tooltip.Content = (0, _TooltipContent.TooltipContent)(Content, AnimatePresence);
  Tooltip.Text = (0, _TooltipText.TooltipText)(Text);
  Tooltip.displayName = 'Tooltip';
  Tooltip.Content.displayName = 'Tooltip.Content';
  Tooltip.Text.displayName = 'Tooltip.Text';
  return Tooltip;
}
//# sourceMappingURL=index.js.map