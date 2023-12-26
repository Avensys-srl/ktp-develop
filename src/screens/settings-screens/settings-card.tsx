import {View, Image, TouchableOpacity, Text, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Label, AccessoriesCard} from '../../component';
import {ImageSource} from '../../common/imageSource';
import {useNavigation} from '@react-navigation/native';
import {Colors, Sizing} from '../../styles';
import screenStyle from '../../styles/screenStyle';

interface props {
  title: string;
  index: any;
  onPress: any;
  disabled: boolean;
}

export const SettingsCard = (props: props) => {
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
