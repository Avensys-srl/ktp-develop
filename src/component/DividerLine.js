import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import componentStyle from '../styles/componentStyle';

const DividerLine = () => {
  const {topContainer, middleContainer, bottomContainer} =
    componentStyle.DividerLine;
  return (
    <View style={topContainer}>
      <View style={middleContainer}>
        <View style={bottomContainer}></View>
      </View>
    </View>
  );
};

export default DividerLine;
