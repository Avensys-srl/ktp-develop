import {useState} from 'react'
import {View, Text, Switch, Image} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import {ImageSource} from '../../common/imageSource'
import {ToggleButton} from '../toggleButton'
import { Colors } from '../../styles'

interface props {
  title: string
  lock: boolean
  toggleON: string
  toggleOff: string
}

export const FilterCard = (props: props) => {
  const [toggle, setToggle] = useState(false)
  const {title, lock, toggleON, toggleOff} = props
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.toggleContainer}>
          <ToggleButton toggle={toggle} onChange={() => setToggle(!toggle)} />
          <View style={styles.toggleLabel}>
            <Text>{toggleOff}</Text>
            <Text>{toggleON}</Text>
          </View>
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
      {lock && <Image source={ImageSource.lockOpen} style={styles.lock} />}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.BLACK,
    height: '60@ms',
    width: '100%',
    borderRadius: '10@ms',
    marginTop: '10@ms',
    paddingHorizontal: '5@ms',
    justifyContent: 'space-between',
  },
  buttonContainer: {alignItems: 'center', flexDirection: 'row'},
  toggleContainer: {
    height: '60@ms',
    width: '50@ms',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  toggleLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  lock: {
    height: '30@ms',
    width: '30@ms',
    resizeMode: 'contain',
    tintColor: Colors.BLACK,
  },
  text: {
    fontSize: '20@ms',
    color: Colors.BLACK,
    textAlign: 'center',
  },
})
