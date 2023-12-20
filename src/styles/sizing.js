/**
 * Sizing
 */
import {Dimensions} from 'react-native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

let adjustedScreenWidth = screenWidth;

if (screenWidth / screenHeight > 0.5) {
  adjustedScreenWidth = screenHeight * 0.5;
}

const Sizing = {
  vw: adjustedScreenWidth / 100,
  vh: screenHeight / 100,
};

export default Sizing;
