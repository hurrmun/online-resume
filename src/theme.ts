import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
  fontWeight: 'black',
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
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
              {
                ...activeLabelStyles,
              },
            'textarea:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
  },
});

export default theme;
