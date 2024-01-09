import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../component/header';
import CustomBottomNavigation from '../component/CustomBottomNavigation';
import {Colors, Sizing} from '../styles';

import AvenSwitch from '../component/AvenSwitch';
import AvenSlider from '../component/AvenSlider';
// const {width, height} = Dimensions.get('window');

const Filter_Settings3 = () => {

  const [isEnabled, setEnabled] = useState(false);

  const handleTimeToggle = newValue => {
    setIsTimeToggled(!isTimeToggled);
  };

  return (
    <SafeAreaView style={styles.mainSafeAreaView}>
      <Header
        canGoBack={true}
        title="Filter-setting"
        headerBG={1}
        optionsStar={1}
      />
      <View style={styles.mainContainer}>
        <View style={styles.toggleSwitchContainer}>
        
          <AvenSwitch value={isEnabled} onValueChange={setEnabled} on="time" off="pressure" title=""/>
        </View>

        <View style={styles.progressbarContainer}>
           <AvenSlider title="DPS days of duty [d] " minValue="0" maxValue="180"/>
        </View>

        <View style={styles.progressbarContainer}>
          {/* <Text style={styles.progressbarText}>DPP Thereshold max p. [%]</Text> */}
          <AvenSlider title="DPP Thereshold max p. [%] " minValue="0" maxValue="100"/>
        </View>
      </View>

      <View style={styles.navigationContainer}>
        <CustomBottomNavigation OC={1} />
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
  },
  navigationContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: Sizing.vh * 2,
  },
  mainContainer: {
    padding: 12,
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
