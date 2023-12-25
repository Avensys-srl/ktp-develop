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
import componentStyle from '../styles/componentStyle';

const {width, height} = Dimensions.get('window');

export const CenteredProgressBar = ({IST, RIV, BG}) => {
  const [sliderPosition, setSliderPosition] = useState(30);

  const normalizedPercentage = Math.min(Math.max(100 - RIV, 0), 100);
  const leftFill = Math.min(sliderPosition, 60);
  const rightFill = Math.min(60 - sliderPosition, 60);

  const handleMove = (_, {moveX}) => {
    const newPosition = (moveX / width) * 100;
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: handleMove,
      onPanResponderRelease: handleMove,
    }),
  ).current;

  const {
    mainContainer,
    percentageContainer,
    progressBarWrapper,
    homeImages,
    progressBarContainer,
    fill,
    slider,
  } = componentStyle.centeredProgressBar;

  const {componentText} = componentStyle.commonStyles;

  let bgColor =
    BG == 0 ? Colors.ORANGE : BG == 1 ? Colors.LIGHT_GREEN : Colors.RED;

  return (
    <View style={mainContainer}>
      <View style={percentageContainer}>
        <Text style={[componentText]}>{RIV} °C</Text>
      </View>
      <View style={progressBarWrapper} {...panResponder.panHandlers}>
        <View>
          <Image source={ImageSource.home_in} style={homeImages} />
        </View>
        <View style={[progressBarContainer, {backgroundColor: bgColor}]}>
          <View style={[fill, {width: `${leftFill}%`}]} />
          <View style={{flex: 50}} />
          <View style={[fill, {width: `${rightFill}%`}]} />
          <View style={[slider, {left: `${sliderPosition}%`}]} />
        </View>
        <View>
          <Image source={ImageSource.home_out} style={homeImages} />
        </View>
      </View>
      <View>
        <Text style={[componentText]}>{IST}</Text>
      </View>
    </View>
  );
};

export default CenteredProgressBar;
