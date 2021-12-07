import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '../layouts/MainLayout';
import theme from '../assets/scripts/theme';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} key={router.route} />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
