import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  PanResponder,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import {ImageSource} from '../common/imageSource';
import {Colors, Sizing} from '../styles';

const {width} = Dimensions.get('window');
export const VerticalProgressBar = ({VS, TS, Visible = true}) => {
  const [progress, setProgress] = useState(VS / 100);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newProgress = Math.max(
          0,
          Math.min(1, 1 - gestureState.moveY / 150),
        );
        setProgress(newProgress);
      },
    }),
  ).current;

  const increaseProgress = () => {
    setProgress(prevProgress => Math.min(prevProgress + 0.1, 1.0));
  };

  const decreaseProgress = () => {
    setProgress(prevProgress => Math.max(prevProgress - 0.1, 0.0));
  };

  const barWidth = Sizing.vw * 6;

  const progressBarHeight = 150 * progress;
  const percentage = Math.round(progress * 100);

  if (Visible) {
    return (
      <View style={styles.container}>
        <Text style={[CustomStyles.ComponentTitles, styles.txtlbl]}>{TS}</Text>
        <TouchableOpacity onPress={increaseProgress} style={styles.button}>
          <Image
            source={ImageSource.fan}
            style={{
              height: 40,
              width: 40,
            }}
          />
        </TouchableOpacity>
        <View style={styles.progressBarContainer} {...panResponder.panHandlers}>
          <Svg width={barWidth} height={150}>
            <Rect
              x={0}
              y={150 - progressBarHeight}
              width={barWidth}
              height={progressBarHeight}
              fill={Colors.LIGHT_GREEN}
            />
          </Svg>
        </View>
        <TouchableOpacity onPress={decreaseProgress} style={styles.button}>
          <Image source={ImageSource.fan} style={{height: 30, width: 30}} />
        </TouchableOpacity>
        <Text style={[CustomStyles.ComponentTitles, styles.percentageText]}>
          {percentage}%
        </Text>
        <View style={styles.buttonContainer}></View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: Sizing.vw * 20,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.LIGHT_GREEN,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Sizing.vw * 100,
    paddingHorizontal: 50,
  },
  button: {
    padding: 10,
    color: Colors.LIGHT_GREEN,
  },
  progressBarContainer: {
    borderWidth: 2,
    borderColor: Colors.LIGHT_GREEN,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    width: Sizing.vw * 6,
    height: Sizing.vh * 17,
  },
  percentageText: {
    fontSize: 18,
    // marginTop: 10,
  },
  txtlbl: {
    fontSize: 20,
  },
});

export default VerticalProgressBar;
