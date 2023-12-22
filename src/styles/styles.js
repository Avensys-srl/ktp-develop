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
    fontSize: 22,
  },
  ComponentTitles: {
    textAlign: 'center',
    color: Colors.GREY500,
    fontSize: 18,
    marginBottom: Sizing.vh * 1,
  },
  ComponentTitlesBlack: {
    textAlign: 'center',
    color: Colors.BLACK,
    fontSize: 16,
    // marginBottom: Sizing.vh * 1,
  },
  componentSizeOnOff: {
    height: Sizing.vh * 3,
    width: Sizing.vw * 30,
  },
  circularProgressBarSmaller: {
    height: Sizing.vh * 3,
    width: Sizing.vw * 80,
  },
  circularProgressBarSmall: {
    height: Sizing.vh * 3,
    width: Sizing.vw * 90,
  },
});
