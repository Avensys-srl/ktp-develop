import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ImageSource} from '../common/imageSource';
import componentStyle from '../styles/componentStyle';

const CustomCheckbox = ({isChecked, handleCheckBox, lable}) => {
  const {mainContainer, checkbox, checkImg, lableText} =
    componentStyle.CustomCheckBox;

  return (
    <View style={mainContainer}>
      <TouchableOpacity onPress={handleCheckBox}>
        <View style={checkbox}>
          <Image
            source={isChecked ? ImageSource.check : ImageSource.transparent}
            style={checkImg}
          />
        </View>
      </TouchableOpacity>
      <Text style={lableText}>{lable}</Text>
    </View>
  );
};

export default CustomCheckbox;
