import {Pressable, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors, CustomStyles, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';

const {width} = Dimensions.get('window');
const border_thickness = 2;
const progressBarHeight = CustomStyles.circularProgressBarSmall.height * 1.5;
const circleSize = Sizing.vh * 2.45;
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

  const {mainContainer, btnContainer} = componentStyle.ThreePointSlider;

  return (
    <View style={mainContainer}>
      <Pressable
        onPress={() => (
          setFirstContainer(Colors.LIGHT_GREEN),
          setSecondContainer(Colors.WHITE),
          setThirdContainer(Colors.WHITE)
        )}>
        <View style={[btnContainer, {backgroundColor: `${firstContainer}`}]}>
          <Text>{TbL}</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => (
          setFirstContainer(Colors.WHITE),
          setSecondContainer(Colors.LIGHT_GREEN),
          setThirdContainer(Colors.WHITE)
        )}>
        <View style={[btnContainer, {backgroundColor: `${secondContainer}`}]}>
          <Text>{TbC}</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => (
          setFirstContainer(Colors.WHITE),
          setSecondContainer(Colors.WHITE),
          setThirdContainer(Colors.LIGHT_GREEN)
        )}>
        <View style={[btnContainer, {backgroundColor: `${thirdContainer}`}]}>
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
  },
});
export default ThreePointSlider;
