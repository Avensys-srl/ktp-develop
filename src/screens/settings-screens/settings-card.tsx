import {View} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { Label } from '../../component'

interface props {
    text: string
}

export const SettingsCard = (props:props) => {
    const {text} = props
    return(
        <View style={styles.container}>
            <Label style={{color:'black'}}>{text}</Label>
        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        flex:1,
        width:'100%'
    }
})