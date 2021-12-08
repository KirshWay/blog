import type { NextPage } from 'next';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import AnimationLayout from '../layouts/AnimationLayout';
import GridItem from '../components/ui/GridItem';
import AnimationShow from '../components/AnimationShow';

const Posts: NextPage = () => {
  return (
    <AnimationLayout>
      <Container>
        <Heading as="h3">Posts</Heading>
        <AnimationShow delay={0.3}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}></SimpleGrid>
        </AnimationShow>
      </Container>
    </AnimationLayout>
  );
};

export default Posts;
