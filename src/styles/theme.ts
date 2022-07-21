import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
    },
    black: {
      '100': '#292929',
      '300': '#161616',
      '500': '#0b0b0b',
      '900': '#000000',
    },
    white: {
      '100':'#F7FAFC',
      '300': '#E2E8F0',
      '500': '#4A5568',
      '900': '#2D3748' ,
    },
    yellow: {
      '400': '#ECC94B',
      '500': '#D69E2E'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'black.500',
        color: 'white.100'
      }
    }
  }
})