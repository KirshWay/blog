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
      .grid-item-img {
        border-radius: 12px;
      }
    `}
  />
);

export const CustomizeScroll = styled.body`
  &::-webkit-scrollbar {
    width: 0.35em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(58, 57, 57, 0.3);
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3f3c44;
    border-radius: 100px;
    outline: 1px solid #313133;
  }
`;
