import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {View, StyleSheet, Dimensions, Image, Text} from 'react-native';
import {Colors, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';
import { ImageSource } from '../common/imageSource';

const {width, height} = Dimensions.get('window');

const AvenLangDropDown = ({data, defalutValue}) => {
 

  const {btnStyle, itemStyle} = componentStyle.DropdownSetPoint;

  const maxItemsWithoutScroll = 5;
  const maxDropdownHeight = Sizing.vh * 6 * maxItemsWithoutScroll;
  

  const handleSelect = (selectedItem) => {
    onSelect(selectedItem);
  };


  return (
    <View>
      <SelectDropdown
        data={data}
        default = { <Image source={ImageSource.flag_uk} style={{ width: 20, height: 10, marginRight: 10 }} /> }
        
        rowTextForSelection={(item, index) => {
          return  <Image source={item.image} style={{ width: 20, height: 15 }} />
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return <Image source={selectedItem.image} style={{ width: 30, height: 25}} />
        }}

        buttonStyle={btnStyle}
        dropdownStyle={{
          ...styles.ddStyle,
          maxHeight:
            data.length > maxItemsWithoutScroll ? maxDropdownHeight : null,
        }}
        itemTextStyle={itemStyle}
      />
    </View>
  );
};

export default AvenLangDropDown;

const styles = StyleSheet.create({
  ddStyle: {
    borderWidth: 2,
    marginTop: 2,
    borderRadius: 12,

    borderColor: Colors.LIGHT_GREEN,
  },
});
