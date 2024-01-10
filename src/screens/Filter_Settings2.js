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

import AvenSwitch from '../component/AvenSwitch';
import AvenSlider from '../component/AvenSlider';

const Filter_Settings2 = () => {

  const [isEnabled, setEnabled] = useState(false);
  const [filterReplaced, setFilterReplaced] = useState(false);
  const [filterReplacedLock, setFilterReplacedLock] = useState(true);
  const [singleCalibrationLock, setSingleCalibrationLock] = useState(true);

  return (
    <SafeAreaView style={styles.mainSafeAreaView}>
      <View>
        {/* Header component */}
        <Header
          canGoBack={true}
          title="Filter-setting"
          headerBG={1}
          optionsStar={1}
        />

        {/* filter alarm activation */}
        <View style={styles.filterAlarmContainer}>
          <View>
               <AvenSwitch value={isEnabled} onValueChange={setEnabled} on="on" off="off" title="Filter alarm activation"/>
          </View>

          
        </View>

       

        <View style={styles.filterAlarmContainer}>
          <View>
           <AvenSwitch value={filterReplaced} onValueChange={setFilterReplaced} on="on" off="off" title="Filter replaced"/>
          </View>

         <View style={styles.lockImgTouchableOpacity}>
            <TouchableOpacity
              onPress={() => setFilterReplacedLock(!filterReplacedLock)}>
              <Image
                source={
                  filterReplacedLock ? ImageSource.lockOpen : ImageSource.lock
                }
                style={styles.lockImg}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* progress bar component */}

        

        {/* calibration */}

        <View style={styles.calibrationContainer}>
          <View style={styles.calibrationTextImgContainer}>
             <AvenSlider value={50} title="Reference temperature[°C]: " minValue={0} maxValue={100}/>
          </View>

          <View style={styles.calibrationIconContainer}>
            <ActivationButton rot={4} />
          </View>
        </View>
      </View>

      {/* Bottom navigation view */}

      <View style={styles.navigationContainer}>
        <CustomBottomNavigation OC={1} />
      </View>
    </SafeAreaView>
  );
};

export default Filter_Settings2;

const styles = StyleSheet.create({
  mainSafeAreaView: {
    width: Sizing.vw * 100,
    height: Sizing.vh * 100,
    // borderWidth: 2,
    // borderColor: Colors.RED,
    backgroundColor: Colors.WHITE,
  },
  filterAlarmContainer: {
    margin: Sizing.vw * 4,
    borderWidth: 0,
    borderColor: Colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: Sizing.vh * 2,
  },
  calibrationContainer: {
    marginTop: height * 0.14,
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
    marginRight: width * 0.1,
  },
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
