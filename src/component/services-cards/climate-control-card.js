import React, {useState} from 'react';
import {
  View,
  Image,
  ImageStyle,
  StyleProp,
  Text,
  ImageBackground,
} from 'react-native';

import {ScaledSheet} from 'react-native-size-matters';
import DropdownSetPoint from '../DropdownSetPoint';
import {Colors, Sizing} from '../../styles';


export const ClimateControlCard = (props) => {
  const {imageStyle, source, box, tempNumber, iconText} = props;
  const [lock, setLock] = useState(true);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center' }}>
        {/* <Image source={source} style={[styles.image, imageStyle]} /> */}

        {/* <Image source={ImageSource.home} style={styles.home} /> */}
        <ImageBackground
          source={props.mainImg}
          style={[
            styles.home,
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text style={{fontSize: 16, marginBottom: 12}}>{iconText}</Text>
          <Image
              source={props.leftImg}
              style={styles.leftImg}
          />
          <Image
              source={props.rightImg}
              style={styles.rightImg}
          />
        </ImageBackground>

        {box && (
          <DropdownSetPoint
           style= {{ width: Sizing.vw * 13}}
            data={[
              '10°C ',
              '11°C',
              '12°C',
              '13°C',
              '14°C',
              '15°C ',
              '16°C',
              '17°C',
              '18°C',
              '19°C',
              '20°C ',
              '21°C',
              '22°C',
              '23°C',
              '24°C',
              '25°C ',
              '26°C',
              '27°C',
              '28°C',
              '29°C',
              '30°C',
            ]} defalutValue={'22°C'}
          />
        )}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({

  home: {
    height: Sizing.vw * 8,
    width: Sizing.vw * 7,
    resizeMode: 'contain',
    tintColor: Colors.BLACK,
  },
  leftImg: {
    height: Sizing.vh * 1.3,
    width: Sizing.vh * 1.2,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  rightImg: {
    height: Sizing.vh * 1.3,
    width: Sizing.vh * 1.2,
    right: 0,
    top: 0,
    position: 'absolute'
  },
  
  temperatureNumber: {
    fontSize: '20@ms',
    color: Colors.BLACK,
  },
});
