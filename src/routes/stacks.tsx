import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
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
/*
const Tab = createBottomTabNavigator()


const Tabs =() =>
{
  return(
  <Tab.Navigator
  screenOptions={{
    headerShown: false,
  }}>
  <Tab.Screen
    name={Routes.Home}
    component={Home}
    options={{
      tabBarIcon: () => (
        <Image source={ImageSource.home} style={styles.bottomIcons} />
      ),
    }}
  />
  <Tab.Screen
    name={Routes.Services}
    component={Services}
    options={{
      tabBarIcon: () => (
        <Image source={ImageSource.filter1} style={styles.bottomIcons} />
      ),
    }}
  />
  <Tab.Screen
    name={Routes.Info}
    component={Info}
    options={{
      tabBarIcon: () => (
        <Image source={ImageSource.info} style={styles.bottomIcons} />
      ),
    }}
  />
  <Tab.Screen
    name={Routes.Settings}
    component={Settings}
    options={{
      tabBarIcon: () => (
        <Image source={ImageSource.setting} style={styles.bottomIcons} />
      ),
    }}
  />
</Tab.Navigator>
  )
}*/

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
