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
<<<<<<< HEAD
          backgroundColor: selected ? Colors.LIGHT_GREEN : Colors.LIGHT_GREEN,
=======
          backgroundColor: selected ? Colors.GREEN : Colors.LIGHT_GREEN,
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
        }}>
        <Text style={valueStyle}>{value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, color: Colors.BLACK}}>{TPR}</Text>
      <Text style={styles.values1}>{values[0]}</Text>
<<<<<<< HEAD
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
=======
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
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
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
<<<<<<< HEAD
    color: Colors.BLUE,
    marginRight: Sizing.vw * 60,
    top: -10,
    zIndex: 2,
=======
    color: Colors.DARK_GREY,
    marginRight: Sizing.vw * 60,
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  },

  values2: {
<<<<<<< HEAD
    color: Colors.BLUE,
    marginLeft: Sizing.vw * 60,
    bottom: 52,
    zIndex: 2,
  },

  selectedStyle: {
    backgroundColor: Colors.LIGHT_GREEN,
    height: Sizing.vh * 3,
    marginTop: -6,
=======
    color: Colors.DARK_GREY,
    marginLeft: Sizing.vw * 60,
  },

  selectedStyle: {
    backgroundColor: Colors.GREEN,
    height: Sizing.vh * 3,
    marginTop: -6,
    // borderRadius: 10,
    borderWidth: 2,
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
    borderColor: Colors.BLACK,
  },

  unselectedStyle: {
    backgroundColor: Colors.WHITE,
    height: Sizing.vh * 3,
    marginTop: -5,
    borderRadius: 20,
    borderWidth: 2,
<<<<<<< HEAD
    borderColor: Colors.LIGHT_GREEN,
=======
    borderColor: Colors.BLACK,
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  },

  containerStyle: {
    height: Sizing.vh * 4.5,
    borderRadius: 10,
  },

  trackStyle: {
    height: Sizing.vh * 5,
  },

  customMarker: {
<<<<<<< HEAD
    width: Sizing.vw * 6,
    height: Sizing.vw * 6,
    borderRadius: (Sizing.vw * 6) / 2,
=======
    width: Sizing.vw * 7,
    height: Sizing.vh * 3.5,
    borderRadius: (Sizing.vw * 7) / 2,
    borderWidth: 1,
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
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

  minMaxTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
});

export default NewRangeSlider;
