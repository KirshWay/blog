import type { NextPage } from 'next';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import AnimationLayout from '../layouts/AnimationLayout';
import GridItem from '../components/ui/GridItem';
import AnimationShow from '../components/AnimationShow';
import { CustomizeScroll } from '../assets/scripts/stylesCustomize';

// @ts-ignore
const Posts: NextPage = ({ posts }) => {
  console.log(posts);
  return (
    <CustomizeScroll>
      <AnimationLayout>
        <Container>
          <Heading as="h3">Posts</Heading>
          <AnimationShow delay={0.3}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}></SimpleGrid>
          </AnimationShow>
        </Container>
      </AnimationLayout>
    </CustomizeScroll>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: 'The posts'
    }
  };
}

export default Posts;
