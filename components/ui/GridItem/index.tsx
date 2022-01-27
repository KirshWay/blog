import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, Stack, Badge } from '@chakra-ui/react';

type GridItemProps = {
  tag: string;
  title: string;
  description: string;
  hrefSource: string;
  imgSource: string;
};

const GridItem: React.FC<GridItemProps> = ({
  tag,
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
        <Box display="flex">
          <Stack direction="row">
            <Badge colorScheme="green">{tag}</Badge>
          </Stack>
        </Box>
        <Text mt={1} fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>{description}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export default GridItem;
