import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import { Header} from '../component/header';
import { ImageSource } from '../common/imageSource';
import ActivationButton from '../component/ActivationButton';
import CustomBottomNavigation from '../component/CustomBottomNavigation';
import {Colors, Sizing} from '../styles';
import CustomStyles from '../styles/CustomStyles';

const {width, height} = Dimensions.get('window');

import AvenTwoRadio from '../component/AvenTwoRadio';
import AvenSlider from '../component/AvenSlider';
import { userType } from "../configs";

const Filter_Settings2 = () => {

  const [isEnabled, setEnabled] = useState(false);
  const [filterReplaced, setFilterReplaced] = useState(false);
  const [filterReplacedLock, setFilterReplacedLock] = useState(true);
  const [singleCalibrationLock, setSingleCalibrationLock] = useState(true);

  return (
    <SafeAreaView style={styles.mainSafeAreaView}>
        {/* Header component */}
        <Header
          canGoBack={true}
          title="Filtration"
          headerBG={1}
          optionsStar={1}
        />

      <View style={styles.mainContainer}>
       
        <View style={styles.filterAlarmContainer}>
          <View>
               <AvenTwoRadio value={isEnabled} onValueChange={setEnabled} on="on" off="off" title="Filter alarm activation" readOnly={ !userType.service}/>
          </View>

          
        </View>

       

        <View style={styles.filterAlarmContainer}>
          <View>
           <AvenTwoRadio value={filterReplaced} onValueChange={setFilterReplaced} on="on" off="off" title="Filter replaced"  readOnly={ !userType.service}/>
          </View>

       
        </View>

        <View style={styles.calibrationContainer}>
          <View style={styles.calibrationTextImgContainer}>
             <AvenSlider value={50} title="Reference temperature[°C]: " minValue={0} maxValue={100}  readOnly={ !userType.service}/>
          </View>

          <View style={styles.calibrationIconContainer}>
            <ActivationButton rot={4} />
          </View>
        </View>
      </View>

      {/* Bottom navigation view */}

      <View style={styles.navigationContainer}>
        <CustomBottomNavigation  OC={userType.service} />
        <Text style={styles.service}>service</Text>
      </View>
    </SafeAreaView>
  );
};

export default Filter_Settings2;

const styles = StyleSheet.create({
  mainSafeAreaView: {
      // borderWidth: 5,
    width: Sizing.vw * 100,
    height: Sizing.vh * 100,
    // borderWidth: 2,
    // borderColor: Colors.RED,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    borderWidth: 2,
    borderColor:  userType.service ?   Colors.RED: Colors.BLACK,
    borderRadius: 10,
  },
  mainContainer: {
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: 'center',
    paddingTop: Sizing.vh * 5,
  },
  filterAlarmContainer: {
    // margin: Sizing.vw * 4,
    paddingTop: Sizing.vh * 3,
    borderWidth: 0,
    borderColor: Colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  filterAlarmText: {
    textAlign: 'center',
    marginBottom: Sizing.vh * 2,
    fontSize: Sizing.vw * 4.5,
    color: Colors.GREY500,
  },
  lockImg: {
    // width: Sizing.vw * 10,
    width: 40,
    // height: Sizing.vh * 6,
    height: 40,
    marginRight: width * 0.07,
  },
  lockImgTouchableOpacity: {
    flex: 1,
    alignItems: 'flex-end',
  },
  remainingDutyText: {
    textAlign: 'center',
    marginTop: height * 0.01,
    fontSize: width * 0.04,
    color: Colors.GREY500,
  },
  progressBarContainer: {
    height: Sizing.vh * 9,
    marginTop: height * 0.02,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  navigationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: Sizing.vh * 2,
  },
  calibrationContainer: {
    marginTop: height * 0.04,
    // borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  calibrationTextImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calibrationText: {
    textAlign: 'center',
    // fontSize: width * 0.04,
    fontSize: 18,
    marginRight: width * 0.05,
  },
  calibrationIconContainer: {
    // marginRight: width * 0.1,
    // borderWidth: 1,

  },
  service: {
    // borderWidth: 1,
    color: userType.service ?   Colors.RED: Colors.BLACK,
    textAlign: 'center'
  }
});

{
  /* <View>
          <Text
            style={{
              marginTop: 24,
              textAlign: 'center',
              fontSize: 18,
              color: 'grey',
            }}>
            filter change accuracy
          </Text>

          <View
            style={{
              height: 30,
              backgroundColor: 'yellow',
              borderWidth: 2,
              borderColor: 'black',
              margin: 12,
              borderRadius: 24,
            }}></View>

          <Text style={{textAlign: 'center', fontSize: 18, color: 'grey'}}>
            Medium (63 days)
          </Text>
        </View> */
}
