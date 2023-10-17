import {View, TouchableOpacity, Animated} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import {useEffect, useRef, useState} from 'react'
import {ImageSource} from '../common/imageSource'
export const FilterButton = props => {
  const {onProcessComplete = () => 0, checked = false, onUpdateStatus=()=>0} = props



  const [color, setColor] = useState('white')

  const timeGap = 5000
  const lf = 0.5

  let onPressInTime = 0

  const fadeAnim = useRef(new Animated.Value(1)).current

  const start = duration => {
    const blinkSpeed = (duration * 1000) / 2
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: timeGap / blinkSpeed / 2,
      },
    ).start(() => {
      const timer = setTimeout(() => {
        onProcessComplete()
        timer && clearTimeout(timer)
      }, 2000)
    })
  }

  useEffect(() => {
    setColor(checked ? 'red' : 'white')
  }, [checked])

  return (
    <TouchableOpacity
      onPressIn={({nativeEvent}) => {
        onPressInTime = nativeEvent.timestamp
      }}
      onPressOut={({nativeEvent}) => {
        const timerDiffer = nativeEvent.timestamp - onPressInTime
        onPressInTime = 0
        if (timerDiffer > timeGap && checked) {
          start(lf)
          setColor('green')
          onUpdateStatus('Filter calibration in progress')
        }
      }}
      style={styles.container}
    >
      <Animated.Image
        source={ImageSource.filter}
        style={[styles.image, {opacity: fadeAnim, tintColor: color}]}
      />
    </TouchableOpacity>
  )
}

const styles = ScaledSheet.create({
  image: {
    width: '40@ms',
    height: '40@ms',
    resizeMode: 'contain',
  },
  container: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: '10@ms',
    height: '70@ms',
    width: '70@ms',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginVertical: '10@ms',
  },
  textStyle: {
    fontSize: '30@ms',
    color: 'white',
    fontWeight: '700',
  },
})
