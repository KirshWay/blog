import React from 'react';
import { GetServerSideProps } from 'next';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Box } from '@chakra-ui/react';
import { MarkdownStyles } from '../../assets/scripts/stylesCustomize';

type BlogPostType = {
  content: string;
};

const BlogPost: React.FC<BlogPostType> = props => {
  const { content } = matter(props.content);

  return (
    <Box p={5}>
      <MarkdownStyles>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </MarkdownStyles>
    </Box>
  );
};

type getServerSidePropsType = {
  blog: string;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const fs = require('fs');
  const { blog }: any = context.params;

  const content = fs.readFileSync(
    `${process.cwd()}/content/${blog}.md`,
    'utf8'
  );

  return {
    props: {
      content
    }
  };
};

export default BlogPost;
