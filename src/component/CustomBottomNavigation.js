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
import {Colors, Sizing} from '../styles';

const {width, height} = Dimensions.get('window');

const CustomBottomNavigation = ({
  HI = ImageSource.HI,
  PI = ImageSource.PI,
  II = ImageSource.II,
  SI = ImageSource.SI,
  OC = 0,
  IsLogin = Number,
}) => {
  let OCColor;
  if (OC === 0) {
    OCColor = Colors.BLACK;
  } else if (OC === 1) {
    OCColor = Colors.RED;
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
    <View style={styles.mainContainer}>
      <View style={[styles.container, {borderColor: OCColor}]}>
        <TouchableOpacity onPress={navigateToHome}>
          <Image source={HI} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToSettings}>
          <Image source={PI} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToInfo} disabled={IsLogin==1 ? true : false}>
          <Image source={II} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToService}>
          <Image source={SI} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: Sizing.vw * 100,
    alignItems: 'center',
    marginTop: 10,
  },
  container: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor:Colors.WHITE
  },
  img: {
    height: Sizing.vh * 6,
    width: Sizing.vw * 12,
  },
});

export default CustomBottomNavigation;
