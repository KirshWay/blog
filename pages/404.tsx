import type { NextPage } from 'next';
import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react';

const NotFound: NextPage = () => (
  <Container>
    <Heading as="h1">Not Found</Heading>
    <Text>The page dont found, go back to home page</Text>
    <Divider my={6} />
    <Box my={6} align="center">
      <NextLink href="/">
        <Button colorScheme="teal">Go back home page</Button>
      </NextLink>
    </Box>
  </Container>
);

export default NotFound;
