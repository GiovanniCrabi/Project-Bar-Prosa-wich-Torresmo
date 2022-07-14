import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  color: {
    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
    },
    yellow: {
      '50':  '#FFFFF0',
      '100': '#FEFCBF',
      '200': '#FAF089',
      '300': '#F6E05E',
      '400': '#ECC94B',
      '500': '#D69E2E',
      '600': '#B7791F',
      '700': '#975A16',
      '800': '#744210',
      '900': '#5F370E',
    }
  },
  styles: {
    global: {
      body: {
        bg: 'yellow.100',
        color: 'yellow.900'
      }
    }
  }
})