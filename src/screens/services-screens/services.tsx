import {View} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import {Header} from '../../component/index'
import {ServicesCard} from './services-card'
import {Routes} from '../../routes'

export const Services = () => {
  const ServicesTab = [
    {title: 'general setting', route: null,disabled:true},
    {title: 'filtration', route: Routes.Filter,disabled:false},
    {title: 'ventilation', route: null,disabled:true},
    {title: 'climate control', route: Routes.Climate,disabled:false},
    {title: 'accessories', route: Routes.Accessories,disabled:false},
    {title: 'communication', route: null,disabled:true},
    {title: 'scheduler', route: null,disabled:true},
    {title: 'report', route: null,disabled:true},
  ]
  return (
    <>
      <Header canGoBack={false} title='Services' />
      <View style={Styles.container}>
        {ServicesTab.map((item, index) => {
          console.log('index---', index)
          return (
            <ServicesCard
              title={item.title}
              index={index}
              onPress={item.route}
              disabled={item.disabled}
            />
          )
        })}
      </View>
    </>
  )
}

const Styles = ScaledSheet.create({
  container: {
    // flex: 1,
    width: '100%',
  },
})
