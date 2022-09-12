import { ChakraProvider, CSSReset } from '@chakra-ui/react'

import { HomeContainer } from './containers/HomeContainer'
import { theme } from './styles/theme'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <HomeContainer />
    </ChakraProvider>
  )
}
