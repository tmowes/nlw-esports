import { extendTheme } from '@chakra-ui/react'

const inputsAutoFillStyle = {
  WebkitTextFillColor: '#EDF2F7',
  WebkitBoxShadow: '0 0 0px 1000px transparent inset',
  transition: 'background-color 9999s ease-in-out 0s',
}

export const theme = extendTheme({
  colors: {
    bg: '#121214',
    content: '#2A2634',
    gradient: 'linear(to-r, #9572FC -10%, #43E7AD , #E1D55D 110%)',
    blackGradient: 'linear(to-r, transparent -10%, rgba(0, 0, 0, 0.9) 66%)',
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },

  styles: {
    global: {
      ':host,:root': {
        '--chakra-ring-color': '#ffffff66',
      },
      body: {
        bg: 'bg',
        bgImage: 'url("/bg.png")',
        bgRepeat: 'no-repeat',
        bgSize: 'cover',
        color: 'gray.100',
        height: '100%',
        minHeight: '100vh',
        width: '100%',
      },
      '*::placeholder': {
        color: 'gray.100',
      },
      'input:-webkit-autofill': inputsAutoFillStyle,
      'input:-webkit-autofill:hover': inputsAutoFillStyle,
      'input:-webkit-autofill:focus': inputsAutoFillStyle,
      'textarea:-webkit-autofill': inputsAutoFillStyle,
      'textarea:-webkit-autofill:hover': inputsAutoFillStyle,
      'textarea:-webkit-autofill:focus': inputsAutoFillStyle,
      'select:-webkit-autofill': inputsAutoFillStyle,
      'select:-webkit-autofill:hover': inputsAutoFillStyle,
      'select:-webkit-autofill:focus': inputsAutoFillStyle,
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        bgGradient:
          'linear(to-b, #A0AEC040, #71809666, #71809699, gray.500, gray.500, #71809666, #2D374840)',
        borderRadius: '3px',
      },
      '&::focus': {
        outlineColor: 'transparent',
        borderColor: 'gray.700',
        borderWidth: '1px',
        borderRadius: '6px',
      },
      '*::-webkit-calendar-picker-indicator': {
        filter: 'invert(100%)',
        fontSize: '22px',
      },
    },
  },
  shadows: {
    outline: '0 0 0 1px var(--chakra-ring-color)',
  },
})
