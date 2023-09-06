import { GluestackUIProvider } from '@gluestack-ui/themed';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GluestackUIProvider>
      <Component {...pageProps} />
    </GluestackUIProvider>
  );
}
