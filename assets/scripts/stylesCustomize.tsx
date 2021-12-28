import styled from '@emotion/styled';
import { Global } from '@emotion/react';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

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

export const MarkdownStyles = styled.div`
  & > h1 {
    font-size: 30px;
  }
`;
