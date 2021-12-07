import type { NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import AnimationLayout from '../layouts/AnimationLayout';

const Posts: NextPage = () => {
  return (
    <AnimationLayout>
      <Container>
        <Heading as="h3">Posts</Heading>
      </Container>
    </AnimationLayout>
  );
};

export default Posts;
