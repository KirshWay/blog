import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '../layouts/MainLayout';
import theme from '../assets/scripts/theme';
import { CustomizeFont } from '../assets/scripts/stylesCustomize';
import { AnimatePresence } from 'framer-motion';
import { CustomizeScroll } from '../assets/scripts/stylesCustomize';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <CustomizeFont />
      <MainLayout>
        <AnimatePresence exitBeforeEnter initial={true}>
          <CustomizeScroll>
            <Component {...pageProps} key={router.route} />
          </CustomizeScroll>
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
