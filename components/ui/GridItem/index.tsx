import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox } from '@chakra-ui/react';

type GridItemProps = {
  description?: string;
  hrefSource: string;
  title?: string;
  imgSource: string;
};

const GridItem: React.FC<GridItemProps> = ({
  description,
  title,
  hrefSource,
  imgSource
}) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/posts/${hrefSource}`}>
      <LinkBox cursor="pointer">
        <Image
          width={1200}
          height={820}
          src={`/${imgSource}`}
          alt={title}
          className="grid-item-img"
        />
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>{description}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export default GridItem;
