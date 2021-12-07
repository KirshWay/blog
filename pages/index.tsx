import type { NextPage } from 'next';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import AnimationShow from '../components/AnimationShow';
import { Paragraph } from '../assets/scripts/stylesCustomize';
import { ChevronRightIcon } from '@chakra-ui/icons';

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
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut
          consequuntur distinctio dolorem dolorum est facere neque praesentium
          quis velit! A aspernatur ex magnam quisquam repellendus. A,
          consequatur culpa cum dicta dolorum earum eos esse est excepturi,
          fugit maiores non nulla obcaecati optio placeat, quasi quis rem
          sapiente veritatis voluptatem!
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Posts
            </Button>
          </NextLink>
        </Box>
      </AnimationShow>
    </Container>
  );
};

export default Main;
