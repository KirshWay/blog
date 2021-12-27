import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

const styles = {
  global: (props: Dict<any> | StyleFunctionProps) => ({
    body: {
      bg: mode('#e0d4c6', '#25252c')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: (props: Dict<any> | StyleFunctionProps) => ({
      color: mode('#c02365', '#7043ab')(props),
      textUnderlineOffset: 2
    })
  }
};

const fonts = {
  heading: "'Lato'"
};

const colors = {
  grassPurple: '#582e86'
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
