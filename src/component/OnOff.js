import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {Colors, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export const OnOff = ({status, leftText = 'Off', rightText = 'On'}) => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const {mainContainer, container, circle, circleActive, text, onOffStyle} =
    componentStyle.OnOff;

  const {componentText} = componentStyle.commonStyles;

  return (
    <View style={mainContainer}>
      {/* <View>
        <Text style={styles.text}>{status}</Text>
      </View> */}
      <View>
        <View>
          <TouchableOpacity onPress={handleToggle} style={container}>
            <View style={[circle, isToggled && circleActive]} />
          </TouchableOpacity>
        </View>
        <View style={onOffStyle}>
          <Text style={componentText}>{leftText}</Text>
          <Text style={componentText}>{rightText}</Text>
        </View>
      </View>
    </View>
  );
};

export default OnOff;
