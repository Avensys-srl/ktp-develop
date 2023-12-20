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
export const ToggleSwitchFullWidth = ({
  TOO,
  CL,
  CR,
  BG,
  isToggled,
  onToggle,
}) => {
  const handleToggle = () => {
    const newValue = !isToggled;
    onToggle(newValue);
  };

  return (
    <View>
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
    width: Sizing.vw*91,
    height: Sizing.vh*3.2,
    borderRadius: 12.5,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.BLACK,
    borderWidth: 2,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  circle: {
    width: (Sizing.vw*75) / 11,
    height: Sizing.vh*3.2,
    borderRadius: (width * 0.7) / 11 / 2,
    backgroundColor: Colors.GREEN,
    borderWidth: 2,
    borderColor: Colors.BLACK,
    position: 'absolute',
    top: -2,
  },
  leftCircle: {
    left: -1,
  },
  rightCircle: {
    right: -1,
  },
});

export default ToggleSwitchFullWidth;
