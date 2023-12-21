import {
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {ImageSource} from '../../common/imageSource';
import {useState, useEffect} from 'react';
import {Button} from '../../component/index';
import {FilterButton} from '../filter-button';
import {HeaterButton} from '../heater-button';
import {AlarmButton} from '../alarm-button';
import {Sizing, Colors} from '../../styles';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {TextInput} from 'react-native-gesture-handler';
import CustomCheckbox from '../../component/CustomCheckbox';
import {Routes} from '../../routes';

const {width, height} = Dimensions.get('window');

const ServiceLogin = props => {
  const {
    text = '',
    checked = false,
    disabled = false,
    onPress = () => 0,
    style,
    navigation,
  } = props;
  const initSpeedstate = {
    currentSpeed: 0,
    text: 0,
    status: '',
    activated: true,
  };

  const initfilterDetails = {
    timer: 5,
    checked: false,
    disabled: false,
    status: '',
    activated: false,
  };
  const initpreHeater = {
    timer: 5,
    disabled: false,
    flagForPairing: false,
    flagForAlarm: false,
    status: '',
    flagForPairing: false,
    flagForPairingStatus: false,
    flagForAlarmStatus: true,
    activated: false,
  };

  const initpostHeater = {
    timer: 5,
    disabled: false,
    flagForPairing: false,
    flagForAlarm: false,
    status: '',
    flagForPairing: false,
    flagForPairingStatus: false,
    flagForAlarmStatus: true,
    activated: false,
  };

  const initgeneralAlarm = {
    timer: 5,
    disabled: false,
    alarmRunning: false,
    alarmNotRunning: false,
    status: '',
  };

  const initfireAlarm = {
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
  };

  const [speed, setSpeed] = useState(initSpeedstate);
  const [filterDetails, setFilterDetails] = useState(initfilterDetails);
  const [preHeater, setPreHeater] = useState(initpreHeater);
  const [postHeater, setPostHeater] = useState(initpostHeater);
  const [generalAlarm, setGeneralAlarm] = useState(initgeneralAlarm);
  const [fireAlarm, setFireAlarm] = useState(initfireAlarm);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const resetToInitial = () => {
    setSpeed(initSpeedstate);
    setFilterDetails(initfilterDetails);
    setPreHeater(initpreHeater);
    setPostHeater(initpostHeater);
    setGeneralAlarm(initgeneralAlarm);
    setFireAlarm(initfireAlarm);
  };

  useEffect(() => {
    setGeneralAlarm(prev => ({
      ...prev,
      alarmNotRunning: preHeater.flagForAlarm,
      status: preHeater.flagForAlarm ? 'Unit not running' : '',
    }));
  }, [preHeater.flagForAlarm]);

  useEffect(() => {
    setGeneralAlarm(prev => ({
      ...prev,
      alarmNotRunning: postHeater.flagForAlarm,
      status: postHeater.flagForAlarm ? 'Unit not running' : '',
    }));
  }, [postHeater.flagForAlarm]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imgView}>
          <Image source={ImageSource.logoW} style={styles.imgLogo} />
        </View>
        <View style={styles.buttonContainer}>
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
            <AlarmButton
              alarmRunning={generalAlarm.alarmRunning}
              alarmNotRunning={generalAlarm.alarmNotRunning}
              flagForPairingFireAlarm={fireAlarm.pairingFireAlarm}
              flagForTestFailedFireAlarm={fireAlarm.testFailedFireAlarm}
              flagForAccessoryFireAlarm={fireAlarm.accessoryFireAlarm}
              diagonalImageSource1={ImageSource.warning}
              diagonalImageSource2={ImageSource.fire}
              onGenralAlarmProcessComplete={() => {
                setGeneralAlarm({
                  timer: 5,
                  disabled: false,
                  alarmRunning: false,
                  alarmNotRunning: false,
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
        <TouchableOpacity
          onPress={resetToInitial}
          style={styles.TouchContainer}></TouchableOpacity>
        <View style={styles.borderView}></View>
        <Text style={styles.txtTitle}>Login</Text>
        <View style={styles.formView}>
          <View style={styles.formRow}>
            <Text style={styles.txtFlbl}>User Name : </Text>
            <TextInput style={styles.inputTxt} placeholder="" />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.txtFlbl}>Password : </Text>
            <TextInput
              style={styles.inputTxt}
              placeholder=""
              secureTextEntry={true}
            />
          </View>

          {/* Checkbox */}
          <View style={styles.formRow}>
            <CustomCheckbox
              handleCheckBox={handleCheckBox}
              isChecked={isChecked}
              lable="Remember"
            />
          </View>

          {/* Sign in button */}
          <View>
            <TouchableOpacity
              style={styles.signInOpacity}
              onPress={() => navigation.navigate(Routes.Services)}>
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
          </View>

          {/* sign in button end */}
        </View>
      </ScrollView>
      <CustomBottomNavigation IsLogin={1}></CustomBottomNavigation>
    </View>
  );
};

export default ServiceLogin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
  },
  scrollView: {
    height: Sizing.vh * 95,
  },
  buttonContainer: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    width: Sizing.vw * 78,
    alignSelf: 'center',
    maxWidth: Sizing.vw * 90,
    borderRadius: 10,
  },
  imgView: {
    width: Sizing.vw * 90,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  imgLogo: {
    width: Sizing.vw * 60,
    // width: '65%',
    height: Sizing.vh * 8,
  },
  row: {
    flexDirection: 'row',
    width: Sizing.vw * 77,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 5,
    marginBottom: 5,
  },
  borderView: {
    backgroundColor: Colors.WHITE,
    height: 1,
    width: Sizing.vw * 90,
    alignSelf: 'center',
    marginTop: 30,
  },
  txtTitle: {
    fontSize: 22,
    color: Colors.WHITE,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  formView: {
    width: Sizing.vw * 80,
    alignSelf: 'center',
  },
  txtFlbl: {
    color: Colors.WHITE,
    fontSize: 18,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  inputTxt: {
    flex: 1,
    height: 40,
    borderColor: Colors.WHITE,
    borderBottomWidth: 1,
    marginLeft: 10,
    padding: 5,
    color: Colors.WHITE,
  },
  chkbtn: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 2,
    marginLeft: '8@ms',
    alignItems: 'center',
    justifyContent: 'center',
    height: Sizing.vh * 3.6,
    width: Sizing.vw * 7,
  },
  imageStyle: {
    height: Sizing.vh * 1.5,
    width: Sizing.vw * 3.5,
  },
  signInOpacity: {
    alignItems: 'flex-end',
    marginTop: height * 0.04,
  },
  signInText: {
    fontSize: 18,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});
