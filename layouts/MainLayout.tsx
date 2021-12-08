import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navigation from '../components/Navigation';
import { Loader } from '../components/PlacholderTop';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Box
      as="main"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px'
        },
        '&::-webkit-scrollbar-track': {
          width: '6px'
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '24px'
        }
      }}
    >
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
        <Loader />

        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
