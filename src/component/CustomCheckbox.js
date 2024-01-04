import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ImageSource} from '../common/imageSource';
// import componentStyle from '../styles/componentStyle';
import {Colors, Sizing} from '../styles';

const CustomCheckbox = (props) => {

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={props.handleCheckBox}>
        <View style={styles.checkbox}>
          <Image
            source={props.isChecked ? ImageSource.check : ImageSource.transparent}
            style={styles.checkImg}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.lableText}>{props.lable}</Text>
    </View>
  );
};

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
        borderColor: Colors.WHITE,
        marginRight: Sizing.vw * 4,
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



export default CustomCheckbox;
