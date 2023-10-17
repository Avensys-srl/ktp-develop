import {Text, View} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'

export const Label = props => {
  const {children, style} = props
  return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = ScaledSheet.create({
  text: {
    fontSize: '15@ms',
    color: 'white',
  },
})
