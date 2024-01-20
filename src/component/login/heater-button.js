import React from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useEffect, useRef, useState} from 'react';
import {Colors, Sizing} from '../../styles';
export const HeaterButton = props => {
  const {
    diagonalImageSource1,
    diagonalImageSource2,
    onPreHeaterProcessStart = () => 0,
    onPreHeaterProcessComplete = () => 0,
    onPostHeaterProcessComplete = () => 0,
    flagForAlarm = false,
    flagForPairing = false,
    flagForPostHeaterAlarm = false,
    flagForPostHeaterPairing = false,
    disabled = false,
    details = {},
    onUpdatePreHeaterStatus = () => 0,
    onUpdatePostHeaterStatus = () => 0,
    onLongPress,
  } = props;
  //--------------------------------------Declare Veriables--------------------------------
  let lf = 1; //----------seconds
  let bt = 30 * 60 * 1000; //-----------minutes
  let hf = 0.5; //--------seconds
  let t3 = 5000; //5 seconds
  let preHeaterState = 'first';
  let postHeaterState = 'first';

  let onPressInTime = 0;
  let onPressOutTime = 0;

  const [preHeatercolor, setPreHeaterColor] = useState('white');
  const [postHeatercolor, setPostHeaterColor] = useState('white');

  let preHeaterTimeGap = 5000;
  let postHeaterTimeGap = 5000;

  // console.log('fnished data is---', postHeaterTimeGap)
  const preHeaterOpacity = useRef(new Animated.Value(1)).current;
  const postHeaterOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (flagForAlarm) {
      onUpdatePreHeaterStatus('Alarm');
      // startPreHeaterProcess(hf)
      startPreHeaterZeroIteration(hf);
    } else {
      setPreHeaterColor('white');
      preHeaterOpacity && preHeaterOpacity.setValue(1);
      preHeaterOpacity && preHeaterOpacity.stopAnimation();
    }
  }, [flagForAlarm]);
  useEffect(() => {
    if (flagForPostHeaterAlarm) {
      onUpdatePostHeaterStatus('Alarm');
      startPostHeaterZeroIteration(hf);
      // setPostHeaterColor('blue')
    } else {
      setPostHeaterColor('white');
      postHeaterOpacity && postHeaterOpacity.setValue(1);
      postHeaterOpacity && postHeaterOpacity.stopAnimation();
    }
  }, [flagForPostHeaterAlarm]);
  const startPreHeaterProcess = duration => {
    setPreHeaterColor('orange');
    const blinkSpeed = (duration * 1000) / 2;
    Animated.loop(
      Animated.sequence([
        Animated.timing(preHeaterOpacity, {
          toValue: 0,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
        Animated.timing(preHeaterOpacity, {
          toValue: 1,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: preHeaterTimeGap / blinkSpeed / 2,
      },
    ).start(() => {
      if (preHeaterState === 'first') {
        preHeaterState = 'second';
        preHeaterTimeGap = 2000;
        startPreHeaterProcess(hf);
        onUpdatePreHeaterStatus('paired after piaring process');
      } else if (preHeaterState === 'second') {
        onUpdatePreHeaterStatus('activated');
      }
      // if (preHeaterState === 'first') {
      //   if (flagForAlarm) {
      //     preHeaterTimeGap = 10000
      //     startPreHeaterProcess(hf)
      //     preHeaterState = 'second'
      //   } else {
      //     preHeaterTimeGap = 2000
      //     startPreHeaterProcess(hf)
      //     preHeaterState = 'second'
      //   }
      // } else if (preHeaterState === 'second') {
      //   const timer = setTimeout(() => {
      //     setPreHeaterColor('white')
      //     // onPreHeaterProcessComplete()
      //     timer && clearTimeout(timer)
      //   }, 2000)
      // }
    });
  };

  const startPreHeaterZeroIteration = duration => {
    setPreHeaterColor('orange');
    const blinkSpeed = (duration * 1000) / 2;
    Animated.loop(
      Animated.sequence([
        Animated.timing(preHeaterOpacity, {
          toValue: 0,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
        Animated.timing(preHeaterOpacity, {
          toValue: 1,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
      ]),
      {
        // iterations: preHeaterTimeGap / blinkSpeed / 2,
      },
    ).start();
  };

  const startPostHeaterProcess = duration => {
    setPostHeaterColor('blue');
    const blinkSpeed = (duration * 1000) / 2;
    Animated.loop(
      Animated.sequence([
        Animated.timing(postHeaterOpacity, {
          toValue: 0,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
        Animated.timing(postHeaterOpacity, {
          toValue: 1,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: postHeaterTimeGap / blinkSpeed / 2,
      },
    ).start(() => {
      if (postHeaterState === 'first') {
        postHeaterState = 'second';
        postHeaterTimeGap = 2000;
        startPostHeaterProcess(hf);
        onUpdatePostHeaterStatus('pairing successful');
      } else if (postHeaterState === 'second') {
        const timerDiffer = onPressOutTime - onPressInTime;
        onPressInTime = 0;
        onPressOutTime = 0;
        if (timerDiffer > t3) {
          postHeaterTimeGap = bt;
          startBoostModePostHeaterProcess();
          // onUpdatePostHeaterStatus("Boost Mode On")
          postHeaterState = 'third';
        } else {
          // const timer = setTimeout(() => {
          //   setPostHeaterColor('white')
          //   onPostHeaterProcessComplete
          //   timer && clearTimeout(timer)
          // }, 2000)
        }
      } else if (postHeaterState === 'third') {
        onUpdatePostHeaterStatus('activated');
      }
      // if (postHeaterState === 'first') {
      //   if (flagForPostHeaterAlarm) {
      //     postHeaterTimeGap = 10000
      //     startPostHeaterProcess(hf)
      //     postHeaterState = 'second'
      //   } else {
      //     postHeaterTimeGap = 2000
      //     startPostHeaterProcess(hf)
      //     postHeaterState = 'second'
      //   }
      // } else if (postHeaterState === 'second') {
      //   const timerDiffer = onPressOutTime - onPressInTime
      //   onPressInTime = 0
      //   onPressOutTime = 0
      //   if (timerDiffer > t3) {
      //     postHeaterTimeGap = bt
      //     startPostHeaterProcess(hf)
      //     postHeaterState = 'third'
      //   } else {
      //     const timer = setTimeout(() => {
      //       setPostHeaterColor('white')
      //       onPostHeaterProcessComplete
      //       timer && clearTimeout(timer)
      //     }, 2000)
      //   }
      // } else if (postHeaterState === 'third') {
      //   const timer = setTimeout(() => {
      //     setPostHeaterColor('white')
      //     onPostHeaterProcessComplete()
      //     timer && clearTimeout(timer)
      //   }, 2000)
      // }
    });
  };

  const startBoostModePostHeaterProcess = () => {
    setPostHeaterColor('blue');
    // const blinkSpeed = (duration * 1000) / 2
    Animated.loop(
      Animated.sequence([
        Animated.timing(postHeaterOpacity, {
          toValue: 0,
          // duration: blinkSpeed,
          duration: hf,
          useNativeDriver: true,
        }),
        Animated.timing(postHeaterOpacity, {
          toValue: 1,
          // duration: blinkSpeed,
          duration: hf,
          useNativeDriver: true,
        }),
        Animated.timing(postHeaterOpacity, {
          toValue: 0,
          // duration: blinkSpeed,
          duration: hf,
          useNativeDriver: true,
        }),
        Animated.timing(postHeaterOpacity, {
          toValue: 1,
          // duration: blinkSpeed,
          duration: hf,
          useNativeDriver: true,
        }),
        Animated.timing(postHeaterOpacity, {
          toValue: 0,
          // duration: blinkSpeed,
          duration: lf,
          useNativeDriver: true,
        }),
        Animated.timing(postHeaterOpacity, {
          toValue: 1,
          // duration: blinkSpeed,
          duration: lf,
          useNativeDriver: true,
        }),
      ]),
      {
        // iterations: postHeaterTimeGap / blinkSpeed / 2,
        iterations: 30 * 60 * 1000,
      },
    ).start();
  };

  const startPostHeaterZeroIteration = duration => {
    // setPostHeaterColor('blue')
    const blinkSpeed = (duration * 1000) / 2;
    Animated.loop(
      Animated.sequence([
        Animated.timing(postHeaterOpacity, {
          toValue: 0,
          duration: blinkSpeed,
          // duration: hf,
          useNativeDriver: true,
        }),
        Animated.timing(postHeaterOpacity, {
          toValue: 1,
          duration: blinkSpeed,
          // duration: hf,
          useNativeDriver: true,
        }),
      ]),
      {
        // iterations: Infinity
      },
    ).start();
  };

  useEffect(() => {
    if (flagForPairing) {
      startPreHeaterProcess(lf);
      onUpdatePreHeaterStatus('pairing in progress');
    } else {
      setPreHeaterColor(Colors.WHITE);
    }
  }, [flagForPairing]);

  useEffect(() => {
    if (flagForPostHeaterPairing) {
      startPostHeaterProcess(lf);
      onUpdatePostHeaterStatus('pairing in progress');
    } else {
      setPostHeaterColor(Colors.WHITE);
    }
  }, [flagForPostHeaterPairing]);

  return (
    <View style={styles.container}>
      <View style={styles.diagonalLine}></View>
      <TouchableOpacity
        disabled={false}
        style={styles.diagonalImage1}
        // onPress={() => {
        //   if (flagForPairing) {
        //     startPreHeaterProcess(lf)
        //   }
        // }}
      >
        <Animated.Image
          source={diagonalImageSource1}
          style={[
            styles.diagonalImage,
            {opacity: preHeaterOpacity, tintColor: preHeatercolor},
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        delayLongPress={5000}
        onLongPress={startBoostModePostHeaterProcess}
        onPressIn={({nativeEvent}) => {
          onPressInTime = nativeEvent.timestamp;
        }}
        onPressOut={({nativeEvent}) => {
          onPressOutTime = nativeEvent.timestamp;
          if (flagForPostHeaterPairing) {
            startPostHeaterProcess(lf);
          }
        }}
        style={styles.diagonalImage2}>
        <Animated.Image
          source={diagonalImageSource2}
          style={[
            styles.diagonalImage,
            {opacity: postHeaterOpacity, tintColor: postHeatercolor},
            // diagonalImageStyle2,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: '10@ms',
    width:Sizing.screenWidth > 430 ? 110 : Sizing.vw * 24,
    height:Sizing.screenWidth > 430 ? 110 : Sizing.vw * 24,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginVertical: '10@ms',
  },
  textStyle: {
    fontSize: '30@ms',
    color: Colors.WHITE,
    fontWeight: '700',
  },
  diagonalLine: {
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    height: Sizing.vh * 0.1,
    width: Sizing.vw * 100,

    transform: [{rotate: '135deg'}],
  },
  diagonalImage1: {
    position: 'absolute',
    top:  Sizing.screenWidth > 430 ? 15 : Sizing.vw * 3.3,
    left:  Sizing.screenWidth > 430 ? 15 : Sizing.vw * 3.3,
  },
  diagonalImage2: {
    position: 'absolute',
    bottom:  Sizing.screenWidth > 430 ? 15 : Sizing.vw * 3.3,
    right:  Sizing.screenWidth > 430 ? 15 : Sizing.vw * 3.3,
  },
  diagonalImage: {
    height: Sizing.vw * 7,
    width: Sizing.vw * 7
  },
});
