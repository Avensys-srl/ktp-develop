import {useState} from 'react';
import {TextInput, View} from 'react-native';

export const Input = props => {
  const {value, setValue} = props;
  return (
    <View>
      <TextInput
        style={{
          width: '100%',
          color: 'white',
          fontSize: 15,
          borderColor: 'white',
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
