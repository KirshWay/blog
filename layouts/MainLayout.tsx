import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navigation from '../components/Navigation';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <title>Blog ???</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is a blog about everything that interests me"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
