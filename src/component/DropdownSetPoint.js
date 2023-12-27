import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Colors, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';

const {width, height} = Dimensions.get('window');

const DropdownSetPoint = ({data, defalutValue}) => {
  const [selectedItem, setSelectedItem] = useState('');

  const {btnStyle, itemStyle} = componentStyle.DropdownSetPoint;

  const maxItemsWithoutScroll = 5;
  const maxDropdownHeight = Sizing.vh * 6 * maxItemsWithoutScroll;

  return (
    <View>
      <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => {
          setSelectedItem(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        defaultButtonText={defalutValue}
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

export default DropdownSetPoint;

const styles = StyleSheet.create({
  ddStyle: {
    borderWidth: 2,
    // marginLeft: 15,
    marginTop: -3,
    borderRadius: 12,
    borderTopWidth: 2,
    borderColor: Colors.LIGHT_GREEN,
  },
});
