import {StyleSheet} from 'react-native';
import {Colors} from '.';
import {Sizing} from '.';

export default CustomStyles = StyleSheet.create({
  Title1: {
    textAlign: 'center',
    marginBottom: Sizing.vh * 2,
    fontSize: Sizing.vw * 4.5,
    color: Colors.BLUE,
  },
  TitleHeader: {
    textAlign: 'center',
    color: Colors.WHITE,
    marginLeft: 10,
    fontSize: 20,
  },
});
