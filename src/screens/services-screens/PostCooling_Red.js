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
import {Colors, Sizing} from '../../styles';

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
      <Header canGoBack={true} title="Postcooling setting" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{position: 'relative'}}>
            <View style={styles.filterAlarmContainer}>
              <View>
                <OnOff />
              </View>
              <Text style={styles.filterAlarmText}>Postcooler activation</Text>
            </View>
            <Image style={styles.activationImg} source={ImageSource.lockOpen} />
          </View>

          {/* Toggle */}

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
    marginBottom: -30,
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
});
