import {View, Image, TouchableOpacity} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import {ImageSource} from '../common/imageSource'
import {Label} from './label'
import { useNavigation } from '@react-navigation/native'

interface props {
  canGoBack: boolean
  title: string
}

export const Header = (props: props) => {
    const Navigation = useNavigation()
  const {canGoBack = false, title} = props
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {canGoBack && (
          <TouchableOpacity onPress={() => Navigation.goBack()} >
            <Image source={ImageSource.back} style={styles.image} />
          </TouchableOpacity>
        )}
        <Label style={{textAlign:'center', color:'white',marginLeft:10}}>{title}</Label>
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
  },
  image: {
    height: '20@ms',
    width: '20@ms',
    resizeMode: 'contain',
    tintColor:'white'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    height:"40@ms",
    paddingHorizontal:'5@ms',
    width:'100%'
  },
})
