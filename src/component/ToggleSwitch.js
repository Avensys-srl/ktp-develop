import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {Colors, CustomStyles, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';

export const ToggleSwitch = ({TOO, CL, CR, BG, isToggled, onToggle}) => {
  const handleToggle = () => {
    const newValue = !isToggled;
    onToggle(newValue);
  };

  let bgColor =
    BG == 0 ? Colors.ORANGE : BG == 1 ? Colors.LIGHT_GREEN : Colors.RED;

  const {componentTitle, circleContainer} = componentStyle.commonStyles;
  const {mainContainer, textContainer, leftCircle, rightCircle} =
    componentStyle.ToggleSwitch;

  return (
    <View>
      <TouchableOpacity style={mainContainer} onPress={handleToggle}>
        <View
          style={[
            circleContainer,
            isToggled ? rightCircle : leftCircle,
            {backgroundColor: bgColor},
          ]}
        />
      </TouchableOpacity>
      <View style={textContainer}>
        <Text style={componentTitle}>{CL}</Text>
        <Text style={componentTitle}>{CR}</Text>
      </View>
      {/* <Text style={{textAlign: 'center', marginBottom: 10}}>{TOO}</Text> */}
    </View>
  );
};

export default ToggleSwitch;
