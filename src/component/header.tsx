import {View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ImageSource} from '../common/imageSource';
import {Label} from './label';
import {useNavigation} from '@react-navigation/native';
import { Colors, Sizing, CustomStyles } from '../styles';

interface props {
  canGoBack: boolean;
  title: string;
}

export const Header = (props: props) => {
  const Navigation = useNavigation();
  const {canGoBack = false, title} = props;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {canGoBack && (
          <TouchableOpacity onPress={() => Navigation.goBack()}>
            <Image source={ImageSource.back} style={styles.image} />
          </TouchableOpacity>
        )}
        <Label style={CustomStyles.TitleHeader}>
          {title}
        </Label>
        <View style={styles.starArrowContainer}>
          <TouchableOpacity>
            <Image style={styles.img} source={ImageSource.star} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.img} source={ImageSource.arrow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: Sizing.vw*100,
  },
  image: {
    height: Sizing.vh*20,
    width: Sizing.vw*5,
    resizeMode: 'contain',
    tintColor: Colors.WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    height: Sizing.vh*5.5,
    paddingHorizontal: '5@ms',
    width: Sizing.vw*100,
  },
  starArrowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginEnd: 12,
  },
  img: {width:  Sizing.vw*7, height: Sizing.vh*4, marginEnd: 12},
});
