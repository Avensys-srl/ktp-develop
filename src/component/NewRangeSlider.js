import React, {useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

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
      color: selected ? 'white' : 'black',
      top: position,
    };

    return (
      <View
        style={{
          ...styles.customMarker,
          backgroundColor: selected ? 'green' : 'lightgrey',
        }}>
        <Text style={valueStyle}>{value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, color: 'black'}}>{TPR}</Text>
      <Text style={styles.values1}>{values[0]}</Text>
      <MultiSlider
        values={values}
        min={minVL}
        max={maxVL}
        onValuesChange={handleValuesChange}
        sliderLength={width * 0.75}
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
    backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: 'red',
  },

  values1: {
    color: 'gray',
    marginRight: width * 0.6,
  },
  values2: {
    color: 'gray',
    marginLeft: width * 0.6,
  },

  selectedStyle: {
    backgroundColor: 'green',
    height: 15,
    marginTop: -6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },

  unselectedStyle: {
    backgroundColor: 'lightgrey',
    height: 15,
    marginTop: -5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },

  containerStyle: {
    height: 40,
    borderRadius: 10,
  },

  trackStyle: {
    height: 50,
  },

  customMarker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  markerText: {
    color: 'black',
    fontWeight: 'bold',
    position: 'absolute',
  },
});

export default NewRangeSlider;
