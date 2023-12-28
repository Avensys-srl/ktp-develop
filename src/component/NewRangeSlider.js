import React, {useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Colors, CustomStyles, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';

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

  const {
    barContainer,
    container,
    values1,
    values2,
    selectedStyle,
    unselectedStyle,
    containerStyle,
    trackStyle,
    customMarker,
    markerText,
    minMaxTextContainer,
  } = componentStyle.NewRangeSlider;

  return (
    <View style={container}>
      {/* <Text style={{fontSize: 18, color: Colors.BLACK}}>{TPR}</Text> */}
      <Text style={values1}>{values[0]}</Text>
      <View style={barContainer}>
        <MultiSlider
          values={values}
          min={minVL}
          max={maxVL}
          onValuesChange={handleValuesChange}
          sliderLength={Sizing.vw * 75 + Sizing.vw * 4.195}
          selectedStyle={styles.selectedStyle}
          unselectedStyle={styles.unselectedStyle}
          containerStyle={containerStyle}
          trackStyle={trackStyle}
          customMarker={renderCustomMarker}
        />
      </View>

      {/* <View style={styles.minMaxTextContainer}></View> */}
      <Text style={values2}>{values[1]}</Text>
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
    marginRight: Sizing.vw * 85,
    top: height * 0.067,
    zIndex: 2,
  },

  values2: {
    color: Colors.BLUE,
    marginLeft: Sizing.vw * 85,
    bottom: height * 0.0001,
    zIndex: 2,
  },

  selectedStyle: {
    backgroundColor: Colors.LIGHT_GREEN,
    height: Sizing.vh * 3 * 1.2,
    marginTop: -height * 0.0059,
    borderColor: Colors.BLACK,
  },

  unselectedStyle: {
    backgroundColor: Colors.WHITE,
    height: CustomStyles.circularProgressBarSmall.height * 1.2,
    marginTop: -height * 0.0067,
    borderRadius: 20,
    borderColor: Colors.LIGHT_GREEN,
  },

  containerStyle: {
    height: Sizing.vh * 4.5,
    borderRadius: 10,
    left: Sizing.vw * 4.8,
  },

  trackStyle: {
    height: Sizing.vh * 5,
  },

  customMarker: {
    width: Sizing.vw * 9,
    height: Sizing.vh * 3 * 1.2,
    borderRadius: (Sizing.vw * 56) / 2,
    borderColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    top: height * 0.012,
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
