import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      ':host,:root': {
        '--chakra-ui-focus-ring-color': '#ffffff40',
      },
    },
  },
  shadows: {
    outline: '0 0 0 3px var(--chakra-ui-focus-ring-color)',
  },
});

export default theme;
