import { TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { ScaledSheet, moderateScale } from '../styles'
import { Label } from './label'
import { Colors, Sizing } from '../styles'
import Slider from 'react-native-slider'

interface props {
    title: string,
    height: number,
    width: number,
    currentValue: number,

    values: []
}

export const MultiBar = (props: props) => {
    const {
        title = 'Threshold max [%]',
        height = moderateScale(20),
        width = Sizing.vw * 50,
        values = [0, 50, 100]
    } = props
    const [activeIndex, setActiveIndex] = useState(0)
    const [currentValue, setCurrentValue] = useState(0)


    return (
        <View style={styles.container}>
            <Label style={styles.titleStyle}>{currentValue}</Label>
            <Slider
                disabled
                minimumValue={0}
                maximumValue={180}
                value={currentValue}
                step={1}
                onValueChange={(value) => setCurrentValue(parseInt(value))}
                thumbStyle={{ borderWidth: 2, borderColor: 'rblackd', backgroundColor: 'white', }}
                maximumTrackTintColor={Colors.WHITE}
                minimumTrackTintColor={Colors.WHITE}
                trackStyle={{ height: 20, borderWidth: 2, backgroudColor: Colors.WHITE, borderRadius: 10 }}
                style={styles.sliderStyle}
            />


        </View >
    )
}

const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
        width: '100%'
    },
    sliderStyle: {
        width: '200@ms',
    },
    innerBar: {
        backgroundColor: Colors.GREEN,
    },
    titleStyle: {
        color: Colors.BLACK,
        marginBottom: '8@ms',
        fontSize: '15@ms'
    },
    percentTextStyle: {
        color: Colors.BLACK,
        fontSize: '12@ms',
        textAlign: 'center',
        width: '30@ms'
    }
})
