import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {CircleProgressBar, Header, OnOff, ToggleSwitch} from '../../component';
import {ImageSource} from '../../common/imageSource';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors, Sizing} from '../../styles';
import {BLACK} from '../../styles/colors';

const {width, height} = Dimensions.get('window');

const Preheater = () => {
  const initialState = false;
  const [isPairedToggled, setIsPairedToggled] = useState(initialState);
  const [isTempToggled, setIsTempToggled] = useState(initialState);
  const [isFreshToggled, setIsFreshToggled] = useState(initialState);

  const handlePairedToggle = newValue => {
    setIsPairedToggled(!isPairedToggled);
  };

  const handleTempToggle = newValue => {
    setIsTempToggled(!isTempToggled);
  };

  const handleFreshToggle = newValue => {
    setIsFreshToggled(!isFreshToggled);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header canGoBack={true} title="Preheater setting" />

      <ScrollView>
        <View style={styles.mainComponentContainer}>
          <View style={styles.filterAlarmContainer}>
            <View>
              <OnOff />
            </View>
            <Text style={styles.filterAlarmText}>Postcooler activation</Text>
          </View>
          <Image style={styles.lockImg} source={ImageSource.lockOpen} />
        </View>

        <View style={styles.toggleSwitchMainContainer}>
          <View style={styles.toggleSwitchContainer}>
            <ToggleSwitch
              CL={'unpaired'}
              CR={'paired'}
              BG={0}
              isToggled={isPairedToggled}
              onToggle={handlePairedToggle}
            />
          </View>

          <View style={styles.toggleSwitchContainer}>
            <ToggleSwitch
              CL={''}
              CR={''}
              BG={0}
              isToggled={isTempToggled}
              onToggle={handleTempToggle}
            />
            <Text style={styles.tempText}>temperature</Text>
          </View>

          <View style={styles.toggleSwitchContainer}>
            <ToggleSwitch
              CL={'exhaust'}
              CR={'fresh'}
              BG={0}
              isToggled={isFreshToggled}
              onToggle={handleFreshToggle}
            />
          </View>

          <View style={styles.communicationRateContainer}>
            <Text style={styles.communicationText}>communication rate [%]</Text>
            <CircleProgressBar
              // TSB={'Ref. outdoor temperature'}
              TSL={0}
              TSR={100}
              RIV={0.4}
              BG={0}
            />
          </View>
        </View>
      </ScrollView>

      <CustomBottomNavigation OC={1} />
      <Text style={styles.service}>service</Text>
    </SafeAreaView>
  );
};

export default Preheater;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.RED,
  },
  mainComponentContainer: {
    position: 'relative',
  },
  filterAlarmContainer: {
    margin: width * 0.04,
    marginHorizontal: width * 0.1,
    borderWidth: 2,
    borderColor: Colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 12,
    marginStart: width * 0.06,
  },
  filterAlarmText: {
    textAlign: 'center',
    marginBottom: height * 0.02,
    fontSize: width * 0.04,
    color: Colors.GREY500,
  },
  lockImg: {
    width: Sizing.vw * 9,
    height: Sizing.vh * 4,
    position: 'absolute',
    top: height * 0.06,
    right: width * 0.01,
  },
  toggleSwitchMainContainer: {
    paddingHorizontal: width * 0.06,
  },
  toggleSwitchContainer: {
    borderWidth: 2,
    borderColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.03,
    marginTop: height * 0.02,
    borderRadius: 12,
  },
  tempText: {
    marginTop: -height * 0.03,
  },
  navigationContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  communicationRateContainer: {
    marginTop: height * 0.02,
    marginBottom: height * 0.04,
  },
  communicationText: {
    textAlign: 'center',
    marginBottom: height * 0.01,
  },
  service: {
    textAlign: 'center',
    color: Colors.RED,
  },
});
