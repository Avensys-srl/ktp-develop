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
  ClimateControl
} from '../screens'
import {ScaledSheet} from 'react-native-size-matters'
import {ImageSource} from '../common/imageSource'
import {Image} from 'react-native'

const Stack = createStackNavigator()
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
}

export const MainStack = () => {
  return (
<>

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'MainTabs'} component={Tabs} />
      <Stack.Screen name={Routes.Accessories} component={Accessories} />
      <Stack.Screen name={Routes.Filter} component={Filteration} />
      <Stack.Screen name={Routes.Climate} component={ClimateControl} />
    </Stack.Navigator>
    </>
  )
}

const styles = ScaledSheet.create({
  bottomIcons: {
    height: '20@ms',
    width: '20@ms',
    resizeMode: 'contain',
  },
})
