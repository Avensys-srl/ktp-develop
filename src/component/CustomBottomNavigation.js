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


// const {width, height} = Dimensions.get('window');

const CustomBottomNavigation = ({
  HI = ImageSource.HI,
  PI = ImageSource.PI,
  II = ImageSource.II,
  SI = ImageSource.SI,
  OC = 0,
  isLogin = Number,
}) => {
  let OCColor = OC ? Colors.RED : Colors.BLACK;

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
        <TouchableOpacity onPress={navigateToHome} disabled={isLogin==0 ? true : false}>
          <Image source={HI} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToSettings} disabled={isLogin==0 ? true : false}>
          <Image source={PI} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToInfo} disabled={isLogin==0 ? true : false }>
          <Image source={II} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToService} disabled={isLogin==0 ? true : false}>
          <Image source={SI} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {

    // width: Sizing.vw * 100,
    alignItems: 'center',
    marginTop: 10,
    // flex:1,
    // height:Sizing.vh * 100,
  },
  container: {
    // flex:1,
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor:Colors.WHITE
  },
  img: {
    height: 55,
    width:55,
  },
});

export default CustomBottomNavigation;
