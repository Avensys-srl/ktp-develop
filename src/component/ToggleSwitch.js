import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {Colors} from '../styles';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
export const ToggleSwitch = ({TOO, CL, CR, BG, isToggled, onToggle}) => {
  const handleToggle = () => {
    const newValue = !isToggled;
    onToggle(newValue);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <TouchableOpacity style={styles.container} onPress={handleToggle}>
        <View
          style={[
            styles.circle,
            isToggled ? styles.rightCircle : styles.leftCircle,
            BG == 0
              ? {backgroundColor: Colors.GREEN}
              : BG == 1
              ? {backgroundColor: Colors.WHITE}
              : {backgroundColor: Colors.RED},
          ]}
        />
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: 250,
        }}>
        <Text>{CL}</Text>
        <Text>{CR}</Text>
      </View>
      <Text style={{textAlign: 'center', marginBottom: 10}}>{TOO}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.7,
    height: height * 0.032,
    borderRadius: 12.5,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    // marginTop:30
  },
  circle: {
    width: (width * 0.7) / 11,
    height: height * 0.032,
    borderRadius: 12.5,
    backgroundColor: '#4CAF50',
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    top: -1,
  },
  leftCircle: {
    left: -1,
  },
  rightCircle: {
    right: -1,
  },
});

export default ToggleSwitch;
