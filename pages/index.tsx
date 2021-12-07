import type { NextPage } from 'next';
import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import AnimationShow from '../components/AnimationShow';

const Main: NextPage = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
        p={3}
        mb={6}
        align="center"
      >
        Всем привет, сейчас я фронтенд разработчик
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Victor Nemec
          </Heading>
          <p>I like programming, reading books, and everything beautiful👽</p>
        </Box>
        <Box
          align="center"
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
        >
          <Image
            src="/images/testIconAvatar.jpg"
            display="inline-block"
            borderRadius="full"
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxW="150px"
            alt="Icon avatar"
          />
        </Box>
      </Box>

      <AnimationShow delay={0.1}>
        <Heading as="h3" variant="section-title">
          Hello
        </Heading>
        <p>TEST</p>
      </AnimationShow>
    </Container>
  );
};

export default Main;
