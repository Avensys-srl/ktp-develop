import {View, Switch, Text} from 'react-native'
import { Colors } from '../styles'

interface props {
  toggle: boolean
  onChange: any
}

export const ToggleButton = (props: props) => {
  const {toggle, onChange} = props
  return (
      <Switch
        trackColor={{false: Colors.DARK_GREY, true: Colors.GREEN}}
        thumbColor={toggle ? Colors.LIGHT_GREY : Colors.DARK_GREY}
        onValueChange={onChange}
        value={toggle}
      />
  )
}
