import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {Colors, Sizing} from '../styles';

const {width, height} = Dimensions.get('window');
export const ToggleSwitch = ({TOO, CL, CR, BG, isToggled, onToggle}) => {
  const handleToggle = () => {
    const newValue = !isToggled;
    onToggle(newValue);
  };

  return (
    <View
      style={
        {
          // justifyContent: 'center',
          // alignItems: 'center',
          // width: '100%',
          // height: '100%',
        }
      }>
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
          // width: 250,
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
    width: Sizing.vw * 75,
    height: Sizing.vh * 3.3,
    borderRadius: (Sizing.vw * 75) / 2,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.BLACK,
    borderWidth: 2,
    flexDirection: 'row',
    overflow: 'hidden',
    // marginTop:30
  },
  circle: {
    width: (Sizing.vw * 75) / 11,
    height: Sizing.vh * 3.3,
    borderRadius: (Sizing.vw * 75) / 11 / 2,
    backgroundColor: Colors.GREEN,
    borderWidth: 1,
    borderColor: Colors.BLACK,
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
