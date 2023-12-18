import {View, Image, ImageStyle, StyleProp, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ImageSource} from '../../common/imageSource';
import {useState} from 'react';
import DropdownSetPoint from '../DropdownSetPoint';
import { Colors, Sizing } from '../../styles';

interface props {
  source: {};
  imageStyle: StyleProp<ImageStyle>;
  box: boolean;
  tempNumber: string | number;
  // dropDownTemp: any
  // tempData: any
}

export const ClimateControlCard = (props: props) => {
  const {imageStyle, source, box, tempNumber} = props;
  const [lock, setLock] = useState(true);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={source} style={[styles.image, imageStyle]} />
        <Image source={ImageSource.home} style={styles.home} />
        {box && (
          <DropdownSetPoint data={['21°C ', '22°C', '23°C', '24°C', '25°C']} />
        )}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {},
  home: {
    height: Sizing.vh*9,
    width: Sizing.vw*15,
    resizeMode: 'contain',
    tintColor: Colors.BLACK,
  },
  image: {
    height: Sizing.vh*6,
    width: Sizing.vw*6,
    resizeMode: 'contain',
    tintColor: Colors.BLACK,
    bottom: '20@ms',
    left: '15@ms',
  },
  temperatureNumber: {
    fontSize: '20@ms',
    color: Colors.BLACK,
  },
});
