import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoStyle = styled.span`
  font-width: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const logoImg = `../public/images/testIcon.png`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoStyle>
          <Image src={logoImg} width={20} height={20} alt="Logo blog" />
        </LogoStyle>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Blog ???
        </Text>
      </a>
    </Link>
  );
};

export default Logo;
