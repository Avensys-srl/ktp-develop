import React from "react";
import {View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ImageSource} from '../common/imageSource';
import {Label} from './label';
import {useNavigation} from '@react-navigation/native';
import {Colors, Sizing} from '../styles';


export const Header = ( props) => {
  const Navigation = useNavigation();

  const {canGoBack = false, title, optionsStar = 0, headerBG = 0} = props;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.headerContainer,
          {backgroundColor: headerBG == 1 ? Colors.GREEN : Colors.BLACK},
        ]}>
        {canGoBack && (
          <TouchableOpacity onPress={() => Navigation.goBack()}>
            <Image
              source={ImageSource.back}
              style={[styles.image, {marginLeft: 10, width: 26}]}
            />
          </TouchableOpacity>
        )}
        <Label style={styles.TitleHeader}>{title}</Label>
        <View style={styles.starArrowContainer}>
          <TouchableOpacity>
            <Image
              style={styles.img}
              source={
                optionsStar == 0 ? ImageSource.star : ImageSource.starFill
              }
            />
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
    width: Sizing.vw * 100,
    alignItems: 'center',
    marginTop: 15,
    marginBottom:10,
    // borderWidth: 1,
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: 'center',
  },
  image: {
    height: Sizing.vh * 20,
    width: Sizing.vw * 5,
    resizeMode: 'contain',
    tintColor: Colors.WHITE,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Sizing.vh * 7,
    paddingHorizontal: '5@ms',
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: 'center',
    borderRadius: 12,
  },
  starArrowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginEnd: 3,
  },
  img: {
    width: 35,
    height: 35,
    marginEnd: 1,
  },
  TitleHeader: {
    textAlign: 'center',
    color: Colors.WHITE,
    marginLeft: 10,
    fontSize: 22,
  },

});
