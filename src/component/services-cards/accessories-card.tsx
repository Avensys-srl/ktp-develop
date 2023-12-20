import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../styles';

interface props {
  title: string;
  onPress: any;
  disabled: boolean;
}

export const AccessoriesCard = (props: props) => {
  const {title, onPress, disabled} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} disabled={disabled}>
      <Text
        style={{color: 'black'}}
        onPress={() => navigation.navigate(onPress)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderWidth: 1,
    // backgroundColor: 'lightblue',
    backgroundColor: Colors.LIGHT_BLUE1,
    width: '90@ms',
    height: '30@ms',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5@ms',
  },
});
