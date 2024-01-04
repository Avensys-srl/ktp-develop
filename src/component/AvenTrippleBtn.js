import {Pressable, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from '../styles';
import componentStyle from '../styles/componentStyle';
import CustomStyles from '../styles/CustomStyles';

const AvenTrippleBtn = ({TBL, TBC, TBR, TbL, TbC, TbR}) => {
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

  const {mainContainer, btnContainerOuter, btnContainer} =
    componentStyle.TrippleBtn;

  return (
    <View style={mainContainer}>
      <Pressable
        onPress={() => (
          setFirstContainer(Colors.LIGHT_GREEN),
          setSecondContainer(Colors.WHITE),
          setThirdContainer(Colors.WHITE)
        )}>
        <View style={btnContainerOuter}>
          <View style={[btnContainer, {backgroundColor: `${firstContainer}`}]}>
            <Text style={CustomStyles.ComponentTitlesBlack}>{TbL}</Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        onPress={() => (
          setFirstContainer(Colors.WHITE),
          setSecondContainer(Colors.LIGHT_GREEN),
          setThirdContainer(Colors.WHITE)
        )}>
        <View style={btnContainerOuter}>
          <View style={[btnContainer, {backgroundColor: `${secondContainer}`}]}>
            <Text style={CustomStyles.ComponentTitlesBlack}>{TbC}</Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        onPress={() => (
          setFirstContainer(Colors.WHITE),
          setSecondContainer(Colors.WHITE),
          setThirdContainer(Colors.LIGHT_GREEN)
        )}>
        <View style={btnContainerOuter}>
          <View style={[btnContainer, {backgroundColor: `${thirdContainer}`}]}>
            <Text style={CustomStyles.ComponentTitlesBlack}>{TbR}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default AvenTrippleBtn;
