import React from 'react';
import Image from 'next/image';
import { Box, Spinner } from '@chakra-ui/react';

const placeholderImg = `/mountain.jpg`;

const SpinnerContainer = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

const PlaceholderTopContainer: React.FC = ({ children }) => (
  <Box
    position="relative"
    m="2% auto"
    w={['100%', '100%', 640]}
    h={['100%', '100%', 440]}
  >
    {children}
  </Box>
);

export const Loader = () => (
  <PlaceholderTopContainer>
    <SpinnerContainer />
    <Image
      width={640}
      height={440}
      src={placeholderImg}
      alt="Placeholder img"
    />
  </PlaceholderTopContainer>
);
