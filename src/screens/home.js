import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ImageSource} from '../common/imageSource';
import {useState, useEffect} from 'react';
import {Button, CheckBox, MultiBar} from '../component/index';
import {FilterButton} from './filter-button';
import {HeaterButton} from './heater-button';
import {AlramButton} from './alram-button';

export const Home = () => {
  const {height, width} = Dimensions.get('window');
  console.log('height ,,,,', height, width);
  const [speed, setSpeed] = useState({
    currentSpeed: 0,
    text: 0,
    status: '',
    activated: true,
  });
  const [filterDetails, setFilterDetails] = useState({
    timer: 5,
    checked: false,
    disabled: false,
    status: '',
    activated: false,
  });
  const [preHeater, setPreHeater] = useState({
    timer: 5,
    disabled: false,
    flagForPairing: false,
    flagForAlarm: false,
    status: '',
    flagForPairingStatus: false,
    flagForAlarmStatus: true,
    activated: false,
  });
  const [postHeater, setPostHeater] = useState({
    timer: 5,
    disabled: false,
    flagForPairing: false,
    flagForAlarm: false,
    status: '',
    flagForPairingStatus: false,
    flagForAlarmStatus: true,
    activated: false,
  });

  const [generalAlarm, setGeneralAlarm] = useState({
    timer: 5,
    disabled: false,
    alramRunning: false,
    alramNotRunning: false,
    status: '',
  });

  const [fireAlarm, setFireAlarm] = useState({
    timer: 5,
    disabled: false,
    accessoryFireAlarm: false,
    testFailedFireAlarm: false,
    pairingFireAlarm: false,
    status: '',
    accessoryCheck: true,
    testFailedCheck: true,
    pairingCheck: false,
    activated: false,
  });

  useEffect(() => {
    setGeneralAlarm(prev => ({
      ...prev,
      alramNotRunning: preHeater.flagForAlarm,
      status: preHeater.flagForAlarm ? 'Unit not running' : '',
    }));
  }, [preHeater.flagForAlarm]);

  useEffect(() => {
    setGeneralAlarm(prev => ({
      ...prev,
      alramNotRunning: postHeater.flagForAlarm,
      status: postHeater.flagForAlarm ? 'Unit not running' : '',
    }));
  }, [postHeater.flagForAlarm]);

  // return <View style={{flex:1,backgroundColor:'White',width:'100%',alignItems:'center',justifyContent:'center'}}>
  //  <MultiBar/>
  // </View>

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.text}>{`Current speed is ${speed.currentSpeed} %`}</Text>*/}
      {speed.activated && (
        <Text style={styles.text}>{`Speed Status:- ${speed.status}`}</Text>
      )}
      {filterDetails.activated && (
        <Text
          style={styles.text}>{`Filter status:- ${filterDetails.status}`}</Text>
      )}
      {preHeater.activated && (
        <Text
          style={styles.text}>{`Pre Heater status:- ${preHeater.status}`}</Text>
      )}
      {postHeater.activated && (
        <Text
          style={
            styles.text
          }>{`Post Heater status:- ${postHeater.status}`}</Text>
      )}
      {(preHeater.activated || postHeater.activated) && (
        <Text
          style={
            styles.text
          }>{`General Alarm status:- ${generalAlarm.status}`}</Text>
      )}
      {fireAlarm.activated && (
        <Text
          style={styles.text}>{`Fire Alarm status:- ${fireAlarm.status}`}</Text>
      )}
      <View style={styles.buttonContainer}>
        {/* --------------------------------1st Row---------------------------------------- */}
        <View style={styles.row}>
          <Button
            text={3}
            onPress={() => {
              setFilterDetails(prv => ({
                ...prv,
                activated: false,
                checked: false,
              }));
              setPostHeater({
                timer: 5,
                disabled: false,
                flagForPairing: false,
                flagForAlarm: false,
                status: '',
                flagForPairingStatus: false,
                flagForAlarmStatus: true,
                activated: false,
              });
              setFireAlarm({
                timer: 5,
                disabled: false,
                accessoryFireAlarm: false,
                testFailedFireAlarm: false,
                pairingFireAlarm: false,
                status: '',
                accessoryCheck: true,
                testFailedCheck: true,
                pairingCheck: false,
                activated: false,
              });
              setPreHeater({
                timer: 5,
                disabled: false,
                flagForPairing: false,
                flagForAlarm: false,
                status: '',
                flagForPairingStatus: false,
                flagForAlarmStatus: true,
                activated: false,
              });
              setSpeed({
                currentSpeed: 80,
                text: 3,
                status: 'Current Speed is 80 %',
                activated: true,
              });
            }}
            onLongPress={() => {
              setFilterDetails(prv => ({
                ...prv,
                activated: false,
                checked: false,
              }));
              setPostHeater({
                timer: 5,
                disabled: false,
                flagForPairing: false,
                flagForAlarm: false,
                status: '',
                flagForPairingStatus: false,
                flagForAlarmStatus: true,
                activated: false,
              });
              setFireAlarm({
                timer: 5,
                disabled: false,
                accessoryFireAlarm: false,
                testFailedFireAlarm: false,
                pairingFireAlarm: false,
                status: '',
                accessoryCheck: true,
                testFailedCheck: true,
                pairingCheck: false,
                activated: false,
              });
              setPreHeater({
                timer: 5,
                disabled: false,
                flagForPairing: false,
                flagForAlarm: false,
                status: '',
                flagForPairingStatus: false,
                flagForAlarmStatus: true,
                activated: false,
              });
              setSpeed({
                currentSpeed: 100,
                text: 3,
                status: 'Boost Mode on for 30 Min',
                activated: true,
              });
            }}
            speed={speed}
          />
          <FilterButton
            checked={filterDetails.checked}
            onProcessStart={() => {
              setFilterDetails({disabled: true});
            }}
            onProcessComplete={() => {
              setFilterDetails(prv => {
                return {
                  ...prv,
                  status: ' Clean Filter Confirmed',
                  activated: false,
                  checked: false,
                };
              });
            }}
            onUpdateStatus={text => {
              setFilterDetails(prv => {
                return {...prv, status: text};
              });
            }}
          />
        </View>
        {/* --------------------------------2nd Row------------------------------------- */}
        <View style={styles.row}>
          <Button
            text={2}
            onPress={() => {
              setFilterDetails(prv => ({
                ...prv,
                activated: false,
                checked: false,
              }));
              setPostHeater({
                timer: 5,
                disabled: false,
                flagForPairing: false,
                flagForAlarm: false,
                status: '',
                flagForPairingStatus: false,
                flagForAlarmStatus: true,
                activated: false,
              });
              setFireAlarm({
                timer: 5,
                disabled: false,
                accessoryFireAlarm: false,
                testFailedFireAlarm: false,
                pairingFireAlarm: false,
                status: '',
                accessoryCheck: true,
                testFailedCheck: true,
                pairingCheck: false,
                activated: false,
              });
              setPreHeater({
                timer: 5,
                disabled: false,
                flagForPairing: false,
                flagForAlarm: false,
                status: '',
                flagForPairingStatus: false,
                flagForAlarmStatus: true,
                activated: false,
              });
              setSpeed({
                currentSpeed: 50,
                text: 2,
                status: 'Current Speed is 50 %',
                activated: true,
              });
            }}
            speed={speed}
          />
          <HeaterButton
            disabled={true}
            flagForAlarm={preHeater.flagForAlarm}
            flagForPairing={preHeater.flagForPairing}
            flagForPostHeaterAlarm={postHeater.flagForAlarm}
            flagForPostHeaterPairing={postHeater.flagForPairing}
            diagonalImageSource1={ImageSource.heater}
            diagonalImageSource2={ImageSource.heater}
            // onPreHeaterProcessComplete={() => {
            //   console.log("dfgdgd---",)
            //   setPreHeater({
            //     timer: 5,
            //     disabled: false,
            //     // disableFlagForAlarm:false,
            //     // disableFlagForPairing:false,
            //     flagForPairing: false,
            //     flagForAlarm: false,
            //   })
            // }}
            // onPostHeaterProcessComplete={() => {
            //   setPostHeater({
            //     timer: 5,
            //     disabled: false,
            //     flagForPairing: false,
            //     flagForAlarm: false,
            //   })
            // }}
            details={preHeater.flagForPairing}
            onUpdatePreHeaterStatus={text => {
              if (text === 'paired after piaring process') {
                setPreHeater(prv => {
                  return {
                    ...prv,
                    status: text,
                    flagForPairingStatus: true,
                    flagForAlarmStatus: false,
                  };
                });
              } else {
                setPreHeater(prv => {
                  return {
                    ...prv,
                    status: text,
                  };
                });
              }
            }}
            onUpdatePostHeaterStatus={text => {
              if (text === 'pairing successful') {
                setPostHeater(prv => {
                  return {
                    ...prv,
                    status: text,
                    flagForPairingStatus: true,
                    flagForAlarmStatus: false,
                  };
                });
                setGeneralAlarm(prv => ({...prv, status: ''}));
              } else {
                setPostHeater(prv => {
                  return {
                    ...prv,
                    status: text,
                  };
                });
              }
            }}
          />
        </View>
        {/* --------------------------3rd Row---------------------------------------- */}
        <View style={styles.row}>
          <Button
            text={1}
            onPress={() => {
              setFilterDetails(prv => ({
                ...prv,
                activated: false,
                checked: false,
              }));
              setPostHeater({
                timer: 5,
                disabled: false,
                flagForPairing: false,
                flagForAlarm: false,
                status: '',
                flagForPairingStatus: false,
                flagForAlarmStatus: true,
                activated: false,
              });
              setFireAlarm({
                timer: 5,
                disabled: false,
                accessoryFireAlarm: false,
                testFailedFireAlarm: false,
                pairingFireAlarm: false,
                status: '',
                accessoryCheck: true,
                testFailedCheck: true,
                pairingCheck: false,
                activated: false,
              });
              setPreHeater({
                timer: 5,
                disabled: false,
                flagForPairing: false,
                flagForAlarm: false,
                status: '',
                flagForPairingStatus: false,
                flagForAlarmStatus: true,
                activated: false,
              });
              setSpeed({
                currentSpeed: 20,
                text: 1,
                status: 'Current Speed is 20 %',
                activated: true,
              });
            }}
            speed={speed}
          />
          <TouchableOpacity style={styles.dot}></TouchableOpacity>
          <AlramButton
            alramRunning={generalAlarm.alramRunning}
            alramNotRunning={generalAlarm.alramNotRunning}
            flagForPairingFireAlarm={fireAlarm.pairingFireAlarm}
            flagForTestFailedFireAlarm={fireAlarm.testFailedFireAlarm}
            flagForAccessoryFireAlarm={fireAlarm.accessoryFireAlarm}
            diagonalImageSource1={ImageSource.warning}
            diagonalImageSource2={ImageSource.fire}
            onGenralAlarmProcessComplete={() => {
              setGeneralAlarm({
                timer: 5,
                disabled: false,
                alramRunning: false,
                alramNotRunning: false,
              });
            }}
            onFireAlarmProcessComplete={() => {
              setFireAlarm({
                timer: 5,
                disabled: false,
                accessoryFireAlarm: false,
                testFailedFireAlarm: false,
                pairingFireAlarm: false,
              });
            }}
            onUpdateStatusFireAlarm={text => {
              if (text === 'paired after piaring process') {
                setFireAlarm(prv => {
                  return {
                    ...prv,
                    status: text,
                    accessoryCheck: false,
                    testFailedCheck: false,
                    pairingCheck: true,
                  };
                });
              } else {
                setFireAlarm(prv => {
                  return {
                    ...prv,
                    status: text,
                  };
                });
              }
            }}
          />
        </View>
      </View>
      {/*------------------------------------Fiter Working-------------------------------------*/}
      <CheckBox
        checked={filterDetails.checked}
        disabled={filterDetails.disabled}
        onPress={() => {
          setSpeed(prv => ({...prv, activated: false}));
          setFilterDetails(prv => {
            if (!prv.checked) {
              return {
                ...prv,
                activated: true,
                checked: !prv.checked,
                status: !prv.checked
                  ? 'The unit detect the clogged filter.'
                  : '',
              };
            }
            return {
              ...prv,
              checked: !prv.checked,
              status: !prv.checked ? 'The unit detect the clogged filter.' : '',
            };
          });
        }}
        text={'Clogged filter simulation : '}
      />

      {/* --------------------------------------------Pre Heater------------------------------ */}
      <CheckBox
        checked={preHeater.flagForPairing}
        disabled={preHeater.flagForPairingStatus}
        style={
          preHeater.flagForPairingStatus &&
          preHeater.flagForAlarm && {backgroundColor: 'white'}
        }
        onPress={() => {
          setSpeed(prv => ({...prv, activated: false}));
          setFilterDetails(prv => ({...prv, activated: false, checked: false}));
          setPostHeater({
            timer: 5,
            disabled: false,
            flagForPairing: false,
            flagForAlarm: false,
            status: '',
            flagForPairingStatus: false,
            flagForAlarmStatus: true,
            activated: false,
          });
          setFireAlarm({
            timer: 5,
            disabled: false,
            accessoryFireAlarm: false,
            testFailedFireAlarm: false,
            pairingFireAlarm: false,
            status: '',
            accessoryCheck: true,
            testFailedCheck: true,
            pairingCheck: false,
            activated: false,
          });
          setPreHeater(prv => {
            return {
              ...prv,
              flagForPairing: !prv.flagForPairing,
              flagForAlarm: false,
              activated: true,
              flagForAlarmStatus: true,
            };
            // }
          });
        }}
        text={'Pairing preheater : '}
      />
      <CheckBox
        checked={preHeater.flagForAlarm}
        disabled={preHeater.flagForAlarmStatus}
        style={preHeater.flagForAlarmStatus && {backgroundColor: 'white'}}
        onPress={() => {
          // setGeneralAlarm(prv => ({...prv,status:'unit not running'}))
          setPreHeater(prv => {
            if (prv.flagForAlarm) {
              return {
                ...prv,
                flagForAlarm: false,
                checked: false,
                flagForPairingStatus: false,
                flagForPairing: false,
                activated: false,
              };
            } else {
              return {
                ...prv,
                flagForAlarm: true,
                activated: true,
                flagForPairingStatus: true,
              };
            }
          });
        }}
        text={'Alarm preheater : '}
      />
      <CheckBox
        checked={postHeater.flagForPairing}
        disabled={postHeater.flagForPairingStatus}
        style={
          postHeater.flagForPairingStatus &&
          postHeater.flagForAlarm && {backgroundColor: 'white'}
        }
        onPress={() => {
          setSpeed(prv => ({...prv, activated: false}));
          setFilterDetails(prv => ({...prv, activated: false, checked: false}));
          setPreHeater({
            timer: 5,
            disabled: false,
            flagForPairing: false,
            flagForAlarm: false,
            status: '',
            flagForPairingStatus: false,
            flagForAlarmStatus: true,
            activated: false,
          });
          setFireAlarm({
            timer: 5,
            disabled: false,
            accessoryFireAlarm: false,
            testFailedFireAlarm: false,
            pairingFireAlarm: false,
            status: '',
            accessoryCheck: true,
            testFailedCheck: true,
            pairingCheck: false,
            activated: false,
          });
          setPostHeater(prv => {
            return {
              ...prv,
              flagForPairing: !prv.flagForPairing,
              flagForAlarm: false,
              activated: true,
              flagForPairing: !prv.flagForPairing,
            };
          });
        }}
        text={'Pairing postheater : '}
      />
      <CheckBox
        checked={postHeater.flagForAlarm}
        disabled={postHeater.flagForAlarmStatus}
        style={postHeater.flagForAlarmStatus && {backgroundColor: 'white'}}
        onPress={() => {
          setSpeed(prv => ({...prv, activated: false}));
          setPostHeater(prv => {
            if (prv.flagForAlarm) {
              return {
                ...prv,
                flagForAlarm: !prv.flagForAlarm,
                checked: false,
                flagForPairingStatus: false,
                flagForPairing: false,
              };
            } else {
              return {...prv, flagForAlarm: !prv.flagForAlarm, activated: true};
            }
            // return {
            //   ...prv,
            //   flagForPairing: !prv.flagForPairing,
            //   flagForAlarm: false,
            // }
          });
          // setPostHeater(prv => {
          //   return {...prv, flagForAlarm: !prv.flagForAlarm}
          // })
        }}
        text={'Alarm post heater : '}
      />

      {/* -----------------------------------Fire Alarm------------------------------------- */}
      <CheckBox
        checked={fireAlarm.pairingFireAlarm}
        // disabled={fireAlarm.disabled}
        disabled={fireAlarm.pairingCheck}
        style={fireAlarm.pairingCheck && {backgroundColor: 'white'}}
        onPress={() => {
          setSpeed(prv => ({...prv, activated: false}));
          setFilterDetails(prv => ({...prv, activated: false, checked: false}));
          setPreHeater({
            timer: 5,
            disabled: false,
            flagForPairing: false,
            flagForAlarm: false,
            status: '',
            flagForPairingStatus: false,
            flagForAlarmStatus: true,
            activated: false,
          });
          setPostHeater({
            timer: 5,
            disabled: false,
            flagForPairing: false,
            flagForAlarm: false,
            status: '',
            flagForPairingStatus: false,
            flagForAlarmStatus: true,
            activated: false,
          });
          setFireAlarm(prv => {
            return {
              ...prv,
              pairingFireAlarm: !prv.pairingFireAlarm,
              activated: true,
            };
          });
        }}
        text={'Pairing Fire kit: '}
      />
      <CheckBox
        checked={fireAlarm.testFailedFireAlarm}
        disabled={fireAlarm.testFailedCheck}
        style={fireAlarm.testFailedCheck && {backgroundColor: 'white'}}
        onPress={() => {
          setFireAlarm(prv => {
            return {
              ...prv,
              testFailedFireAlarm: !prv.testFailedFireAlarm,
              accessoryFireAlarm: false,
            };
          });
        }}
        text={'Activating fire alarm : test failed'}
      />
      <CheckBox
        checked={fireAlarm.accessoryFireAlarm}
        // disabled={fireAlarm.disabled}
        disabled={fireAlarm.accessoryCheck}
        style={fireAlarm.accessoryCheck && {backgroundColor: 'white'}}
        onPress={() => {
          setFireAlarm(prv => {
            return {
              ...prv,
              accessoryFireAlarm: !prv.accessoryFireAlarm,
              testFailedFireAlarm: false,
            };
          });
        }}
        text={'Activating fire alarm : accessory disconnected'}
      />
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  buttonContainer: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: '20@ms',
    width: '300@ms',
    alignSelf: 'center',
    paddingVertical: '10@ms',
    marginVertical: '6@ms',
    maxWidth: '90%',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10@ms',
  },
  dot: {
    backgroundColor: 'white',
    borderRadius: '40@ms',
    borderColor: 'white',
    borderWidth: '8@ms',
  },
  text: {
    color: 'white',
    fontSize: '16@ms',
    textAlign: 'left',
    textAlignVertical: 'center',
    paddingVertical: '5@ms',
    paddingHorizontal: '10@ms',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  boxStyle: {
    height: '30@ms',
    width: '30@ms',
    borderRadius: '5@ms',
    borderWidth: 0.5,
  },
});
