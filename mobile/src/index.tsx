/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NativeBaseProvider } from 'native-base'

import { Home } from '@pages/Home'

export function AppSrc() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Home />
      </NativeBaseProvider>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  )
}
