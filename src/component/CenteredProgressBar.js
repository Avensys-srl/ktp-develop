import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  PanResponder,
} from 'react-native';
import {ImageSource} from '../common/imageSource';
import {Colors, Sizing} from '../styles';

const {width, height} = Dimensions.get('window');

export const CenteredProgressBar = ({IST, RIV, BG}) => {
  const [sliderPosition, setSliderPosition] = useState(30); // Initial position of the slider

  const normalizedPercentage = Math.min(Math.max(100 - RIV, 0), 100);
  const leftFill = Math.min(sliderPosition, 60); // Updated calculation for leftFill
  const rightFill = Math.min(60 - sliderPosition, 60); // Updated calculation for rightFill

  const handleMove = (_, {moveX}) => {
    const newPosition = (moveX / width) * 100; // Calculate the new position as a percentage
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100)); // Clamp the position between 0 and 100
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: handleMove,
      onPanResponderRelease: handleMove,
    }),
  ).current;

  let bgColor;
  if (BG === 0) {
    bgColor = Colors.ORANGE;
  } else if (BG === 1) {
    bgColor = Colors.GREEN;
  } else if (BG === 2) {
    bgColor = Colors.RED;
  }

  return (
    <View style={styles.container}>
      <View style={styles.percentageContainer}>
        <Text style={[CustomStyles.ComponentTitlesBlack, styles.text]}>
          {RIV} °C
        </Text>
      </View>
      <View style={styles.progressBarWrapper} {...panResponder.panHandlers}>
        <View>
          <Image source={ImageSource.home_in} style={styles.images} />
        </View>
        <View style={[styles.progressBarContainer, {backgroundColor: bgColor}]}>
          <View style={{...styles.fill, width: `${leftFill}%`}} />
          <View style={{flex: 50}} />
          <View style={{...styles.fill, width: `${rightFill}%`}} />
          <View style={{...styles.slider, left: `${sliderPosition}%`}} />
        </View>
        <View>
          <Image source={ImageSource.home_out} style={styles.images} />
        </View>
      </View>
      <View>
        <Text
          style={[CustomStyles.ComponentTitlesBlack, {textAlign: 'center'}]}>
          {IST}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: Sizing.vw * 90,
  },
  percentageContainer: {
    borderWidth: 2,
    borderColor: Colors.BLACK,
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 4,
    width: Sizing.vw * 20,
    height: Sizing.vh * 6.5,
    borderRadius: 12,
  },
  progressBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Sizing.vw * 90,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Sizing.vh * 2.7,
    borderRadius: 4,
    overflow: 'hidden',
    flex: 1, // Expand to fill the available space
    borderWidth: 1,
    borderColor: Colors.BLACK,
  },
  fill: {
    backgroundColor: Colors.WHITE,
    height: Sizing.vh * 100,
  },
  text: {
    textAlign: 'center',
  },

  images: {
    width: Sizing.vw * 7.5,
    height: Sizing.vh * 4,
  },

  slider: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: Colors.GREEN, // Customize the color of the slider
    zIndex: 1,
  },
});

export default CenteredProgressBar;
