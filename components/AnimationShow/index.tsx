import React from 'react';
import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledElement = chakra(motion.div, {
  shouldForwardProp: (prop: string): boolean => {
    return shouldForwardProp(prop) || prop === 'transition';
  }
});

type WrapperElementProps = {
  delay: number;
};

const WrapperElement: React.FC<WrapperElementProps> = ({
  children,
  delay = 0
}) => (
  <StyledElement
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    // @ts-ignore
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledElement>
);

export default WrapperElement;
