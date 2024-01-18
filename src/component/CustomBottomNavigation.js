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

const CustomBottomNavigation = (props) => {
  
  let OCColor = props.OC ? Colors.RED : Colors.BLACK;

  const navigation = useNavigation();

  const navigateToSettings = () => {
    if(props.isLogin)
        navigation.navigate(Routes.Settings);
    else
        props.showLogin();
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
      <View style={[styles.container]}>
        <TouchableOpacity onPress={navigateToHome} disabled={props.isLogin==0 ? true : false}>
          <Image source={ImageSource.HI} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToSettings} >
          <Image source={ImageSource.PI} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToInfo} disabled={props.isLogin==0 ? true : false }>
          <Image source={ImageSource.II} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToService} disabled={props.isLogin==0 ? true : false}>
          <Image source={ImageSource.SI} style={styles.img} />
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
