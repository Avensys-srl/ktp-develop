import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../component/header';
import CustomBottomNavigation from '../component/CustomBottomNavigation';
import {Colors, Sizing} from '../styles';

import AvenTwoRadio from '../component/AvenTwoRadio';
import AvenSlider from '../component/AvenSlider';
// const {width, height} = Dimensions.get('window');
import { userType } from "../configs";

const Filter_Settings3 = () => {

  const [isEnabled, setEnabled] = useState(false);

  const handleTimeToggle = newValue => {
    setIsTimeToggled(!isTimeToggled);
  };

  return (
    <SafeAreaView style={styles.mainSafeAreaView}>
      <Header
        canGoBack={true}
        title="Filteration"
        headerBG={1}
        optionsStar={1}
      />
      <View style={styles.mainContainer}>
        <View style={styles.toggleSwitchContainer}>
        
          <AvenTwoRadio value={isEnabled} onValueChange={setEnabled} on="time" off="pressure" title=""  readOnly={ !userType.service}/>
        </View>

        <View style={styles.progressbarContainer}>
           <AvenSlider title="DPS days of duty [d] " value={90} minValue="0" maxValue="180"  readOnly={ !userType.service}/>
        </View>

        <View style={styles.progressbarContainer}>
          {/* <Text style={styles.progressbarText}>DPP Thereshold max p. [%]</Text> */}
          <AvenSlider title="DPP Thereshold max p. [%] " value={50} minValue="0" maxValue="100"  readOnly={ !userType.service}/>
        </View>
      </View>

      <View style={styles.navigationContainer}>
        <CustomBottomNavigation  OC={userType.service}  />
      </View>
    </SafeAreaView>
  );
};

export default Filter_Settings3;

const styles = StyleSheet.create({
  mainSafeAreaView: {
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
  navigationContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: Sizing.vh * 2,

  },
  mainContainer: {
    // borderWidth: 1,
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: 'center',
    padding: 0,
  },
  toggleSwitchContainer: {
    // borderWidth: 2,
    borderColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    marginTop: 18,
    borderRadius: 12,
  },
  progressbarContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  progressbarText: {
    marginBottom: 8,
  },
});
