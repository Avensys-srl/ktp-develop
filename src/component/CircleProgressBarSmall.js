import React, {useState, useEffect} from 'react';
import {View, Text, PanResponder, StyleSheet, Dimensions} from 'react-native';
<<<<<<< HEAD
import {Colors, CustomStyles, Sizing} from '../styles';

export const CircleProgressBarSmall = ({TSB, TSL, TSR, RIV, BG}) => {
  const progressBarWidth = Sizing.vw * 90;
  const circleSize = 24;
=======
import { Colors, Sizing } from '../styles';

export const CircleProgressBarSmall = ({TSB, TSL, TSR, RIV, BG}) => {
  const progressBarWidth = Sizing.vw*70;
  const circleSize = 27;
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  const progressBarHeight = 30;
  const border_thickness = 2;
  const centered = (progressBarHeight - circleSize) / 2 - border_thickness;

  let bgColor;
  if (BG === 0) {
    bgColor = Colors.ORANGE;
  } else if (BG === 1) {
<<<<<<< HEAD
    bgColor = Colors.LIGHT_GREEN;
=======
    bgColor = Colors.GREEN;
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  } else if (BG === 2) {
    bgColor = Colors.RED;
  }

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

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={CustomStyles.ComponentTitles}>{TSB}</Text>
        <Text style={CustomStyles.ComponentTitles}>
          {`${Math.round(progress * (TSR - TSL) + TSL)}`}
        </Text>
      </View>

      <View {...panResponder.panHandlers}>
        <View
          style={{
            width: progressBarWidth,
            height: progressBarHeight,
<<<<<<< HEAD
            borderRadius: progressBarWidth / 2,
            borderColor: Colors.LIGHT_GREEN,
=======
            borderRadius: circleSize / 2,
            borderColor: Colors.BLACK,
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
            borderWidth: border_thickness,
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
<<<<<<< HEAD
              // borderWidth: border_thickness,
              // borderColor: Colors.BLACK,
=======
              borderWidth: border_thickness,
              borderColor: Colors.BLACK,
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{TSL}</Text>
          <Text>{TSR}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CircleProgressBarSmall;
