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
import {CountdownProgressBar, Header, OnOff} from '../../component';
import {ImageSource} from '../../common/imageSource';
import ActivationButton from '../../component/ActivationButton';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors, Sizing, CustomStyles} from '../../styles';

const {width, height} = Dimensions.get('window');

const Filter_Settings2 = () => {
  const [filterReplacedLock, setFilterReplacedLock] = useState(true);
  const [singleCalibrationLock, setSingleCalibrationLock] = useState(true);

  return (
    <SafeAreaView style={styles.mainSafeAreaView}>
      <View>
        {/* Header component */}
        <Header canGoBack={true} title="Filter-setting" />

        {/* filter alarm activation */}
        <View style={styles.filterAlarmContainer}>
          <View>
            <OnOff />
          </View>

          <Text style={CustomStyles.Title1}>Filter alarm activation</Text>
        </View>

        {/* filter replaced */}

        <View style={styles.filterAlarmContainer}>
          <View>
            <OnOff leftText="no" rightText="yes" />
          </View>

          <Text style={styles.CustomStyles.Title1}>Filter replaced ?</Text>
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

        <View>
          <Text style={styles.remainingDutyText}>Remaining Duty[%]</Text>

          <View style={styles.progressBarContainer}>
            <CountdownProgressBar
              label={''}
              min_val={0}
              max_val={100}
              init_val={0.5}
            />
          </View>
        </View>

        {/* calibration */}

        <View style={styles.calibrationContainer}>
          <View style={styles.calibrationTextImgContainer}>
            <Text style={styles.calibrationText}>Start calibration</Text>
            <TouchableOpacity
              onPress={() => setSingleCalibrationLock(!singleCalibrationLock)}>
              <Image
                source={
                  singleCalibrationLock
                    ? ImageSource.lockOpen
                    : ImageSource.lock
                }
                style={styles.lockImg}
              />
            </TouchableOpacity>
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
    borderWidth: 2,
    borderColor: Colors.RED,
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
    width: Sizing.vw * 10,
    height: Sizing.vh * 6,
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
    marginTop: -height * 0.02,
  },
  navigationContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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
    fontSize: width * 0.04,
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
