import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {ImageSource} from '../common/imageSource';
import {Colors, CustomStyles, Sizing} from '../styles';

import {Header} from "../component/header";

import AvenTwoRadio from "../component/AvenTwoRadio";
import AvenSlider from '../component/AvenSlider';
import AvenRangeSlider from "../component/AvenRangeSlider";
import CustomBottomNavigation from '../component/CustomBottomNavigation';
import DividerLine from '../component/DividerLine';

const {width, height} = Dimensions.get('window');
import { userType } from "../configs";

const PostCooling = () => {
  const initialState = true;
  const [isEnabled, setEnabled] = useState(false);
  const [isToggled, setIsToggled] = useState(initialState);
  const [isSensorToggled, setIsSensorToggled] = useState(initialState);
  const [isFresh, setIsFresh] = useState(false);

  const handleToggle = newValue => {
    setIsToggled(!isToggled);
  };

  const handleSensorToggle = newValue => {
    setIsSensorToggled(!isSensorToggled);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        canGoBack={true}
        title="PostCooling"
        optionsStar={1}
        headerBG={1}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* postcooler activation */}

          <View style={{position: 'relative'}}>
            <View style={styles.filterAlarmContainer}>
                <AvenTwoRadio value={isEnabled} onValueChange={setEnabled} on="on" off="off" title="Postcooler activation"  readOnly={ !userType.service}/>
            </View>
             
          </View>

          {/* Toggle */}

          <View style={styles.filterAlarmContainer}>
              <AvenTwoRadio value={isToggled} onValueChange={setIsToggled} on="yes" off="no" title="Parsing status"   readOnly={ !userType.service}/>
          </View>

          <DividerLine />

          {/* ref temp */}

          <View style={styles.filterAlarmContainer}>
              <AvenSlider title="Reference temperature [°C]: " value={50} minValue="0" maxValue="100"   readOnly={ !userType.service}/>
          </View>

          <DividerLine />

          {/* Hysteresys */}
          <View style={styles.filterAlarmContainer}>
              <AvenRangeSlider title="Hysteresys[°C]" minValue={0} maxValue={35}  readOnly={ !userType.service}/>
          </View>

          <DividerLine />

          <View style={styles.filterAlarmContainer}>
              <AvenTwoRadio value={isFresh} onValueChange={setIsFresh} on="fresh" off="exhaust" title="sensors"   readOnly={ !userType.service}/>
           
          </View>

          <DividerLine />

          <View style={styles.filterAlarmContainer}>
            <AvenSlider title="Boost time [min]: " value={55} minValue="10" maxValue="100"   readOnly={ !userType.service}   readOnly={ !userType.service}/>
          </View>

          <DividerLine />

          <View style={{marginBottom: height * 0.05, marginTop: height * 0.04}}>
         

        
          </View>
        </View>
      </ScrollView>
      <CustomBottomNavigation OC={ userType.service}  isLogin={1}/>
      <Text style={styles.service}>service</Text>
    </SafeAreaView>
  );
};

export default PostCooling;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderWidth: 2,
    borderColor:  userType.service ?   Colors.RED: Colors.BLACK,
    borderRadius: 10,
  },

  filterAlarmContainer: {
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: 'center',
    margin: width * 0.04,
    marginHorizontal: width * 0.055,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterAlarmText: {
    textAlign: 'center',
    marginBottom: height * 0.025,
    fontSize: width * 0.04,
    color: Colors.GREY500,
  },

  activationImg: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: height * 0.015,
    right: width * 0.025,
  },

  pairedView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Sizing.vw * 93,
    height: Sizing.vh * 12,
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center',
  },

  paringStatusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  remainingDutyText: {
    textAlign: 'center',
    marginTop: height * 0.01,
    fontSize: width * 0.04,
    color: Colors.GREY500,
  },

  refTempContainer: {
    width: Sizing.vw * 90,
    justifyContent: 'center',
    height: Sizing.vh * 15,
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  refImg: {
    height: 30,
    width: 30,
  },

  progressBarContainer: {
    height: Sizing.vh * 9,
    marginTop: -height * 0.02,
  },

  hysText: {
    textAlign: 'center',
    // marginBottom: -30,
    zIndex: 2,
  },

  sensorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  boostTimeContainer: {
    justifyContent: 'center',
    height: Sizing.vh * 15,
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  divider: {
    height: 2,
    backgroundColor: Colors.BLACK,
    width: '100%',
    flex: 1,
  },

  progressBarContainer1: {
    height: height * 0.09,
    marginTop: height * 0.02,
    marginBottom: 24,
    width: Sizing.vw * 90,
  },

  refTempImg: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: height * 0.025,
    right: -width * 0.065,
  },
  service: {
    color: userType.service ?   Colors.RED: Colors.BLACK,
    textAlign: 'center'
  }
});
