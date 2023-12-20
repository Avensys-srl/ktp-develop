import {Pressable, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors, Sizing} from '../styles';

const {width} = Dimensions.get('window');
const border_thickness = 1;
const progressBarHeight = 25;
const circleSize = 24;
const centered = (progressBarHeight - circleSize) / 2 + border_thickness;

export const ThreePointSlider = ({TBL, TBC, TBR, TbL, TbC, TbR}) => {
  const [firstContainer, setFirstContainer] = useState(Colors.WHITE);
  const [secondContainer, setSecondContainer] = useState(Colors.WHITE);
  const [thirdContainer, setThirdContainer] = useState(Colors.WHITE);

  useEffect(() => {
    if (TBL === 1) {
      setFirstContainer(Colors.LIGHT_GREEN);
      setSecondContainer(Colors.WHITE);
      setThirdContainer(Colors.WHITE);
    } else if (TBC === 1) {
      setFirstContainer(Colors.WHITE);
      setSecondContainer(Colors.LIGHT_GREEN);
      setThirdContainer(Colors.WHITE);
    } else if (TBR === 1) {
      setFirstContainer(Colors.WHITE);
      setSecondContainer(Colors.WHITE);
      setThirdContainer(Colors.LIGHT_GREEN);
    }
  }, [TBL, TBC, TBR]);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 2,
        margin: 8,
        borderRadius: progressBarHeight,
        justifyContent: 'space-between',
        width: Sizing.vw * 90,
        height: progressBarHeight,
        borderColor: Colors.LIGHT_GREEN,
      }}>
      <Pressable
        onPress={() => (
          setFirstContainer(Colors.LIGHT_GREEN),
          setSecondContainer(Colors.WHITE),
          setThirdContainer(Colors.WHITE)
        )}>
        <View
          style={[styles.btnContainer, {backgroundColor: `${firstContainer}`}]}>
          <Text>{TbL}</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => (
          setFirstContainer(Colors.WHITE),
          setSecondContainer(Colors.LIGHT_GREEN),
          setThirdContainer(Colors.WHITE)
        )}>
        <View
          style={[
            styles.btnContainer,
            {backgroundColor: `${secondContainer}`},
          ]}>
          <Text>{TbC}</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => (
          setFirstContainer(Colors.WHITE),
          setSecondContainer(Colors.WHITE),
          setThirdContainer(Colors.LIGHT_GREEN)
        )}>
        <View
          style={[styles.btnContainer, {backgroundColor: `${thirdContainer}`}]}>
          <Text>{TbR}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: circleSize,
    width: circleSize,
    borderWidth: 2,
    borderColor: Colors.LIGHT_GREEN,
    borderRadius: circleSize / 2,
    bottom: centered,
  },
});
export default ThreePointSlider;
