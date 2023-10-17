import {View, Text} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'

export const Info = () => {
  return (
    <View style={Styles.container}>
      <Text>This is Info Screen</Text>
    </View>
  )
}

const Styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})
