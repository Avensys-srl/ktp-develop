import {TouchableOpacity, View, Text} from 'react-native'
import {Header, ClimateControlCard} from '../../component'
import {ImageSource} from '../../common/imageSource'
import {ScaledSheet} from 'react-native-size-matters'
import {useState} from 'react'
import {dayTemperatureData, nightTemperatureData} from '../../configs'

export const ClimateControl = () => {
  const [dayTemp, setDayTemp] = useState(22)
  const [nightTemp, setNightTemp] = useState(23)

  return (
    <>
      <Header canGoBack={true} title='Temperature Set Point' />
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <ClimateControlCard
            source={ImageSource.sun}
            imageStyle={{}}
            box={true}
            tempNumber={`${dayTemp}°C `}
            dropDownTemp={dayTemperatureData.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setDayTemp(item.num)
                  }}>
                  <Text style={styles.tempDropdown}>{`${item.num} °C`}</Text>
                </TouchableOpacity>
              )
            })}
          />
          <ClimateControlCard
            source={ImageSource.moon}
            imageStyle={{}}
            box={true}
            tempNumber={`${nightTemp}°C `}
            dropDownTemp={nightTemperatureData.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setNightTemp(item.num)
                  }}>
                  <Text style={styles.tempDropdown}>{`${item.num} °C`}</Text>
                </TouchableOpacity>
              )
            })}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <ClimateControlCard
            source={ImageSource.snowflake}
            imageStyle={{}}
            box={false}
            dropDownTemp={''}
            tempNumber={''}
          />
          <ClimateControlCard
            source={ImageSource.sun}
            imageStyle={{}}
            box={false}
            dropDownTemp={''}
            tempNumber={''}
          />
        </View>
      </View>
    </>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  tempDropdown: {
    color: 'black',
    fontSize: '20@ms',
  },
})
