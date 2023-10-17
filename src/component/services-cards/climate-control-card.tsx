import {
  View,
  Image,
  ImageStyle,
  StyleProp,
  Text,
} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import {ImageSource} from '../../common/imageSource'
import {useState} from 'react'

interface props {
  source: {}
  imageStyle: StyleProp<ImageStyle>
  box: boolean
  tempNumber: string | number
  dropDownTemp: any
}

export const ClimateControlCard = (props: props) => {
  const {imageStyle, source, box, tempNumber, dropDownTemp} = props
  const [lock, setLock] = useState(true)
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={source} style={[styles.image, imageStyle]} />
        <Image source={ImageSource.home} style={styles.home} />
        {box && (
          <View style={styles.box}>
            <Text style={styles.temperatureNumber}>{tempNumber}</Text>
          </View>
        )}
      </View>
      <View style={styles.dropDownContainer}>
        {box && lock && (
          <View style={styles.dropDownBox}>
            <Text style={{textAlign:'center'}}>{dropDownTemp}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {},
  home: {
    height: '60@ms',
    width: '60@ms',
    resizeMode: 'contain',
    tintColor: 'black',
  },
  image: {
    height: '20@ms',
    width: '20@ms',
    resizeMode: 'contain',
    tintColor: 'black',
    bottom: '20@ms',
    left: '15@ms',
  },
  box: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: '5@ms',
    height: '45@ms',
    width: '60@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperatureNumber: {
    fontSize: '20@ms',
    color: 'black',
  },
  dropDownContainer: {
    width: '75%',
    alignItems: 'flex-end',
  },
  dropDownBox: {
    borderWidth: 1,
    borderColor: 'black',
    width: '60@ms',
    height: 'auto',
    borderRadius: '5@ms',
  },
})
