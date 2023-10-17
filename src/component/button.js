import {View, TouchableOpacity, Animated} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import {useEffect, useRef} from 'react'
export const Button = props => {
  const {text, onPress = () => null, onLongPress, textStyle, speed = {}} = props
  //--------------------------------------Declare Veriables--------------------------------
  let t3 = 5 //----------seconds
  let lf = 1 //----------seconds
  let bt = 30 * 60 * 1000 //-----------minutes
  let hf = 0.5 //--------seconds

  console.log('speed---', speed)

  const fadeAnim = useRef(new Animated.Value(0)).current
  const start = duration => {
    const blinkSpeed = (duration * 1000) / 2
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 30 * 60 * 1000,
      },
    ).start()
  }
  //-----------------------------For Speed 3 selected----------------------------
  useEffect(() => {
    if (speed?.currentSpeed == 100 && text === 3) {
      console.log('current000----', speed?.currentSpeed)
      start(lf)
      const stopBlinkingTimeout = setTimeout(() => {
        fadeAnim.stopAnimation()
        fadeAnim.setValue(1)
      }, bt)
      return () => clearTimeout(stopBlinkingTimeout)
    } else {
      fadeAnim.setValue(1)
      fadeAnim && fadeAnim.stopAnimation()
    }
  }, [speed?.currentSpeed])

  useEffect(() => {
    if (!speed.activated) {
      console.log('call data')
      fadeAnim && fadeAnim.stopAnimation()
      fadeAnim && fadeAnim.setValue(1)
    }
  }, [speed?.activated])

  return (
    <TouchableOpacity
      style={[
        styles.container,
        //  boxStyle,
        {opacity: speed.text === text ? 1 : 0.5},
      ]}
      onPress={() => {
        onPress()
      }}
      delayLongPress={t3 * 1000}
      onLongPress={onLongPress}
    >
      {text &&
        ({opacity: fadeAnim},
        (
          <Animated.Text
            style={[styles.textStyle, textStyle, {opacity: fadeAnim}]}
          >
            {text}
          </Animated.Text>
        ))}
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
  diagonalLine: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '1@ms',
    width: '90@ms',
    top: '50%',
    left: '85@ms',
    transform: [{translateX: -100}, {translateY: -1}, {rotate: '135deg'}],
  },
  diagonalImage1: {
    position: 'absolute',
    top: '8@ms',
    left: '8@ms',
    tintColor: 'white',
    height: '26@ms',
    width: '26@ms',
  },
  diagonalImage2: {
    position: 'absolute',
    bottom: '5@ms',
    right: '5@ms',
    tintColor: 'white',
    height: '26@ms',
    width: '26@ms',
  },
})
