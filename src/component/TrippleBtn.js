import {Pressable, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from '../styles';

export const TrippleBtn = ({TBL, TBC, TBR, TbL, TbC, TbR}) => {
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
        justifyContent: 'space-around',
      }}>
      <Pressable
        onPress={() => (
          setFirstContainer(Colors.LIGHT_GREEN),
          setSecondContainer(Colors.WHITE),
          setThirdContainer(Colors.WHITE)
        )}>
        <View
          style={{
            borderWidth: 2,
            borderColor: Colors.LIGHT_GREEN,
            padding: 1,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <View
            style={[
              styles.btnContainer,
              {backgroundColor: `${firstContainer}`},
            ]}>
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
        <View
          style={{
            borderWidth: 2,
            borderColor: Colors.LIGHT_GREEN,
            padding: 1,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <View
            style={[
              styles.btnContainer,
              {backgroundColor: `${secondContainer}`},
            ]}>
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
        <View
          style={{
            borderWidth: 2,
            borderColor: Colors.LIGHT_GREEN,
            padding: 1,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            // marginRight: 8,
          }}>
          <View
            style={[
              styles.btnContainer,
              {backgroundColor: `${thirdContainer}`},
            ]}>
            <Text style={CustomStyles.ComponentTitlesBlack}>{TbR}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    padding: 30,
    // marginRight: 8,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    borderRadius: 12,
  },
});
export default TrippleBtn;
