import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components';
import { theme } from '../themes';

const AppRoot: React.FC<AppProps> = ({ Component, pageProps }) => {
  
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
    );
};

export default AppRoot;
