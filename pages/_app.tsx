import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '../layouts/MainLayout';
import theme from '../assets/scripts/theme';
import { CustomizeFont } from '../assets/scripts/font';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <CustomizeFont />
      <MainLayout>
        <Component {...pageProps} key={router.route} />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
