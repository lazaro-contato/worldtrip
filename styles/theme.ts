import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      1000: '#000000',
      600: '#47585B',
      400: '#999999',
      450: 'rgba(153, 153, 153, 0.5)',
    },
    light: {
      1000: '#FFFFFF',
      900: '#F5F8FA',
      300: '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.1000',
      },
    },
  },
})
