import type { NextPage, GetStaticProps } from 'next';
import matter from 'gray-matter';
import {
  Box,
  Button,
  Container,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid
} from '@chakra-ui/react';
import AnimationLayout from '../layouts/AnimationLayout';
import GridItem from '../components/ui/GridItem';
import AnimationShow from '../components/AnimationShow';
import { CustomizeScroll } from '../assets/scripts/stylesCustomize';
import { ChevronDownIcon } from '@chakra-ui/icons';

type DataPostType = {
  data: [string];
};

const Posts: NextPage<DataPostType> = ({ data }) => {
  const realData = data.map(blog => matter(blog));
  const listItems = realData.map(listItem => listItem.data);

  return (
    <CustomizeScroll>
      <AnimationLayout>
        <Container>
          <Box display="flex" justifyContent="space-between">
            <Heading as="h3" mb={5}>
              Posts
            </Heading>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Выберите тег
              </MenuButton>
              <MenuList>
                {listItems.map((post, index) => (
                  <MenuItem key={index}>{post.tag}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
          <AnimationShow delay={0.3}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
              {listItems.map((post, index) => (
                <GridItem
                  key={index}
                  date={post.date}
                  tag={post.tag}
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

export const getStaticProps: GetStaticProps = async () => {
  const fs = require('fs');

  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8');

  const blogs = files.filter((fn: string) => fn.endsWith('.md'));

  const data = blogs.map((blog: string) => {
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
