import React, {useState} from 'react';
import {View, Text, PanResponder, StyleSheet, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import {Colors, CustomStyles, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';

const {width, height} = Dimensions.get('window');
export const CountdownProgressBar = ({label, min_val, max_val, init_val}) => {
  const [progress, setProgress] = useState(init_val);

  const mv = min_val;
  const Xv = max_val;
  const rv = label;

  const handlePanResponderMove = (evt, gestureState) => {
    const progressBarWidth = 300;
    const touchX = Math.min(progressBarWidth, Math.max(0, gestureState.moveX));
    const newProgress = touchX / progressBarWidth;

    setProgress(newProgress);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
  });

  // const filledWidth = 320 * (progress || 0);

  const {mainContainer, valueContainer, textContainer} =
    componentStyle.CountdownProgressBar;
  const {componentTitle} = componentStyle.commonStyles;

  return (
    <View style={mainContainer}>
      <View style={valueContainer}>
        <Text style={[componentTitle, {marginRight: 8}]}>{rv}</Text>
        <Text style={[componentTitle]}>{`${Math.round(
          progress * (max_val - min_val) + min_val,
        )}`}</Text>
      </View>

      <View {...panResponder.panHandlers}>
        <Progress.Bar
          progress={progress}
          width={Sizing.vw * 90}
          height={Sizing.vh * 2.5}
          borderRadius={18}
          color={Colors.LIGHT_GREEN}
          borderColor={Colors.LIGHT_GREEN}
          borderWidth={2}
          unfilledColor={Colors.WHITE}
        />
        <View style={textContainer}>
          <Text style={componentTitle}>{mv}</Text>
          <Text style={componentTitle}>{Xv}</Text>
        </View>
      </View>
    </View>
  );
};

export default CountdownProgressBar;
