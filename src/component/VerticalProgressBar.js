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

  const barWidth = 24;

  const progressBarHeight = 150 * progress;
  const percentage = Math.round(progress * 100);

  if (Visible) {
    return (
      <View style={styles.container}>
        <Text style={styles.txtlbl}>{TS}</Text>
        <TouchableOpacity onPress={increaseProgress} style={styles.button}>
          <Image
            source={ImageSource.fan}
            style={{
              height: 30,
              width: 30,
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
              fill={
                percentage < 33
                  ? Colors.GREEN
                  : percentage > 33 && percentage < 67
                  ? Colors.GREEN
                  : Colors.GREEN
              }
            />
          </Svg>
        </View>
        <TouchableOpacity onPress={decreaseProgress} style={styles.button}>
          <Image source={ImageSource.fan} style={{height: 20, width: 20}} />
        </TouchableOpacity>
        <Text style={styles.percentageText}>{percentage}%</Text>
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
    borderWidth: 1,
    borderColor: Colors.BLACK,
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
    borderRadius: 5,
    color: Colors.BLACK,
  },
  buttonText: {
    fontSize: 30,
    color: Colors.WHITE,
    color: Colors.BLACK,
  },
  progressBarContainer: {
    borderWidth: 2,
    borderColor: Colors.BLACK,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    width: Sizing.vw * 6,
    height: Sizing.vh * 17,
  },
  percentageText: {
    fontSize: 18,
    marginTop: 10,
  },
  txtlbl: {
    fontSize: 20,
  },
});

export default VerticalProgressBar;
