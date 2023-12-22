import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {Colors, Sizing} from '../styles';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export const OnOff = ({status, leftText = 'Off', rightText = 'On'}) => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.text}>{status}</Text>
      </View>
      <View>
        <View>
          <TouchableOpacity onPress={handleToggle} style={styles.container}>
            <View style={[styles.circle, isToggled && styles.circleActive]} />
          </TouchableOpacity>
        </View>
        <View style={styles.onOffStyle}>
          <Text>{leftText}</Text>
          <Text>{rightText}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 1,
    alignItems: 'center',
    marginLeft: 'auto',
    justifyContent: 'space-between',
  },
  container: {
    height: Sizing.vh * 3,
    width: Sizing.vw * 30,
    backgroundColor: Colors.WHITE,
    borderRadius: (Sizing.vh * 3) / 2,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.LIGHT_GREEN,
  },
  circle: {
    height: Sizing.vh * 2.3,
    width: Sizing.vh * 2.3,
    borderRadius: Sizing.vh * 2.7,
    backgroundColor: Colors.LIGHT_GREY,
    position: 'absolute',
    left: 2,
  },
  circleActive: {
    left: width * 0.048 * 5,
    backgroundColor: Colors.LIGHT_GREEN,
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
    marginTop: -20,
    textAlign: 'left',
  },
  onOffStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
});

export default OnOff;
