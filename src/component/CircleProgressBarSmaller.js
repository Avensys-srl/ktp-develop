import React, {useState, useEffect} from 'react';
import {View, Text, PanResponder, StyleSheet, Dimensions} from 'react-native';
import {Colors, CustomStyles, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';

export const CircleProgressBarSmaller = ({TSB, TSL, TSR, RIV, BG}) => {
  const progressBarWidth =
    CustomStyles.circularProgressBarSmaller.width - Sizing.vw * 7.2;
  const circleSize = Sizing.vh * 2.35;
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
      left: RIV * progressBarWidth - circleSize / 2,
      bottom: centered,
    };
    setCirclePosition(newCirclePosition);
  }, [RIV, progressBarWidth, circleSize, progressBarHeight]);

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

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
  });

  const filledWidth = progressBarWidth * progress;
  const {mainContainer, textContainer, progressBarContainer, valueContainer} =
    componentStyle.circuleProgressBarSmaller;

  const {componentTitle, circleContainer} = componentStyle.commonStyles;

  return (
    <View style={mainContainer}>
      <View style={textContainer}>
        <Text style={componentTitle}>{TSB}</Text>
        <Text style={componentTitle}>
          {`${Math.round(progress * (TSR - TSL) + TSL)}`}
        </Text>
      </View>

      <View {...panResponder.panHandlers}>
        <View style={progressBarContainer}>
          <View
            style={[
              circleContainer,
              {
                backgroundColor: bgColor,
                left: circlePosition.left + Sizing.vw * 3,
                bottom: circlePosition.bottom,
                top: Sizing.vh * 0.2,
              },
            ]}
          />
        </View>
        <View style={valueContainer}>
          <Text style={componentTitle}>{TSL}</Text>
          <Text style={componentTitle}>{TSR}</Text>
        </View>
      </View>
    </View>
  );
};

export default CircleProgressBarSmaller;
