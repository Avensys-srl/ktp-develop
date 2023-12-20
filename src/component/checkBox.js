import {View, TouchableOpacity, Image, Text} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'

import {ImageSource} from '../common/imageSource'
import { Colors, Sizing } from '../styles'

export const CheckBox = props => {
  const {
    text = '',
    checked = false,
    disabled = false,
    onPress = () => 0,
    style
  } = props

  
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
        width: Sizing.vw*100,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
      }}
    >
      <Text style={styles.textStyle}>{`${text}`}</Text>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[styles.buttonContainer, style]}
      >
        {checked && (
          <Image style={styles.imageStyle} source={ImageSource.check} />
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: Sizing.vw*100,
    justifyContent: 'center',
    backgroundColor: Colors.BLACK,
  },
  buttonContainer: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: '4@ms',
    marginLeft: '8@ms',
    alignItems: 'center',
    justifyContent: 'center',
    height: Sizing.vh*3.6,
    width: Sizing.vw*7
  },

  textStyle: {
    color: Colors.WHITE,
    fontSize: '14@ms',
    width:Sizing.vw*80,
  },

  imageStyle: {
    height: Sizing.vh*1.5,
    width: Sizing.vw*3.5,
  },
})
