import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {CircleProgressBar, Header, ToggleSwitch} from '../../component';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors, Sizing} from '../../styles';

const {width, height} = Dimensions.get('window');

const Filter_Settings3 = () => {
  const initialState = true;
  const [isTimeToggled, setIsTimeToggled] = useState(initialState);

  const handleTimeToggle = newValue => {
    setIsTimeToggled(!isTimeToggled);
  };

  return (
    <SafeAreaView style={styles.mainSafeAreaView}>
      <Header canGoBack={true} title="Filter-setting" />
      <View style={styles.mainContainer}>
        <View style={styles.toggleSwitchContainer}>
          <ToggleSwitch
            CL={'time'}
            CR={'pressure'}
            BG={0}
            isToggled={isTimeToggled}
            onToggle={handleTimeToggle}
          />
        </View>

        <View style={styles.progressbarContainer}>
          <Text style={styles.progressbarText}>DPS days of duty [d]</Text>
          <CircleProgressBar TSB={''} TSL={0} TSR={180} RIV={0.16} BG={1} />
        </View>

        <View style={styles.progressbarContainer}>
          <Text style={styles.progressbarText}>DPP Thereshold max p. [%]</Text>
          <CircleProgressBar TSB={''} TSL={0} TSR={100} RIV={0.5} BG={1} />
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
    borderWidth: 2,
    borderColor: Colors.RED,
  },
  navigationContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  mainContainer: {
    padding: 12,
  },
  toggleSwitchContainer: {
    borderWidth: 2,
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
