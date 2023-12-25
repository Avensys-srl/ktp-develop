import React, {useState, useEffect} from 'react';
import {View, Text, PanResponder, StyleSheet, Dimensions} from 'react-native';
import {Colors, Sizing} from '../styles';

export const CircleProgressBar = ({TSB, TSL, TSR, RIV, BG}) => {
  const progressBarWidth = Sizing.vw * 90;
  const circleSize = 27;
  const progressBarHeight = 30;
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

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {/* {TSB == '' ? <Text style={{marginBottom: 12}}>{TSB}</Text> : null} */}

      <View {...panResponder.panHandlers}>
        <View
          style={{
            width: progressBarWidth,
            height: progressBarHeight,
            borderRadius: circleSize / 2,
            borderColor: Colors.BLACK,
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
              borderWidth: border_thickness,
              borderColor: Colors.BLACK,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{TSL}</Text>
          <Text>{TSR}</Text>
          <Text
            style={{
              position: 'absolute',
              left: filledWidth,
              bottom: -15,
            }}>
            {`${Math.round(progress * (TSR - TSL) + TSL)}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CircleProgressBar;
