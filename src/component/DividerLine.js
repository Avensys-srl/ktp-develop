import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Sizing} from '../styles';

const DividerLine = () => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.middleContainer}>
        <View style={styles.bottomContainer}></View>
      </View>
    </View>
  );
};

export default DividerLine;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    width: Sizing.vw * 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    height: 2,
    backgroundColor: Colors.BLACK,
    width: '100%',
  },
});
