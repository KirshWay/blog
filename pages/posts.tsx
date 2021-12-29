import type { NextPage } from 'next';
import matter from 'gray-matter';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import AnimationLayout from '../layouts/AnimationLayout';
import GridItem from '../components/ui/GridItem';
import AnimationShow from '../components/AnimationShow';
import { CustomizeScroll } from '../assets/scripts/stylesCustomize';

const Posts: NextPage = props => {
  // @ts-ignore
  const realData = props.data.map(blog => matter(blog));
  const listItems = realData.map((listItem: any) => listItem.data);

  return (
    <CustomizeScroll>
      <AnimationLayout>
        <Container>
          <Heading as="h3" mb={5}>
            Posts
          </Heading>
          <AnimationShow delay={0.3}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
              {listItems.map((post: any, index: number) => (
                <GridItem
                  key={index}
                  date={post.date}
                  title={post.title}
                  description={post.description}
                  hrefSource={post.slug}
                  imgSource={post.cover_img}
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
  const fs = require('fs');

  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8');

  const blogs = files.filter((fn: any) => fn.endsWith('.md'));

  const data = blogs.map((blog: any) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8'
    });

    return rawContent;
  });

  return {
    props: {
      data
    }
  };
};

export default Posts;
