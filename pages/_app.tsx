import '../styles/globals.css';
import type { AppProps } from 'next/app';

import {
  AppMainContainer,
  LeftColumnContainer,
  RightColumnContainer,
} from './AppStyles';
import { SideBar } from '../components/SideBar/SideBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppMainContainer>
      <LeftColumnContainer>
        <SideBar />
      </LeftColumnContainer>
      <RightColumnContainer>
        <Component {...pageProps} />
      </RightColumnContainer>
    </AppMainContainer>
  );
}

export default MyApp;
