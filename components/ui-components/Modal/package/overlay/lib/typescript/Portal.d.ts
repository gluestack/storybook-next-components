import React from 'react';
import type { ReactNode } from 'react';
import { ViewProps } from 'react-native';
interface ModalProviderProps extends ViewProps {
    children: ReactNode;
    provider?: boolean;
}
export declare function PortalProvider(props: {
    children: ReactNode;
    isSSR?: boolean;
}): React.JSX.Element;
export declare const OverlayProvider: typeof PortalProvider;
export declare function OverlayContainer(props: ModalProviderProps): React.JSX.Element | null;
export {};
//# sourceMappingURL=Portal.d.ts.map