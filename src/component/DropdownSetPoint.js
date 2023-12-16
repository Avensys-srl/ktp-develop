import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {View, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const DropdownSetPoint = ({data}) => {
  const [selectedItem, setSelectedItem] = useState('');
  // const data = ['21°C ', '22°C', '23°C', '24°C', '25°C'];

  const maxItemsWithoutScroll = 5;
  const maxDropdownHeight = height * 0.06 * maxItemsWithoutScroll;

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
        defaultButtonText="22°C"
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
    borderWidth: 1,
    borderRadius: 5,
    margin: 25,
    backgroundColor: 'white',
    width: width * 0.23,
    height: height * 0.06,
    borderRadius: 12,
  },
  ddStyle: {
    borderWidth: 1,
    marginLeft: 15,
    marginTop: 5,
    borderRadius: 12,
    borderTopWidth: 1,
    padding: 0,
    height: height * 0.332,
    width: width * 0.2,
  },
  itemStyle: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
});
