import {View, Switch, Text} from 'react-native'

interface props {
  toggle: boolean
  onChange: any
}

export const ToggleButton = (props: props) => {
  const {toggle, onChange} = props
  return (
      <Switch
        trackColor={{false: 'darkgrey', true: 'green'}}
        thumbColor={toggle ? 'lightgreen' : 'grey'}
        onValueChange={onChange}
        value={toggle}
      />
  )
}
