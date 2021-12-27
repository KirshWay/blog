import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import AnimationLayout from '../layouts/AnimationLayout';
import GridItem from '../components/ui/GridItem';
import AnimationShow from '../components/AnimationShow';
import { CustomizeScroll } from '../assets/scripts/stylesCustomize';

type PostPreviewTypes = {
  frontMatter: {
    cover_img: string;
    date: string;
    title: string;
  };
  slug: string;
};

const Posts: NextPage<PostPreviewTypes> = props => {
  // @ts-ignore
  const { posts } = props;

  return (
    <CustomizeScroll>
      <AnimationLayout>
        <Container>
          <Heading as="h3">Posts</Heading>
          <AnimationShow delay={0.3}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
              {posts.map((post: PostPreviewTypes, id: number) => (
                <GridItem
                  key={id}
                  title={post.frontMatter.title}
                  imgSource={post.frontMatter.cover_img}
                  hrefSource={post.slug}
                />
              ))}
            </SimpleGrid>
          </AnimationShow>
        </Container>
      </AnimationLayout>
    </CustomizeScroll>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split('.')[0]
    };
  });
  return {
    props: {
      posts
    }
  };
};

export default Posts;
