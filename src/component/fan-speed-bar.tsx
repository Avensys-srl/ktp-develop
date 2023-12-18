import { Image, View } from 'react-native'
import { ScaledSheet, moderateScale } from '../styles'
import { Label } from './label'
import { ImageSource } from '../common/imageSource'
import { Colors, Sizing } from '../styles'

interface props {
    title: string,
    height: number,
    width: number,
    progressValue: number,
    minValue: number,
    maxValue: number,
}

export const FanSpeedBar = (props: props) => {
    const {
        title = 'Instant',
        height = moderateScale(120),
        width = moderateScale(36),
        progressValue = 20,
        minValue = 0,
        maxValue = 100 } = props

    const diff = maxValue - minValue;

    const percent = (progressValue * 100) / diff
    const progressHeight = percent * (height / 100)

    return (
        <View style={styles.container}>
            <Label style={styles.titleStyle}>{title}</Label>
            <Image style={styles.topImageStyle} source={ImageSource.callibration} />
            <View style={[styles.outerBar, {
                height: height,
                width: width,

            }]}>
                <View style={[styles.innerBar, {
                    height: progressHeight,
                }]}></View>
            </View>
            <Image style={styles.bottomImageStyle} source={ImageSource.callibration} />
            <Label style={styles.percentTextStyle}>{`${percent}%`}</Label>
        </View >
    )
}

const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80@ms',
        padding: '4@ms',
        borderWidth: '2@ms',
        borderRadius: '6@ms'
    },
    outerBar: {
        overflow: 'hidden',
        borderWidth: '2@ms',
        borderColor: Colors.BLACK,
        borderRadius: '5@ms',
        justifyContent: 'flex-end',
        marginVertical: '6@ms'
    },
    innerBar: {
        backgroundColor: Colors.GREEN,
        borderTopWidth: '2@ms'

    },
    titleStyle: {
        color: Colors.BLACK,
        marginBottom: '8@ms',
        fontSize: '15@ms'
    },
    topImageStyle: {
        height: '40@ms',
        width: '40@ms'
    },
    bottomImageStyle: {
        height: '30@ms',
        width: '30@ms'
    },
    percentTextStyle: {
        color: Colors.BLACK,
        marginTop: '5@ms',
        fontSize: '15@ms'
    }
})
