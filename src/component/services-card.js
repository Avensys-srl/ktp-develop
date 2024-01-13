import React from "react";
import {View, Image, TouchableOpacity, Text, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {AccessoriesCard} from './services-cards/accessories-card';
import {ImageSource} from '../common/imageSource';
import {useState} from 'react';
import {userType, accessoriesName} from '../configs';
import {useNavigation} from '@react-navigation/native';
import {Colors, Sizing} from '../styles';
// import screenStyle from '../styles/screenStyle';



export const ServicesCard = ( props) => {
  const {title, index, onPress, disabled, values = []} = props;
  const navigation = useNavigation();
  // const { container, card, txttitle, starImage,valuesContainer} = screenStyle.cardDesign;
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        key={index}
        disabled={disabled}
        onPress={() => navigation.navigate(onPress)}>
        <Text style={styles.txttitle}>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={ImageSource.star} style={styles.starImage} />
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={() => {
          //   setArrowDown(!arrowDown)
          // }}
          // disabled={disabled}
          // onPress={() => Navigation.navigate(onPress)}
          >
            <Image
              // source={arrowDown ? ImageSource.arrowDown : ImageSource.arrow}
              source={
                values.length !== 0 ? ImageSource.arrowDown : ImageSource.arrow
              }
              style={[styles.starImage, {tintColor: 'white'}]}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {values.length !== 0 && (
        <View style={styles.valuesContainer}>
          {values.map((title: string) => {
            return <AccessoriesCard title={title} onPress={onPress} disabled={false} />;
          })}
        </View>
      )}
      {/* {dropDown()} */}
    </View>
  );
};

const styles = ScaledSheet.create({

  container: {
      width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 80,
      alignSelf: 'center',
      paddingHorizontal: 2,
      alignItems: 'center',
      // borderWidth: 1,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 6,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor: Colors.BLACK,
      height: 37,
      justifyContent: 'space-between',
      width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
      alignSelf: 'center',
      borderWidth: 1,
    },
    starImage: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
    },
    title: {
      color: Colors.WHITE,
      fontSize: 20,
    },
     txttitle: {
      color: Colors.WHITE,
      fontSize: 19,
    },
    valuesContainer: {
      width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
          alignSelf: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 5,
      
    },

});
