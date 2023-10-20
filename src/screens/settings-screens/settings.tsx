import {View, Text} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import {Header} from '../../component'
import {SettingsCard} from './settings-card'

export const Settings = () => {
  const SettingsTab = [
    {title: 'Language'},
    {title: 'Screen Saver'},
    {title: 'Date'},
    {title: 'Profile'},
  ]

  return (
    <>
      <Header canGoBack={false} title='Settings' />
      <View style={Styles.container}>
        {SettingsTab.map(item => {
          return( <SettingsCard text={item.title} />)
        })}
      </View>
    </>
  )
}

const Styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})
