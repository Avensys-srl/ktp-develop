import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ImageSource} from '../common/imageSource';

const CustomCheckbox = ({isChecked, handleCheckBox, lable}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={handleCheckBox}>
        <View style={styles.checkbox}>
          <Image
            source={isChecked ? ImageSource.check : ImageSource.transparent}
            style={styles.checkImg}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.lableText}>{lable}</Text>
    </View>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  checkImg: {
    height: '60%',
    width: '60%',
  },
  lableText: {
    fontSize: 18,
    color: 'white',
  },
});
