import {
  View,
  Image,
  ImageStyle,
  StyleProp,
  Text,
  ImageBackground,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ImageSource} from '../../common/imageSource';
import {useState} from 'react';
import DropdownSetPoint from '../DropdownSetPoint';
import {Colors, Sizing} from '../../styles';

interface props {
  source: {};
  imageStyle: StyleProp<ImageStyle>;
  box: boolean;
  tempNumber: string | number;
  // dropDownTemp: any
  // tempData: any
  iconText: string;
}

export const ClimateControlCard = (props: props) => {
  const {imageStyle, source, box, tempNumber, iconText} = props;
  const [lock, setLock] = useState(true);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* <Image source={source} style={[styles.image, imageStyle]} /> */}

        {/* <Image source={ImageSource.home} style={styles.home} /> */}
        <ImageBackground
          source={ImageSource.home}
          style={[
            styles.home,
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text style={{fontSize: 16, marginBottom: 12}}>{iconText}</Text>
        </ImageBackground>

        {box && (
          <DropdownSetPoint
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
  container: {},
  home: {
    height: Sizing.vh * 9,
    width: Sizing.vw * 15,
    resizeMode: 'contain',
    tintColor: Colors.BLACK,
  },
  image: {
    height: Sizing.vh * 6,
    width: Sizing.vw * 6,
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
