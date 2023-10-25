/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {MainStack} from './src/routes/stacks'
import {StatusBar} from 'react-native'

function App (): JSX.Element {
  return (
   
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
  )
}

export default App
