import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Box } from '@chakra-ui/react';
import { MarkdownStyles } from '../../assets/scripts/stylesCustomize';

// @ts-ignore
const BlogPost = props => {
  const { content } = matter(props.content);

  return (
    <Box p={5}>
      <div>
        <MarkdownStyles>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </MarkdownStyles>
      </div>
    </Box>
  );
};

// @ts-ignore
export const getServerSideProps = async context => {
  const fs = require('fs');

  const { blog } = context.params;

  const content = await fs.readFileSync(
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
