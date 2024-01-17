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
import AvenTwoRadio from '../component/AvenTwoRadio';
import AvenSlider from '../component/AvenSlider';
import DividerLine from '../component/DividerLine';

const {width, height} = Dimensions.get('window');
import { userType } from "../configs";

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
          <View style={styles.filterAlarmContainer}>
            <View>
              <AvenTwoRadio value={isEnabled} onValueChange={setEnabled} on="on" off="off" title="Postcooler activation"  readOnly={ !userType.service}/>
            </View>
          </View>   
          <View style={styles.filterAlarmContainer}>
            <AvenTwoRadio value={isPairedToggled} onValueChange={setIsPairedToggled} on="paired" off="unpaired" title="Pairing"  readOnly={ !userType.service}/>
          </View>
          <DividerLine />

          <View style={styles.filterAlarmContainer}>
            <AvenTwoRadio value={isTempToggled} onValueChange={setIsTempToggled} on="supply" off="return" title="Temperature"  readOnly={ !userType.service}/>
          
          </View>
          <DividerLine />

          <View style={styles.filterAlarmContainer}>
            <AvenTwoRadio value={isFreshToggled} onValueChange={setIsFreshToggled} on="fresh" off="exhaust" title="Sensors"  readOnly={ userType.service}/>
          </View>
          <DividerLine />

          <View style={styles.communicationRateContainer}>
            <AvenSlider title="communication rate [%] " value={50} minValue="0" maxValue="100" readOnly={true}/>
          </View>
      </ScrollView>

      <CustomBottomNavigation OC={userType.service}  isLogin={1}/>
      <Text style={styles.service}>service</Text>
    </SafeAreaView>
  );
};

export default Preheater;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderWidth: 2,
    borderColor:  userType.service ?   Colors.RED: Colors.BLACK,
    borderRadius: 10,
  },
  mainComponentContainer: {
    position: 'relative',
    // borderWidth: 1,
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 100,
    alignSelf: 'center',

  },
  filterAlarmContainer: {
    // borderWidth: 1,
    margin: width * 0.04,
    // marginHorizontal: width * 0.1,
    // borderWidth: 2,
    borderColor: Colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    // marginStart: width * 0.06,
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
    // paddingHorizontal: width * 0.06,
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 100,
    alignSelf: 'center',
  },
  toggleSwitchContainer: {
    // borderWidth: 2,
    // borderColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.03,
    margin: width * 0.04,
    borderRadius: 12,
  },
  tempText: {
    marginTop: -height * 0.03,
    color: Colors.BLACK,
    fontSize: 18,
  },
  navigationContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  communicationRateContainer: {
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 100,
          alignSelf: 'center',
          // borderWidth: 1,
    marginTop: height * 0.02,
    marginBottom: height * 0.04,
    alignItems: "center",
    // borderWidth: 1,
  },
  communicationText: {
    textAlign: 'center',
    marginBottom: height * 0.01,
  },
  service: {
    textAlign: 'center',
    color: userType.service ?   Colors.RED: Colors.BLACK
    // color: Colors.RED,
  },
});
