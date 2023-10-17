import {View, TouchableOpacity, Image, Text} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'

import {ImageSource} from '../common/imageSource'

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
        width: '100%',
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
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  buttonContainer: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: '4@ms',

    marginLeft: '8@ms',
    alignItems: 'center',
    justifyContent: 'center',
    height: '26@ms',
    width: '26@ms',
  },

  textStyle: {
    color: 'white',
    fontSize: '14@ms',
    width:'80%'
  },

  imageStyle: {
    height: '14@ms',
    width: '14@ms',
  },
})
