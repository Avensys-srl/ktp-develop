import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ImageSource} from '../common/imageSource';
import {useState, useEffect} from 'react';
// import {Button, CheckBox, MultiBar, ToggleButton} from '../component/index';
// import {FilterButton} from './filter-button';
// import {HeaterButton} from './heater-button';
// import {AlarmButton} from './alarm-button';
// import CustomBottomNavigation from '../component/CustomBottomNavigation';
import {Colors, Sizing} from '../styles';

export const Home = () => {
  const {height, width} = Dimensions.get('window');
  console.log('height ,,,,', height, width);

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

  // return <View style={{flex:1,backgroundColor:'White',width:'100%',alignItems:'center',justifyContent:'center'}}>
  //  <MultiBar/>
  // </View>

  return (
    <>
      <ScrollView style={styles.container}>
         <Text>Hello</Text>
      </ScrollView>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    //flex: 1,
    width: Sizing.vw * 100,
    height: Sizing.vh * 90,
    backgroundColor: Colors.BLACK,
  },
  buttonContainer: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: '20@ms',
    // width: '300@ms',
    width: Sizing.vw * 78,
    alignSelf: 'center',
    paddingVertical: '10@ms',
    marginVertical: '6@ms',
    maxWidth: Sizing.vw * 90,
  },
  row: {
    flexDirection: 'row',
    width: Sizing.vw * 77,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10@ms',
  },
  dot: {
    backgroundColor: Colors.WHITE,
    borderRadius: '40@ms',
    borderColor: Colors.WHITE,
    borderWidth: '8@ms',
  },
  text: {
    color: Colors.WHITE,
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
  // boxStyle: {
  //   height: '30@ms',
  //   width: '30@ms',
  //   borderRadius: '5@ms',
  //   borderWidth: 0.5,
  // },
  resetImage: {
    // height: '40@ms',
    height: Sizing.vh * 5,
    width: Sizing.vw * 10,
  },
  TouchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
