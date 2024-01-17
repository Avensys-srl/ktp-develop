import React from "react";
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors, Sizing} from '../styles';
import {Header} from '../component/header';
import CustomBottomNavigation from '../component/CustomBottomNavigation';

function InfoText({descr, value}) {
  const formattedValue = Array.isArray(value) ? value.join(' - ') : value;

  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={styles.labeltxt}>{descr}:</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.labeltxt}>{formattedValue}</Text>
      </View>
    </View>
  );
}

export const Info = () => {
  const InfoTab = [
    {descr: 'Serial Number', value: '999900251212343001'},
    {descr: 'Configure', value: 'QUARK 025 SSC B1'},
    {descr: 'Hardware Version', value: '4.0'},
    {descr: 'Firmware Version', value: '2.40'},
    {descr: 'Software Version', value: '3.0'},
    {descr: 'Control Version', value: 'EXTRA'},
    {descr: 'Working Hours', value: '119'},
  ];

  return (
    <>
      <Header canGoBack={false} title="Unit Information" />
      <View style={styles.container}>
        <Text style={styles.sectionDescription}>{'QUARK 025 SSC'}</Text>
        {InfoTab.map((item, index) => {
          return <InfoText descr={item.descr} value={item.value} key={index}></InfoText>;
        })}
      </View>
      <CustomBottomNavigation  isLogin={1}></CustomBottomNavigation>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: "center",
    borderColor: Colors.BLACK,
    borderWidth: 0,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.DARK_GREY,
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.BLACK,
    textAlign: 'center',
    marginBottom: 16,
  },
  labeltxt: {
    fontSize: 16,
    color: Colors.LIGHT_GREY,
  },
});
