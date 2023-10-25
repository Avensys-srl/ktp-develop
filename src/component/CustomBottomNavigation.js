import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ImageSource} from '../common/imageSource';
import {Routes} from '../routes';

const {width, height} = Dimensions.get('window');

const CustomBottomNavigation = ({
  HI = ImageSource.HI,
  PI = ImageSource.PI,
  II = ImageSource.II,
  SI = ImageSource.SI,
  OC = 0,
}) => {
  let OCColor;
  if (OC === 0) {
    OCColor = 'black';
  } else if (OC === 1) {
    OCColor = 'red';
  }

  const navigation = useNavigation();

  const navigateToSettings = () => {
    navigation.navigate(Routes.Settings);
  };

  const navigateToHome = () => {
    navigation.navigate(Routes.Home);
  };

  const navigateToInfo = () => {
    navigation.navigate(Routes.Info);
  };

  const navigateToService = () => {
    navigation.navigate(Routes.Services);
  };

  return (
    <View style={{width: '100%', alignItems: 'center', marginTop: 10}}>
      <View style={[styles.container, {borderColor: OCColor}]}>
        <TouchableOpacity onPress={navigateToHome}>
          <Image source={HI} style={{height: 50, width: 50}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToSettings}>
          <Image source={PI} style={{height: 50, width: 50}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToInfo}>
          <Image source={II} style={{height: 50, width: 50}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToService}>
          <Image source={SI} style={{height: 50, width: 50}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
});

export default CustomBottomNavigation;
