import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

import WifiScannerScreen from '../../component/WifiScannerScreen';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import ActivationButton from '../../component/ActivationButton';
import {Header, ToggleSwitch} from '../../component';
import {Colors, Sizing} from '../../styles';

const {width, height} = Dimensions.get('window');
export const Communication = ({navigation}) => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = newValue => {
    setIsToggled(newValue);
  };

  console.log(isToggled);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header canGoBack={true} title="Communication" />
      <View style={styles.toggleAlign}>
        <ToggleSwitch
          CL={'wifi'}
          CR={'BT'}
          BG={0}
          isToggled={isToggled}
          onToggle={handleToggle}
        />
      </View>
      <ActivationButton TAB={'Device Search'} rot={2} />
      {/* <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={styles.txtView}>no new devices</Text>
      </View> */}
      <View style={styles.mainView}>
        {/* <Text style={styles.deviceAva}>Available devices</Text>
        <View style={styles.txtIcon}>
          <View style={styles.subView}>
            <Text style={{marginTop: 15}}>Arthur’s</Text>
            <Image
              source={ImageSource.wifiMedium}
              style={{width: 50, height: 50}}
            />
          </View>
        </View> */}
        {!isToggled ? (
          <View>
            <Text style={styles.headerText}>Available Networks</Text>
            <ScrollView style={styles.wifiScrollView}>
              <WifiScannerScreen />
            </ScrollView>
          </View>
        ) : null}
        {/* Whatever functionality blutetooth have, we have to put it in place of null */}
      </View>
      <View style={styles.navigationContainer}>
        <CustomBottomNavigation style={styles.nav} />
      </View>
    </SafeAreaView>
  );
};

export default Communication;

const styles = StyleSheet.create({
  mainContainer: {
    width: Sizing.vw * 100,
    height: Sizing.vh * 100,
    flex: 1,
  },
  mainView: {
    height: Sizing.vh * 43,
    display: 'flex',
    flexDirection: 'column',
  },
  toggleAlign: {
    marginTop: 35,
    height: Sizing.vh * 12,
    alignItems: 'center',
  },
  txtView: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    width: Sizing.vw * 70,
    textAlign: 'center',
    borderRadius: 5,
  },
  deviceAva: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 18,
  },
  txtIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  subView: {
    width: Sizing.vw * 70,
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
  },
  nav: {
    marginTop: 'auto',
    alignItems: 'flex-end',
  },
  wifiScrollView: {
    marginTop: Sizing.vh * 5,
  },
  headerText: {
    fontSize: 22,
    color: Colors.BLACK,
    textAlign: 'center',
    marginTop: height * 0.009,
  },
  navigationContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});
