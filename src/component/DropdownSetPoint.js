import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Colors, Sizing} from '../styles';

const {width, height} = Dimensions.get('window');

const DropdownSetPoint = ({data,defalutValue}) => {
  const [selectedItem, setSelectedItem] = useState('');

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
        buttonStyle={styles.btnStyle}
        dropdownStyle={{
          ...styles.ddStyle,
          maxHeight:
            data.length > maxItemsWithoutScroll ? maxDropdownHeight : null,
        }}
        itemTextStyle={styles.itemStyle}
      />
    </View>
  );
};

export default DropdownSetPoint;

const styles = StyleSheet.create({
  btnStyle: {
    borderWidth: 2,
    margin: 5,
    backgroundColor: Colors.WHITE,
    width: Sizing.vw * 20.5,
    height: Sizing.vh * 7.5,
    borderRadius: 12,
    borderColor: Colors.LIGHT_GREEN,
    marginRight: Sizing.vw * 2,
  },
  ddStyle: {
    borderWidth: 1,
    marginLeft: 15,
    marginTop: 5,
    borderRadius: 12,
    borderTopWidth: 1,
    height: Sizing.vh * 33.5,
    width: Sizing.vw * 20,
  },
  itemStyle: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
});
