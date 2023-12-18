import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import { Colors, Sizing } from '../styles';

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
    // width: width * 0.3,
    height: Sizing.vh*13,
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 1,
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 8,
    borderWidth: 0,
    justifyContent: 'space-between',
  },
  container: {
    height: Sizing.vh*3,
    width: Sizing.vw*30,
    backgroundColor: Colors.WHITE,
    borderRadius: (width * 0.8) / 2,
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Colors.BLACK,
  },
  circle: {
    height: Sizing.vh*3,
    width: Sizing.vw*6,
    borderRadius: 12,
    backgroundColor: Colors.LIGHT_GREY,
    borderWidth: 2,
    borderColor: 'black',
    position: 'absolute',
    left: -1,
  },
  circleActive: {
    left: width * 0.048 * 5,
    backgroundColor: Colors.GREEN,
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
