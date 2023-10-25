import {Pressable, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from '../styles';

export const TrippleBtn = ({TBL, TBC, TBR, TbL, TbC, TbR}) => {
  const [firstContainer, setFirstContainer] = useState(Colors.WHITE);
  const [secondContainer, setSecondContainer] = useState(Colors.WHITE);
  const [thirdContainer, setThirdContainer] = useState(Colors.WHITE);

  useEffect(() => {
    if (TBL === 1) {
      setFirstContainer(Colors.GREEN);
      setSecondContainer(Colors.WHITE);
      setThirdContainer(Colors.WHITE);
    } else if (TBC === 1) {
      setFirstContainer(Colors.WHITE);
      setSecondContainer(Colors.GREEN);
      setThirdContainer(Colors.WHITE);
    } else if (TBR === 1) {
      setFirstContainer(Colors.WHITE);
      setSecondContainer(Colors.WHITE);
      setThirdContainer(Colors.GREEN);
    }
  }, [TBL, TBC, TBR]);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Pressable
        onPress={() => (
          setFirstContainer(Colors.GREEN),
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
          setSecondContainer(Colors.GREEN),
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
          setThirdContainer(Colors.GREEN)
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
    padding: 30,
    marginRight: 8,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    borderRadius: 12,
  },
});
export default TrippleBtn;
