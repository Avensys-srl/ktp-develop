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
<<<<<<< HEAD
import {Colors, CustomStyles, Sizing} from '../../styles';
import DividerLine from '../../component/DividerLine';
import CircleProgressBarSmaller from '../../component/CircleProgressBarSmaller';
=======
import {Colors, Sizing} from '../../styles';
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b

const {width, height} = Dimensions.get('window');

const Postheater_Red = () => {
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
<<<<<<< HEAD
      <Header
        canGoBack={true}
        title="Postheater setting"
        optionsStar={1}
        headerBG={1}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* postcooler activation */}

=======
      <Header canGoBack={true} title="Postcooling setting" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
          <View style={{position: 'relative'}}>
            <View style={styles.filterAlarmContainer}>
              <View>
                <OnOff />
              </View>
<<<<<<< HEAD
              <Text
                style={[
                  CustomStyles.ComponentTitles,
                  {marginBottom: height * 0.03, marginStart: width * 0.03},
                ]}>
                Postcooler activation
              </Text>
=======
              <Text style={styles.filterAlarmText}>Postcooler activation</Text>
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
            </View>
            <Image style={styles.activationImg} source={ImageSource.lockOpen} />
          </View>

          {/* Toggle */}

<<<<<<< HEAD
          <View style={styles.filterAlarmContainer}>
            <View>
              <OnOff leftText="no" rightText="yes" />
            </View>
            <Text
              style={[
                CustomStyles.ComponentTitles,
                {marginBottom: height * 0.03, marginStart: width * 0.03},
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
                  marginTop: height * 0.02,
                },
              ]}>
              Hysteresys[°C]
            </Text>
            <View>
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
                {marginBottom: height * 0.03, marginStart: width * 0.03},
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
=======
          <View style={styles.paringStatusContainer}>
            <Text>Paring status</Text>
            <ToggleSwitch
              TOO={''}
              CL={'unpaired'}
              CR={'paired'}
              BG={0}
              isToggled={isToggled}
              onToggle={handleToggle}
            />
          </View>

          {/* ref temp */}

          <View style={styles.refTempContainer}>
            <View>
              <Text style={{textAlign: 'center', marginBottom: 6}}>
                reference temperature
              </Text>
              <CircleProgressBarSmall
                TSB={'Ref. outdoor temperature'}
                TSL={10}
                TSR={35}
                RIV={0.2}
                BG={1}
              />
            </View>
            <View>
              <Image style={styles.refImg} source={ImageSource.lock} />
            </View>
          </View>

          {/* Hysteresys */}
          <View>
            <Text style={styles.hysText}>Hysteresys[°C]</Text>
            <NewRangeSlider TPR={''} VL1={3} VL2={15} minVL={0} maxVL={35} />
          </View>

          {/* sensor */}

          <View style={styles.sensorContainer}>
            <Text>sensor</Text>
            <ToggleSwitch
              TOO={''}
              CL={'exhaust'}
              CR={'fresh'}
              BG={0}
              isToggled={isSensorToggled}
              onToggle={handleSensorToggle}
            />
          </View>

          {/* boost time */}
          <View style={styles.boostTimeContainer}>
            <View>
              <Text style={{textAlign: 'center', marginBottom: 6}}>
                boost time [min]
              </Text>
              <CircleProgressBarSmall
                TSB={'Ref. outdoor temperature'}
                TSL={10}
                TSR={35}
                RIV={0.2}
                BG={1}
              />
            </View>
            <View>
              <Image style={styles.refImg} source={ImageSource.lock} />
            </View>
          </View>

          {/* communication */}
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b

          <View style={{marginBottom: height * 0.05}}>
            <Text style={styles.remainingDutyText}>communication rate [%]</Text>

            <View style={styles.progressBarContainer}>
              <CountdownProgressBar
                label={''}
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

export default Postheater_Red;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.RED,
  },
<<<<<<< HEAD

  filterAlarmContainer: {
    margin: width * 0.04,
    marginHorizontal: width * 0.055,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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

=======
  filterAlarmContainer: {
    margin: width * 0.04,
    marginHorizontal: width * 0.08,
    borderWidth: 2,
    borderColor: Colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 12,
  },
  filterAlarmText: {
    textAlign: 'center',
    marginBottom: height * 0.02,
    fontSize: width * 0.04,
    color: Colors.GREY500,
  },
  activationImg: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 55,
    right: 5,
  },
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  pairedView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Sizing.vw * 93,
    height: Sizing.vh * 12,
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center',
  },
<<<<<<< HEAD

=======
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  paringStatusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
<<<<<<< HEAD

=======
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  remainingDutyText: {
    textAlign: 'center',
    marginTop: height * 0.01,
    fontSize: width * 0.04,
    color: Colors.GREY500,
  },
<<<<<<< HEAD

  refTempContainer: {
    width: Sizing.vw * 90,
=======
  refTempContainer: {
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
    justifyContent: 'center',
    height: Sizing.vh * 15,
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
<<<<<<< HEAD

=======
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  refImg: {
    height: 30,
    width: 30,
  },
<<<<<<< HEAD

=======
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  progressBarContainer: {
    height: Sizing.vh * 9,
    marginTop: -height * 0.02,
  },
<<<<<<< HEAD

  hysText: {
    textAlign: 'center',
    // marginBottom: -30,
    zIndex: 2,
  },

=======
  hysText: {
    textAlign: 'center',
    marginBottom: -30,
    zIndex: 2,
  },
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  sensorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
<<<<<<< HEAD

=======
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
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
<<<<<<< HEAD

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
=======
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
});
