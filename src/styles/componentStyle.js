import {StyleSheet} from 'react-native';
import {Colors} from '.';
import {Sizing} from '.';

export default componentStyle = StyleSheet.create({
  // Common style
  componentHeight: {
    height: Sizing.vh * 3,
  },

  //   Activation button
  avtivationButton: {
    mainContainer: {
      alignItems: 'center',
    },
    titleText: {
      color: Colors.RED,
      fontSize: 18,
    },
    svgStyle: {
      width: Sizing.vw * 30,
      height: Sizing.vh * 12,
    },
  },

  // Other components
});
