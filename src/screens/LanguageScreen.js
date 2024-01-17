import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../component/header';
import {Colors, Sizing} from '../styles';
import CustomStyles from "../styles/CustomStyles";
import DropdownSetPoint from '../component/DropdownSetPoint';
import CustomBottomNavigation from '../component/CustomBottomNavigation';
import { userType } from "../configs";

import { ImageSource } from '../common/imageSource';
import AvenLangDropDown from '../component/AvenLangDropDown';

const LanguageScreen = () => {


  const options = [
    {  label: 'flag_uk', value: 'flag_uk', image: ImageSource.flag_uk },
    {  label: 'flag_ge', value: 'flag_ge', image: ImageSource.flag_ge },
    {  label: 'flag_it', value: 'flag_it', image: ImageSource.flag_it },
    {  label: 'flag_ne', value: 'flag_ne', image: ImageSource.flag_ne },
    {  label: 'flag_de', value: 'flag_de', image: ImageSource.flag_de },
    {  label: 'flag_sw', value: 'flag_sw', image: ImageSource.flag_sw },
    {  label: 'flag_po', value: 'flag_po', image: ImageSource.flag_po },
    {  label: 'flag_li', value: 'flag_li', image: ImageSource.flag_li },
    // Add more options as needed
  ];

  

  const handleSelect = (selectedItem) => {
    console.log('Selected Item:', selectedItem);
    // Add your logic on item selection
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header
          canGoBack={true}
          title="Language"
          headerBG={1}
          optionsStar={1}
        />
      </View>

      <View style={styles.dropDownView}>
        <Text style={[CustomStyles.ComponentTitles, {marginTop: 11, marginRight: 8}]}>
          Select Language:
        </Text>
        <AvenLangDropDown
          data={options}
          defalutValue={options[0]}></AvenLangDropDown>
      </View>

      

      <CustomBottomNavigation  OC={userType.service}  isLogin={1}/>
    </SafeAreaView>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: Sizing.vw * 100,
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderWidth: 2,
    borderColor:  userType.service ?   Colors.RED: Colors.BLACK,
    borderRadius: 10,
  },
  dropDownView: {
    // borderWidth: 1,
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
