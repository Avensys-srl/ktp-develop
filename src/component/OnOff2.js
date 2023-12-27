import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Sizing} from '../styles';

const OnOff2 = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          width: Sizing.vw * 40,
          justifyContent: 'space-between',
        }}>
        <View style={{}}>
          <View
            style={{
              width: Sizing.vw * 8,
              height: Sizing.vw * 8,
              borderRadius: (Sizing.vw * 8) / 2,
              borderWidth: 2,
              borderColor: Colors.LIGHT_GREEN,
              padding: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: Sizing.vw * 7,
                height: Sizing.vw * 7,
                borderRadius: (Sizing.vw * 7) / 2,
                borderWidth: 2,
                borderColor: Colors.WHITE,
                backgroundColor: Colors.LIGHT_GREEN,
              }}></View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{}}>Stepless</Text>
          </View>
        </View>

        <View style={{}}>
          <View
            style={{
              width: Sizing.vw * 8,
              height: Sizing.vw * 8,
              borderRadius: (Sizing.vw * 8) / 2,
              borderWidth: 2,
              borderColor: Colors.LIGHT_GREEN,
              padding: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: Sizing.vw * 7,
                height: Sizing.vw * 7,
                borderRadius: (Sizing.vw * 7) / 2,
                borderWidth: 2,
                borderColor: Colors.WHITE,
                backgroundColor: Colors.LIGHT_GREEN,
              }}></View>
          </View>
          <View>
            <Text style={{textAlign: 'center'}}>3speeds</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnOff2;

const styles = StyleSheet.create({});
