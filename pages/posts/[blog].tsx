import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

// @ts-ignore
const BlogPost = props => {
  const { data, content } = matter(props.content);

  return (
    <div>
      <h4>{data.title}</h4>
      <p>{data.description}</p>
      {/* eslint-disable-next-line react/no-children-prop */}
      <ReactMarkdown children={content} />
    </div>
  );
};

// @ts-ignore
export const getServerSideProps = async context => {
  const fs = require('fs');

  const { blog } = context.params;

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
