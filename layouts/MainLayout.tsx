import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Container } from '@chakra-ui/react';
import Navigation from '../components/Navigation';

const placeholderImg = `/mountain.jpg`;

const MainLayout: React.FC = ({ children }) => {
  const route = useRouter();

  return (
    <Box as="main">
      <Head>
        <title>KW blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is a blog about everything that interests me"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Container maxW="container.md" pt={14}>
        {route.pathname !== '/posts/[blog]' && (
          <Box
            position="relative"
            m="2% auto"
            w={['100%', '100%', 640]}
            h={['100%', '100%', 440]}
          >
            <Image
              width={640}
              height={440}
              src={placeholderImg}
              alt="Placeholder img"
            />
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
