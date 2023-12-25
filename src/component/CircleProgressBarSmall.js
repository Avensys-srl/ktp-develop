import React, {useState, useEffect} from 'react';
import {View, Text, PanResponder, StyleSheet, Dimensions} from 'react-native';
import {Colors, CustomStyles, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';

export const CircleProgressBarSmall = ({TSB, TSL, TSR, RIV, BG}) => {
  const progressBarWidth = CustomStyles.circularProgressBarSmall.width;
  const circleSize = Sizing.vh * 2.25;
  const progressBarHeight = CustomStyles.circularProgressBarSmall.height;
  const centered = (progressBarHeight - circleSize) / 2 - 2;

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

  const {mainContainer, valueContainer, textContainer} =
    componentStyle.circleProgressBarSmall;
  const {componentTitle} = componentStyle.commonStyles;

  // const filledWidth = progressBarWidth * progress;

  return (
    <View style={mainContainer}>
      <View style={valueContainer}>
        <Text style={componentTitle}>{TSB}</Text>
        <Text style={componentTitle}>
          {`${Math.round(progress * (TSR - TSL) + TSL)}`}
        </Text>
      </View>

      <View {...panResponder.panHandlers}>
        <View
          style={{
            width: progressBarWidth,
            height: progressBarHeight,
            borderRadius: progressBarWidth / 2,
            borderColor: Colors.LIGHT_GREEN,
            borderWidth: 2,
            backgroundColor: Colors.WHITE,
            position: 'relative',
          }}>
          <View
            style={{
              backgroundColor: bgColor,
              width: circleSize,
              height: circleSize,
              borderRadius: circleSize / 2,
              position: 'absolute',
              left: circlePosition.left,
              bottom: circlePosition.bottom,
              borderWidth: 2,
              borderColor: Colors.WHITE,
            }}
          />
        </View>
        <View style={textContainer}>
          <Text style={componentTitle}>{TSL}</Text>
          <Text style={componentTitle}>{TSR}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CircleProgressBarSmall;
