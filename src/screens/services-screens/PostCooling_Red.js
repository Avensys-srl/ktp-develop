import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  CountdownProgressBar,
  Header,
  OnOff,
  ToggleSwitch,
} from '../../component';
import {ImageSource} from '../../common/imageSource';
import CircleProgressBarSmall from '../../component/CircleProgressBarSmall';
import NewRangeSlider from '../../component/NewRangeSlider';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors, CustomStyles, Sizing} from '../../styles';
import DividerLine from '../../component/DividerLine';
import CircleProgressBarSmaller from '../../component/CircleProgressBarSmaller';

const {width, height} = Dimensions.get('window');

const PostCooling_Red = () => {
  const initialState = true;
  const [isToggled, setIsToggled] = useState(initialState);
  const [isSensorToggled, setIsSensorToggled] = useState(initialState);

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
        title="Postcooling setting"
        optionsStar={1}
        headerBG={1}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* postcooler activation */}

          <View style={{position: 'relative'}}>
            <View style={styles.filterAlarmContainer}>
              <View>
                <OnOff />
              </View>
              <Text
                style={[
                  CustomStyles.ComponentTitles,
                  {marginBottom: height * 0.03, marginStart: width * 0.03},
                ]}>
                Postcooler activation
              </Text>
            </View>
            <Image style={styles.activationImg} source={ImageSource.lockOpen} />
          </View>

          {/* Toggle */}

          <View style={styles.filterAlarmContainer}>
            <View>
              <OnOff leftText="no" rightText="yes" />
            </View>
            <Text
              style={[
                CustomStyles.ComponentTitles,
                {marginBottom: 24, marginStart: 12},
              ]}>
              Paring status
            </Text>
          </View>

          <DividerLine />

          {/* ref temp */}

          <View style={styles.progressBarContainer1}>
            <CircleProgressBarSmaller
              TSB={'Reference temperature [°C]: '}
              TSL={10}
              TSR={100}
              RIV={0.32}
              BG={1}
            />

            <Image style={styles.refTempImg} source={ImageSource.lockOpen} />
          </View>

          <DividerLine />

          {/* Hysteresys */}
          <View>
            <Text
              style={[
                CustomStyles.ComponentTitles,
                {
                  // marginTop: 12,
                  // marginStart: 12,
                },
              ]}>
              Hysteresys[°C]
            </Text>
            <View style={{position: 'relative'}}>
              <NewRangeSlider TPR={''} VL1={3} VL2={15} minVL={0} maxVL={35} />
            </View>
          </View>

          <DividerLine />

          <View style={styles.filterAlarmContainer}>
            <View>
              <OnOff leftText="exhaust" rightText="fresh" />
            </View>
            <Text
              style={[
                CustomStyles.ComponentTitles,
                {marginBottom: 24, marginStart: 12},
              ]}>
              sensors
            </Text>
          </View>

          <DividerLine />

          <View style={styles.progressBarContainer1}>
            <CircleProgressBarSmaller
              TSB={'Boost time [min]: '}
              TSL={10}
              TSR={100}
              RIV={0.21}
              BG={1}
            />

            <Image style={styles.refTempImg} source={ImageSource.lockOpen} />
          </View>

          <DividerLine />

          <View style={{marginBottom: height * 0.05}}>
            {/* <Text style={styles.remainingDutyText}>communication rate [%]</Text> */}

            <View style={styles.progressBarContainer}>
              <CountdownProgressBar
                label={'Communication rate [%]'}
                min_val={0}
                max_val={100}
                init_val={0.5}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <CustomBottomNavigation OC={1} />
    </SafeAreaView>
  );
};

export default PostCooling_Red;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.RED,
  },
  filterAlarmContainer: {
    margin: width * 0.04,
    marginHorizontal: width * 0.055,
    // borderWidth: 2,
    // borderColor: Colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // borderRadius: 12,
  },
  filterAlarmText: {
    textAlign: 'center',
    marginBottom: height * 0.025,
    fontSize: width * 0.04,
    color: Colors.GREY500,
    marginStart: 12,
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
    marginTop: height * 0.02,
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
});
