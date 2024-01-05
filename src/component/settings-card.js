import React from "react";
import {View, Image, TouchableOpacity, Text, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {AccessoriesCard} from './services-cards/accessories-card';
import {ImageSource} from '../common/imageSource';
import {useNavigation} from '@react-navigation/native';
import {Colors, Sizing} from '../styles';
import screenStyle from '../styles/screenStyle';


export const SettingsCard = ( props) => {
  const {title, index, onPress, disabled, values = []} = props;
  const navigation = useNavigation();
  const { container, card, txttitle, starImage,valuesContainer} = screenStyle.cardDesign;
  return (
    <View style={container}>
      <TouchableOpacity
        style={card}
        key={index}
        disabled={disabled}
        onPress={() => navigation.navigate(onPress)}>
        <Text style={txttitle}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image source={ImageSource.star} style={starImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              // source={arrowDown ? ImageSource.arrowDown : ImageSource.arrow}
              source={
                values.length !== 0 ? ImageSource.arrowDown : ImageSource.arrow
              }
              style={[starImage, {tintColor: 'white'}]}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {values.length !== 0 && (
        <View style={valuesContainer}>
          {values.map(title => {
            return <AccessoriesCard title={title} />;
          })}
        </View>
      )}
      {/* {dropDown()} */}
    </View>
  );
};

const styles = ScaledSheet.create({});
