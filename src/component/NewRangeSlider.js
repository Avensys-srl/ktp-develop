import React, {useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Colors, CustomStyles, Sizing} from '../styles';

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
          backgroundColor: selected ? Colors.LIGHT_GREEN : Colors.LIGHT_GREEN,
        }}>
        <Text style={valueStyle}>{value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, color: Colors.BLACK}}>{TPR}</Text>
      <Text style={styles.values1}>{values[0]}</Text>
      <View style={{marginTop: -40}}>
        <MultiSlider
          values={values}
          min={minVL}
          max={maxVL}
          onValuesChange={handleValuesChange}
          sliderLength={Sizing.vw * 90}
          selectedStyle={styles.selectedStyle}
          unselectedStyle={styles.unselectedStyle}
          containerStyle={styles.containerStyle}
          trackStyle={styles.trackStyle}
          customMarker={renderCustomMarker}
        />
      </View>
      <View style={styles.minMaxTextContainer}>
        <Text>{minVL}</Text>
        <Text>{maxVL}</Text>
      </View>
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
    color: Colors.BLUE,
    marginRight: Sizing.vw * 60,
    top: height * 0.01,
    zIndex: 2,
  },

  values2: {
    color: Colors.BLUE,
    marginLeft: Sizing.vw * 60,
    bottom: height * 0.033,
    zIndex: 2,
  },

  selectedStyle: {
    backgroundColor: Colors.LIGHT_GREEN,
    height: CustomStyles.circularProgressBarSmall.height,
    marginTop: -height * 0.0067,
    borderColor: Colors.BLACK,
  },

  unselectedStyle: {
    backgroundColor: Colors.WHITE,
    height: CustomStyles.circularProgressBarSmall.height,
    marginTop: -height * 0.0067,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.LIGHT_GREEN,
  },

  containerStyle: {
    height: Sizing.vh * 4.5,
    borderRadius: 10,
  },

  trackStyle: {
    height: Sizing.vh * 5,
  },

  customMarker: {
    width: Sizing.vw * 6,
    height: Sizing.vw * 6,
    borderRadius: (Sizing.vw * 6) / 2,
    borderColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    top: height * 0.008,
  },

  markerText: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    position: 'absolute',
  },

  minMaxTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
});

export default NewRangeSlider;
