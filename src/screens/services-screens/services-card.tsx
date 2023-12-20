import {View, Image, TouchableOpacity, Text, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Label, AccessoriesCard} from '../../component';
import {ImageSource} from '../../common/imageSource';
import {useState} from 'react';
import {userType, accessoriesName} from '../../configs';
import {useNavigation} from '@react-navigation/native';
import {Colors, Sizing} from '../../styles';
interface props {
  title: string;
  index: any;
  onPress: any;
  disabled: boolean;
}

export const ServicesCard = (props: props) => {
  const {title, index, onPress, disabled, values = []} = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        key={index}
        disabled={disabled}
        onPress={() => navigation.navigate(onPress)}>
<<<<<<< HEAD
        {/* <Label style={styles.title}>{title}</Label> */}
        <Text style={styles.txttitle}>{title}</Text>
=======
        <Label style={styles.title}>{title}</Label>
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
        <View style={{flexDirection: 'row'}}>
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
<<<<<<< HEAD
          {values.map((title: string) => {
            return <AccessoriesCard title={title} onPress={undefined} disabled={false} />;
=======
          {values.map(title => {
            return <AccessoriesCard title={title} />;
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
          })}
        </View>
      )}
      {/* {dropDown()} */}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: Sizing.vw * 100,
    paddingHorizontal: '2@ms',
    alignItems:'center',

  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10@ms',
    // paddingVertical: '5@ms',
    borderWidth: 1,
    borderRadius: '5@ms',
    marginTop: '5@ms',
    marginLeft: '5@ms',
    marginRight: '5@ms',
    backgroundColor: Colors.BLACK,
<<<<<<< HEAD
    height: '38@ms',
    justifyContent: 'space-between',
    width: Sizing.vw*90,
=======
    height: '50@ms',
    justifyContent: 'space-between',
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  },
  starImage: {
    height: '25@ms',
    width: '25@ms',
    resizeMode: 'contain',
  },
  title: {
    color: Colors.WHITE,
    fontSize: '20@ms',
<<<<<<< HEAD
  },
   txttitle: {
    color: Colors.WHITE,
    fontSize: '18@ms',
  },
  valuesContainer: {
    width: Sizing.vw * 90,
=======
  },
  valuesContainer: {
    width: Sizing.vw * 100,
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '5@ms',
  },
});
