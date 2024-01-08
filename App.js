
import React , { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Appearance,
  View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native'
import { MainStack } from './src/routes/stacks'
// import Orientation from 'react-native-orientation-locker';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const colorScheme = Appearance.getColorScheme();
  if(colorScheme === 'dark'){

  }

  // useEffect(() => {
  //   Orientation.lockToPortrait(); // Locks the app to portrait mode
  //   // If you want to unlock later:
  //   // Orientation.unlockAllOrientations();
  // }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
};


export default App;
