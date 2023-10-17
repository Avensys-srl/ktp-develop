/**
 * Sizing
 */

import { Dimensions } from 'react-native'

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')

const Sizing = {
  vw: screenWidth / 100,
  vh: screenHeight / 100
}

export default Sizing
