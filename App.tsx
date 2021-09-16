import React from 'react'
import {Provider} from 'react-redux'
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import store from './src/store'
import TopStories from './src/components/topStories'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TopStories />
      </SafeAreaView>
    </Provider>
  )
}

export default App
