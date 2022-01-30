import type { NextPage } from 'next';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react';
import AnimationShow from '../components/AnimationShow';
import { Paragraph } from '../assets/scripts/stylesCustomize';
import { ChevronRightIcon } from '@chakra-ui/icons';
import AnimationLayout from '../layouts/AnimationLayout';
import { BsTelegram, BsGithub, BsTwitter } from 'react-icons/bs';
import { CustomizeScroll } from '../assets/scripts/stylesCustomize';

const Main: NextPage = () => {
  return (
    <CustomizeScroll>
      <AnimationLayout>
        <Container>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('purple.300', 'purple.900')}
            p={3}
            mb={6}
            align="center"
          >
            Всем привет, сейчас я фронтенд разработчик
          </Box>

          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Виктор Немец
              </Heading>
              <p>Я люблю программировать, читать книги и все красивое👽</p>
            </Box>
            <Box
              align="center"
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
            >
              <Image
                src="/avatar.jpg"
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
              Кратко о чём блог
            </Heading>
            <Paragraph>
              В этом блоге я буду писать различные свои взгляды на интересные
              мне темы, это могут быть и книги, фильмы, сериалы, игры. Хочется
              также писать о каких свои мыслях об устройстве мира, и том что я
              какие приоритеты ставлю в различных аспектах жизни, и мысли
              конечно могут быть странные, но такой уж я. В будущем думаю писать
              также про путешествия.
            </Paragraph>
            <Box align="center" my={4}>
              <NextLink href="/posts">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                  Посты
                </Button>
              </NextLink>
            </Box>
          </AnimationShow>

          <AnimationShow delay={0.35}>
            <Heading as="h3" variant="section-title">
              Связаться:
            </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/KirshWay" target="_blank">
                  <Button
                    leftIcon={<Icon as={BsGithub} />}
                    variant="ghost"
                    colorScheme="green"
                  >
                    @KIRSHWAY
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://t.me/KirshWay" target="_blank">
                  <Button
                    leftIcon={<Icon as={BsTelegram} />}
                    variant="ghost"
                    colorScheme="green"
                  >
                    @KIRSHWAY
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://t.me/kirsh_way" target="_blank">
                  <Button
                    leftIcon={<Icon as={BsTelegram} />}
                    variant="ghost"
                    colorScheme="green"
                  >
                    @VITO KIRSH
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://twitter.com/KirshWay" target="_blank">
                  <Button
                    leftIcon={<Icon as={BsTwitter} />}
                    variant="ghost"
                    colorScheme="green"
                  >
                    @KIRSHWAY
                  </Button>
                </Link>
              </ListItem>
            </List>
          </AnimationShow>
        </Container>
      </AnimationLayout>
    </CustomizeScroll>
  );
};

export default Main;
