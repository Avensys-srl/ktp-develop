import { View } from 'react-native'
import { ScaledSheet, moderateScale } from '../styles'
import { Label } from './label'
import { Colors, Sizing } from '../styles'

interface props {
    title: string,
    height: number,
    width: number,
    progressValue: number,
    minValue: number,
    maxValue: number,
}

export const ProgressBar = (props: props) => {
    const {
        title = 'Boost airflow',
        height = moderateScale(20),
        width = Sizing.vw * 80,
        progressValue = 100,
        minValue = 0,
        maxValue = 200 } = props

    const diff = maxValue - minValue;

    const percent = (progressValue * 100) / diff
    const progressWidth = percent * (width / 100)

    return (
        <View style={styles.container}>
            <Label style={styles.titleStyle}>{`${title} [${percent}%]`}</Label>
            <View style={[styles.outerBar, {
                height: height,
                width: width,
                borderRadius: height / 2
            }]}>
                <View style={[styles.innerBar, {
                    width: progressWidth,
                }]}></View>
            </View>
        </View >
    )
}

const styles = ScaledSheet.create({
    container: {
        alignItems: 'center'
    },
    outerBar: {
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.BLACK
    },
    innerBar: {
        backgroundColor: Colors.GREEN,
        flex: 1,
    },
    titleStyle: {
        color: Colors.BLACK,
        marginBottom: '8@ms',
        fontSize:'15@ms'
    }
})
