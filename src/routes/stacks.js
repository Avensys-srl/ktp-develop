import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';

const Stack = createStackNavigator();

import {
  Home,
  LoginScreen,
  Services,
  FilterScreens,
  Ventilation
} from '../screens';

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.ServiceLogin}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.ServiceLogin} component={LoginScreen} />
      <Stack.Screen name={Routes.Services} component={ Services } />
      <Stack.Screen name={Routes.Filter} component={FilterScreens} />
      <Stack.Screen name={Routes.Ventilation} component={Ventilation}/>
    </Stack.Navigator>
  );
};