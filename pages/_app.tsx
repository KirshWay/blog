import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../assets/scripts/theme';
import MainLayout from '../layouts/MainLayout';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MainLayout>
        <Component {...pageProps} key={router.route} />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
