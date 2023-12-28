import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  PanResponder,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors, CustomStyles, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';
import {ImageSource} from '../common/imageSource';

export const ImbalancingBar = ({TSB, TSL = 0, TSR = 100, RIV, BG}) => {
  const progressBarWidth =
    componentStyle.ImbalancingBar.progressBarContainer.width - Sizing.vw * 9.5;
  const circleSize = Sizing.vh * 2.45;
  const progressBarHeight = CustomStyles.circularProgressBarSmaller.height;
  const border_thickness = 2;
  const centered = (progressBarHeight - circleSize) / 2 - border_thickness;

  let bgColor =
    BG == 0 ? Colors.ORANGE : BG == 1 ? Colors.LIGHT_GREEN : Colors.RED;

  const [progress, setProgress] = useState(RIV);
  const [circlePosition, setCirclePosition] = useState({
    left: RIV * progressBarWidth - circleSize / 2,
    bottom: centered,
  });

  useEffect(() => {
    const newCirclePosition = {
      left: progress * progressBarWidth - circleSize / 2,
      bottom: centered,
    };
    setCirclePosition(newCirclePosition);
  }, [progress, progressBarWidth, circleSize, progressBarHeight]);

  const handlePanResponderMove = (_, gestureState) => {
    const touchX = Math.min(progressBarWidth, Math.max(0, gestureState.moveX));
    const newProgress = touchX / progressBarWidth;
    const maxCircleLeft = progressBarWidth - circleSize;

    const newCirclePosition = {
      left: Math.min(maxCircleLeft, touchX - circleSize / 2),
      bottom: centered,
    };

    setProgress(newProgress);
    setCirclePosition(newCirclePosition);
  };

  const handleImagePress = valueChange => {
    const newValue = Math.min(Math.max(0, progress + valueChange), 1);
    const newCircleLeft = newValue * progressBarWidth - circleSize / 2;

    setProgress(newValue);
    setCirclePosition({
      left: newCircleLeft,
      bottom: centered,
    });
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
  });

  const {
    mainContainer,
    textContainer,
    progressBarContainer,
    valueContainer,
    percentageContainer,
    barContainer,
    img,
  } = componentStyle.ImbalancingBar;

  const {circleContainer, componentText} = componentStyle.commonStyles;

  return (
    <View style={mainContainer}>
      <View style={textContainer}>
        <View style={percentageContainer}>
          <Text style={componentText}>
            {`${Math.round(progress * (TSR - TSL) + TSL)} %`}
          </Text>
        </View>
      </View>

      <View style={barContainer}>
        <TouchableOpacity onPress={() => handleImagePress(-0.1)}>
          <Image source={ImageSource.home_in} style={img} />
        </TouchableOpacity>

        <View
          // {...panResponder.panHandlers}
          style={progressBarContainer}>
          <View
            style={[
              circleContainer,
              {
                backgroundColor: bgColor,
                left: circlePosition.left + Sizing.vw * 2.8,
                bottom: circlePosition.bottom,
              },
            ]}
          />
        </View>

        <TouchableOpacity onPress={() => handleImagePress(0.1)}>
          <Image source={ImageSource.home_out} style={img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImbalancingBar;
