import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  PanResponder,
} from 'react-native';

import { Header } from "../component/header";
import CustomBottomNavigation from '../component/CustomBottomNavigation';
import {Colors, Sizing} from '../styles';

import AvenTwoRadio from '../component/AvenTwoRadio';
import AvenImbalancingSlider from '../component/AvenImbalancingSlider';
import AvenTrippleBtn from "../component/AvenTrippleBtn";
import AvenVerticalProgress from '../component/AvenVerticalProgress';
import AvenVerticalBar from '../component/AvenVerticalBar';
import { userType } from "../configs";

export const Probs = () => {
  

  return (
    <View style={styles.container}>
      <Header
        canGoBack={true}
        title="Probes"
        headerBG={1}
        optionsStar={1}
      />
      <ScrollView style={{height: Sizing.vh * 75 }}>
       
        <View style={{height: Sizing.vh * 75,flexDirection: "column", justifyContent: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 85 ,
              alignSelf: 'center',
              justifyContent: 'space-around',
           
            }}>
            <AvenVerticalBar TS={'CO2'} VS={12} Visible={true} Probes={true}/>
            <AvenVerticalBar TS={"VOC"} VS={45} Visible={true}  Probes={true}/>
            <AvenVerticalBar TS={"RH"} VS={87} Visible={true}  Probes={true}/>
            <AvenVerticalBar TS={'boost'} VS={90} Visible={true} Probes={false}/>
          </View>
        </View>
      </ScrollView>
      <CustomBottomNavigation   OC={userType.service}  isLogin={1}/>
      <Text style={styles.service}>service</Text>
    </View>
  );
};

export default Probs;

const styles = StyleSheet.create({
  bgheading: {
    padding: 10,
    backgroundColor: Colors.LIGHT_GREEN,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingTxt: {
    color: Colors.WHITE,
    fontSize: 20,
  },
  imgHead: {
    width: 25,
    height: 25,
  },
  subRow: {
    flexDirection: 'row',
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.GREEN,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    position: 'absolute',
    top: -1,
  },
  leftCircle: {
    left: -1,
  },
  rightCircle: {
    right: -1,
  },
  pairedView: {
    justifyContent: 'center',
    alignItems: 'center',
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: 'center',
    height: Sizing.vh * 7,
    borderRadius: 5,
    margin: 15,
    marginBottom: 10,
    marginTop: 5,
  },
  container: {
    flex: 1,
    // width: Sizing.vw * 100,
    // height: Sizing.vh * 97,
    borderWidth: 2,
    borderColor:  userType.service ?   Colors.RED: Colors.BLACK,
    borderRadius: 10,
    // justifyContent: 'flex-end',
    backgroundColor: Colors.WHITE,
  },
  txttop: {
    // marginTop: 25,
  },
  iconClick: {
    marginRight: 10,
  },
  pairedViewNoBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: Sizing.vw * 90,
    height: Sizing.vh * 15,
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 5,
    // borderWidth: 1,
  },
  service: {
    color: userType.service ?   Colors.RED: Colors.BLACK,
    textAlign: 'center'
  }
});
