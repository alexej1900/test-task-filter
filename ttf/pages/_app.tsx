import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import NextNProgress from "nextjs-progressbar";
import { store } from '../store/store';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
