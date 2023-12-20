import {View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ImageSource} from '../common/imageSource';
import {Label} from './label';
import {useNavigation} from '@react-navigation/native';
import { Colors, Sizing, CustomStyles } from '../styles';

interface props {
  canGoBack: boolean;
  title: string;
  optionsStar:Number,
  headerBG:Number,
}

export const Header = (props: props) => {
  const Navigation = useNavigation();
  const {canGoBack = false, title,optionsStar=0,headerBG=0} = props;
  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer,{backgroundColor: headerBG==1 ? Colors.GREEN : Colors.BLACK}]}>
        {canGoBack && (
          <TouchableOpacity onPress={() => Navigation.goBack()}>
            <Image source={ImageSource.back} style={[styles.image,{marginLeft:10,width:26}]} />
          </TouchableOpacity>
        )}
        <Label style={CustomStyles.TitleHeader}>
          {title}
        </Label>
        <View style={styles.starArrowContainer}>
          <TouchableOpacity>
            <Image style={styles.img} source={optionsStar== 0 ? ImageSource.star : ImageSource.starFill} />
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
    alignItems:'center',
    marginTop:15
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
    // backgroundColor: Colors.GREEN,
    height: Sizing.vh*7,
    paddingHorizontal: '5@ms',
    width: Sizing.vw*90,
  },
  starArrowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginEnd: 12,
  },
  img: {width:  Sizing.vw*7, height: Sizing.vh*4, marginEnd: 12},
});
