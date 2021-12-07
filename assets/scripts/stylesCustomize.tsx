import styled from '@emotion/styled';
import { Global } from '@emotion/react';

export const CustomizeFont = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap');
  `}</style>
);

export const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
`;

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
