/// <reference types="react" />
import type { IToolTipComponentType } from './types';
export declare function createTooltip<TooltipProps, TooltipContentProps, TextProps, TooltipAnimatePresenceProps>({ Text, Root, Content, AnimatePresence, }: {
    Text: React.ComponentType<TextProps>;
    Root: React.ComponentType<TooltipProps>;
    Content: React.ComponentType<TooltipContentProps>;
    AnimatePresence?: React.ComponentType<TooltipAnimatePresenceProps>;
}): IToolTipComponentType<TooltipProps, TooltipContentProps, TextProps>;
//# sourceMappingURL=index.d.ts.map