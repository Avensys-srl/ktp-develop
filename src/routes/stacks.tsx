import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {
  Accessories,
  Home,
  Services,
  Info,
  Settings,
  Filteration,
  ClimateControl,
  Ventilation,
  Bypass,
} from '../screens';
import {ScaledSheet} from 'react-native-size-matters';
import Filter_Settings2 from '../screens/services-screens/Filter_Settings2';
import Filter_Settings3 from '../screens/services-screens/Filter_Settings3';
import FilterScreens from '../screens/services-screens/FilterScreens';
import PostCooling_Blue from '../screens/services-screens/PostCooling_Blue';
import PostCooling_Red from '../screens/services-screens/PostCooling_Red';
import Postheater_Red from '../screens/services-screens/Postheater_Red';
import Preheater from '../screens/services-screens/Preheater';
import Probs from '../screens/services-screens/Probs';
import Communication from '../screens/services-screens/Communication';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Services} component={Services} />
      <Stack.Screen name={Routes.Info} component={Info} />
      <Stack.Screen name={Routes.Settings} component={Settings} />
      <Stack.Screen name={Routes.Filter} component={FilterScreens} />
      <Stack.Screen name={Routes.Climate} component={ClimateControl} />
      <Stack.Screen name={Routes.Accessories} component={Accessories} />
      <Stack.Screen name={Routes.Ventilation} component={Ventilation} />
      <Stack.Screen name={Routes.Bypass} component={Bypass} />
      <Stack.Screen name={Routes.PostCooling} component={PostCooling_Red} />
      <Stack.Screen name={Routes.PostHeater} component={Postheater_Red} />
      <Stack.Screen name={Routes.PreHeater} component={Preheater} />
      <Stack.Screen name={Routes.Probs} component={Probs} />
      <Stack.Screen name={Routes.Communication} component={Communication} />
    </Stack.Navigator>
  );
};

// />

const styles = ScaledSheet.create({
  bottomIcons: {
    height: '20@ms',
    width: '20@ms',
    resizeMode: 'contain',
  },
});
