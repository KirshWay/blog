import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoStyle = styled.span`
  font-width: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 45px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 0.2s ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;

const logoImg = `/main-icon.png`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoStyle>
          <Image src={logoImg} width={32} height={32} alt="Logo blog" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            KirshWay blog
          </Text>
        </LogoStyle>
      </a>
    </Link>
  );
};

export default Logo;
