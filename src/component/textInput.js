import {useState} from 'react';
import {TextInput, View} from 'react-native';
import { Colors, Sizing } from '../styles';

export const Input = props => {
  const {value, setValue} = props;
  return (
    <View>
      <TextInput
        style={{
          width: Sizing.vw*100,
          color: Colors.WHITE,
          fontSize: 15,
          borderColor: Colors.WHITE,
          borderWidth: 0.5,
          height: 30,
          width: 30,
          padding: 0,
          textAlign: 'center',
          borderRadius: 5,
        }}
        value={value}
        onChangeText={setValue}
        keyboardType="number-pad"
      />
    </View>
  );
};
