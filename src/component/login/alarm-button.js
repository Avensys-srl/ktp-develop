import React from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useEffect, useRef, useState} from 'react';
import {Colors, Sizing} from '../../styles';

export const AlarmButton = props => {
  const {
    diagonalImageSource1,
    diagonalImageSource2,
    alramRunning = false,
    alramNotRunning = false,
    flagForPairingFireAlarm = false,
    flagForTestFailedFireAlarm = false,
    flagForAccessoryFireAlarm = false,
    onUpdateStatusFireAlarm = () => 0,
  } = props;
  //--------------------------------------Declare Veriables--------------------------------
  let lf = 1; //----------seconds
  let bt = 30 * 60 * 1000; //-----------minutes
  let hf = 0.5; //--------seconds
  let t3 = 5000; //5 seconds
  let fireAlarmState = 'first';

  let onPressInTime = 0;
  let onPressOutTime = 0;

  const [genralAlarmColor, setGenralAlarmColor] = useState('white');
  const [fireAlramColor, setFireAlarmColor] = useState('white');

  let fireAlarmTimeGap = 5000;

  const genralAlarmOpacity = useRef(new Animated.Value(1)).current;
  const fireAlramOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (alramRunning) {
      startGenralAlarmProcess(lf, Infinity);
    }
    //  else if (alramNotRunning) {
    //   setGenralAlarmColor('red')
    //   genralAlarmOpacity.setValue(1)
    //   genralAlarmOpacity && genralAlarmOpacity.stopAnimation()
    // }
    else {
      setGenralAlarmColor('white');
      genralAlarmOpacity.setValue(1);
      genralAlarmOpacity && genralAlarmOpacity.stopAnimation();
    }
  }, [alramRunning]);
  useEffect(() => {
    if (alramNotRunning) {
      setGenralAlarmColor('red');
      genralAlarmOpacity.setValue(1);
      genralAlarmOpacity && genralAlarmOpacity.stopAnimation();
    } else {
      setGenralAlarmColor('white');
    }
  }, [alramNotRunning]);

  const startGenralAlarmProcess = duration => {
    setGenralAlarmColor('red');
    const blinkSpeed = (duration * 1000) / 2;
    Animated.loop(
      Animated.sequence([
        Animated.timing(genralAlarmOpacity, {
          toValue: 0,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
        Animated.timing(genralAlarmOpacity, {
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

  const startFireAlarmZeroIteration = duration => {
    const blinkSpeed = (duration * 1000) / 2;
    Animated.loop(
      Animated.sequence([
        Animated.timing(fireAlramOpacity, {
          toValue: 0,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
        Animated.timing(fireAlramOpacity, {
          toValue: 1,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
      ]),
      {},
    ).start();
  };

  const startFireAlarmProcess = duration => {
    const blinkSpeed = (duration * 1000) / 2;
    Animated.loop(
      Animated.sequence([
        Animated.timing(fireAlramOpacity, {
          toValue: 0,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
        Animated.timing(fireAlramOpacity, {
          toValue: 1,
          duration: blinkSpeed,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: fireAlarmTimeGap / blinkSpeed / 2,
      },
    ).start(() => {
      if (fireAlarmState === 'first') {
        if (flagForPairingFireAlarm) {
          onUpdateStatusFireAlarm('paired after piaring process');
          // fireAlarmTimeGap= 10000
          fireAlarmTimeGap = 2000;
          startFireAlarmProcess(hf);
          fireAlarmState = 'second';
        } else {
          fireAlarmTimeGap = 2000;
          startFireAlarmProcess(hf);
          onUpdateStatusFireAlarm('paired after piaring process');
          fireAlarmState = 'second';
        }
      } else if (fireAlarmState === 'second') {
        const timerDiffer = onPressOutTime - onPressInTime;
        onPressInTime = 0;
        onPressOutTime = 0;
        if (timerDiffer > t3) {
          fireAlarmTimeGap = bt;
          onUpdateStatusFireAlarm('hello1');
          startFireAlarmProcess(hf);
          fireAlarmState = 'third';
        } else {
          onUpdateStatusFireAlarm('activated ');
          const timer = setTimeout(() => {
            setFireAlarmColor('green');
            timer && clearTimeout(timer);
          }, 2000);
        }
      } else if (fireAlarmState === 'third') {
        onUpdateStatusFireAlarm('hello4');
        const timer = setTimeout(() => {
          setFireAlarmColor('green');
          timer && clearTimeout(timer);
        }, 2000);
      }
    });
  };
  useEffect(() => {
    if (flagForAccessoryFireAlarm) {
      setFireAlarmColor('red');
      // startFireAlarmProcess(lf)
      startFireAlarmZeroIteration(lf);
      onUpdateStatusFireAlarm('Accessory Disconnected');
    }
  }, [flagForAccessoryFireAlarm]);

  useEffect(() => {
    if (flagForTestFailedFireAlarm) {
      setFireAlarmColor('red');
      // startFireAlarmProcess(hf)
      startFireAlarmZeroIteration(hf);
      onUpdateStatusFireAlarm('Test Failed');
    }
  }, [flagForTestFailedFireAlarm]);

  useEffect(() => {
    if (flagForPairingFireAlarm) {
      onUpdateStatusFireAlarm('pairing in progress');
      setFireAlarmColor('green');
      startFireAlarmProcess(lf);
    } else {
      setFireAlarmColor('white');
    }
  }, [flagForPairingFireAlarm]);
  return (
    <View style={styles.container}>
      <View style={styles.diagonalLine}></View>
      <TouchableOpacity style={styles.diagonalImage1}>
        <Animated.Image
          source={diagonalImageSource1}
          style={[
            styles.diagonalImage,
            {opacity: genralAlarmOpacity, tintColor: genralAlarmColor},
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPressIn={({nativeEvent}) => {
          onPressInTime = nativeEvent.timestamp;
        }}
        onPressOut={({nativeEvent}) => {
          onPressOutTime = nativeEvent.timestamp;
          const timerDiffer = onPressOutTime - onPressInTime;
          onPressInTime = 0;
          onPressOutTime = 0;
          if (timerDiffer > t3) {
            setFireAlarmColor('green');
            startFireAlarmProcess(lf);
            onUpdateStatusFireAlarm('Test Procedure in progress');
          }
          // else{
          //   setFireAlarmColor('green')
          //   startFireAlarmProcess(lf)
          //   onUpdateStatusFireAlarm('pairing in progress')
          // }
        }}
        style={styles.diagonalImage2}>
        <Animated.Image
          source={diagonalImageSource2}
          style={[
            styles.diagonalImage,
            {opacity: fireAlramOpacity, tintColor: fireAlramColor},
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
    left: Sizing.screenWidth > 430 ? 15 : Sizing.vw * 3,
    top: Sizing.screenWidth > 430 ? 15 : Sizing.vw * 3,
    
  },
  diagonalImage2: {
    position: 'absolute',
    bottom: Sizing.screenWidth > 430 ? 15 : Sizing.vw * 3,
    right: Sizing.screenWidth > 430 ? 15 : Sizing.vw * 3,
  },
  diagonalImage: {
    // height: '22@ms',
    width:Sizing.screenWidth > 430 ? 35 : Sizing.vw * 8,
    height:Sizing.screenWidth > 430 ? 35 : Sizing.vw * 8,
    resizeMode: 'contain',
  },
});
