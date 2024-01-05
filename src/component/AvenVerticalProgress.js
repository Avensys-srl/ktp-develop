import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  PanResponder,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import {ImageSource} from '../common/imageSource';
import {Colors, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';

const {width} = Dimensions.get('window');
export const AvenVerticalProgress = ({VS, TS, Visible = true}) => {
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

  const barWidth = Sizing.vw * 4;

  const progressBarHeight = Sizing.vh * 15.8 * progress;
  const percentage = Math.round(progress * 100);

  const {
    container,
    buttonContainer,
    button,
    progressBarContainer,
    percentageText,
    txtlbl,
    borderVen,
    smallImg,
    largeImg,
  } = componentStyle.VerticalProgressBar;

  const {componentTitle} = componentStyle.commonStyles;

  if (Visible) {
    return (
      <SafeAreaView>
        <View style={container}>
          <Text style={[componentTitle, txtlbl]}>{TS}</Text>
          <TouchableOpacity onPress={increaseProgress} style={button}>
            <Image source={ImageSource.fan} style={largeImg} />
          </TouchableOpacity>
          <View style={progressBarContainer} {...panResponder.panHandlers}>
            <Svg width={barWidth} height={150}>
              <Rect
                x={0}
                y={Sizing.vh * 16.2 - progressBarHeight}
                width={barWidth}
                height={progressBarHeight}
                rx={Sizing.vw * 2.5}
                ry={Sizing.vw * 2.5}
                fill={Colors.LIGHT_GREEN}
              />
            </Svg>
          </View>
          <TouchableOpacity onPress={decreaseProgress} style={button}>
            <Image source={ImageSource.fan} style={smallImg} />
          </TouchableOpacity>
          <Text style={[componentTitle, percentageText]}>{percentage}%</Text>
          <View style={buttonContainer}></View>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
        <SafeAreaView>
            <View style={container}>
            </View>
        </SafeAreaView>
    );
  }
};

export default AvenVerticalProgress;
