import type { NextPage } from 'next';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import { Container, Heading } from '@chakra-ui/react';
import AnimationLayout from '../layouts/AnimationLayout';
import GridItem from '../components/ui/GridItem';
import AnimationShow from '../components/AnimationShow';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

// @ts-ignore
const Posts: NextPage = ({ allPostsData }) => {
  return (
    <AnimationLayout>
      <Container>
        <Heading as="h3">Posts</Heading>
        <AnimationShow delay={0.3}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}></SimpleGrid>
        </AnimationShow>
        <ul>
          {/*@ts-ignore*/}
          {allPostsData.map(({ id, title, date }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <p>{date}</p>
            </li>
          ))}
        </ul>
      </Container>
    </AnimationLayout>
  );
};

export default Posts;
