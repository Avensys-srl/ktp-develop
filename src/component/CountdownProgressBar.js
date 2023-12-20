import React, {useState} from 'react';
import {View, Text, PanResponder, StyleSheet, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import {Colors, CustomStyles, Sizing} from '../styles';

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

  const filledWidth = 320 * (progress || 0);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: Sizing.vw * 60,
          position: 'relative',
        }}>
        <Text style={CustomStyles.ComponentTitles}>{rv}</Text>
        <Text
          style={[
            CustomStyles.ComponentTitles,
            {bottom: height * 0.003},
          ]}>{`${Math.round(progress * (max_val - min_val) + min_val)}`}</Text>
      </View>

      <View {...panResponder.panHandlers}>
        <Progress.Bar
          progress={progress}
          width={Sizing.vw * 85}
          height={Sizing.vh * 3.1}
          borderRadius={18}
          color={Colors.LIGHT_GREEN}
          borderColor={Colors.LIGHT_GREEN}
          borderWidth={2}
          unfilledColor={Colors.WHITE}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{mv}</Text>
          <Text>{Xv}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CountdownProgressBar;
