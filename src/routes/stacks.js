import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';

const Stack = createStackNavigator();

import {
  Home,
  LoginScreen,
  Services,
  FilterScreens,
  Ventilation,
  ClimateControl,
  Accessories,
  Preheater,
  Postheater,
  Bypass,
  PostCooling,

  Settings,
  LanguageScreen,
  Profile,
  Communication,
  Info,
  Probs
} from '../screens';

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.ServiceLogin}>
      <Stack.Screen name={Routes.Home} component={LoginScreen} />
      <Stack.Screen name={Routes.ServiceLogin} component={LoginScreen} />
      <Stack.Screen name={Routes.Services} component={ Services } />
      <Stack.Screen name={Routes.Filter} component={FilterScreens} />
      <Stack.Screen name={Routes.Ventilation} component={Ventilation}/>
      <Stack.Screen name={Routes.Climate} component={ClimateControl}/>
      <Stack.Screen name={Routes.Accessories} component={Accessories}/>
      <Stack.Screen name={Routes.PreHeater} component={Preheater}/>
      <Stack.Screen name={Routes.PostHeater} component={Postheater}/>
      <Stack.Screen name={Routes.Bypass} component={Bypass}/>
      <Stack.Screen name={Routes.PostCooling} component={PostCooling}/>
      <Stack.Screen name={Routes.Probs} component={Probs} />

      <Stack.Screen name={Routes.Settings} component={Settings} />
      <Stack.Screen name={Routes.LanguageScreen} component={LanguageScreen} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
      <Stack.Screen name={Routes.Communication} component={Communication} />
      <Stack.Screen name={Routes.Info} component={Info} />

    </Stack.Navigator>
  );
};