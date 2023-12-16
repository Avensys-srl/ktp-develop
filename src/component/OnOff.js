import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

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
    height: height * 0.13,
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
    height: height * 0.03,
    width: width * 0.3,
    backgroundColor: 'white',
    borderRadius: (width * 0.8) / 2,
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
  },
  circle: {
    height: height * 0.03,
    width: width * 0.06,
    borderRadius: 12,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    left: -1,
  },
  circleActive: {
    left: width * 0.048 * 5,
    backgroundColor: '#4CAF50',
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
