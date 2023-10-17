import { Text, TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

interface props {
  title: string
}

export const AccessoriesCard = (props: props) => {
  const { title } = props
  return (

    <TouchableOpacity style={styles.container}>
      <Text style={{ color: 'black' }}>{title}</Text>
    </TouchableOpacity>

  )
}

const styles = ScaledSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: 'lightblue',
    width: '90@ms',
    height: '30@ms',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5@ms',
  },
})
