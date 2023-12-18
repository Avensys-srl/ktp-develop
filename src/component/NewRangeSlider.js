import React, {useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Colors, Sizing} from '../styles';

const {width, height} = Dimensions.get('window');

const NewRangeSlider = ({TPR, VL1, VL2, BG, minVL = 0, maxVL = 100}) => {
  const [values, setValues] = useState([VL1, VL2]);

  const handleValuesChange = values => {
    setValues(values);
  };

  const renderCustomMarker = (index, selected, value) => {
    const position = index === 0 ? -20 : 20;
    const valueStyle = {
      ...styles.markerText,
      color: selected ? Colors.WHITE : Colors.BLACK,
      top: position,
    };

    return (
      <View
        style={{
          ...styles.customMarker,
          backgroundColor: selected ? Colors.GREEN : Colors.LIGHT_GREEN,
        }}>
        <Text style={valueStyle}>{value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, color: Colors.BLACK}}>{TPR}</Text>
      <Text style={styles.values1}>{values[0]}</Text>
      <MultiSlider
        values={values}
        min={minVL}
        max={maxVL}
        onValuesChange={handleValuesChange}
        sliderLength={Sizing.vw * 75}
        selectedStyle={styles.selectedStyle}
        unselectedStyle={styles.unselectedStyle}
        containerStyle={styles.containerStyle}
        trackStyle={styles.trackStyle}
        customMarker={renderCustomMarker}
      />
      <Text style={styles.values2}>{values[1]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: Colors.WHITE,
  },

  values1: {
    color: Colors.DARK_GREY,
    marginRight: Sizing.vw * 60,
  },
  values2: {
    color: Colors.DARK_GREY,
    marginLeft: Sizing.vw * 60,
  },

  selectedStyle: {
    backgroundColor: Colors.GREEN,
    height: Sizing.vh * 3,
    marginTop: -6,
    // borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.BLACK,
  },

  unselectedStyle: {
    backgroundColor: Colors.WHITE,
    height: Sizing.vh * 3,
    marginTop: -5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.BLACK,
  },

  containerStyle: {
    height: Sizing.vh * 4.5,
    borderRadius: 10,
  },

  trackStyle: {
    height: Sizing.vh * 5,
  },

  customMarker: {
    width: Sizing.vw * 7,
    height: Sizing.vh * 3.5,
    borderRadius: (Sizing.vw * 7) / 2,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    top: 7,
  },

  markerText: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    position: 'absolute',
  },
});

export default NewRangeSlider;
