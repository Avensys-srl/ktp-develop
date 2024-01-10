import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {ImageSource} from '../common/imageSource';
import CustomBottomNavigation from '../component/CustomBottomNavigation';
import {Colors, Sizing} from '../styles';
import {BLACK} from '../styles/colors';

import {Header} from "../component/header";
import AvenSwitch from '../component/AvenSwitch';
import AvenSlider from '../component/AvenSlider';
import DividerLine from '../component/DividerLine';

const {width, height} = Dimensions.get('window');

const Preheater = () => {
  const initialState = false;
  const [isEnabled, setEnabled] = useState(false);
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
      <Header
        canGoBack={true}
        title="Preheater"
        headerBG={1}
        optionsStar={1}
      />

      <ScrollView >
        <View style={styles.mainComponentContainer}>
          <View style={styles.filterAlarmContainer}>
            <View>
              <AvenSwitch value={isEnabled} onValueChange={setEnabled} on="on" off="off" title="Postcooler activation"/>
            </View>
          </View>          
        </View>

        <View style={styles.toggleSwitchMainContainer}>
          <View style={styles.toggleSwitchContainer}>
            <AvenSwitch value={isPairedToggled} onValueChange={setIsPairedToggled} on="paired" off="unpaired" title=""/>
          </View>
          <DividerLine />

          <View style={styles.toggleSwitchContainer}>
            <AvenSwitch value={isTempToggled} onValueChange={setIsTempToggled} on="" off="" title=""/>
            <Text style={styles.tempText}>temperature</Text>
          </View>
          <DividerLine />

          <View style={styles.toggleSwitchContainer}>
            <AvenSwitch value={isFreshToggled} onValueChange={setIsFreshToggled} on="fresh" off="exhaust" title=""/>
          </View>
          <DividerLine />

          <View style={styles.communicationRateContainer}>
            <AvenSlider title="communication rate [%] " value={50} minValue="0" maxValue="100" readOnly={true}/>
          </View>
        </View>
      </ScrollView>

      <CustomBottomNavigation OC={0} />
      <Text style={styles.service}>service</Text>
    </SafeAreaView>
  );
};

export default Preheater;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    // borderWidth: 1,
    // borderColor: Colors.RED,
  },
  mainComponentContainer: {
    position: 'relative',
  },
  filterAlarmContainer: {
    margin: width * 0.04,
    marginHorizontal: width * 0.1,
    // borderWidth: 2,
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
    top: height * 0.03,
    right: width * 0.02,
  },
  toggleSwitchMainContainer: {
    paddingHorizontal: width * 0.06,
  },
  toggleSwitchContainer: {
    // borderWidth: 2,
    // borderColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.03,
    marginTop: height * 0.02,
    borderRadius: 12,
  },
  tempText: {
    marginTop: -height * 0.03,
    color: Colors.BLACK
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
    color: Colors.BLACK
    // color: Colors.RED,
  },
});
