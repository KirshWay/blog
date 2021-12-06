import type { NextPage } from 'next';
import { Box, Container, Heading } from '@chakra-ui/react';

const Main: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Всем привет, сейчас я фронтенд разработчик
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Victor Nemec
          </Heading>
        </Box>
        <p>I like programming, reading books, and everything beautiful👽</p>
      </Box>
    </Container>
  );
};

export default Main;
