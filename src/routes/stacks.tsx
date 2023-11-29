import {createStackNavigator} from '@react-navigation/stack'
import {Routes} from './routes'
import {
  Accessories,
  Home,
  Services,
  Info,
  Settings,
  Filteration,
  ClimateControl,
  Ventilation,
  Bypass
} from '../screens'
import {ScaledSheet} from 'react-native-size-matters'

const Stack = createStackNavigator()


export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={Routes.Home}>      
    <Stack.Screen name={Routes.Home} component={Home}/>
      <Stack.Screen name={Routes.Services} component={Services} />
      <Stack.Screen name={Routes.Info} component={Info} />
      <Stack.Screen name={Routes.Settings} component={Settings} />
      <Stack.Screen name={Routes.Filter} component={Filteration} />
      <Stack.Screen name={Routes.Climate} component={ClimateControl} />
      <Stack.Screen name={Routes.Accessories} component={Accessories} />
      <Stack.Screen name={Routes.Ventilation} component={Ventilation} />
      <Stack.Screen name={Routes.Bypass} component={Bypass} />
    </Stack.Navigator>
  )
}

// />

const styles = ScaledSheet.create({
  bottomIcons: {
    height: '20@ms',
    width: '20@ms',
    resizeMode: 'contain',
  },
})
