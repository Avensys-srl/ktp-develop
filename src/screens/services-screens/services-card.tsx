import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { Label, AccessoriesCard } from '../../component'
import { ImageSource } from '../../common/imageSource'
import { useState } from 'react'
import { userType, accessoriesName } from '../../configs'
import { useNavigation } from '@react-navigation/native'



interface props {
  title: string
  index: any
  onPress: any
  disabled: boolean
}

export const ServicesCard = (props: props) => {
  const { title, index, onPress, disabled, values = [] } = props
  const Navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} key={index}
        disabled={disabled}
        onPress={() => Navigation.navigate(onPress)}>
        <Label style={styles.title}>{title}</Label>
        <View style={{flexDirection:'row'}}>
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
              source={values.length !== 0 ? ImageSource.arrowDown : ImageSource.arrow}
              style={[styles.starImage, { tintColor: 'white' }]}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {values.length !== 0 && <View style={styles.valuesContainer}>
        {values.map((title) => {
          return (<AccessoriesCard title={title} />)
        })}
      </View>}
      {/* {dropDown()} */}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '2@ms',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10@ms',
    // paddingVertical: '5@ms',
    borderWidth: 1,
    borderRadius: '5@ms',
    marginTop: '6@ms',
    backgroundColor: 'black',
    height: '50@ms',
    justifyContent: 'space-between'
  },
  starImage: {
    height: '30@ms',
    width: '30@ms',
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontSize: '20@ms'
  },
  valuesContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '5@ms'
  }
})
