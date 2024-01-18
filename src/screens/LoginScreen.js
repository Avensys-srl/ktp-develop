import React from 'react';
import {useState, useEffect} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

import {Colors, Sizing} from '../styles';
import {ScaledSheet} from 'react-native-size-matters';
import CustomBottomNavigation from '../component/CustomBottomNavigation';
import {ImageSource} from '../common/imageSource';

import {Button} from '../component/button';
import {FilterButton} from '../component/login/filter-button';
import {HeaterButton} from '../component/login/heater-button';
import {AlarmButton} from '../component/login/alarm-button';
import {TextInput} from 'react-native-gesture-handler';
import CustomCheckbox from '../component/CustomCheckbox';
import {Routes} from '../routes';

const {width, height} = Dimensions.get('window');

export const LoginScreen = (props) => {
    
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
    const [isLogin, setIsLogin] = useState(0);
    const [showLogin, setShowLogin] = useState(false);
    const [marginTopValue, setMarginTopValue] = useState(5);
    const handShowLogin = () => {
        setShowLogin(!showLogin);
        if(showLogin)
          setMarginTopValue(5);
        else
          setMarginTopValue(0);
    }
    const handleCheckBox = () => {
      setIsChecked(!isChecked);
    };
    const handleLogin = () => {
      setIsLogin(1);
      navigation.navigate(Routes.Services)
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
	    <View style={[styles.container ]}>
        <ScrollView style={[styles.scrollView, {marginTop : Sizing.vh * marginTopValue}]}>
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
            {
              showLogin ? <>
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

                    <View style={styles.formRow}>
                      <CustomCheckbox
                        handleCheckBox={handleCheckBox}
                        isChecked={isChecked}
                        lable="Remember"
                      />
                    </View>

                    <View>
                      <TouchableOpacity
                        style={styles.signInOpacity}
                        onPress={handleLogin}>
                        <Text style={styles.signInText}>Sign in</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </> : <></>

            }
            
        </ScrollView>
        <CustomBottomNavigation isLogin={0} showLogin={handShowLogin}></CustomBottomNavigation>
      </View>
  	);
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
  },
  scrollView: {
    
    // borderWidth: 1,
    // borderColor: '#fff',
    alignSelf: "center",
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 77,
    height: Sizing.vh * 95,
  },
  buttonContainer: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    width:Sizing.screenWidth > 430 ? 430 - 40  : Sizing.vw * 77,
    height: Sizing.screenWidth > 430 ? 430 - 40  : Sizing.vw * 77,
    alignSelf: 'center',
    borderRadius: 10,
    // alignItems: "space-between",
    justifyContent: "space-between",
  },
  imgView: {
    alignSelf: 'center',
   
    width: Sizing.vw * 78,
    justifyContent: "center",
    alignItems: 'center',
    marginTop: Sizing.vh * 5,
    marginBottom: Sizing.vh * 5,
  },
  imgLogo: {
    width: 250,
    height: 80,
  },
  row: {
    // borderWidth: 1,
    borderColor: "#fff",
    flexDirection: 'row',
    width:Sizing.screenWidth > 430 ? 430 - 40  : Sizing.vw * 77,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    // marginTop: 5,
    // marginBottom: 5,
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
    borderWidth: 1,
    width:Sizing.screenWidth > 430 ? 430  - 40 : Sizing.vw * 77,
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
    marginRight: 8,
  },
 
});
