import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../component/header';
import {Colors, Sizing} from '../styles';
import CustomStyles from "../styles/CustomStyles";
import DropdownSetPoint from '../component/DropdownSetPoint';
import CustomBottomNavigation from '../component/CustomBottomNavigation';

const LanguageScreen = () => {
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
        <Text style={[CustomStyles.ComponentTitles, {marginTop: 20}]}>
          Select Language:
        </Text>
        <DropdownSetPoint
          data={['EN', 'DE', 'FR', 'IT', 'NL', 'DA', 'SV', '...']}
          defalutValue={'EN'}></DropdownSetPoint>
      </View>
      <CustomBottomNavigation />
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
    borderRadius: 10,
    borderColor: Colors.BLACK,
  },
  dropDownView: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
